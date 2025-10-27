import React, { useState, useEffect } from "react";
import "./LatestUpdates.css";
import guruji1 from "../assets/guruji.jpg";
import photo16 from "../assets/photo16.jpg";
import photo19 from "../assets/photo19.jpg";

const updates = [
  {
    id: 1,
    title: "नई पुस्तक प्रकाशन",
    date: "25 अक्टूबर 2025",
    description: "हमारी नवीनतम पुस्तक अब उपलब्ध है। अपनी प्रति प्राप्त करें।",
  },
  {
    id: 2,
    title: "वेबसाइट अपडेट",
    date: "20 अक्टूबर 2025",
    description: "बेहतर अनुभव के लिए वेबसाइट में नए फीचर्स जोड़े गए हैं।",
  },
  {
    id: 3,
    title: "कार्यक्रम घोषणा",
    date: "15 अक्टूबर 2025",
    description: "इस माह होने वाले हमारे विशेष कार्यक्रम में अवश्य शामिल हों।",
  },
];

// 🔄 List of images to rotate
const updateImages = [guruji1, photo16, photo19];

const LatestUpdates = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % updateImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="latest-updates-page">
      <h1 className="page-title">ताज़ा अपडेट्स</h1>
      <div className="updates-layout">
        <div className="updates-left">
          <img
            src={updateImages[currentImage]}
            alt="अपडेट्स बैनर"
            className="fade-image"
          />
        </div>
        <div className="updates-right">
          {updates.map((update) => (
            <div className="update-item" key={update.id}>
              <h2>{update.title}</h2>
              <p className="update-date">{update.date}</p>
              <p>{update.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestUpdates;
