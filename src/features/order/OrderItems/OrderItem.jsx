import { formatCurrency } from '../../../utils/helpers';

const OrderItem = ({ item }) => {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3 ">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold text-red-600">{quantity}&times;</span>{' '}
          {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
};

export default OrderItem;
