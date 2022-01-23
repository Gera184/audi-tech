import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/loginActions";
import { initialUser } from "../../redux/actions/userActions";
import "./Navbar.css";
const Navbar = () => {
  const user = useSelector((v) => v.user.user);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout);
    dispatch(initialUser);
  };

  
  return (
    <nav class="navbar nbavar-expand-lg navbar-dark bg-dark ">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-start">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/">
              Home
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/market-page">
              Market
            </a>
          </li>
          {Object.keys(user).length !== 0 && (
            <>
              <li class="nav-item">
                <span className="username"> {user.username} </span>
              </li>
              <li class="nav-item">
                <a onClick={logoutHandler} class="nav-link">
                  Logout
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
