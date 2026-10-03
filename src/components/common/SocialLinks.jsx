import SocialIcon from './SocialIcon';

const socialList = [
  { icon: 'fab fa-facebook', url: 'https://facebook.com', label: 'Facebook' },
  { icon: 'fab fa-twitter', url: 'https://twitter.com', label: 'Twitter' },
  { icon: 'fab fa-instagram', url: 'https://instagram.com', label: 'Instagram' },
  { icon: 'fab fa-linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: 'fab fa-pinterest', url: 'https://pinterest.com', label: 'Pinterest' },
];

const SocialLinks = () => {
  return (
    <div className="share">
      {socialList.map((item, idx) => (
        <SocialIcon
          key={idx}
          icon={item.icon}
          url={item.url}
          label={item.label}
        />
      ))}
    </div>
  );
};

export default SocialLinks;
