import FooterSearchInput from './FooterSearchInput';
import FooterSearchBtn from './FooterSearchBtn';

const FooterSearch = () => {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <form className="search" onSubmit={handleSearch}>
      <FooterSearchInput />
      <FooterSearchBtn />
    </form>
  );
};

export default FooterSearch;
