import { NavLink } from "react-router-dom";
import LikeSystem from "../../../../shared/likeSystem/LikeSystem";
import classes from "./CodeSnippetItem.module.css";

function CodeSnippetItem(props) {
  const {
    id,
    description,
    title,
    technology,
    technologyIcon,
    version,
    date,
    likes,
  } = props.codeSnippet;

  const onHearthLikeChanges = (id) => {
    console.log(id);
  }

  return (
    <li className={classes.code_snippet_item}>
      <img src={technologyIcon} alt="icon" />
      <p className={classes.title}>{title}</p>
      <div className={classes.technology_box}>
        <p className={classes.technology}>{technology}</p>
        <p className={classes.version}>{version}</p>
      </div>
      <p className={classes.description}>{description}</p>
      <p className={classes.date}>közzétéve: {date}</p>
      <div className={classes.hearth}>
        <NavLink to={`/codeSnippet/${id}`}>Megtekintés</NavLink>
        <LikeSystem onClickHandeler={onHearthLikeChanges} id={id} likes={likes} />
      </div>
    </li>
  );
}

export default CodeSnippetItem;
