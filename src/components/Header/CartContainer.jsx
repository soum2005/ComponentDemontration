import CartItem from './CartItem';
import CartEmptyMessage from './CartEmptyMessage';
import CartCheckoutBtn from './CartCheckoutBtn';

const CartContainer = ({ isActive, cartItems, onRemoveItem }) => {
  return (
    <div className={`cart-items-container ${isActive ? 'active' : ''}`}>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <CartItem key={item.id} item={item} onRemove={onRemoveItem} />
        ))
      ) : (
        <CartEmptyMessage />
      )}
      <CartCheckoutBtn />
    </div>
  );
};

export default CartContainer;
