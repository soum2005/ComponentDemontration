const SectionHeading = ({ title, highlight }) => {
  return (
    <h1 className="heading">
      {title} <span>{highlight}</span>
    </h1>
  );
};

export default SectionHeading;
