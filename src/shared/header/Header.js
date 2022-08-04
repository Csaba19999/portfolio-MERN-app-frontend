import { Fragment } from "react";
import { Fade } from "react-awesome-reveal";
import NavLinks from "../nav/NavLinks";
import classes from "./Header.module.css";

function Header() {
  return (
    <Fragment>
      <header className={`${classes.main_header}`}>
        <Fade triggerOnce direction="down" duration={1000}>
          <img src="./images/icons/signiture.svg" alt="svg-signiture" />
          <NavLinks classnames="nav_links" />
        </Fade>
      </header>
      <div className={classes.background_drop}></div>
    </Fragment>
  );
}

export default Header;
