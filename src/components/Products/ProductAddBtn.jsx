import Icon from '../atoms/Icon';

const ProductAddBtn = () => {
  return (
    <div className="product-btn">
      <a href="#add" title="Add to cart">
        <Icon name="fas fa-plus" />
      </a>
    </div>
  );
};

export default ProductAddBtn;
