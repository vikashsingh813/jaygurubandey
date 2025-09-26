import React, { useState } from "react";
import "./Contact.css";
import ashramImg from "../assets/vision.jpg"; 
import gurujiImg from "../assets/guruji.jpg"; // 2nd card image

const ContactUs = () => {
  // Array of contact cards
  const contacts = [
    {
      id: 1,
      image: ashramImg,
      name: "श्री गुरु आश्रम",
      email: "info@guruashram.org",
      contact: "+91 98765 43210",
      location: "हैदराबाद, तेलंगाना, भारत",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1226247826625!2d78.48667131487763!3d17.38504498807361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9758eae1d8f5%3A0xdeb7c5a0d8e40e3f!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1696428738281!5m2!1sen!2sin"
    },
    {
      id: 2,
      image: gurujiImg,
      name: "दिव्य आध्यात्मिक केंद्र",
      email: "divine@guruashram.org",
      contact: "+91 99876 54321",
      location: "वाराणसी, उत्तर प्रदेश, भारत",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.1014224534327!2d83.00266631488045!3d25.317645983819923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e2dffb9a33d%3A0xb13e9b3d1af2ff0!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1696429000000!5m2!1sen!2sin"
    }
  ];

  // Pagination
  const [page, setPage] = useState(1);
  const totalPages = contacts.length;

  const currentContact = contacts[page - 1];

  return (
    <div className="contact-container">
      <h1 className="contact-title">संपर्क करें</h1>

      <div className="contact-card">
        <img src={currentContact.image} alt="Ashram" className="contact-image" />

        <div className="contact-details">
          <p><strong>आश्रम का नाम:</strong> {currentContact.name}</p>
          <p><strong>ईमेल आईडी:</strong> {currentContact.email}</p>
          <p><strong>संपर्क नंबर:</strong> {currentContact.contact}</p>
          <p><strong>स्थान:</strong> {currentContact.location}</p>

          <div className="map-box">
            <h3 className="map-title">हमें यहाँ खोजें</h3>
            <iframe
              title="Google Map Location"
              src={currentContact.map}
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

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          ⬅ पिछला
        </button>
        <span>पृष्ठ {page} / {totalPages}</span>
        <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
          अगला ➡
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
