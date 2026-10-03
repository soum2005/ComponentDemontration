import ProductInfo from './ProductInfo';
import ProductAddBtn from './ProductAddBtn';

const ProductCardBottom = ({ price, amount }) => {
  return (
    <div className="box-bottom">
      <ProductInfo price={price} amount={amount} />
      <ProductAddBtn />
    </div>
  );
};

export default ProductCardBottom;
