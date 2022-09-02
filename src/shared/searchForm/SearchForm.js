import { useEffect, useState } from "react";
import { useHttpClient } from "../../hooks/http-hook";
import classes from "./SearchForm.module.css";

function SearchForm(props) {
  const [technology, setTechnology] = useState("none");
  const [version, setVersion] = useState("none");
  const [sort, setSort] = useState("none");
  const [searchFilde, setSearchFilde] = useState("none");
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedSearchParams, setLoadedSearchParams] = useState([]);
  const [loadedVersions, setLoadedVersions] = useState([]);

  useEffect(() => {
    const fetchSearchParams = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_DEFAULT_API_KEY + "/shearch_load"
        );
        setLoadedSearchParams(responseData);
      } catch (error) {
        console.log(error.messege);
      }
    };
    fetchSearchParams();
  }, [sendRequest]);

  const versionAndTechnology = () => {
    let versionsArray = [];
    loadedSearchParams.forEach((element) => {
      if (element.technology === technology) {
        element.versions.forEach((version) => {
          versionsArray.push(version);
        });
      }if (technology === "none") {
        setVersion("none");
      }
    });
    setLoadedVersions(versionsArray);
  };

  const onSearchFildeChange = (event) => {
    setSearchFilde(event.target.value);
  };
  const onTechnologyChange = (event) => {
    setTechnology(event.target.value);
  };
  const onVersionChange = (event) => {
    setVersion(event.target.value);
  };
  const onSortChange = (event) => {
    setSort(event.target.value);
  };

  useEffect(() => {
    const onSubmit = () => {
      props.onChangeHandeler({
        technology: technology,
        version: version,
        sort: sort,
        searchFilde: searchFilde || "none",
      });
    };
    onSubmit();
    versionAndTechnology();
  }, [technology, version, sort, searchFilde]);

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
            onChange={onSearchFildeChange}
          />
        </div>
        <div className={classes.technology_box}>
          <label className={classes.lable} htmlFor="technology">
            technológia
          </label>
          <select
            className={classes.technology}
            name="technology"
            onChange={onTechnologyChange}
          >
            <option value="none">minden</option>
            {loadedSearchParams.map((item) => (
              <option key={item.technology} value={item.technology}>
                {item.technology}
              </option>
            ))}
          </select>
        </div>
        <div className={classes.version_box}>
          <label className={classes.lable} htmlFor="version">
            verzió
          </label>
          <select
            className={classes.version}
            name="version"
            onChange={onVersionChange}
          >
            <option value="none">minden</option>
            {loadedVersions.map((item, index) => (
              <option key={item + "" + index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className={classes.favorite_box}>
          <label className={classes.lable} htmlFor="favorite">
            Rendezés
          </label>
          <select
            className={classes.favorite}
            name="favorite"
            onChange={onSortChange}
          >
            <option value="none">alap</option>
            <option value="ertekeles">értékelés</option>
            <option value="date">dátum</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
