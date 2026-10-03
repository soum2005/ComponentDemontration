import NavButton from './NavButton';

const NavButtons = ({ onToggleSearch, onToggleCart, onToggleMenu }) => {
  return (
    <div className="buttons">
      <NavButton
        id="search-btn"
        iconName="fas fa-search"
        onClick={onToggleSearch}
        title="Toggle Search"
      />
      <NavButton
        id="cart-btn"
        iconName="fas fa-shopping-cart"
        onClick={onToggleCart}
        title="Toggle Cart"
      />
      <NavButton
        id="menu-btn"
        iconName="fas fa-bars"
        onClick={onToggleMenu}
        title="Toggle Menu"
      />
    </div>
  );
};

export default NavButtons;
