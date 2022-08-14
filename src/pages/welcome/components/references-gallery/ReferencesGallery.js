import classes from "./ReferencesGallery.module.css";
import GalleryItem from "./GalleryItem";
import { Fragment } from "react";

const Dummy_data = [
  {
    cover:
      "https://www.undp.org/sites/g/files/zskgke326/files/migration/cn/UNDP-CH-Why-Humanity-Must-Save-Nature-To-Save-Itself.jpeg",
    title: "Why ó 1",
    id: "a1",
    pageLink:
      "https://www.undp.org/content/why-humanity-must-save-nature-save-itself",
    githubLink: "www.github.com",
  },
  {
    cover:
      "https://media.cntraveller.com/photos/611bf0b8c15cf5da489ed201/master/w_2580%2Cc_limit/biodiversity-gettyimages-1014819270.jpg",
    title: "Why hjkllf 2",
    id: "a2",
    pageLink:
      "https://www.undp.org/content/why-humanity-must-save-nature-save-itself",
    githubLink: "www.github.com",
  },
  {
    cover:
      "https://www.undp.org/sites/g/files/zskgke326/files/migration/cn/UNDP-CH-Why-Humanity-Must-Save-Nature-To-Save-Itself.jpeg",
    title: "Why Humanivbkl Itself 3",
    id: "a3",
    pageLink:
      "https://www.undp.org/content/why-humanity-must-save-nature-save-itself",
    githubLink: "www.github.com",
  },
  {
    cover:
      "https://www.undp.org/sites/g/files/zskgke326/files/migration/cn/UNDP-CH-Why-Humanity-Must-Save-Nature-To-Save-Itself.jpeg",
    title: " Itself 4",
    id: "a4",
    pageLink:
      "https://www.undp.org/content/why-humanity-must-save-nature-save-itself",
    githubLink: "www.github.com",
  },
  {
    cover:
      "https://www.undp.org/sites/g/files/zskgke326/files/migration/cn/UNDP-CH-Why-Humanity-Must-Save-Nature-To-Save-Itself.jpeg",
    title: " Itself 4",
    id: "a5",
    pageLink:
      "https://www.undp.org/content/why-humanity-must-save-nature-save-itself",
    githubLink: "www.github.com",
  },
  {
    cover:
      "https://www.undp.org/sites/g/files/zskgke326/files/migration/cn/UNDP-CH-Why-Humanity-Must-Save-Nature-To-Save-Itself.jpeg",
    title: " Itself 4",
    id: "a6",
    pageLink:
      "https://www.undp.org/content/why-humanity-must-save-nature-save-itself",
    githubLink: "www.github.com",
  },
  {
    cover:
      "https://www.undp.org/sites/g/files/zskgke326/files/migration/cn/UNDP-CH-Why-Humanity-Must-Save-Nature-To-Save-Itself.jpeg",
    title: " Itself 4",
    id: "a7",
    pageLink:
      "https://www.undp.org/content/why-humanity-must-save-nature-save-itself",
    githubLink: "www.github.com",
  },
];

function ReferencesGallery(props) {
  const { animationDelay } = props;
  return (
      <Fragment>
        <h2 className={classes.title}>Referencia galléria</h2>
        <ul className={classes.gallery}>
          {Dummy_data.map((item, index) => (
            <GalleryItem animationDelay={animationDelay} key={item.id} {...item} delay={index + 5} />
          ))}
        </ul>
      </Fragment>
  );
}

export default ReferencesGallery;
