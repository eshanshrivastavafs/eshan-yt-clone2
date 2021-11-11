import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { login } from "../../redux/actions/auth.action";
import "./_loginScreen.scss";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);
  // passing a selector function in useSelector hook which will provide the state to us
  const handleLogin = () => {
    dispatch(login());
  };

  // history object of the browser can be accessed by calling useHistory hook
  // offerred by react-router-dom which returns the browser history and in the browser
  // history we can redirect
  const history = useHistory();

  //now if the accessToken is not null i want to redirect my user to the homepage therefore
  //useEffect
  useEffect(() => {
    if (accessToken) {
      history.push("/");
    }
  }, [accessToken, history]);

  return (
    <div className="login">
      <div className="login__container">
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
        <button onClick={handleLogin}>Login with google</button>
        <p>This project is made using YOUTUBE DATA API</p>
      </div>
    </div>
  );
};

export default LoginScreen;
