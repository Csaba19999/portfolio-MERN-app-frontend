import { useEffect, useState } from "react";
import Star from "./Star";
import classes from "./FavoriteSystem.module.css";

function FavoriteSystem(props) {
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

  const onStarClick = () => {
    setIsFavorite(!isFavorite);
    onClickHandeler(id);
  };

  return (
    <div className={classes.favorite_system_icon}>
      <Star color={color} onStarClick={onStarClick} />
    </div>
  );
}

export default FavoriteSystem;
