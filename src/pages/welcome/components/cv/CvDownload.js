import classes from "./CvDownload.module.css";

function CvDownload(){
    return(
        <div className={classes.cv}>
            <a href='/somefile.txt' download>Önéletrajz letöltése</a>
        </div>
        
    );
}

export default CvDownload;