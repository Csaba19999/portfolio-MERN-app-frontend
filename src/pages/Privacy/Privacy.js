import classes from "./Privacy.module.css";

function Privacy() {
  return (
    <div className={classes.privacy}>
      <h1>Adatvédelmi nyilatkozat</h1>
      <p>
        Az adatvédelmi nyilatkozat célja, hogy tájékoztassa Önt arról, hogy
        milyen adatokat gyűjtünk, hogyan használjuk fel ezeket az adatokat, és
        hogy milyen jogai vannak azokkal kapcsolatban.
      </p>
      <h2>1. Az adatkezelő</h2>
      <p>
        Az adatkezelő a <b>Weboldal</b> tulajdonosa, aki a weboldal
        használatával kapcsolatos adatokat kezeli. valamint tárolja.
      </p>
      <h2>2. Az adatkezelés célja</h2>
      <p>
        Az adatkezelés célja a weboldal használatával kapcsolatos adatok
        eltárolása valamint felhasználása.
      </p>
      <h2>3. Az adatok felhasználása</h2>
      <p>
        Csupán az email címet tárolja az alkalmazás szerveren, authentikáció céljából.
      </p>
      <h2>3. Az adatkezelés jogalapja</h2>
      <p>
        Az adatkezelés jogalapja a weboldal használatával kapcsolatos adatok
        eltárolása valamint felhasználása.
      </p>
      <h2>4. Az adatkezelés időtartama</h2>
      <p>
        Az adatkezelés időtartama a weboldal használatával kapcsolatos adatok
        eltárolása valamint felhasználása.
      </p>
    </div>
  );
}

export default Privacy;
