import { useState } from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import NavButtons from './NavButtons';
import SearchForm from './SearchForm';
import CartContainer from './CartContainer';

const Header = ({ activeSection = 'home', onNavClick }) => {
  const [searchActive, setSearchActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'cart item 01', price: '$15.99', img: '/image/pngwing.com (1).png' },
    { id: 2, name: 'cart item 02', price: '$16.99', img: '/image/pngwing.com (2).png' },
    { id: 3, name: 'cart item 03', price: '$13.99', img: '/image/pngwing.com (3).png' },
    { id: 4, name: 'cart item 04', price: '$12.99', img: '/image/pngwing.com (4).png' },
  ]);

  const handleToggleSearch = () => {
    setSearchActive((prev) => !prev);
    setCartActive(false);
    setMenuActive(false);
  };

  const handleToggleCart = () => {
    setCartActive((prev) => !prev);
    setSearchActive(false);
    setMenuActive(false);
  };

  const handleToggleMenu = () => {
    setMenuActive((prev) => !prev);
    setSearchActive(false);
    setCartActive(false);
  };

  const handleRemoveCartItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleNavLinkClick = (id, e) => {
    setMenuActive(false);
    if (onNavClick) {
      onNavClick(id, e);
    }
  };

  return (
    <header className="header">
      <Logo onLogoClick={(e) => handleNavLinkClick('home', e)} />
      
      <Navbar
        activeSection={activeSection}
        menuActive={menuActive}
        onNavLinkClick={handleNavLinkClick}
      />

      <NavButtons
        onToggleSearch={handleToggleSearch}
        onToggleCart={handleToggleCart}
        onToggleMenu={handleToggleMenu}
      />

      <SearchForm isActive={searchActive} />

      <CartContainer
        isActive={cartActive}
        cartItems={cartItems}
        onRemoveItem={handleRemoveCartItem}
      />
    </header>
  );
};

export default Header;
