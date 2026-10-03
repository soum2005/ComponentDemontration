import ProductCardHead from './ProductCardHead';
import ProductCardImage from './ProductCardImage';
import ProductCardBottom from './ProductCardBottom';

const ProductCard = ({ product }) => {
  return (
    <div className="box">
      <ProductCardHead title={product.title} name={product.name} />
      <ProductCardImage img={product.img} name={product.name} />
      <ProductCardBottom price={product.price} amount={product.amount} />
    </div>
  );
};

export default ProductCard;
