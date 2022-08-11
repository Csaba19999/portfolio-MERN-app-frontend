import { Fade } from "react-reveal";
import classes from "./ShortAbout.module.css";
import SkillCard from "./SkillCard";

function ShortAbout() {
  return (
    <div className={classes.short_about}>
      <div className={classes.image_box}>
        <img src={"./images/img/me.png"} alt="" />
      </div>

      <div className={classes.text_box}>
        <h3>Had mutassam be magam.</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        euismod, nisi vel consectetur euismod, nisi nisl aliquet nisl, eget
        consectetur nisl nisi vel nisl. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Pellentesque euismod, nisi vel consectetur euismod,
        nisi nisl aliquet nisl, eget consectetur nisl nisi vel nisl.
      </div>
      <div className={classes.skills}>
          <SkillCard
          title="Csapatmunka"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            euismod, nisi vel consectetur euismod, nisi nisl aliquet nisl, eget
            consectetur nisl nisi vel nisl."
          image="./images/icons/fork.png"
        />
        <SkillCard
          title="REST FULL"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            euismod, nisi vel consectetur euismod, nisi nisl aliquet nisl, eget
            consectetur nisl nisi vel nisl."
          image="./images/icons/api.png"
        />
        <SkillCard
          title="OOP"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            euismod, nisi vel consectetur euismod, nisi nisl aliquet nisl, eget
            consectetur nisl nisi vel nisl."
          image="./images/icons/oop.png"
        />
        <SkillCard
          title="UX / Desing"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            euismod, nisi vel consectetur euismod, nisi nisl aliquet nisl, eget
            consectetur nisl nisi vel nisl."
          image="./images/icons/ux.png"
        />
      </div>
    </div>
  );
}

export default ShortAbout;
