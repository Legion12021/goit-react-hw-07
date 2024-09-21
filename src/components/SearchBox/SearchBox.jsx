import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filterSlice';
import css from "./SearchBox.module.css";


const SearchBox = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };

  return (
    <div>
    <label className={css.labelSearch}>
    <span>Find contacts by name</span>
    <input
        type="text"
        value={value}
        onChange={onChange}
        className={css.inputSearch}
      />
    </label>
  </div>
  );
};

export default SearchBox;


