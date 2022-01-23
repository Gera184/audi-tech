import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { routes } from "./routes";
import Navbar from "./components/navbar/Navbar";
import { useDispatch } from "react-redux";
import { setMarketData } from "./redux/actions/marketActions";
export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMarketData);
  }, []);

  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={route.path}
                exact
                element={route.element}
                path={route.path}
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
};
