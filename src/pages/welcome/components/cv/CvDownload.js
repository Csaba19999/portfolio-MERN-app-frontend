import classes from "./CvDownload.module.css";

function CvDownload(props) {
  return (
    <div className={classes.cv}>
      <a
        href="https://drive.google.com/uc?export=download&id=1XfmhVTsv_-n5RXqwtLbtfRFfgIawRqdt"
        download
      >
        Önéletrajz letöltése
      </a>
    </div>
  );
}

export default CvDownload;
