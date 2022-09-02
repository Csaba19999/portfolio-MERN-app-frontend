import { Fragment } from "react";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import useIsMobile from "../../hooks/isMobile-hook";
import BurgerNavLinks from "../nav/BurgerNavLinks";
import NavLinks from "../nav/NavLinks";
import classes from "./Header.module.css";
import {useHistory} from "react-router-dom";

function Header() {
  const {width} = useIsMobile(800);

  const history = useHistory();

  const returnHomePage = () => {
    console.log("return home");
    history.push("/");
  };

  return (
    <Fragment>
      <header className={`${classes.main_header}`}>
        <Fade triggerOnce direction="down" duration={1000} >
          <img
            className={classes.signature}
            src="./images/icons/signiture.svg"
            alt="svg-signiture"
            onClick={returnHomePage}
          />
        </Fade>
        {width < 875 ? (
            <BurgerNavLinks />
        ) : (
          <Fade triggerOnce direction="down" duration={1000}>
            <NavLinks classnames="nav_links" />
          </Fade>
        )}
      </header>
      <div className={classes.background_drop}></div>
    </Fragment>
  );
}

export default Header;
