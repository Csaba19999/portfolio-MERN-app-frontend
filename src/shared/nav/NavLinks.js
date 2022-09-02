import { useState } from "react";
import GoogleAuth from "../auth/GoogleAuth";
import Profile from "../userProfile/Profile";
import NavItem from "./NavItem";
import classes from "./NavLinks.module.css";
import SubNav from "./subNav";
function NavLink(props) {
  const [isSubNavOpen, setIsSubNavOpen] = useState(false);

  const toggleSubNav = () => {
    console.log("toggleSubNav nav links");
    setIsSubNavOpen(!isSubNavOpen);
  };

  return (
    <nav className={classes.navigation}>
      <ul className={classes.nav_items}>
        <NavItem name={"kezdőlap"} route="/" />
        <NavItem name={"kapcsolat"} route="/contact" />
        <NavItem name={"referenciák"} route="/references" />
        <NavItem name={"snippet's"} route="/codeSnippet" />
        <SubNav toggleSubNav={toggleSubNav}>
          <div className={classes.subNavWrapp}>
            <Profile />
            <GoogleAuth />
          </div>
        </SubNav>
      </ul>
    </nav>
  );
}

export default NavLink;
