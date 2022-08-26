import { Fragment } from "react";
import CodeSnippetItem from "./CodeSnippetItem";
import classes from "./CodeSnippetList.module.css";

function CodeSnippetList(props) {
  return (
    <Fragment>
      <h1>CodeSnippetList</h1>
      <CodeSnippetItem />
    </Fragment>
  );
}

export default CodeSnippetList;
