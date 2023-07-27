import { useState } from 'react';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../../pages/button/Button';
import EmptyCart from '../../cart/EmptyCart/EmptyCart';

import { createOrder } from '../../../services/apiRestaurant';
import { formatCurrency } from '../../../utils/helpers';

import { fetchAddress, getUser } from '../../user/userSlice';
import { clearCart, getCart, getTotalCartPrice } from '../../cart/cartslice';
import store from '../../../store/store';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const CreateOrder = () => {
  const [withPriority, setWithPriority] = useState(false);

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const formErrors = useActionData();

  const dispatch = useDispatch();
  const handlerAddress = (e) => {
    e.preventDefault();

    dispatch(fetchAddress());
  };

  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector(getUser);

  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);

  const isLoadingAddress = addressStatus === 'loading';

  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-7 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            className="input grow"
            type="text"
            name="customer"
            defaultValue={username}
            required
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
            {formErrors?.phone && (
              <p className="text- bg- mt-2 rounded-md bg-rose-100 p-2 text-sm text-rose-700">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40"> Address </label>
          <div className="grow">
            <input
              disabled={isLoadingAddress}
              defaultValue={address}
              className="input w-full"
              type="text"
              name="address"
              required
            />

            {addressStatus === 'error' && (
              <p className="text- bg- mt-2 rounded-md bg-rose-100 p-2 text-sm text-rose-700">
                {errorAddress}
              </p>
            )}
          </div>

          {!position.latitude && !position.longitude && (
            <span className="absolute right-[3px] top-[34.5px] z-10 sm:top-[3px] md:right-[3px] md:top-[5px]">
              <Button
                type="small"
                onClick={handlerAddress}
                disabled={isLoadingAddress}
              >
                Get position
              </Button>
            </span>
          )}
        </div>

        <div className="mb-11 flex items-center gap-4">
          <input
            className="h-6 w-6 accent-red-700 focus:outline-none focus:ring focus:ring-red-600 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-medium" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />

          <input
            type="hidden"
            name="position"
            value={
              position.longitude && position.latitude
                ? `${position.latitude},${position.longitude}`
                : ''
            }
          />

          <Button disabled={isSubmitting || isLoadingAddress} type="primary">
            {isSubmitting
              ? 'Placing order'
              : `Order now for ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };

  console.log(order);
  const errors = {};
  if (!isValidPhone(order.phone)) errors.phone = 'Phone number is incorrect !';

  if (Object.keys(errors).length > 0) return errors;

  // If no error, create a new order and redirect
  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
};

export default CreateOrder;
