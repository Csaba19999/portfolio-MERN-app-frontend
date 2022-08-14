import { Fade } from "react-awesome-reveal";
import classes from "./HardSkillItem.module.css";

function HardSkillsItem(props) {
  const levelDivs = () => {
    let divs = [];
    let level = props.level;
    for (let i = 0; i < 5; i++) {
      if (i < level) {
        divs.push(
          <Fade
            key={`${props.id}_${i}_${level}`}
            duration={300}
            triggerOnce
            direction="left"
            delay={parseInt(i + "00")}
          >
            <div key={props.id+"_"+i.toString()} className={`${classes.level_div} ${classes.active}`}></div>
          </Fade>
        );
      } else {
        divs.push(<div key={props.id+"_"+i.toString()} className={`${classes.level_div}`}></div>);
      }
    }
    return divs;
  };

  const levels = levelDivs();

  return (
    <li className={classes.soft_skill_item}>
      <span className={classes.title}>{props.title}</span>
      <div className={classes.line}></div>
      <span className={classes.levels}>{levels}</span>
    </li>
  );
}

export default HardSkillsItem;
