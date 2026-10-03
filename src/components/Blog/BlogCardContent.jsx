import BlogCardTitle from './BlogCardTitle';
import BlogCardMeta from './BlogCardMeta';
import BlogCardExcerpt from './BlogCardExcerpt';
import BlogCardReadBtn from './BlogCardReadBtn';

const BlogCardContent = ({ title, meta, desc }) => {
  return (
    <div className="content">
      <BlogCardTitle title={title} />
      <BlogCardMeta meta={meta} />
      <BlogCardExcerpt desc={desc} />
      <BlogCardReadBtn />
    </div>
  );
};

export default BlogCardContent;
