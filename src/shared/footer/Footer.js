import NavLinks from "../nav/NavLinks";

function Footer() {
  const copyRightDate = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-links-box">
        <NavLinks classname="footer_links" />
      </div>
      <div className="footer-description">
        <p>
          Ez az én személyes portfóliós oldalam! Lorem ipsum Ez az én személyes
          portfóliós oldalam! Lorem ipsum Ez az én személyes portfóliós oldalam!
          Lorem ipsum Ez az én személyes portfóliós oldalam! Lorem ipsum{" "}
        </p>
        <p>Copyright &copy; {copyRightDate}</p>
      </div>
      <div className="footer-social-media">
        <img src="./images/icons/discord-icon.svg" alt="asd" />
      </div>
    </footer>
  );
}

export default Footer;
