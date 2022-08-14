import { useState } from "react";
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
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1150);

  const updateWidth = () => {
    setWidth(window.innerWidth);
    setIsMobile(width < 1150);
  };
  window.addEventListener("resize", updateWidth);

  return (
    <Card position="center" title="Előző munkahelyeim">
      <div className={classes.previusPositions}>
        <ul>
          {DUMMY_DATA.map((item, index) => {
            let borderType = "";
            if (!isMobile) {
              borderType = "none";
            } else if (isMobile && index === DUMMY_DATA.length - 1) {
              borderType = "none";
            } else {
              borderType = "2px solid #e6e6e6";
            }
            return (
              <PreviusPositionItem
                border={borderType}
                description={item.description}
                key={item.id}
                company={item.company}
                date={item.date}
                role={item.role}
                tools={item.tools}
                logo={item.logo}
              />
            );
          })}
        </ul>
      </div>
    </Card>
  );
}

export default PreviusPositions;
