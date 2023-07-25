import { Link } from 'react-router-dom';
import SearchOrder from '../../features/order/SearchOrder/SearchOrder';
import UserName from '../../features/user/CreateUser/UserName';

const Header = () => {
  return (
    <header className="border-b border-slate-300 bg-emerald-600 px-4 py-3 uppercase">
      <Link to="/" className="tracking-widest">
        Fast Order
      </Link>

      <SearchOrder />
      <UserName />
    </header>
  );
};

export default Header;
