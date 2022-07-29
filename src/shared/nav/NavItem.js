import { NavLink } from "react-router-dom";
import classes from "./NavItem.module.css";

function NavItem(props){
    return (
        <li className={classes.nav_item}>
            <NavLink to={props.route}>
                {props.name}
            </NavLink>
        </li>
    )
}

export default NavItem;