import NavItem from "./NavItem";

function NavLink(props){
    return(
        <nav className="navigation">
            <ul className={props.classname || 'nav_items'}>
                <NavItem name={'kezdőlap'} route='/'/>
                <NavItem name={'rólam'} route='/about'/>
                <NavItem name={'kapcsolat'} route='/contact'/>
                <NavItem name={'referenciák'} route='/references'/>
            </ul>
        </nav>
    );
}

export default NavLink;