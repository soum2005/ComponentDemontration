const AboutParagraphs = ({ paragraphs }) => {
  return (
    <div className="paragraph">
      {paragraphs.map((text, idx) => (
        <p key={idx}>{text}</p>
      ))}
    </div>
  );
};

export default AboutParagraphs;
