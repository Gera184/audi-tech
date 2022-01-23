import Login from "./components/login/Login";
import Markt from "./components/market-page/Market";

export const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/market-page",
    element: <Markt />,
  },
];
