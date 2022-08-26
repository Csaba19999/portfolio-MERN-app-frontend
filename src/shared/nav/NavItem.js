import { NavLink, useLocation } from "react-router-dom";
import classes from "./NavItem.module.css";

function NavItem(props) {
  const location = useLocation();
  const isActive = "/"+location.pathname.split("/")[1] === props.route;

  console.log(location.pathname + " " +isActive);

  return (
    <li
      onClick={props.closeBurger}
      className={`${classes.nav_item} ${
        isActive ? classes.active : ""
      }`}
    >
      <NavLink to={props.route}>{props.name}</NavLink>
    </li>
  );
}

export default NavItem;
