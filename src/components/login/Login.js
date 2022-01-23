import React, { useState, useEffect } from "react";
import "./Login.css";
import { login } from "../../redux/actions/loginActions";
import { userDeatils } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isLoggedIn = useSelector((v) => v.login.loggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/market-page");
    }
  }, [isLoggedIn]);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(login);
    dispatch(
      userDeatils({
        username: username,
        password: password,
      })
    );
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <div class="fadeIn first">
            <img
              src="https://wallpapercave.com/wp/wp2446263.jpg"
              id="icon"
              alt="User Icon"
            />
          </div>

          <form onSubmit={loginHandler}>
            <input
              type="text"
              id="login"
              class="fadeIn second"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              id="password"
              class="fadeIn third"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input type="submit" class="fadeIn fourth" value="Log In" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
