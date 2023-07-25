import { Link } from 'react-router-dom';

const CartOverview = () => {
  return (
    <div className="bg-slate-800 p-4 uppercase text-slate-200">
      <p className="space-x-4 font-semibold text-emerald-500">
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
