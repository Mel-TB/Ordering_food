import CreateUser from '../../features/user/CreateUser/CreateUser';

const Home = () => {
  return (
    <div className="my-10 text-center">
      <h1 className="mb-9 text-xl font-semibold">
        The best pizza.
        <br />
        <span className="text-emerald-600">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
};

export default Home;
