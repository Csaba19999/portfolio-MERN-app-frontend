import { useParams } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as CodeStyle } from "react-syntax-highlighter/dist/cjs/styles/prism";
import LikeSystem from "../../shared/likeSystem/LikeSystem";
import classes from "./CodeSnippetView.module.css";
import Card from "../../shared/overlay/Card";
import FavoriteSystem from "../../shared/FavoriteSystem/FavoriteSystem";
import { Fragment, useEffect, useState } from "react";
import { useHttpClient } from "../../hooks/http-hook";
import LoadingSpinner from "../../shared/loadingSpinner/LoadingSpinner";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

function CodeSnippetView() {
  const { id } = useParams();
  const [codeSnippet, setCodeSnippet] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const user = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchSnippet = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_DEFAULT_API_KEY + "/snippets/" + id
        );
        setCodeSnippet(responseData);
      } catch (error) {
        console.log(error.messege);
      }
    };
    fetchSnippet();
  }, []);
  const onHearthLikeChanges = async () => {
    try {
      const likechange = async () => {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            snippetId: id,
            userId: user.id,
          }),
        };

        const endpoint =
          process.env.REACT_APP_BACKEND_DEFAULT_API_KEY + "/like"; ///change to env
        const response = await fetch(endpoint, options);
      };
      likechange();
    } catch (error) {
      console.log(error);
    }
  };
  const onFavoriteChanges = async () => {
    try {
      const favoriteChange = async () => {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            snippetId: id,
            userId: user.id,
          }),
        };

        const endpoint =
          process.env.REACT_APP_BACKEND_DEFAULT_API_KEY + "/favorite"; ///change to env
        const response = await fetch(endpoint, options);
      };
      favoriteChange();
    } catch (error) {
      console.log(error);
    }
  };

  const callToast = () => {
    toast.error("jelentekezz be");
  };

  return (
    <div className={classes.Code_Snippet_View}>
      <Toaster position="top-left" />
      {isLoading && !codeSnippet && <LoadingSpinner spinnerSize={90} />}
      {!isLoading && codeSnippet && (
        <Fragment>
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
            <p className={classes.description}>{codeSnippet.description}</p>
            <div className={classes.like_box}>
              <FavoriteSystem
                id={id}
                onClickHandeler={user.isAuthenticated ? onFavoriteChanges : callToast}
                color="black"
              />
              <LikeSystem
                id={id}
                onClickHandeler={user.isAuthenticated ? onHearthLikeChanges : callToast}
                likes={codeSnippet.likes}
                color="black"
              />
            </div>
            <p className={classes.date}>k??zz??t??tel: {codeSnippet.date}</p>
          </Card>
        </Fragment>
      )}
    </div>
  );
}

export default CodeSnippetView;
