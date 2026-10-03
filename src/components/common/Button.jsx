const Button = ({ href = '#', text, className = '', onClick, type = 'link' }) => {
  if (type === 'submit') {
    return (
      <input type="submit" className={`btn ${className}`} value={text} onClick={onClick} />
    );
  }
  return (
    <a href={href} className={`btn ${className}`} onClick={onClick}>
      {text}
    </a>
  );
};

export default Button;
