import { useEffect, useState } from "react";
import { useHttpClient } from "../../../../hooks/http-hook";
import useIsMobile from "../../../../hooks/isMobile-hook";
import LoadingSpinner from "../../../../shared/loadingSpinner/LoadingSpinner";
import Card from "../../../../shared/overlay/Card";
import PreviusPositionItem from "./PreviusPositionItem";
import classes from "./PreviusPositions.module.css";


function PreviusPositions() {
  const { isMobile } = useIsMobile(1150);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedPositions, setLoadedPositions] = useState();

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_DEFAULT_API_KEY + "/positions/previus"
        );
        setLoadedPositions(responseData);
      } catch (error) {
        console.log(error.messege);
      }
    };
    fetchPositions();
  }, [sendRequest]);

  return (
    <Card position="center" title={"Előző munkahelyeim"}>
      {isLoading && (
          <LoadingSpinner spinnerSize={90} />
      )}
      {loadedPositions && (
        <div className={classes.previusPositions}>
          <ul>
            {loadedPositions.map((item, index) => {
              let borderType = "";
              if (!isMobile) {
                borderType = "none";
              } else if (isMobile && index === loadedPositions.length - 1) {
                borderType = "none";
              } else {
                borderType = "2px solid #e6e6e6";
              }
              return (
                <PreviusPositionItem
                  border={borderType}
                  description={item.description}
                  key={item.id+""+index}
                  company={item.company}
                  date={item.date}
                  role={item.role}
                  tools={item.tools}
                  logo={item.company_logo}
                />
              );
            })}
          </ul>
        </div>
      )}
      {error && (
        <div className="center">
          <p>{error.message}</p>
          <button onClick={clearError}>Clear</button>
        </div>
      )}
    </Card>
  );
}

export default PreviusPositions;
