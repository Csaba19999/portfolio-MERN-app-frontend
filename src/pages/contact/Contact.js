import Form from "./components/form/Form";
import classes from "./Contact.module.css";
import WaveAnimation from "../../shared/background/WaveAnimation";
import { Fade } from "react-awesome-reveal";
import { Fragment } from "react";

function Contact() {
  return (
    <Fragment>
      <div className={classes.contact_page}>
        <Fade triggerOnce className={classes.title} direction="up">
          <div className={classes.title}>
            <h2>Ha tetszik az oldal,</h2>
            <h3>vagy felvennéd velem a kapcsolatot,</h3>
            <h4>akkor bátran küldj egy email!</h4>
          </div>
        </Fade>
        <Fade className={classes.form_box} direction="center">
          <Form />
        </Fade>
      </div>
      <WaveAnimation noMargin />
    </Fragment>
  );
}

export default Contact;
