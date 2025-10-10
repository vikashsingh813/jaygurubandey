import React, { useState, useEffect } from 'react';
import './CommitteeMembers.css';
import member1Image from '../assets/photo5.jpg';
import member2Image from '../assets/photo6.jpg';
import member3Image from '../assets/photo5.jpg';
import member4Image from '../assets/photo6.jpg';
import member5Image from '../assets/photo5.jpg';
import member6Image from '../assets/photo6.jpg';

const members = [
  { name: "श्री गुरु प्रकाश जी", role: "संस्थापक एवं प्रमुख", phone: "+91 98765 43210", email: "guruprakash@example.com", image: member1Image },
  { name: "श्री सदस्य 2", role: "सह-संस्थापक", phone: "+91 91234 56789", email: "member2@example.com", image: member2Image },
  { name: "श्री सदस्य 3", role: "सचिव", phone: "+91 99887 66554", email: "member3@example.com", image: member3Image },
  { name: "श्री सदस्य 4", role: "कोषाध्यक्ष", phone: "+91 90123 45678", email: "member4@example.com", image: member4Image },
  { name: "श्री सदस्य 5", role: "इवेंट समन्वयक", phone: "+91 92345 67890", email: "member5@example.com", image: member5Image },
  { name: "श्री सदस्य 6", role: "स्वयंसेवक प्रमुख", phone: "+91 93456 78901", email: "member6@example.com", image: member6Image },
  { name: "श्री सदस्य 7", role: "सामुदायिक संपर्क", phone: "+91 94567 89012", email: "member7@example.com", image: member1Image },
  { name: "श्री सदस्य 8", role: "सांस्कृतिक समन्वयक", phone: "+91 95678 90123", email: "member8@example.com", image: member2Image },
  { name: "श्री सदस्य 9", role: "तकनीकी सहायता", phone: "+91 96789 01234", email: "member9@example.com", image: member3Image },
  { name: "श्री सदस्य 10", role: "सार्वजनिक संबंध", phone: "+91 97890 12345", email: "member10@example.com", image: member4Image },
];

const CommitteeMembers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [animate, setAnimate] = useState(false);
  const cardsPerPage = 6;

  const totalPages = Math.ceil(members.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentMembers = members.slice(indexOfFirstCard, indexOfLastCard);

  const goToNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 500);
      return () => clearTimeout(timer);
    }, 200);
    return () => clearTimeout(delay);
  }, [currentPage]);

  return (
    <div className="committee-container">
      <h1 className="committee-title">समिति सदस्य</h1>
      <p className="committee-subtitle">🪔 सेवा और समर्पण के लिए समर्पित 🪔</p>

      <div className={`members-wrapper ${animate ? 'fade-page' : ''}`}>
        {currentMembers.map((member, index) => (
          <div className="member-card" key={index}>
            <img src={member.image} alt={member.name} className="member-photo" />
            <h2 className="member-name"><strong>नाम :</strong> {member.name}</h2>
            <p className="member-role"><strong>पद :</strong> {member.role}</p>
            <p className="member-phone"><strong>फ़ोन :</strong> {member.phone}</p>
            <p className="member-email"><strong>ईमेल :</strong> {member.email}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button className="page-btn" onClick={goToPrev} disabled={currentPage === 1}>
          ← पिछला
        </button>
        <span className="page-info">
          पृष्ठ {currentPage} / {totalPages}
        </span>
        <button className="page-btn" onClick={goToNext} disabled={currentPage === totalPages}>
          अगला →
        </button>
      </div>
    </div>
  );
};

export default CommitteeMembers;
