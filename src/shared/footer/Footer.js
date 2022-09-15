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
            <NavLink to="/conatc">kapcsolat</NavLink>
          </li>
          <li>
            <NavLink to="/references">referenciák</NavLink>
          </li>
          <li>
            <NavLink to="/codeSnippet">snippet's</NavLink>
          </li>
        </ul>
      </div>
      <div className={classes.footer_description}>
        <p>
          Ez az én személyes portfóliós oldalam! Itt megtalálhatod a legfrissebb
          projekteimet, illetve a legfrissebb snippet-jeimet is!
        </p>
        <p>Copyright &copy; {copyRightDate}</p>
      </div>
      <div className={classes.footer_social_media}>
        <a href="https://discord.gg/Q6Ew3nMF" target={"_blank"}>
          <img src="./images/icons/discord-icon.svg" alt="discord logo" />
        </a>
        <a href="https://www.facebook.com/csaba.menesi.1" target={"_blank"}>
          <img src="./images/icons/facebook-logo-2019.svg" alt="facebook logo" />
        </a>
        <a href="https://github.com/Csaba19999" target={"_blank"}>
          <img src="./images/icons/GitHub-Mark-Light-64px.png" alt="github logo" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
