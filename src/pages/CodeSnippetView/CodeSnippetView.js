import { useParams } from "react-router-dom";
import classes from "./CodeSnippetView.module.css";

function CodeSnippetView() {
  const { id } = useParams();
  return (
    <div className={classes.Code_Snippet_View}>
      <h1>Code_Snippet_View {id}</h1>
    </div>
  );
}

export default CodeSnippetView;
