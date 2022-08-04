import Footer from "../footer/Footer";
import Header from "../header/Header";
import classes from "./Overlay.module.css";


function Overlay(props) {
  return (
    <div className={classes.overlay}>
        <Header />
      <main className={classes.main_overlay}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Overlay;
