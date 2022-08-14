import { Fragment } from "react";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import useIsMobile from "../../hooks/isMobile-hook";
import BurgerNavLinks from "../nav/BurgerNavLinks";
import NavLinks from "../nav/NavLinks";
import classes from "./Header.module.css";

function Header() {
  const {width} = useIsMobile(800);

  return (
    <Fragment>
      <header className={`${classes.main_header}`}>
        <Fade triggerOnce direction="down" duration={1000}>
          <img
            className={classes.signature}
            src="./images/icons/signiture.svg"
            alt="svg-signiture"
          />
        </Fade>
        {width < 800 ? (
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
