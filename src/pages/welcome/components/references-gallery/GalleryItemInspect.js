import { Fragment } from "react";
import Card from "../../../../shared/overlay/Card";
import classes from "./GalleryItemInspect.module.css";

const Dummy_data = [
  {
    cover:
      "https://www.undp.org/sites/g/files/zskgke326/files/migration/cn/UNDP-CH-Why-Humanity-Must-Save-Nature-To-Save-Itself.jpeg",
    title: "Why ó 1",
    id: "a1",
    description:
      "lorem ipsum dolor sit amet consectetur adipisilorem ipsum dolor sm dolor sit amet consectetur adipisilorem ipsum dolor sm dolor sit amet consectetur adipisilorem ipsum dolor sm dolor sit amet consectetur adipisilorem ipsum dolor sm dolor sit amet consectetur adipisilorem ipsum dolor sm dolor sit amet consectetur adipisilorem ipsum dolor sm dolor sit amet consectetur adipisilorem ipsum dolom dolor sit amet consectetur adipisilorem ipsum dolor sm dolor sit amet consectetur adipisilorem ipsum dolor sm dolor sit amet consectetur adipisilorem ipsum dolor sm dolor sit amet consectetur adipisilorem ipsum dolor sm dolor sit amet consectetur adipisilorem ipsum dolor sm dolor sit amet consectetur adipisilorem ipsum dolor sr sm dolor sit amet consectetur adipisilorem ipsum dolor sit amet consectetur adipisicing elorem ipsum dolor sit amet consectetur adipisicing elorem ipsum dolor sit amet consectetur alorem ipsum dolor sit amet consectetur adipisicing elorem ipsum dolor sit amet consectetur adipisicing elorem ipsum dolor sit amet consectetur adipisicing elorem ipsum dolor sit amet consectetur adipisicing elorem ipsum dolor sit amet consectetur adipisicing elorem ipsum dolor sit amet consectetur adipisicing elorem ipsum dolor sit amet consectetur adipisicing elorem ipsum dolor sit amet consectetur adipisicing elorem ipsum dolor sit amet consectetur adipisicing elorem ipsum dolor sit amet consectetur adipisicing elorem ipsum dolor sit amet consectetur adipisicing elorem ipsum dolor sit amet consectetur adipisicing edipisicing elorem ipsum dolor sit amet consectetur adipisicing ecing elit. Quisquam, quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. ",
    tools: [
      "images/icons/tools/react.png",
      "images/icons/tools/mongodb.png",
      "images/icons/tools/node.png",
      "images/icons/tools/php.png",
    ],
    date: "2020",
    hours: 16,
    pageLink: "https://thomas-the-hero-train-website.vercel.app/",
    githubLink: "https://github.com/",
  },
  {
    cover:
      "https://media.cntraveller.com/photos/611bf0b8c15cf5da489ed201/master/w_2580%2Cc_limit/biodiversity-gettyimages-1014819270.jpg",
    title: "Why hjkllf 2",
    id: "a2",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. ",
    tools: [
      "images/icons/tools/react.png",
      "images/icons/tools/mongodb.png",
      "images/icons/tools/node.png",
      "images/icons/tools/express.png",
      "images/icons/tools/mysql.png",
      "images/icons/tools/laravel.png",
    ],
    date: "2020",
    hours: 16,
    pageLink: "https://thomas-the-hero-train-website.vercel.app/",
    githubLink: "https://github.com/",
  },
  {
    cover:
      "https://www.undp.org/sites/g/files/zskgke326/files/migration/cn/UNDP-CH-Why-Humanity-Must-Save-Nature-To-Save-Itself.jpeg",
    title: "Why Humanivbkl Itself 3",
    id: "a3",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. ",
    tools: [
      "images/icons/tools/react.png",
      "images/icons/tools/express.png",
      "images/icons/tools/mysql.png",
      "images/icons/tools/laravel.png",
      "images/icons/tools/php.png",
    ],
    date: "2020",
    hours: 16,
    pageLink: "",
    githubLink: "https://github.com/",
  },
  {
    cover:
      "https://www.undp.org/sites/g/files/zskgke326/files/migration/cn/UNDP-CH-Why-Humanity-Must-Save-Nature-To-Save-Itself.jpeg",
    title: " Itself 4",
    id: "a4",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. ",
    tools: [
      "images/icons/tools/react.png",
      "images/icons/tools/laravel.png",
      "images/icons/tools/php.png",
    ],
    date: "2020",
    hours: 16,
    pageLink: "https://thomas-the-hero-train-website.vercel.app/",
    githubLink: "https://github.com/",
  },
  {
    cover:
      "https://www.undp.org/sites/g/files/zskgke326/files/migration/cn/UNDP-CH-Why-Humanity-Must-Save-Nature-To-Save-Itself.jpeg",
    title: " Itself 4",
    id: "a5",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. ",
    tools: [
      "images/icons/tools/react.png",
      "images/icons/tools/laravel.png",
      "images/icons/tools/php.png",
    ],
    date: "2020",
    hours: 16,
    pageLink: "https://thomas-the-hero-train-website.vercel.app/",
    githubLink: "https://github.com/",
  },
  {
    cover:
      "https://www.undp.org/sites/g/files/zskgke326/files/migration/cn/UNDP-CH-Why-Humanity-Must-Save-Nature-To-Save-Itself.jpeg",
    title: " Itself 4",
    id: "a6",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. ",
    tools: [
      "images/icons/tools/react.png",
      "images/icons/tools/laravel.png",
      "images/icons/tools/php.png",
    ],
    date: "2020",
    hours: 16,
    pageLink: "https://thomas-the-hero-train-website.vercel.app/",
    githubLink: "https://github.com/",
  },
  {
    cover:
      "https://www.undp.org/sites/g/files/zskgke326/files/migration/cn/UNDP-CH-Why-Humanity-Must-Save-Nature-To-Save-Itself.jpeg",
    title: " Itself 4",
    id: "a7",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. ",
    tools: [
      "images/icons/tools/react.png",
      "images/icons/tools/laravel.png",
      "images/icons/tools/php.png",
    ],
    date: "2020",
    hours: 16,
    pageLink: "https://thomas-the-hero-train-website.vercel.app/",
    githubLink: "https://github.com/",
  },
];

function GalleryItemInspect(props) {
  const inspectingItem = Dummy_data.find((item) => item.id === props.id);

  return (
    <div className={classes.GalleryItemInspect}>
      <div className={classes.GalleryItemInspect__cover}>
        {inspectingItem.pageLink === "" && (
          <Fragment>
            <h1>404-es hiba</h1>
            <h5>
              Ez az project sajnos nem elérhető! tekinsd meg a githubon kérlek.
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
        <div className={classes.description}>{inspectingItem.description}</div>
        <div className={classes.tools}>
          {inspectingItem.tools.map((tool, index) => {
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
            <img src={"./images/icons/GitHub-Mark-Light-64px.png"} alt="link" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default GalleryItemInspect;
