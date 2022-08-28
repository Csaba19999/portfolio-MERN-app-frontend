import { Fragment, useState } from "react";
import { Fade } from "react-awesome-reveal";
import useIsMobile from "../../../../hooks/isMobile-hook";
import Modal from "../../../../shared/modal/Modal";

import classes from "./GalleryItem.module.css";
import GalleryItemInspect from "./GalleryItemInspect";

function GalleryItem(props) {
  const [isOnMouse, setIsOnMouse] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isMobile } = useIsMobile(850);

  const showMoodleButton = () => {
    setIsOnMouse(true);
  };
  const hideMoodleButton = () => {
    setIsOnMouse(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    console.log("bezaras");
    setIsModalOpen(false);
  };

  return (
    <Fragment>
      <Fade triggerOnce direction="down" duration={500} delay={0}>
        <li
          className={classes.gallery_item}
          onMouseEnter={showMoodleButton}
          onMouseLeave={hideMoodleButton}
          style={{
            backgroundImage: `url(${props.cover})`,
          }}
        >
          {isOnMouse && isMobile && (
            <Fragment>
              <p>{props.title}</p>
              <a
                href={props.pageLink ? props.pageLink : props.githubLink}
                target={"_blank"}
              >
                Megtekintés
              </a>
            </Fragment>
          )}
          {isOnMouse && !isMobile && (
            <Fade duration={500}>
              <p onClick={openModal}>{props.title}</p>
              <button onClick={openModal}>Megtekintés</button>
            </Fade>
          )}
        </li>
      </Fade>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <GalleryItemInspect id={props.id} />
        </Modal>
      )}
    </Fragment>
  );
}

export default GalleryItem;
