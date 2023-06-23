

const Filter = ({ value, onChange }) => {
    return (
      <div>
        <label htmlFor="filter">Find contacts by name</label>
        <input
          type="text"
          name="filter"
          placeholder="Search"
          value={value}
          onChange={onChange}
        />
      </div>
    );
};

export default Filter;

