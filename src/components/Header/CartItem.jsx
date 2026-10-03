import CartItemImage from './CartItemImage';
import CartItemContent from './CartItemContent';
import CartItemCloseBtn from './CartItemCloseBtn';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cart-item">
      <CartItemCloseBtn onRemove={() => onRemove(item.id)} />
      <CartItemImage src={item.img} alt={item.name} />
      <CartItemContent name={item.name} price={item.price} />
    </div>
  );
};

export default CartItem;
