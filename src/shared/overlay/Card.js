import { Fragment } from "react";
import classes from "./Card.module.css";

//A kártya közepére kerülő középső vonal kell a kártya közepére
// a position profnak css-t kell írni. a kártyán belüli elemekre vonatkozhat csak.
// a childrenre nem.

function Card(props) {
  return (
    <div
      className={`${classes.card} 
      ${!props.position ? "center" : ''}
      ${props.position === "right" && classes.right}
      ${props.position === "left" && classes.left}
      ${props.position === "center" && classes.center}
      ${props.className ? props.className : ''}
      `}
      style={{ backgroundColor: props.background ? props.background : "white" }}
    >
      {props.title && (
        <Fragment>
          <h2>{props.title}</h2>
          <div className={classes.line}></div>
        </Fragment>
      )}
      {props.children}
    </div>
  );
}

export default Card;
