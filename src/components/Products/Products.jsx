import SectionHeading from '../common/SectionHeading';
import ProductCard from './ProductCard';

const productItems = [
  {
    id: 1,
    title: 'mini burger',
    name: 'Bacon Burger',
    img: '/image/pngwing.com (6).png',
    price: '$6.00',
    amount: '110gr / 300 Cal',
  },
  {
    id: 2,
    title: 'cheese burger',
    name: 'cheese Burger',
    img: '/image/pngwing.com (4).png',
    price: '$12.00',
    amount: '140gr / 2500 Cal',
  },
  {
    id: 3,
    title: 'Double burger',
    name: 'Double Burger',
    img: '/image/pngwing.com (5).png',
    price: '$24.00',
    amount: '440gr / 600 Cal',
  },
];

const Products = () => {
  return (
    <section className="products" id="products">
      <SectionHeading title="our" highlight="products" />
      <div className="box-container">
        {productItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
