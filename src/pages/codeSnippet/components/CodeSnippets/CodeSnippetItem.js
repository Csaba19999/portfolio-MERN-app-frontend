import { NavLink } from "react-router-dom";
import { useHttpClient } from "../../../../hooks/http-hook";
import FavoriteSystem from "../../../../shared/FavoriteSystem/FavoriteSystem";
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
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const onHearthLikeChanges = (id) => {
    const sendLike = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_DEFAULT_API_KEY + "/like",
          "POST",
          JSON.stringify({
            snippet_id: id,
            user_id: "u2",
          }),
          {
            "Content-Type": "application/json",
          }
        );
        console.log(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    sendLike();
  };
  const onFavoriteChanges = (id) => {
    const sendFavotite = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_DEFAULT_API_KEY + "/favorite",
          "POST",
          JSON.stringify({
            snippet_id: id,
            user_id: "u2",
          }),
          {
            "Content-Type": "application/json",
          }
        );
        console.log(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    sendFavotite();
  };

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
        <div className={classes.hearth_icons}>
          <FavoriteSystem
            id={id}
            onClickHandeler={onFavoriteChanges}
            color="black"
          />
          <LikeSystem
            onClickHandeler={onHearthLikeChanges}
            id={id}
            likes={likes}
          />
        </div>
      </div>
    </li>
  );
}

export default CodeSnippetItem;
