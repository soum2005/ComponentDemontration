import Button from '../common/Button';

const BlogCardReadBtn = ({ href = '#blog-detail' }) => {
  return <Button href={href} text="read more" />;
};

export default BlogCardReadBtn;
