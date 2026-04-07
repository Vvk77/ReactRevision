import React, { useState } from "react";


const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();


    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    console.log("📩 New Message Received:");
    console.log("Name:", form.name);
    console.log("Email:", form.email);
    console.log("Message:", form.message);

   
    setSuccess("Message sent successfully ✅");

    // reset form
    setForm({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => setSuccess(""), 2000);
  };

  return (
    <div className="contact">

  
      {success && <div className="toast">{success}</div>}

      <div className="contact-hero">
        <h1>Contact Us 📞</h1>
        <p>We’d love to hear from you!</p>
      </div>

      <div className="contact-container">

 
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>📞 +91 9074488601</p>
          <p>📧 support@ahara.com</p>
          <p>📍 Indore, MP</p>
        </div>

        {/* RIGHT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send Message</h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit">Send Message</button>
        </form>

      </div>
    </div>
  );
};

export default Contact;