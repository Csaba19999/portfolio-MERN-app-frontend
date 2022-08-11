import classes from "./HardSkillItem.module.css";

function SoftSkillsItem(props) {

    const levelDivs = () => {
        let divs = [];
        let level = props.level;
        for (let i = 0; i < 5; i++) {
            if(i < level) {
                divs.push(<div key={i} className={`${classes.level_div} ${classes.active}`}></div>);
            }else{
                divs.push(<div key={i} className={`${classes.level_div}`}></div>);
            }
        }
        return divs;
    }

  return (
    <li className={classes.soft_skill_item}>
        <span className={classes.title}>{props.title}</span>
        <div className={classes.line}></div>
        <span className={classes.levels}>{levelDivs()}</span>
    </li>
  );
}

export default SoftSkillsItem;