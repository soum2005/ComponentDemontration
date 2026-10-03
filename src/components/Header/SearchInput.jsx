import InputField from '../atoms/InputField';

const SearchInput = ({ value, onChange }) => {
  return (
    <InputField
      type="text"
      className="search-input"
      id="search-box"
      placeholder="Search..."
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchInput;
