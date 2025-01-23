import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";
import { selectNamefilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const searchId = useId();
  const dispatch = useDispatch();
  const value = useSelector(selectNamefilter);

  const onFilter = (e) => dispatch(changeFilter(e.target.value));

  return (
    <div className={s.searchContainer}>
      <label className={s.searchLabel} htmlFor={searchId}>
        Find contacts by name
      </label>
      <input
        onChange={(e) => onFilter(e.target.value)}
        className={s.searchInput}
        id={searchId}
        type="search"
        inputMode="search"
        value={value}
      />
    </div>
  );
};

export default SearchBox;
