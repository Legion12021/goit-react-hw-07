import { useDispatch, useSelector } from "react-redux";
import { updateFilter, getFilterValue } from "../../redux/filtersSlice";

import styles from "./SearchBox.module.css";

const FilterInput = () => {
  const dispatchAction = useDispatch();
  const currentFilter = useSelector(getFilterValue);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    dispatchAction(updateFilter(inputValue));
  };

  return (
    <label className={styles.filterWrapper}>
      <span className={styles.filterLabel}>Search contacts</span>
      <input
        className={styles.inputField}
        type="text"
        name="filterInput"
        placeholder="Enter name..."
        value={currentFilter}
        onChange={handleInputChange}
      />
    </label>
  );
};

export default FilterInput;
