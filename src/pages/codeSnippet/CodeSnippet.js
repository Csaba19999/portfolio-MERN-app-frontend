import { Fragment, useEffect, useState } from "react";
import CodeSnippetList from "./components/CodeSnippets/CodeSnippetList";
import WaveAnimation from "../../shared/background/WaveAnimation";
import SearchForm from "../../shared/searchForm/SearchForm";
import classes from "./CodeSnippet.module.css";
import { useHttpClient } from "../../hooks/http-hook";
import LoadingSpinner from "../../shared/loadingSpinner/LoadingSpinner";

function CodeSnippet() {
  const [codeSnippetItems, setCodeSnippetItems] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const onSearch = (searchParams) => {
    const { technology, version, sort, searchFilde } = searchParams;
    const fetchSnippets = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_DEFAULT_API_KEY + "/snippets/"+technology+"/"+version+"/"+sort+"/"+searchFilde
        );
        setCodeSnippetItems(responseData);
      } catch (error) {
        console.log(error.messege);
      }
    };
    fetchSnippets();
  };

  return (
    <Fragment>
      <div className={classes.Code_Snippet_Page}>
        <h1>Keress a snippetek között</h1>
        <SearchForm onChangeHandeler={onSearch} />
        {isLoading && (
            <LoadingSpinner spinnerSize={90} />
        )}
        {!isLoading && <CodeSnippetList snippets={codeSnippetItems} />}
      </div>
      <WaveAnimation noMargin />
    </Fragment>
  );
}
export default CodeSnippet;
