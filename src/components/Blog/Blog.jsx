import SectionHeading from '../common/SectionHeading';
import BlogCard from './BlogCard';

const blogPosts = [
  {
    id: 1,
    img: '/image/delicious-burger-on-wooden-board-2022-03-04-05-58-25-utc.jpg',
    title: 'how to make burgers',
    meta: 'by admin / 10st may, 2020',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus eos esse nesciunt cupiditate expedita.',
  },
  {
    id: 2,
    img: '/image/delicious-tasty-burgers-on-wooden-background-2021-08-26-15-25-13-utc.jpg',
    title: 'how to make burgers',
    meta: 'by admin / 10st may, 2020',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus eos esse nesciunt cupiditate expedita.',
  },
  {
    id: 3,
    img: '/image/handmade-burger-on-dark-background-delicious-blac-2021-10-21-02-27-27-utc.jpg',
    title: 'how to make burgers',
    meta: 'by admin / 10st may, 2020',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus eos esse nesciunt cupiditate expedita.',
  },
];

const Blog = () => {
  return (
    <section className="blog" id="blog">
      <SectionHeading title="our" highlight="blog" />
      <div className="box-container">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
