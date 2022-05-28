import styles from "../../styles/History.module.css";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";

import { sethistorySearch } from "../../redux/slices/history";

const SearchBar = () => {
  const dispatch = useDispatch();

  const historySearch = useSelector(
    (state: RootState) => state.history.historySearch
  );

  const handleChangehistorySearch = (e: any) => {
    dispatch(sethistorySearch(e.target.value));
  };

  return (
    <>
      <div className={styles.searchBar}>
        <input
          className={styles.searchBarInput}
          type="search"
          id="history-search"
          name="history"
          placeholder="Rechercher le numéro..."
          aria-label="Search through history content"
          value={historySearch ? historySearch : ""}
          onChange={handleChangehistorySearch}
        />
      </div>
    </>
  );
};

export default SearchBar;
