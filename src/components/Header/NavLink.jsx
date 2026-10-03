const NavLink = ({ id, label, isActive, onClick }) => {
  return (
    <a
      href={`#${id}`}
      className={isActive ? 'active' : ''}
      onClick={(e) => onClick(id, e)}
    >
      {label}
    </a>
  );
};

export default NavLink;
