import classes from "./SearchForm.module.css";

function SearchForm(props) {
  return (
    <div className={classes.Search_Form}>
      <form>
        <input className={classes.search_filde} type="text" placeholder="Search" />
        <select className={classes.technology} name="technology" onChange={props.onChangeHandeler}>
          <option value="">minden</option>
          <option value="javascript">Javascript</option>
          <option value="react">React</option>
          <option value="redux">Redux</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
        </select>
        <select className={classes.version} name="technology" onChange={props.onChangeHandeler}>
          <option value="">minden</option>
          <option value="javascript">Javascript</option>
          <option value="react">React</option>
          <option value="redux">Redux</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
        </select>
      </form>
    </div>
  );
}

export default SearchForm;
