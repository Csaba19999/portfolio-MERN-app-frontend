import { useEffect, useState } from "react";
import { useHttpClient } from "../../../../hooks/http-hook";
import useIsMobile from "../../../../hooks/isMobile-hook";
import LoadingSpinner from "../../../../shared/loadingSpinner/LoadingSpinner";
import Card from "../../../../shared/overlay/Card";
import PreviusPositionItem from "./PreviusPositionItem";
import classes from "./PreviusPositions.module.css";

const DUMMY_DATA = [
  {
    id: "a1",
    company: "OTP",
    logo: "./images/icons/api.png",
    role: "Frontend developer",
    description:
      "My jobe was develope and securing the frontend in a large team. I lMy jobe was develope and securing the frontend in a large team. I lMy jobe was develope and securing the frontend in a large team. I l team. I learned how to work with docker images",
    tools: [
      "images/icons/tools/react.png",
      "images/icons/tools/mongodb.png",
      "images/icons/tools/node.png",
      "images/icons/tools/express.png",
      "images/icons/tools/mysql.png",
      "images/icons/tools/laravel.png",
      "images/icons/tools/php.png",
    ],
    date: "2019-2020",
  },
  {
    id: "a2",
    company: "Google",
    logo: "./images/icons/api.png",
    role: "Frontend developer",
    description:
      "My jobe was develope and securing the frontend in a large team. I lMy jobe was develope and securing the frontend in a large team. I lMy jobe was develope and securing the frontend in a large team. I l team. I learned how to work with docker images",
    tools: [
      "images/icons/tools/react.png",
      "images/icons/tools/mongodb.png",
      "images/icons/tools/node.png",
      "images/icons/tools/express.png",
      "images/icons/tools/mysql.png",
    ],
    date: "2019-2021",
  },
  {
    id: "a3",
    company: "Facebook",
    logo: "./images/icons/api.png",
    role: "Frontend developer",
    description:
      "My jobe was develope and securing the frontend in a large team. I lMy jobe was develope and securing the frontend in a large team. I lMy jobe was develope and securing the frontend in a large team. I l team. I learned how to work with docker images",
    tools: [
      "images/icons/tools/react.png",
      "images/icons/tools/mongodb.png",
      "images/icons/tools/node.png",
    ],
    date: "2019-2023",
  },
];

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
    <Card position="center" title="Előző munkahelyeim">
      {isLoading && (
        <div className="center">
          <LoadingSpinner spinnerSize={90} />
        </div>
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
