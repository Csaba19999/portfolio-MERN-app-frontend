import { useEffect, useState } from "react";
import Hearth from "./Hearth";
import classes from "./LikeSystem.module.css";

function LikeSystem(props) {
  const { onClickHandeler, id, likes } = props;
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);
  const [color, setColor] = useState("");

  useEffect(() => {
    if (isLiked) {
      setColor("#fe0000");
    } else {
      setColor("#E5E5E5");
    }
  }, [isLiked]);

  const onHarthClick = () => {
    setIsLiked(!isLiked);
    if(isLiked){
        setLikesCount(likesCount - 1);
    }else{
        setLikesCount(likesCount + 1);
    }
    onClickHandeler(id);
  };

  return (
    <div className={classes.like_system}>
      <div className={classes.like_system_icon}>
        <Hearth color={color} onHarthClick={onHarthClick} />
        <p>{likesCount}</p>
      </div>
    </div>
  );
}

export default LikeSystem;
