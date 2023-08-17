import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import { singleProduct, singleUser } from "./pages/single/singleData";

const App = () => {
  const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/users", element: <Users /> },
        { path: "/users/:id", element: <Single {...singleUser} /> },
        { path: "/products", element: <Products /> },
        { path: "/products/:id", element: <Single {...singleProduct} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
