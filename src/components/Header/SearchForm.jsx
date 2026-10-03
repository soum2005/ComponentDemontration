import SearchInput from './SearchInput';
import Icon from '../atoms/Icon';

const SearchForm = ({ isActive }) => {
  return (
    <div className={`search-form ${isActive ? 'active' : ''}`}>
      <SearchInput />
      <Icon name="fas fa-search" />
    </div>
  );
};

export default SearchForm;
