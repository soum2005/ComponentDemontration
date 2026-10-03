const Logo = ({ onLogoClick }) => {
  return (
    <a href="#home" className="logo" onClick={onLogoClick}>
      <img src="/image/pngegg.png" alt="Fast Food Logo" />
    </a>
  );
};

export default Logo;
