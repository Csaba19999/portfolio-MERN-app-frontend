import { Fade } from "react-awesome-reveal";
import Card from "../../../../shared/overlay/Card";
import classes from "./CurrentPosition.module.css";

function CurrentPosition() {
  return (
    <Card position="center" title="Jelenelegi munkahelyem">
      <div className={classes.current_card}>
        <div className={classes.company}>
          <img src="./images/icons/api.png" alt="Logo" />
          <p>OTP</p>
        </div>
        <div className={classes.role}>
          <p>Frontend developer</p>
        </div>
        <div className={classes.role_description}>
          <p>
            My jobe was develope and securing the frontend in a largeMy jobe was
            develope and securing the frontend in a large team. I lMy jobe was
            develope and securing the frontend in a large team. I lMy jobe was
            develope and securing the frontend in a large team. I l team. I
            learned how to work with docker images
          </p>
        </div>
        <Fade triggerOnce direction={"center"} delay={300}>
          <div className={classes.main_tools}>
            <div className={classes.tool}>
              <img src="images/icons/tools/react.png" alt="Logo" />
              <img src="images/icons/tools/mongodb.png" alt="Logo" />
              <img src="images/icons/tools/node.png" alt="Logo" />
              <img src="images/icons/tools/express.png" alt="Logo" />
              <img src="images/icons/tools/mysql.png" alt="Logo" />
              <img src="images/icons/tools/laravel.png" alt="Logo" />
              <img src="images/icons/tools/php.png" alt="Logo" />
            </div>
          </div>
        </Fade>
      </div>
    </Card>
  );
}

export default CurrentPosition;
