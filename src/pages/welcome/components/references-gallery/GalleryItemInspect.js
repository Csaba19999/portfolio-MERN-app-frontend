import { Fragment, useEffect, useState } from "react";
import { useHttpClient } from "../../../../hooks/http-hook";
import LoadingSpinner from "../../../../shared/loadingSpinner/LoadingSpinner";
import Card from "../../../../shared/overlay/Card";
import classes from "./GalleryItemInspect.module.css";


function GalleryItemInspect(props) {
  const [inspectingItem, setInspectingItem] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  console.log(props.id);
  useEffect(() => {
    const fetchGalleryItem = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_DEFAULT_API_KEY +
            "/GalleryItem/" +
            props.id
        );
        console.log(responseData);
        setInspectingItem(responseData);
      } catch (error) {
        console.log(error.messege);
      }
    };
    fetchGalleryItem();
  }, [sendRequest]);

  return (
    <div className={classes.GalleryItemInspect}>
      {isLoading && (
          <LoadingSpinner spinnerSize={90} />
      )}
      {!isLoading && inspectingItem && (
        <Fragment>
          <div className={classes.GalleryItemInspect__cover}>
            {inspectingItem.pageLink === "" && (
              <Fragment>
                <h1>404-es hiba</h1>
                <h5>
                  Ez az project sajnos nem elérhető! tekinsd meg a githubon
                  kérlek.
                </h5>
              </Fragment>
            )}
            <iframe
              title="page"
              frameBorder="0"
              src={inspectingItem.pageLink}
            ></iframe>
          </div>
          <div className={classes.GalleryItemContent}>
            <div className={classes.title}>{inspectingItem.title}</div>
            <div className={classes.description}>
              {inspectingItem.description}
            </div>
            <div className={classes.tools}>
              {inspectingItem?.tools.map((tool, index) => {
                return <img key={index} src={tool} alt="tool" />;
              })}
            </div>
            <div className={classes.preddict}>
              <div className={classes.date}>
                Készítás éve: {inspectingItem.date}
              </div>
              <div className={classes.hours}>
                Igénybevett idő ≈ {inspectingItem.hours} óra
              </div>
            </div>

            <div className={classes.links}>
              {inspectingItem.pageLink ? (
                <a
                  className={classes.pageLink}
                  target="_blank"
                  href={inspectingItem.pageLink}
                >
                  <img
                    src={"./images/icons/GitHub-Mark-Light-64px.png"}
                    alt="link"
                  />
                  Irány az oldal
                </a>
              ) : (
                ""
              )}
              <a
                className={classes.githubLink}
                target="_blank"
                href={inspectingItem.githubLink}
              >
                <img
                  src={"./images/icons/GitHub-Mark-Light-64px.png"}
                  alt="link"
                />
                GitHub
              </a>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default GalleryItemInspect;
