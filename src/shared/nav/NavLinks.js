import NavItem from "./NavItem";
import classes from './NavLinks.module.css';
function NavLink(props){
    return(
        <nav className={classes.navigation}>
            <ul className={classes.nav_items}>
                <NavItem name={'kezdőlap'} route='/'/>
                <NavItem name={'kapcsolat'} route='/contact'/>
                <NavItem name={'referenciák'} route='/references'/>
                <NavItem name={"snippet's"} route='/codeSnippet'/>
            </ul>
        </nav>
    );
}

export default NavLink;