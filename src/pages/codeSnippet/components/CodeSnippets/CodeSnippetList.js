import { Fragment } from "react";
import CodeSnippetItem from "./CodeSnippetItem";
import classes from "./CodeSnippetList.module.css";

function CodeSnippetList(props) {
  return (
    <Fragment>
      <ul className={classes.code_snippet_list}>
        {props.snippets.map((codeSnippet) => (
            <CodeSnippetItem key={codeSnippet.id} codeSnippet={codeSnippet} />
        ))}
      </ul>
    </Fragment>
  );
}

export default CodeSnippetList;
