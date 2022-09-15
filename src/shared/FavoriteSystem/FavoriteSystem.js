import { useEffect, useState } from "react";
import Star from "./Star";
import classes from "./FavoriteSystem.module.css";
import { useSelector } from "react-redux";

function FavoriteSystem(props) {
  const auth = useSelector((state) => state.auth);
  const { onClickHandeler, id } = props;
  const [isFavorite, setIsFavorite] = useState(false);
  const [color, setColor] = useState("");

  useEffect(() => {
    if (isFavorite) {
      setColor("#ffb813");
    } else {
      setColor("#E5E5E5");
    }
  }, [isFavorite]);

  useEffect(() => {
    setIsFavorite(auth.favorite_snippets.includes(id));
  }, [auth.favorite_snippets]);

  const onStarClick = () => {
    if (auth.isAuthenticated) {
      setIsFavorite(!isFavorite);  
    }
    onClickHandeler(id);
  };

  return (
    <div className={classes.favorite_system_icon}>
      <Star color={color} onStarClick={onStarClick} />
    </div>
  );
}

export default FavoriteSystem;
