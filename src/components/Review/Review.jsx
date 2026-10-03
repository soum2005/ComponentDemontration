import SectionHeading from '../common/SectionHeading';
import ReviewCard from './ReviewCard';

const reviews = [
  {
    id: 1,
    text: 'Dicta totam suscipit vero praesentium excepturi facilis, fuga at architecto dolor tempora molestias quam dignissimos sit. Molestiae temporibus ratione quas placeat possimus!',
    avatar: '/image/pngwing.com (9).png',
    name: 'Patrick Hellinger',
  },
  {
    id: 2,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga at architecto dolor tempora molestias quam dignissimos sit. Molestiae temporibus ratione quas placeat possimus!',
    avatar: '/image/pngwing.com (10).png',
    name: 'Serena Williams',
  },
  {
    id: 3,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta totam suscipit vero praesentium excepturi facilis, fuga at architecto dolor tempora molestias quam dignissimos possimus!',
    avatar: '/image/pngwing.com (11).png',
    name: 'Helen Marksen',
  },
];

const Review = () => {
  return (
    <section className="review" id="review">
      <SectionHeading title="customer's" highlight="review" />
      <div className="box-container">
        {reviews.map((rev) => (
          <ReviewCard key={rev.id} review={rev} />
        ))}
      </div>
    </section>
  );
};

export default Review;
