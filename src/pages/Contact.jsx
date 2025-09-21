import React from "react";
import "./Contact.css";
import ashramImg from "../assets/vision.jpg"; // replace with your actual image path

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">हमसे संपर्क करें</h1>

      <div className="contact-card">
        <img src={ashramImg} alt="Ashram" className="contact-image" />

        <div className="contact-details">
          <p><strong>आश्रम का नाम :</strong> श्री गुरु आश्रम</p>
          <p><strong>ईमेल आईडी :</strong> info@guruashram.org</p>
          <p><strong>संपर्क नंबर :</strong> +91 9876543210</p>
          <p><strong>स्थान :</strong> हैदराबाद, तेलंगाना, भारत</p>

          <div className="map-box">
            <h3 className="map-title">हमें खोजें</h3>
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1226247826625!2d78.48667131487763!3d17.38504498807361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9758eae1d8f5%3A0xdeb7c5a0d8e40e3f!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1696428738281!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: "0", borderRadius: "10px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
