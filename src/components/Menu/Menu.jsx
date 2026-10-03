import SectionHeading from '../common/SectionHeading';
import MenuCard from './MenuCard';

const menuItems = [
  {
    id: 1,
    img: '/image/pngwing.com.png',
    category: 'Pizza',
    name: '6 Mini Pizzas',
    price: '$104.99',
    oldPrice: '$119.99',
  },
  {
    id: 2,
    img: '/image/pngwing.com (2).png',
    category: 'Burger',
    name: '5 Mini Burgers',
    price: '$99.99',
    oldPrice: '$105.99',
  },
  {
    id: 3,
    img: '/image/pngwing.com (1).png',
    category: 'Pizza',
    name: '2 Mixed Pizzas',
    price: '$49.99',
    oldPrice: '$59.99',
  },
  {
    id: 4,
    img: '/image/pngwing.com (3).png',
    category: 'Burger',
    name: '3 Meatball Burgers',
    price: '$79.99',
    oldPrice: '$99.99',
  },
];

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <SectionHeading title="our" highlight="menu" />
      <div className="box-container">
        {menuItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Menu;
