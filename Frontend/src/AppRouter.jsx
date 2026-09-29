import Login from './feauter/auth/ui/pages/Login'
import Register from './feauter/auth/ui/pages/Register'
import {createBrowserRouter,Outlet} from 'react-router'
import Home from './feauter/home/ui/Home'
import Nav from './shared/Nav'

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};
export const router = createBrowserRouter([
 {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);




