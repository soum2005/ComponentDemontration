import NavLink from './NavLink';

const navLinks = [
  { id: 'home', label: 'home' },
  { id: 'about', label: 'about' },
  { id: 'menu', label: 'menu' },
  { id: 'products', label: 'products' },
  { id: 'review', label: 'review' },
  { id: 'contact', label: 'contact' },
  { id: 'blog', label: 'blog' },
];

const Navbar = ({ activeSection, menuActive, onNavLinkClick }) => {
  return (
    <nav className={`navbar ${menuActive ? 'active' : ''}`}>
      {navLinks.map((link) => (
        <NavLink
          key={link.id}
          id={link.id}
          label={link.label}
          isActive={activeSection === link.id}
          onClick={onNavLinkClick}
        />
      ))}
    </nav>
  );
};

export default Navbar;
