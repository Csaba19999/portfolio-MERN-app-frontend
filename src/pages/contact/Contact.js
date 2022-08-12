import Form from "./components/form/Form";
import classes from "./Contact.module.css";
import WaveAnimation from "../../shared/background/WaveAnimation";
import { Fade } from "react-awesome-reveal";

function Contact() {
  return (
    <div className={classes.contact_page}>
      <Fade className={classes.title}  direction="right">
        <div className={classes.title}>
          <h2>Ha tetszik az oldal,</h2>
          <h3>vagy felvennéd velem a kapcsolatot,</h3>
          <h4>akkor bátran küldj egy email!</h4>
        </div>
      </Fade>
      <Fade direction="up">
        <Form />
      </Fade>
      <WaveAnimation noMargin />
    </div>
  );
}

export default Contact;
