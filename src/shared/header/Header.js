import { Fragment } from "react";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import BurgerNavLinks from "../nav/BurgerNavLinks";
import NavLinks from "../nav/NavLinks";
import classes from "./Header.module.css";

function Header() {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  window.addEventListener("resize", updateWidth);

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
