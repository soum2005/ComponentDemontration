import Image from '../atoms/Image';

const ReviewUserAvatar = ({ src, alt }) => {
  return <Image src={src} alt={alt} className="user" />;
};

export default ReviewUserAvatar;
