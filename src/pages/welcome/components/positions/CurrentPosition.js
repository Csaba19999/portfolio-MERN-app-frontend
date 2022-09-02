import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useHttpClient } from "../../../../hooks/http-hook";
import LoadingSpinner from "../../../../shared/loadingSpinner/LoadingSpinner";
import Card from "../../../../shared/overlay/Card";
import classes from "./CurrentPosition.module.css";
import { NavLink } from "react-router-dom";


function CurrentPosition() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedPosition, setLoadedPosition] = useState({});
  const [loadedTools, setLoadedTools] = useState([]);

  useEffect(() => {
    const fetchPosition = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_DEFAULT_API_KEY+"/positions/current"
        );
        setLoadedPosition(responseData);
        const tools = [];
        for (let index = 0; index < responseData.tools.length; index++) {
          const imgJSX = <img key={index+"logo"} src={responseData.tools[index]} alt={"logo"} />;
          tools.push(imgJSX);
        }
        setLoadedTools(tools);
      } catch (error) {
        console.log(error.messege);
      }
    };
    fetchPosition();
  }, [sendRequest]);

  return (
    <Card position="center" title={loadedPosition?.title !== "" ? loadedPosition.title : "" }>
      {isLoading && (
        <LoadingSpinner spinnerSize={90} />
      )}
      {loadedPosition.company === "" && (
        <div className={classes.jobless}>
          <h2>Jelenleg munkát keresek.</h2>
          <h4>Esetleg volna egy ajánlatod?</h4>
          <NavLink to="/contact">Küldj egy emailt.</NavLink>
        </div>
      )}
      {!isLoading && loadedPosition.company !== "" && (
        <div className={classes.current_card}>
          <div className={classes.company}>
            <img
              src={loadedPosition.company_logo}
              alt={`${loadedPosition.company} logo`}
            />

            <p>{loadedPosition.company}</p>
          </div>
          <div className={classes.role}>
            <p>{loadedPosition.role}</p>
          </div>
          <div className={classes.role_description}>
            <p>{loadedPosition.description}</p>
          </div>
          <Fade
            className={classes.main_tools}
            triggerOnce
            direction={"center"}
            delay={300}
          >
            <div className={classes.tool}>{loadedTools}</div>
          </Fade>
        </div>
      )}
      {error && (
        <div className={classes.error}>
          <p>{error}</p>
          <button onClick={clearError}>X</button>
        </div>
      )}
    </Card>
  );
}

export default CurrentPosition;
