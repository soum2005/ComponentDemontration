const ProductInfo = ({ price, amount }) => {
  return (
    <div className="info">
      <b className="price">{price}</b>
      <span className="amount">{amount}</span>
    </div>
  );
};

export default ProductInfo;
