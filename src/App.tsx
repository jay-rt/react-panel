import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Login from "./pages/login/Login";

const App = () => {
  const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/users", element: <Users /> },
        { path: "/products", element: <Products /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
