import Icon from '../atoms/Icon';

const SocialIcon = ({ icon, url, label }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" aria-label={label}>
      <Icon name={icon} />
    </a>
  );
};

export default SocialIcon;
