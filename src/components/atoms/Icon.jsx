const Icon = ({ name, className = '', onClick }) => {
  return <i className={`${name} ${className}`} onClick={onClick}></i>;
};

export default Icon;
