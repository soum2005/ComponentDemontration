import ReviewQuoteIcon from './ReviewQuoteIcon';
import ReviewText from './ReviewText';
import ReviewUserAvatar from './ReviewUserAvatar';
import ReviewUserName from './ReviewUserName';
import StarRating from '../common/StarRating';

const ReviewCard = ({ review }) => {
  return (
    <div className="box">
      <ReviewQuoteIcon />
      <ReviewText text={review.text} />
      <ReviewUserAvatar src={review.avatar} alt={review.name} />
      <ReviewUserName name={review.name} />
      <StarRating count={4} half={true} />
    </div>
  );
};

export default ReviewCard;
