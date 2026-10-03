import Icon from '../atoms/Icon';

const CartItemCloseBtn = ({ onRemove }) => {
  return <Icon name="fas fa-times" onClick={onRemove} />;
};

export default CartItemCloseBtn;
