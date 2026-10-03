const BlogCardTitle = ({ title, href = '#blog-detail' }) => {
  return (
    <a href={href} className="title">
      {title}
    </a>
  );
};

export default BlogCardTitle;
