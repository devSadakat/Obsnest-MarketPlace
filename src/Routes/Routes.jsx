import { createBrowserRouter } from 'react-router-dom';
import HomeMain from '../pages/Home/HomeMain/HomeMain';
import MainLayout from '../Layout/MainLayout';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import Product from './Product/Product';
import Dashoard from '../pages/DashBoard/Dashoard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomeMain />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: `product/:category`,
        element: <Product />
      },
      {
        path: 'product/product-details/:_id',
        element: <ProductDetails />
      },
      {
        path: 'dashboard',
        element: <Dashoard />
      }
    ]
  },
]);

export default router;