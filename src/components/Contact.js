import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'hello',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send the form data to your server or handle it as needed.
    // For this example, we'll just simulate a success message.
    // Simulate a success toast notification
    toast.success("Your message was sent successfully. Thank you!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <>
      <div id="contact-form">
        <div>
          <h1>Nice to Meet You!</h1>
          <h4>Have a question or just want to get in touch? Let's chat.</h4>
        </div>

        <form method="post" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">
              <span className="required">Name: </span>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder="Your Name"
                required="required"
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              <span className="required">Email: </span>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="Your Email"
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="subject">
              <span>Subject: </span>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
              >
                <option value="hello">Product Price Question</option>
                <option value="quote">Where are my dragons?!</option>
                <option value="general">- Valar Morghulis -</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="message">
              <span className="required">Message: </span>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                placeholder="Please write your message here."
                onChange={handleInputChange}
              ></textarea>
            </label>
          </div>
          <div>
            <button className="btn btn-primary" name="submit" type="submit" id="submit">
              SEND
            </button>
          </div>
        </form>
      </div>

      <ToastContainer />
    </>
  );
}
