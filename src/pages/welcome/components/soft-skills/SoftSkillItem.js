import classes from "./SoftSkillItem.module.css";

function SoftSkillsItem(props) {
  return (
    <li id={props.id} className={classes.soft_skill_item}>
      <span className={classes.title}>{props.title}</span>
      <div className={classes.line}></div>
      <span className={classes.description}>{props.description}</span>
    </li>
  );
}

export default SoftSkillsItem;
