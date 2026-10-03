import Image from '../atoms/Image';

const ProductCardImage = ({ img, name }) => {
  return (
    <div className="image">
      <Image src={img} alt={name} />
    </div>
  );
};

export default ProductCardImage;
