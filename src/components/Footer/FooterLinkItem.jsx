const FooterLinkItem = ({ link, onLinkClick }) => {
  return (
    <a
      href={`#${link}`}
      onClick={(e) => {
        if (onLinkClick) {
          onLinkClick(link, e);
        }
      }}
    >
      {link}
    </a>
  );
};

export default FooterLinkItem;
