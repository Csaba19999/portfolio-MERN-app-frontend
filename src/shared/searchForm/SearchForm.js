import classes from "./SearchForm.module.css";

function SearchForm(props) {
  return (
    <div className={classes.Search_Form}>
      <form>
        <div className={classes.search_filde_box}>
          <input className={classes.search_filde} type="text" placeholder="Search" />
        </div>
        <select className={classes.technology} name="technology" onChange={props.onChangeHandeler}>
          <option value="">minden</option>
          <option value="javascript">Javascript</option>
          <option value="react">React</option>
          <option value="redux">Redux</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
        </select>
        <select className={classes.version} name="version" onChange={props.onChangeHandeler}>
          <option value="">minden</option>
          <option value="ES6">ES6</option>
          <option value="ES5">ES5</option>
        </select>
      </form>
    </div>
  );
}

export default SearchForm;
