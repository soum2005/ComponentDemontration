import Icon from '../atoms/Icon';

const NavButton = ({ id, iconName, onClick, title }) => {
  return (
    <button id={id} onClick={onClick} title={title}>
      <Icon name={iconName} />
    </button>
  );
};

export default NavButton;
