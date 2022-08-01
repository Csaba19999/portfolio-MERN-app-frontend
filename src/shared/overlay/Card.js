import classes from "./Card.module.css";

//A kártya közepére kerülő középső vonal kell a kártya közepére
// a position profnak css-t kell írni. a kártyán belüli elemekre vonatkozhat csak.
// a childrenre nem.

function Card(props) {
  return (
    <div className={`${classes.card} ${props.position}`}>
      <h2 className={`${classes.title}`}>{props.title}</h2>
      <div className={classes.line}></div>
      {props.children}
    </div>
  );
}

export default Card;
