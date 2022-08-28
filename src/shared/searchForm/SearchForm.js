import classes from "./SearchForm.module.css";

function SearchForm(props) {
  return (
    <div className={classes.Search_Form}>
      <form>
        <div className={classes.search_filde_box}>
          <label className={classes.lable} htmlFor="search">
            Keresés
          </label>
          <input
            name="search"
            className={classes.search_filde}
            type="text"
            placeholder="Search"
          />
        </div>
        <div className={classes.technology_box}>
          <label className={classes.lable} htmlFor="technology">
            language
          </label>
          <select
            className={classes.technology}
            name="technology"
            onChange={props.onChangeHandeler}
          >
            <option value="">minden</option>
            <option value="javascript">Javascript</option>
            <option value="react">React</option>
            <option value="redux">Redux</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
          </select>
        </div>
        <div className={classes.version_box}>
          <label className={classes.lable} htmlFor="version">
            verzió
          </label>
          <select
            className={classes.version}
            name="version"
            onChange={props.onChangeHandeler}
          >
            <option value="">minden</option>
            <option value="ES6">ES6</option>
            <option value="ES5">ES5</option>
          </select>
        </div>
        <div className={classes.favorite_box}>
          <label className={classes.lable} htmlFor="favorite">
            Rendezés
          </label>
          <select
            className={classes.favorite}
            name="favorite"
            onChange={props.onChangeHandeler}
          >
            <option value="">alap</option>
            <option value="ertekeles">értékelés</option>
            <option value="date">dátum</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
