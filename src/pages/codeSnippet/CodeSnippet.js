import { Fragment, useState } from "react";
import CodeSnippetList from "./components/CodeSnippets/CodeSnippetList";
import WaveAnimation from "../../shared/background/WaveAnimation";
import SearchForm from "../../shared/searchForm/SearchForm";
import classes from "./CodeSnippet.module.css";

const DUMMY_CODE_SNIPPETS = [
  {
    id: "a1",
    technology: "JavaScript",
    version: "ES6",
    technologyIcon: "./images/icons/tools/js.png",
    title: "Code Snippet 1",
    description:
      "This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code sis a code snippetThis is a code snippet This is a code is a code snippetThis is a code snippet This is a code is a code snippetThis is a code snippet This is a code is a code snippetThis is a code snippet This is a code nippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet ",
    likes: 0,
    date: "2020.05.05",
  },
  {
    id: "a2",
    technology: "React",
    version: "ES6",
    technologyIcon: "./images/icons/tools/js.png",
    title: "Code Snippet 2",
    description:
      "This is a code snippet This a code snippetThis is a code snippet This is a code is a code snippetThis is a code snippet This is a code is a code snippetThis is a code snippet This is a code is is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet ",
    likes: 5,
    date: "2020.05.05",
  },
  {
    id: "a3",
    technology: "JavaScript",
    version: "ES6",
    technologyIcon: "./images/icons/tools/js.png",
    title: "Code Snippet 3",
    description:
      "This is a code snippetThis is a code snippet This is a code is a code snippetThis is a code snippet This is a code is a code snippetThis is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet ",
    likes: 10,
    date: "2020.05.05",
  },
];

function CodeSnippet() {
  const [codeSnippetItems, setCodeSnippetItems] = useState(DUMMY_CODE_SNIPPETS);

  const onSearch = (event) => {
    //requestet kell indítani majd a backendnek paraméterekkel!
    //fel kell tölteni adatbázisból a kerső mezót. kapcsolattal a verzók és a technológia alapján
    let filteredItems = [];
    filteredItems = DUMMY_CODE_SNIPPETS.filter((item) => {
        return item.technology.toLowerCase().includes(event.target.value.toLowerCase());
        }
    );
    setCodeSnippetItems(filteredItems);
  };

  return (
    <Fragment>
      <div className={classes.Code_Snippet_Page}>
        <h1>Keress a snippetek között</h1>
        <SearchForm onChangeHandeler={onSearch} />
        <CodeSnippetList DUMMY_CODE_SNIPPETS={codeSnippetItems} />
      </div>
      <WaveAnimation noMargin />
    </Fragment>
  );
}
export default CodeSnippet;

