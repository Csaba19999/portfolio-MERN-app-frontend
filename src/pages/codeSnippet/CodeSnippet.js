import { Fragment, useEffect, useState } from "react";
import CodeSnippetList from "./components/CodeSnippets/CodeSnippetList";
import WaveAnimation from "../../shared/background/WaveAnimation";
import SearchForm from "../../shared/searchForm/SearchForm";
import classes from "./CodeSnippet.module.css";
import { useHttpClient } from "../../hooks/http-hook";
import LoadingSpinner from "../../shared/loadingSpinner/LoadingSpinner";
import { useDispatch } from "react-redux";
import { authCheck } from "../../store/auth/auth-slice";
import { useSelector } from "react-redux";


function CodeSnippet() {
  const [codeSnippetItems, setCodeSnippetItems] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useSelector((state) => state.auth);
  

  const onSearch = (searchParams) => {
    let id = auth.id ? auth.id : "none";
    const { technology, version, sort, searchFilde } = searchParams;
    const fetchSnippets = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_DEFAULT_API_KEY + "/snippets/"+technology+"/"+version+"/"+sort+"/"+searchFilde+"/"+id
        );
        setCodeSnippetItems(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSnippets();
  };

  const dispatch = useDispatch();

  const refreshAccessToken = async () => {
    if (localStorage.getItem("refresh_token") !== null) {
      const responseData = fetch(
        process.env.REACT_APP_BACKEND_AUTH_API_KEY + "/google/refresh_token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            refresh_token: localStorage.getItem("refresh_token"),
          }),
        }
      );
      const data = await (await responseData).json();
      dispatch(authCheck(data));
    }
  };

  useEffect(() => {
    refreshAccessToken();
  }, [codeSnippetItems]);

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
