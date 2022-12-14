import { Fragment, useEffect, useState } from "react";
import { useHttpClient } from "../../../../hooks/http-hook";
import LoadingSpinner from "../../../../shared/loadingSpinner/LoadingSpinner";
import classes from "./ShortAbout.module.css";
import SkillCard from "./SkillCard";

function ShortAbout() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [aboutData, setAbout] = useState();

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_DEFAULT_API_KEY + "/about"
        );
        setAbout(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAbout();
  }, [sendRequest]);

  return (
    <div className={classes.short_about}>
      {isLoading && (
          <LoadingSpinner spinnerSize={90} />
      )}
      {aboutData && (
        <Fragment>
          <div className={classes.image_box}>
            <img src={"./images/img/me.png"} alt="" />
          </div>
          <div className={classes.text_box}>
            <h2>{aboutData.about.title}</h2>
            <pre>{aboutData.about.description}</pre>
          </div>
          <div className={classes.skills}>
            {aboutData.skillCards.map((skill, index) => (
              <SkillCard
                title={skill.title}
                key={index + "card"}
                description={skill.description}
                image={skill.image}
              />
            ))}
          </div>
        </Fragment>
      )}
      {error && (
        <div className={classes.error_message}>
          <p>{error.message}</p>
          <button onClick={clearError}>Close</button>
        </div>
      )}
    </div>
  );
}

export default ShortAbout;
