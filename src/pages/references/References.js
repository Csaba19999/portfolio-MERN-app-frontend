import classes from "./References.module.css";
import ReferencesGallery from "../welcome/components/references-gallery/ReferencesGallery";
import WaveAnimation from "../../shared/background/WaveAnimation";
import { Fade } from "react-awesome-reveal";
import { Fragment } from "react";

function References() {
  return(
    <Fragment>
        <div className={classes.references_page}>
            <ReferencesGallery animationDelay={0} />
        </div>
        <WaveAnimation noMargin />
    </Fragment>
        
    );
}

export default References;
