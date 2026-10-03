import SectionHeading from '../common/SectionHeading';
import Map from './Map';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <SectionHeading title="contact" highlight="us" />
      <div className="row">
        <Map />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
