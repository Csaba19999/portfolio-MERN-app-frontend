import { NavLink } from "react-router-dom";
import NavItem from "../nav/NavItem";
import classes from "./Footer.module.css";

function Footer() {
  const copyRightDate = new Date().getFullYear();

  return (
    <footer className={classes.footer_box}>
      <div className={classes.footer_links_box}>
        <ul>
          <li>
            <NavLink to="/">Kezdőlap</NavLink>
          </li>
          <li>
            <NavLink to="/about">Rólam</NavLink>
          </li>
          <li>
            <NavLink to="/conatc">kapcsolat</NavLink>
          </li>
          <li>
            <NavLink to="/references">referenciák</NavLink>
          </li>
        </ul>
      </div>
      <div className={classes.footer_description}>
        <p>
          Ez az én személyes portfóliós oldalam! Lorem ipsum Ez az én személyes
          portfóliós oldalam! Lorem ipsum Ez az én személyes portfóliós oldalam!
          Lorem ipsum Ez az én személyes portfóliós oldalam! Lorem ipsum{" "}
        </p>
        <p>Copyright &copy; {copyRightDate}</p>
      </div>
      <div className={classes.footer_social_media}>
        <img src="./images/icons/discord-icon.svg" alt="discord logo" />
        <img src="./images/icons/facebook-logo-2019.svg" alt="facebook logo" />
        <img src="./images/icons/GitHub-Mark-Light-64px.png" alt="github logo" />
      </div>
    </footer>
  );
}

export default Footer;
