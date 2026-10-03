import Image from '../atoms/Image';

const BlogCardImage = ({ img, title }) => {
  return (
    <div className="image">
      <Image src={img} alt={title} />
    </div>
  );
};

export default BlogCardImage;
