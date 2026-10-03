import HeroTitle from './HeroTitle';
import HeroDescription from './HeroDescription';
import HeroOrderBtn from './HeroOrderBtn';

const HeroContent = () => {
  return (
    <div className="content">
      <HeroTitle title="Fast Food Delivery" />
      <HeroDescription text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt perferendis obcaecati iste voluptatum, quaerat nihil magnam numquam sint?" />
      <HeroOrderBtn />
    </div>
  );
};

export default HeroContent;
