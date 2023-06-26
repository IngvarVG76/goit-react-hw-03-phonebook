import {FilterSection, FilterLabel, FilterInput} from './Filter.styled'

const Filter = ({ value, onChange }) => {
  return (
    <FilterSection>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        name="filter"
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
    </FilterSection>
  );
};

export default Filter;
