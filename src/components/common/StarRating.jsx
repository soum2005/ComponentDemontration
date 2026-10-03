const StarRating = ({ count = 4, half = true }) => {
  return (
    <div className="stars">
      {Array.from({ length: count }).map((_, idx) => (
        <i key={idx} className="fas fa-star"></i>
      ))}
      {half && <i className="fas fa-star-half-alt"></i>}
    </div>
  );
};

export default StarRating;
