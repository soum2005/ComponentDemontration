import AboutTitle from './AboutTitle';
import AboutParagraphs from './AboutParagraphs';
import AboutBtn from './AboutBtn';

const paragraphsData = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia officia id et, corrupti assumenda.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia officia id et, corrupti assumenda.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia officia id et, corrupti assumenda.',
];

const AboutContent = () => {
  return (
    <div className="content">
      <AboutTitle title="What is the secret receipe of our burgers" />
      <AboutParagraphs paragraphs={paragraphsData} />
      <AboutBtn />
    </div>
  );
};

export default AboutContent;
