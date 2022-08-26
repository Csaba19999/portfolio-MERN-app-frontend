import CodeSnippetList from "./components/CodeSnippetList";
import WaveAnimation from "../../shared/background/WaveAnimation";
import classes from "./CodeSnippet.module.css";
import { Fragment } from "react";

function CodeSnippet() {
  return (
    <Fragment>
      <div className={classes.Code_Snippet_Page}>
        <h1>Code Snnipets</h1>
        <CodeSnippetList />
      </div>
      <WaveAnimation noMargin />
    </Fragment>
  );
}

export default CodeSnippet;
