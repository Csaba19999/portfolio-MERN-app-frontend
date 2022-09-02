import { Fragment, useEffect, useState } from "react";
import { Zoom, Fade } from "react-awesome-reveal";
import WaveAnimation from "../../shared/background/WaveAnimation";
import CvDownload from "./components/cv/CvDownload";
import KnownTools from "./components/KnownTools/KnownTools";
import ShortAbout from "./components/short-about/ShortAbout";
import SoftSkillsList from "./components/soft-skills/SoftSkillsList";
import HardSkillsList from "./components/hard-skills/HardSkillsList";
import classes from "./Welcome.module.css";
import CurrentPosition from "./components/positions/CurrentPosition";
import PreviusPositions from "./components/positions/PreviusPositions";
import ReferencesGallery from "./components/references-gallery/ReferencesGallery";

function Welcome() {

  return (
    <Fragment>
        <div className={classes.title_box}>
        <Fade triggerOnce direction="down" duration={1000}>
          <h1 className={classes.title}>Szervusz a nevem Ménesi Csaba</h1>
          <h2 className={classes.title}>És frontend fejlesztő vagyok.</h2>
          <div className={classes.image_box}>
            <img src="./images/img/profil.jpg" alt="Ménesi Csaba profilképe" />
          </div>
        </Fade>
        <Zoom duration={500}>
          <CvDownload />
        </Zoom>
      </div>
      
      <WaveAnimation />
      <div className={classes.max_content}>
        <div className={classes.welcome_content}>
          <Fade className={classes.knownCard} triggerOnce direction="up" duration={1000}>
              <KnownTools />
          </Fade>
          <Fade className={classes.shortAboutCard} triggerOnce direction="up" duration={1000}>
                <ShortAbout />
          </Fade>
          <Fade className={classes.CurrentPosition} triggerOnce direction="up" duration={1000}>
             <CurrentPosition />
          </Fade>
          <Fade className={classes.PreviusPosition} triggerOnce direction="up" duration={1000}>
             <PreviusPositions />
          </Fade>
          <Fade className={classes.softSkills} triggerOnce direction="left" duration={1000}>
            <SoftSkillsList />
          </Fade>
          <Fade className={classes.hardSkills} triggerOnce direction="right" duration={1000}>
            <HardSkillsList />
          </Fade>
          <Fade className={classes.ReferencesGallery} triggerOnce direction="up" duration={1000}>
            <ReferencesGallery />
          </Fade>
        </div>
      </div>
    </Fragment>
  );
}

export default Welcome;
