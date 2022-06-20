import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import {SignUp, Login, ProductsGrid, ProductDetails} from '../components'
const mapRouter = [
  {
    path: "/login",
    component: <Login />,
    title: "Login",
    isPrivate: false,
  },
  {
    path: "/signup",
    component: <SignUp />,
    title: "Register",
    isPrivate: false,
  },
  {
    path: "/products",
    component: <ProductsGrid />,
    title: "Products Grid",
    isPrivate: false,
  },
  {
    path: "/products/:id",
    component: <ProductDetails />,
    title: "Products Card",
    isPrivate: false,
  },
  {
    path: "*",
    component: <Navigate to ="/products" />,
    title: "404",
    isPrivate: false,
  },
];

const PrivateRoute = (props) => {
  const userId = false; // This determines whether the user is logged in or not.

  return userId ? (
    <Route key={props.index} path={props.path} element={props.component} />

  ) : (
    <Route path="/login" element={<Navigate to ="/signup" />} />
  );
};

const Router = () => (
    <Routes>
      {mapRouter.map(({ component, exact, path, isPrivate }, index) =>
        isPrivate ? (
          <PrivateRoute
            key={index}
            component={component}
            path={path}
          />
        ) : (
            <Route key={index} path={path} element={component} />
        )
      )}
    </Routes>
);

export default Router;