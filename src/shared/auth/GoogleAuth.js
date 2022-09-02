import { useGoogleLogin } from "@react-oauth/google";
import classes from "./GoogleAuth.module.css";
import { login, logout } from "../../store/auth/auth-slice";
import { useDispatch, useSelector } from "react-redux";
import { useHttpClient } from "../../hooks/http-hook";
import { useEffect, useState } from "react";

function GoogleAuth() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { sendRequest } = useHttpClient();

  useEffect(() => {
      setIsAuthenticated(auth.isAuthenticated);
  }, [auth.isAuthenticated]);
  

  //console.log("auth", auth);
  //implementing stay logined in and refresh token
  //https://stackoverflow.com/questions/42870623/what-should-i-do-with-google-oauth-response

  const googleLogin = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_AUTH_API_KEY + "/google",
          "POST",
          JSON.stringify({
            code: codeResponse,
          }),
          {
            "Content-Type": "application/json",
          }
        );

        const loginConfig = {
          refresh_token: responseData.refresh_token,
          id: responseData.sub,
          name: responseData.family_name + " " + responseData.given_name,
          image: responseData.picture,
          email: responseData.email,
        };
        dispatch(login(loginConfig));
      } catch (error) {
        console.log(error);
      }
    },
    flow: "auth-code",
  });

  const googleLogout = () => {
    dispatch(logout());
  };

  console.log("auth", auth);

  return (
    <div className={classes.google_auth}>
      <button onClick={isAuthenticated ? googleLogout : googleLogin} className={classes.google_auth_button}>
        <img src="./images/icons/google_logo.svg" alt="google logo" />
        {isAuthenticated ? <span>Sign out</span> : <span>Sign in with Google</span>}
      </button>
    </div>
  );
}

export default GoogleAuth;
