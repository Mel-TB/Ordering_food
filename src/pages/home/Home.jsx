import { useSelector } from 'react-redux';
import CreateUser from '../../features/user/CreateUser/CreateUser';
import Button from '../button/Button';

const Home = () => {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-9 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-amber-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === '' ? (
        <CreateUser />
      ) : (
        <Button type="primary" to="/menu">
          Continue to the Menu, {username}
        </Button>
      )}
    </div>
  );
};

export default Home;
