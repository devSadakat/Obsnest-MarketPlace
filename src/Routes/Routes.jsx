import { createBrowserRouter } from 'react-router-dom';
import HomeMain from '../pages/Home/HomeMain/HomeMain';
import MainLayout from '../Layout/MainLayout';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import ProductDetails from '../pages/ProductDetails/ProductDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomeMain></HomeMain>
      },
      {
        path: 'login',
        element: <Login></Login>
      }, 
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'product/product-details/:_id',
        element: <ProductDetails/>
      }
    ]
  },
]);

export default router;