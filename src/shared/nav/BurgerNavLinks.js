import classes from "./BurgerNavlinks.module.css";
import { Fragment, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Fade } from "react-awesome-reveal";
import NavItem from "./NavItem";
import SubNav from "./subNav";

function BurgerNavLinks() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubNavOpen, setIsSubNavOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubNav = () => {
    setIsSubNavOpen(!isSubNavOpen);
  }

  return (
    <Fragment>
      <div className={`${classes.hamburger_nav_icon}`}>
        {!isOpen ? (
          <Fade>
            <img
              onClick={toggleNav}
              src={"./images/icons/hamburger-menu-icon.svg"}
              alt="hamburger_nav_icon"
            />
          </Fade>
        ) : (
          <Fade>
            <img
              onClick={toggleNav}
              src={"./images/icons/close-icon.svg"}
              alt="hamburger_nav_icon"
            />
          </Fade>
        )}
      </div>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames={{
          enter: classes.SlideInEnter,
          enterActive: classes.SlideInActive,
          exit: classes.SlideInExit,
          exitActive: classes.SlideInExitActive,
        }}
        mountOnEnter
        unmountOnExit
      >
        <nav className={classes.navigation}>
          {!isSubNavOpen && (
            <Fade direction="up" duration={1000}>
              <ul className={classes.nav_items}>
                <NavItem closeBurger={toggleNav} name={"kezdőlap"} route="/" />
                <NavItem
                  closeBurger={toggleNav}
                  name={"kapcsolat"}
                  route="/contact"
                />
                <NavItem
                  closeBurger={toggleNav}
                  name={"referenciák"}
                  route="/references"
                />
                <NavItem
                  closeBurger={toggleNav}
                  name={"snippet's"}
                  route="/codeSnippet"
                />
                <SubNav toggleSubNav={toggleSubNav}></SubNav>
              </ul>
            </Fade>
          )}
          {isSubNavOpen && (
            <ul className={classes.nav_items}>
              <SubNav toggleSubNav={toggleSubNav}>
                <NavItem name={"belépés"} route="/signin" />
              </SubNav>
            </ul>
          )}
        </nav>
      </CSSTransition>
    </Fragment>
  );
}

export default BurgerNavLinks;
