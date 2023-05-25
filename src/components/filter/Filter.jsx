import { setFilter } from 'redux/filterSlice';
import { selectContactsFilter } from 'redux/selectors';

import { FilterWrapper, FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const filteredValue = useSelector(selectContactsFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterWrapper>
      <FilterLabel>
        Find contacts by name/number
        <FilterInput
          type="text"
          value={filteredValue}
          onChange={handleChangeFilter}
        />
      </FilterLabel>
    </FilterWrapper>
  );
};

export default Filter;
