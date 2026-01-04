import React from "react";
import "./SpecialEvents.css";

// ✅ Import images from assets
import guruPurnima from "../assets/photo25.jpg";
import satsangSamaroh from "../assets/photo28.jpg";
import mahaShivratri from "../assets/photo29.jpg";

const events = [
  {
    title: "गुरु पूर्णिमा महोत्सव",
    type: "भव्य उत्सव",
    date: "21 जुलाई 2025",
    location: "जय गुरुबंदे आश्रम, वाराणसी",
    image: guruPurnima,
    description:
      "गुरु पूर्णिमा महोत्सव सद्गुरु के प्रति समर्पित एक पावन अवसर है। इस दिन हजारों श्रद्धालु एकत्र होकर दिव्य दर्शन एवं आशीर्वाद प्राप्त करते हैं।",
    highlights: [
      "विशेष गुरु वंदना",
      "दिव्य सत्संग",
      "भजन एवं कीर्तन",
      "महाप्रसाद सेवा",
    ],
  },
  {
    title: "वार्षिक सत्संग समारोह",
    type: "वार्षिक आयोजन",
    date: "12 अक्टूबर 2025",
    location: "मुख्य आश्रम प्रांगण",
    image: satsangSamaroh,
    description:
      "वार्षिक सत्संग समारोह देशभर से आए श्रद्धालुओं को आध्यात्मिक प्रवचनों, सांस्कृतिक कार्यक्रमों एवं सामूहिक ध्यान के माध्यम से एक सूत्र में बाँधता है।",
    highlights: [
      "आध्यात्मिक प्रवचन",
      "भक्त अनुभव साझा",
      "सांस्कृतिक कार्यक्रम",
      "सामूहिक सेवा",
    ],
  },
  {
    title: "महाशिवरात्रि महोत्सव",
    type: "रात्रि जागरण उत्सव",
    date: "8 मार्च 2026",
    location: "जय गुरुबंदे आश्रम",
    image: mahaShivratri,
    description:
      "महाशिवरात्रि भगवान शिव की आराधना में रात्रि भर भजन, ध्यान एवं गहन आध्यात्मिक मौन के साथ श्रद्धापूर्वक मनाई जाती है।",
    highlights: [
      "रात्रि भर भजन",
      "ध्यान सत्र",
      "रुद्राभिषेक",
      "आध्यात्मिक मौन",
    ],
  },
];

const SpecialEvents = () => {
  return (
    <section className="special-events-page">
      {/* ===== HERO ===== */}
      <div className="special-events-hero">
        <h1>विशेष आयोजन ✨</h1>
        <p>
          प्रमुख पर्व, भव्य उत्सव एवं आध्यात्मिक रूप से परिवर्तनकारी अवसर
        </p>
      </div>

      {/* ===== EVENTS ===== */}
      <div className="special-events-container">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            {/* IMAGE */}
            <div className="event-image">
              <img src={event.image} alt={event.title} />
              <span className="event-badge">{event.type}</span>
            </div>

            {/* CONTENT */}
            <div className="event-content">
              <h2>{event.title}</h2>
              <p className="event-date">📅 {event.date}</p>
              <p className="event-location">📍 {event.location}</p>

              <p className="event-desc">{event.description}</p>

              <div className="event-highlights">
                <h4>✨ मुख्य आकर्षण</h4>
                <ul>
                  {event.highlights.map((item, i) => (
                    <li key={i}>🕉 {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialEvents;
