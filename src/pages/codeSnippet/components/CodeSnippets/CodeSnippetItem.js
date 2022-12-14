import { NavLink } from "react-router-dom";
import { useHttpClient } from "../../../../hooks/http-hook";
import FavoriteSystem from "../../../../shared/FavoriteSystem/FavoriteSystem";
import LikeSystem from "../../../../shared/likeSystem/LikeSystem";
import classes from "./CodeSnippetItem.module.css";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

function CodeSnippetItem(props) {
  const {
    _id,
    description,
    title,
    technology,
    technologyIcon,
    version,
    date,
    likes,
  } = props.codeSnippet;
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const user = useSelector((state) => state.auth);

  const onHearthLikeChanges = (id) => {
    const sendLike = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_DEFAULT_API_KEY + "/like",
          "POST",
          JSON.stringify({
            snippetId: _id,
            userId: user.id,
          }),
          {
            "Content-Type": "application/json",
          }
        );
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
            snippetId: _id,
            userId: user.id,
          }),
          {
            "Content-Type": "application/json",
          }
        );
      } catch (error) {
        console.log(error);
      }
    };
    sendFavotite();
  };

  const callToast = () => {
    toast.error("jelentekezz be");
  };

  return (
    <li className={classes.code_snippet_item}>
      <Toaster position="top-left" />
      <img src={technologyIcon} alt="icon" />
      <p className={classes.title}>{title}</p>
      <div className={classes.technology_box}>
        <p className={classes.technology}>{technology}</p>
        <p className={classes.version}>{version}</p>
      </div>
      <p className={classes.description}>{description}</p>
      <p className={classes.date}>k??zz??t??ve: {date}</p>
      <div className={classes.hearth}>
        <NavLink to={`/codeSnippet/${_id}`}>Megtekint??s</NavLink>
        <div className={classes.hearth_icons}>
          <FavoriteSystem
            id={_id}
            onClickHandeler={user.isAuthenticated ? onFavoriteChanges : callToast}
            color="black"
          />
          <LikeSystem
            onClickHandeler={user.isAuthenticated ? onHearthLikeChanges : callToast}
            id={_id}
            likes={likes}
          />
        </div>
      </div>
    </li>
  );
}

export default CodeSnippetItem;
