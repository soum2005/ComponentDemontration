import FooterSearch from './FooterSearch';
import SocialLinks from '../common/SocialLinks';
import FooterLinks from './FooterLinks';
import FooterCredit from './FooterCredit';

const Footer = ({ onNavClick }) => {
  return (
    <section className="footer">
      <FooterSearch />
      <SocialLinks />
      <FooterLinks onLinkClick={onNavClick} />
      <FooterCredit />
    </section>
  );
};

export default Footer;
