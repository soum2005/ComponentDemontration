import Image from '../atoms/Image';
import Badge from '../atoms/Badge';
import Price from '../atoms/Price';

const MenuCardHead = ({ img, category, name, price, oldPrice }) => {
  return (
    <div className="box-head">
      <Image src={img} alt={name} />
      <Badge text={category} className="menu-category" />
      <h3>{name}</h3>
      <Price current={price} original={oldPrice} />
    </div>
  );
};

export default MenuCardHead;
