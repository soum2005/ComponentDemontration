import BlogCardImage from './BlogCardImage';
import BlogCardContent from './BlogCardContent';

const BlogCard = ({ post }) => {
  return (
    <div className="box-full">
      <BlogCardImage img={post.img} title={post.title} />
      <BlogCardContent
        title={post.title}
        meta={post.meta}
        desc={post.desc}
      />
    </div>
  );
};

export default BlogCard;
