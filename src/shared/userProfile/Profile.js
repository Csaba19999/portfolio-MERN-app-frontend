import { Fragment } from "react";
import { useSelector } from "react-redux";
import classes from "./Profile.module.css";

function Profile() {
  const auth = useSelector((state) => state.auth);

  return (
    <div className={classes.profile}>
      {auth.isAuthenticated && (
        <Fragment>
          <img src={auth.image} alt="user icon" />
          <p>{auth.name}</p>
        </Fragment>
      )}
    </div>
  );
}

export default Profile;
