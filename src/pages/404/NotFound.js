import classes from "./NotFound.module.css";

function NotFound(){
    return(
        <div className={classes.notFound}>
            <h1>404 - Page not found.</h1>
            <h4>Sajnos nincs semmi látni való!</h4>
            <img src="./images/icons/notfound.png" alt="error not found" />
        </div>
        
    );
}

export default NotFound;