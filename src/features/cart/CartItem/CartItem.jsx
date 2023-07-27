import { useSelector } from 'react-redux';

import { getCurrentQuantityById } from '../cartSlices';

import ButtonUpdateQuantity from '../../../pages/button/ButtonUpdateQuantity';
import DeleteButton from '../../../pages/button/DeleteButton';

import { formatCurrency } from '../../../utils/helpers';

const CartItem = ({ item }) => {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <ButtonUpdateQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />

        <DeleteButton pizzaId={pizzaId} />
      </div>
    </li>
  );
};

export default CartItem;
