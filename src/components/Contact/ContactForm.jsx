import { useState } from 'react';
import ContactFormHeading from './ContactFormHeading';
import InputBox from './InputBox';
import ContactSubmitBtn from './ContactSubmitBtn';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name || 'valued customer'}! Your message has been sent.`);
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <ContactFormHeading title="get in touch" />
      <InputBox
        icon="fas fa-user"
        type="text"
        placeholder="name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <InputBox
        icon="fas fa-envelope"
        type="email"
        placeholder="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <InputBox
        icon="fas fa-phone"
        type="tel"
        placeholder="number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <ContactSubmitBtn />
    </form>
  );
};

export default ContactForm;
