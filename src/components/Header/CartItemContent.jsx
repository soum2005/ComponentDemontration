import Price from '../atoms/Price';

const CartItemContent = ({ name, price }) => {
  return (
    <div className="content">
      <h3>{name}</h3>
      <Price current={price} />
    </div>
  );
};

export default CartItemContent;
