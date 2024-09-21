import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/filterSlice';
import css from "./SearchBox.module.css";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const showFilteredContacts = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <div>
      <label className={css.labelSearch}>
      <span>Find contacts by name</span>
      <input
          type="text"
          value={filter}
          onChange={showFilteredContacts}
          className={css.inputSearch}
        />
      </label>
    </div>
  );

};

export default SearchBox;
