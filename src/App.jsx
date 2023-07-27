import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './pages/home/Home';
import AppLayout from './pages/layout/AppLayout';
import Error from './pages/error/Error';
import Cart from './features/cart/Cart/Cart';
import Menu, { loader as menuLoader } from './features/menu/Menu/Menu';
import CreateOrder, {
  action as createActionOrder,
} from './features/order/CreateOrder/CreateOrder';
import { action as updateOrderAction } from './features/order/Order/UpdateOrder';
import Order, { loader as orderLoader } from './features/order/Order/Order';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createActionOrder,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
