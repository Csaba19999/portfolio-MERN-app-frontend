import { Fragment } from "react";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import WaveAnimation from "../../shared/background/WaveAnimation";
import Card from "../../shared/overlay/Card";
import classes from "./Welcome.module.css";

function Welcome() {
  return (
    <Fragment>
      <div className={classes.title_box}>
        <h1 className={classes.title}>Szervusz a nevem Ménesi Csaba</h1>
        <h2 className={classes.title}>És frontend fejlesztő vagyok.</h2>
        <div className={classes.image_box}>
          <img src="./images/img/profil.jpg" alt="Ménesi Csaba profilképe" />
        </div>
      </div>
      <WaveAnimation />
      <div className={classes.welcome_content}>
        <div>
          <Slide triggerOnce duration={1500}>
            <Card title={'teszt Kártya'} position={'right'}>
              <p className={classes.teszt}>
                sdhf isdh fuhsduiofhuoisdhfhsdiouf huoisdh fuh sdioufh uiosdh
                fuiohsd uiofh suiodfh ouidsh fioujsdh fiouhsdouifh
                oiujdshfoiusdh foihawsdoifhjsdoikj flksdn ofgin osdirvn od
                riogvn oignon o
              </p>
            </Card>
          </Slide>
        </div>
      </div>
    </Fragment>
  );
}

export default Welcome;
