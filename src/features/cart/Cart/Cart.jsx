import { useDispatch, useSelector } from 'react-redux';

import { clearCart, getCart } from '../cartslice';
import { getUser } from '../../user/userSlice';

import CartItem from '../CartItem/CartItem';
import EmptyCart from '../EmptyCart/EmptyCart';

import LinkButton from '../../../pages/button/LinkButton';
import Button from '../../../pages/button/Button';

const Cart = () => {
  const cart = useSelector(getCart);
  const { username } = useSelector(getUser);
  const dispatch = useDispatch();

  const handlerClearCart = () => {
    dispatch(clearCart());
  };

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-2 py-4">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">
        Your cart, <span className="capitalize text-amber-500">{username}</span>
      </h2>
      <ul className="mt-3 divide-y divide-zinc-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>

        <Button type="secondary" onClick={handlerClearCart}>
          Clear cart
        </Button>
      </div>
    </div>
  );
};

export default Cart;
