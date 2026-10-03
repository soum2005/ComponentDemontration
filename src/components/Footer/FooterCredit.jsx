const FooterCredit = ({ author = 'Nizami Sevindi' }) => {
  return (
    <div className="credit">
      created by <span>{author}</span> | all rights reserved!
    </div>
  );
};

export default FooterCredit;
