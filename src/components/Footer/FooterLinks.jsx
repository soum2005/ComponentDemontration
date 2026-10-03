import FooterLinkItem from './FooterLinkItem';

const links = ['home', 'about', 'menu', 'products', 'review', 'contact', 'blog'];

const FooterLinks = ({ onLinkClick }) => {
  return (
    <div className="links">
      {links.map((link) => (
        <FooterLinkItem
          key={link}
          link={link}
          onLinkClick={onLinkClick}
        />
      ))}
    </div>
  );
};

export default FooterLinks;
