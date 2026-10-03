import SectionHeading from '../common/SectionHeading';
import AboutImage from './AboutImage';
import AboutContent from './AboutContent';

const About = () => {
  return (
    <section className="about" id="about">
      <SectionHeading title="about" highlight="us" />
      <div className="row">
        <AboutImage />
        <AboutContent />
      </div>
    </section>
  );
};

export default About;
