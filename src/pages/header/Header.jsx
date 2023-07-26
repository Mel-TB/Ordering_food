import { Link } from 'react-router-dom';
import SearchOrder from '../../features/order/SearchOrder/SearchOrder';
import UserName from '../../features/user/CreateUser/UserName';

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-zinc-200 bg-amber-400 px-4 py-3  uppercase sm:px-6">
      <Link to="/" className="font-medium tracking-widest text-red-800">
        Fast Order
      </Link>

      <SearchOrder />
      <UserName />
    </header>
  );
};

export default Header;
