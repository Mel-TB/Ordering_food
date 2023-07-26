import { Link } from 'react-router-dom';

const CartOverview = () => {
  return (
    <div className="flex items-center justify-between bg-zinc-800 px-4 py-4 text-sm uppercase text-zinc-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-red-700 sm:space-x-6">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart" cart>
        Open cart &rarr;
      </Link>
    </div>
  );
};

export default CartOverview;
