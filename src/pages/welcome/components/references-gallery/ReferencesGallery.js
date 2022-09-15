import classes from "./ReferencesGallery.module.css";
import GalleryItem from "./GalleryItem";
import { Fragment, useEffect, useState } from "react";
import { useHttpClient } from "../../../../hooks/http-hook";
import LoadingSpinner from "../../../../shared/loadingSpinner/LoadingSpinner";

function ReferencesGallery(props) {
  const { animationDelay } = props;
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedGalleryItems, setLoadedGalleryItems] = useState([]);

  useEffect(() => {
    const fetchGaleryItems = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_DEFAULT_API_KEY + "/GalleryItems"
        );
        setLoadedGalleryItems(responseData);
      } catch (error) {
        console.log(error.messege);
      }
    };
    fetchGaleryItems();
  }, [sendRequest]);

  return (
    <Fragment>
      <h2 className={classes.title}>Referencia galléria</h2>
      {isLoading && (
            <LoadingSpinner spinnerSize={90} />
        )}
      {!isLoading && (
        <ul className={classes.gallery}>
        {loadedGalleryItems.map((item, index) => (
          <GalleryItem
            animationDelay={animationDelay}
            key={item._id}
            {...item}
            delay={index + 5}
          />
        ))}
      </ul>
      )}      
    </Fragment>
  );
}

export default ReferencesGallery;
