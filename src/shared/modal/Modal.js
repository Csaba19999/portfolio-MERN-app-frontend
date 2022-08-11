import { Fragment } from "react";
import reactDom from "react-dom";
import { Fade } from "react-awesome-reveal";

import classes from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <img
        onClick={props.onClose}
        src="./images/icons/close_button.svg"
        className={classes.close}
      />
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

function Modal(props) {
  const { closeModal } = props;
  return (
    <Fade>
      <Fragment>
        {reactDom.createPortal(
          <BackDrop onClose={closeModal} />,
          portalElement
        )}
        {reactDom.createPortal(
          <ModalOverlay onClose={closeModal}>{props.children}</ModalOverlay>,
          portalElement
        )}
      </Fragment>
    </Fade>
  );
}

export default Modal;
