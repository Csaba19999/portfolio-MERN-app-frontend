import NavLinks from '../nav/NavLinks';
import classes from './Header.module.css';

function Header(){
    return(
        <header className={`${classes.main_header}`}>
            <img src='./images/icons/signiture.svg' alt='svg-signiture'/>
            <NavLinks classnames="nav_links"/>
        </header>
    );
}

export default Header;