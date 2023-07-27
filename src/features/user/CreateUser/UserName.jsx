import { useSelector } from 'react-redux';
import { getUsernameSelector } from '../userSlice';

const UserName = () => {
  const username = useSelector(getUsernameSelector);

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block"> {username}</div>
  );
};

export default UserName;
