import { NavLink, useLocation } from "react-router-dom";
import classes from "./NavItem.module.css";

function NavItem(props) {
  const location = useLocation();
  return (
    <li
      className={`${classes.nav_item} ${
        location.pathname === props.route ? classes.active : ""
      }`}
    >
      <NavLink to={props.route}>{props.name}</NavLink>
    </li>
  );
}

export default NavItem;
