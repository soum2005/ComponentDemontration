import MenuCardHead from './MenuCardHead';
import MenuCardBottom from './MenuCardBottom';

const MenuCard = ({ item }) => {
  return (
    <div className="box">
      <MenuCardHead
        img={item.img}
        category={item.category}
        name={item.name}
        price={item.price}
        oldPrice={item.oldPrice}
      />
      <MenuCardBottom />
    </div>
  );
};

export default MenuCard;
