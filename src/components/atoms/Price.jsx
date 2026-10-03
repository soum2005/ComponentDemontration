const Price = ({ current, original, className = 'price' }) => {
  return (
    <div className={className}>
      {current} {original && <span>{original}</span>}
    </div>
  );
};

export default Price;
