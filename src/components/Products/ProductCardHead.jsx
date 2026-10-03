const ProductCardHead = ({ title, name }) => {
  return (
    <div className="box-head">
      <span className="title">{title}</span>
      <a href="#product-detail" className="name">
        {name}
      </a>
    </div>
  );
};

export default ProductCardHead;
