import { useParams } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as CodeStyle } from "react-syntax-highlighter/dist/cjs/styles/prism";
import LikeSystem from "../../shared/likeSystem/LikeSystem";
import classes from "./CodeSnippetView.module.css";
import Card from "../../shared/overlay/Card";
import FavoriteSystem from "../../shared/FavoriteSystem/FavoriteSystem";

const DUMMY_CODE_SNIPPETS = [
  {
    id: "a1",
    technology: "JavaScript",
    version: "ES6",
    technologyIcon: "./images/icons/tools/js.png",
    title: "Code Snippet 1 a",
    description:
      "This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code sis a code snippetThis is a code snippet This is a code is a code snippetThis is a code snippet This is a code is a code snippetThis is a code snippet This is a code is a code snippetThis is a code snippet This is a code nippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet ",
    likes: 0,
    date: "2020.05.05",
    code: [
      {
        codeTitle: "the custome hook a",
        theCode: `const onSearch = (event) => {
//requestet kell indítani majd a backendnek paraméterekkel!
//fel kell tölteni adatbázisból a kerső mezót. kapcsolattal a verzók és a technológia alapján
  let filteredItems = [];
  filteredItems = DUMMY_CODE_SNIPPETS.filter((item) => {
    return item.technology.toLowerCase().includes(event.target.value.toLowerCase());
  });
  setCodeSnippetItems(filteredItems);
};`,
        note: "set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  ",
      },{
        codeTitle: "the custome hook d",
        theCode: `const onSearch = (event) => {
//requestet kell indítani majd a backendnek paraméterekkel!
//fel kell tölteni adatbázisból a kerső mezót. kapcsolattal a verzók és a technológia alapján
  let filteredItems = [];
  filteredItems = DUMMY_CODE_SNIPPETS.filter((item) => {
    return item.technology.toLowerCase().includes(event.target.value.toLowerCase());
  });
  setCodeSnippetItems(filteredItems);
};`,
        note: "set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  ",
      },{
        codeTitle: "the custome hook g",
        theCode: `const onSearch = (event) => {
//requestet kell indítani majd a backendnek paraméterekkel!
//fel kell tölteni adatbázisból a kerső mezót. kapcsolattal a verzók és a technológia alapján
  let filteredItems = [];
  filteredItems = DUMMY_CODE_SNIPPETS.filter((item) => {
    return item.technology.toLowerCase().includes(event.target.value.toLowerCase());
  });
  setCodeSnippetItems(filteredItems);
};`,
        note: "set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  set a counter.  ",
      },
      {
        codeTitle: "usage g",
        theCode: `console.log(count);`,
        note: "showing the count.",
      },
    ],
  },
  {
    id: "a2",
    technology: "React",
    version: "ES6",
    technologyIcon: "./images/icons/tools/js.png",
    title: "Code Snippet 2 d",
    description:
      "This is a code snippet This a code snippetThis is a code snippet This is a code is a code snippetThis is a code snippet This is a code is a code snippetThis is a code snippet This is a code is is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet ",
    likes: 5,
    date: "2020.05.05",
    code: [
      {
        codeTitle: "the custome hook g",
        theCode: `import { useState } from "react";
               const [count, setCount] = useState(0);`,
        note: "set a counter.",
      },
      {
        codeTitle: "usage jk",
        theCode: `console.log(count);`,
        note: "showing the count.",
      },
    ],
  },
  {
    id: "a3",
    technology: "JavaScript",
    version: "ES6",
    technologyIcon: "./images/icons/tools/js.png",
    title: "Code Snippet 3 c",
    description:
      "This is a code snippetThis is a code snippet This is a code is a code snippetThis is a code snippet This is a code is a code snippetThis is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet This is a code snippet ",
    likes: 10,
    date: "2020.05.05",
    code: [
      {
        codeTitle: "the custome hook lh",
        theCode: `import { useState } from "react";
               const [count, setCount] = useState(0);`,
        note: "set a counter.",
      },
      {
        codeTitle: "usage éákl",
        theCode: `console.log(count);`,
        note: "showing the count.",
      },
    ],
  },
];

function CodeSnippetView() {
  const { id } = useParams();

  const codeSnippet = DUMMY_CODE_SNIPPETS.find((snippet) => snippet.id === id);

  const onHearthLikeChanges = (id) => {
    //külön custome hook kel majd a likenak és a favorite nek.
    console.log(id);
  };
  const onFavoriteChanges = (id) => {
    //külön custome hook kel majd a likenak és a favorite nek.
    console.log(id);
  }

  return (
    <div className={classes.Code_Snippet_View}>
      <div className={classes.title}>
        <h1>{codeSnippet.title}</h1>
      </div>
      <Card className={classes.left_box}>
        {codeSnippet.code.map((code) => (
          <div className={classes.code_box} key={code.codeTitle}>
            <h1 className={classes.codeTitle}>{code.codeTitle}</h1>
            <SyntaxHighlighter
              showLineNumbers
              wrapLongLines
              language="javascript"
              style={CodeStyle}
            >
              {code.theCode}
            </SyntaxHighlighter>
            <h4>Note</h4>
            <p>{code.note}</p>
          </div>
        ))}
      </Card>
      <Card className={classes.right_box}>
        <div className={classes.technology_box}>
          <img src={codeSnippet.technologyIcon} alt="technology" />
          <p className={classes.technology}>{codeSnippet.technology}</p>
          <p className={classes.version}>{codeSnippet.version}</p>
        </div>
        <p className={classes.description}>
          {codeSnippet.description}
        </p>
        <div className={classes.like_box}>
        <FavoriteSystem
            id={id}
            onClickHandeler={onFavoriteChanges}
            color="black"
          />
          <LikeSystem
            id={id}
            onClickHandeler={onHearthLikeChanges}
            likes={codeSnippet.likes}
            color="black"
          />
        </div>
        <p className={classes.date}>közzététel: {codeSnippet.date}</p>
      </Card>
    </div>
  );
}

export default CodeSnippetView;
