import { useEffect, useState, useRef } from "react";
import { Fade } from "react-awesome-reveal";
import useOuterClick from "../../hooks/outsideClick-hook";
import useIsMobile from "../../hooks/isMobile-hook";
import classes from "./subNav.module.css";

//https://www.npmjs.com/package/@codetrix-studio/capacitor-google-auth
//https://www.npmjs.com/package/react-google-sociallogin-auth
//https://www.npmjs.com/package/@react-oauth/google

const SubNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useIsMobile(875);
  const innerRef = useOuterClick((e) => {
    if (isMobile) {
        subNavOpenHandeler();
    }
    if (!isMobile) {
        setIsOpen(false);
    }
  });

  const subNavOpenHandeler = () => {
    setIsOpen(true);
    if(!isMobile && isOpen) {
        setIsOpen(false);
    }
  }

  useEffect(() => {
    if (isMobile) {
      setIsOpen(true);
    }
  }, [isMobile]);

  return (
    <div ref={innerRef} className={classes.sub_nav}>
      <div
        className={`${isOpen && classes.active} ${classes.subNav_icon}`}
        onClick={isMobile ? props.toggleSubNav : subNavOpenHandeler}
      >
        <img
          className={`${isOpen && classes.active}`}
          src={isOpen ? "./images/icons/menu_widget.svg" : "./images/icons/menu_widget_close.svg"}
          alt="icon"
          style={!isOpen ? {filter: "blur(0.5px)"} : {}}
        />
      </div>
      {isOpen && (
        <Fade
          className={classes.sub_nav_items}
          duration={!isMobile ? 500 : 1000}
          direction={!isMobile ? "right" : "up"}
        >
          {props.children}
        </Fade>
      )}
    </div>
  );
};
export default SubNav;
