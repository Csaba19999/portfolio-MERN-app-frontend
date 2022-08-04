import classes from "./SkillCard.module.css";

function SkillCard(props){
    return(
        <div className={classes.card_content}>
          <h3 className={classes.card_title}>{props.title}</h3>
          <p className={classes.card_text}>
            {props.description}
          </p>
          <img src={props.image} alt={`${props.title} icon`}/>
        </div>
    );
}

export default SkillCard;