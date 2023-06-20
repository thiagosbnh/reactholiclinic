import React, { Component , useState } from 'react';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Email is not valid').required('Email is required'),
    phone: yup.string().matches(/^[0-9]*$/, 'Phone is not valid'),
    message: yup.string().required('Message is required'),
  });

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
  
    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePhoneChange = (e) => setPhone(e.target.value);
    const handleMessageChange = (e) => setMessage(e.target.value);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        await schema.validate({ name, email, phone, message }, { abortEarly: false });
        // TODO: Add email sending logic
      } catch (err) {
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      }
    };
    
  
    return (
        <>
        <div className="container d-flex justify-content-center p-5">
            <div className="col-sm-12 col-md-10 col-lg-9">
            <h1>Contact Us</h1>
            <p>We'll reply as soon as possible.</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={handleNameChange} />
                    {errors.name && <span style={{color: "red"}}>{errors.name}</span>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={handleEmailChange} />
                    {errors.email && <span style={{color: "red"}}>{errors.email}</span>}
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} />
                    {errors.phone && <span style={{color: "red"}}>{errors.phone}</span>}
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" value={message} onChange={handleMessageChange} />
                    {errors.message && <span style={{color: "red"}}>{errors.message}</span>}
                </div>
                <button type="submit" className="button-send">Submit</button>
            </form>
            </div>
        </div>
        <div className="container pb-5">
            <div className="row d-flex justify-content-center ">
              <div
                className="col-sm-12 col-md-10 col-lg-9 map-responsive"
                alt="Map Location"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.682897096189!2d-6.24518684831496!3d53.34893238211996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e8cd86e97e7%3A0x6d51b774ee7fa935!2sNational%20College%20of%20Ireland!5e0!3m2!1sen!2sie!4v1670428926701!5m2!1sen!2sie"
                  width={800}
                  height={270}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
        </div>
          </>
    );
  }
  
  export default ContactForm;