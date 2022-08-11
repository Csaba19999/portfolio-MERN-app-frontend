import classes from "./PreviusPositionItem.module.css";
import { Fade } from "react-awesome-reveal";

function PreviusPositionItem(props) {

  return (
    <li className={classes.previus_card}>
      <div className={classes.company}>
        <img src={props.logo} alt={`${props.company} logo`} />
        <p>{props.company}</p>
      </div>
      <div className={classes.role}>
        <p>{props.role}</p>
        <p className={classes.date}>{props.date}</p>
      </div>
      <div className={classes.role_description}>
        <p>{props.description}</p>
      </div>
      <Fade triggerOnce direction={"center"} delay={300}>
        <div className={classes.main_tools}>
          <div className={classes.tool}>
            {props.tools.map((tool, index) => (
                <img key={`k${index}`} src={tool} alt={'tech stack logo'} />
            ))}
          </div>
        </div>
      </Fade>
    </li>
  );
}

export default PreviusPositionItem;
