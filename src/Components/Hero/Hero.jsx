import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ScrollingText from "../../pages/ScrollingText";
import AnnouncementBar from "../../pages/AnnouncementBar";
import FlowerSprinkler from "../../pages/FlowerSprinkler";
import LoadingPage from "../../pages/LoadingPage";
import "./Hero.css";
import missionImg from "../../assets/photo9.jpg";
import visionImg from "../../assets/photo10.jpg";
import bio from "../../assets/bio.jpg";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.png";
import photo1 from "../../assets/photo1.jpg";
import photo6 from "../../assets/photo6.jpg";
import photo7 from "../../assets/photo7.jpg";
import photo8 from "../../assets/photo8.jpg";
import photo10 from "../../assets/photo10.jpg";
import photo19 from "../../assets/photo19.jpg";
import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaWhatsapp
} from "react-icons/fa";
import {
  FaHandsHelping,
  FaCalendarAlt,
  FaUsers,
  FaGlobe
} from "react-icons/fa";

const Hero = () => {
  const aboutImages = [photo7, photo8, photo6];
  const [aboutIndex, setAboutIndex] = useState(0);
  const navigate = useNavigate();
  const images = [bio, hero1, hero2, photo1, photo6, photo7, photo8];
  const [currentIndex, setCurrentIndex] = useState(0);

  const alreadyShown = sessionStorage.getItem("hasShownLoader");
  const [loading, setLoading] = useState(!alreadyShown);

  useEffect(() => {
    const interval = setInterval(() => {
      setAboutIndex((prev) => (prev + 1) % aboutImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasShownLoader", "true");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [alreadyShown]);

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  /* ================= HINDI HERO TEXT ================= */

  const fullText = `परम संत स्वामी जय गुरुबंदे जी महाराज
आइए ईश्वर की ओर बढ़ें और सनातन धर्म को समझें।
यह संदेश आत्मिक जागरण, भक्ति और सनातन धर्म के शाश्वत मूल्यों को जीवन में अपनाने की प्रेरणा देता है।`;

  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const typingSpeed = 50;
    const timeout = setTimeout(() => {
      if (charIndex < fullText.length) {
        setDisplayedText((prev) => prev + fullText[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setDisplayedText("");
          setCharIndex(0);
        }, 2000);
      }
    }, typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, fullText]);

  const textLines = displayedText.split("\n");

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <AnnouncementBar />
      <div className="hero container">
        <FlowerSprinkler />

        {images.map((img, index) => (
          <div
            key={index}
            className={`hero-bg ${index === currentIndex ? "active" : ""}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url(${img})`,
            }}
          ></div>
        ))}

        <div className="hero-text">
          {textLines[0] && (
            <h2>
              {textLines[0]} <span className="cursor"></span>
            </h2>
          )}
          {textLines[1] && (
            <h1>
              {textLines[1]} <span className="cursor"></span>
            </h1>
          )}
          {textLines[2] && (
            <p>
              {textLines[2]} <span className="cursor"></span>
            </p>
          )}
        </div>
      </div>

      {/* ===== DECORATIVE DIVIDER ===== */}
      <div className="section-divider" />

      {/* ================= ABOUT SECTION ================= */}

      <section className="about-section">
        <h2 className="about-heading">गुरुजी के बारे में</h2>

        <div className="about-container">
          <div className="about-image">
            <img src={aboutImages[aboutIndex]} alt="Guruji" key={aboutIndex} />
          </div>

          <div className="about-content">
            <p>
              गुरुजी एक महान आध्यात्मिक मार्गदर्शक हैं, जो ज्ञान, सकारात्मकता और
              आंतरिक शांति का प्रसार करते हैं। उनकी शिक्षाएँ सनातन परंपराओं और
              जीवनोपयोगी मूल्यों पर आधारित हैं।
            </p>

            <p>
              करुणा और स्पष्टता के साथ गुरुजी आत्मअनुशासन, भक्ति और मानव सेवा पर
              बल देते हैं। हजारों भक्तों ने उनके मार्गदर्शन से जीवन की सही दिशा
              और उद्देश्य प्राप्त किया है।
            </p>

            <div className="about-btn-wrapper">
              <button
                className="about-btn"
                onClick={() => navigate("/about")}
              >
                गुरुजी के बारे में और पढ़ें
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DECORATIVE DIVIDER ===== */}
      <div className="section-divider" />

      {/* ================= MISSION & VISION ================= */}

      <section className="mission-vision-section">
        <h2 className="mission-vision-heading">मिशन एवं विज़न</h2>

        <div className="mission-vision-container">
          <div className="mv-card">
            <img src={missionImg} alt="Mission" className="mv-icon" />
            <h3>हमारा मिशन</h3>
            <p>
              सनातन धर्म के शाश्वत ज्ञान का प्रचार करना और लोगों को
              आध्यात्मिक जागरूकता, धर्मपूर्ण जीवन एवं आंतरिक शांति की ओर
              मार्गदर्शन देना।
            </p>
          </div>

          <div className="mv-divider" />

          <div className="mv-card">
            <img src={visionImg} alt="Vision" className="mv-icon" />
            <h3>हमारा विज़न</h3>
            <p>
              एक ऐसे जागरूक समाज का निर्माण करना जहाँ प्राचीन धर्मिक
              मूल्य आधुनिक जीवन के साथ सामंजस्य बनाकर एकता और विकास का
              मार्ग प्रशस्त करें।
            </p>
          </div>
        </div>
      </section>

      {/* ===== DECORATIVE DIVIDER ===== */}
      <div className="section-divider" />
      <section className="latest-updates-section">
  <h2 className="latest-updates-heading">नवीनतम अपडेट</h2>

  <div className="latest-updates-grid">
    <div className="update-card">
      <span className="update-badge important">महत्वपूर्ण</span>

      <div className="update-image">
        <img src={photo8} alt="आध्यात्मिक यात्रा" />
      </div>

      <h3>आगामी आध्यात्मिक यात्रा</h3>
      <p>
        स्वामी जी इस माह वाराणसी एवं हैदराबाद की यात्रा करेंगे।
        दर्शन एवं कार्यक्रम की जानकारी हेतु भक्तगण जुड़े रहें।
      </p>
      <span className="update-date">18 जनवरी 2026</span>
    </div>

    <div className="update-card">
      <span className="update-badge new">नया</span>

      <div className="update-image">
        <img src={photo10} alt="लाइव सत्संग" />
      </div>

      <h3>साप्ताहिक लाइव सत्संग</h3>
      <p>
        प्रत्येक रविवार सायं 7:30 बजे लाइव सत्संग में सम्मिलित हों
        एवं दिव्य मार्गदर्शन एवं आशीर्वाद प्राप्त करें।
      </p>
      <span className="update-date">प्रत्येक रविवार</span>
    </div>

    <div className="update-card">
      <span className="update-badge update">अपडेट</span>

      <div className="update-image">
        <img src={photo19} alt="योगदान" />
      </div>

      <h3>योगदान सुविधाएँ प्रारंभ</h3>
      <p>
        अब भक्तजन UPI एवं QR कोड के माध्यम से आध्यात्मिक
        गतिविधियों हेतु योगदान कर सकते हैं।
      </p>
      <span className="update-date">हाल ही में अपडेट</span>
    </div>
  </div>
</section>

{/* ===== DECORATIVE DIVIDER ===== */}
<div className="section-divider" />

<section className="activities-section">
  <h2 className="activities-heading">मुख्य गतिविधियाँ / हमारे कार्य</h2>

  <div className="activities-grid">
    {/* Card 1 */}
    <div className="activity-card">
      <div className="activity-icon">
        <FaHandsHelping />
      </div>
      <h3>सेवा एवं साधना</h3>
      <p>
        नियमित आध्यात्मिक, सामाजिक एवं सेवा आधारित
        गतिविधियाँ पूर्ण श्रद्धा एवं अनुशासन के साथ।
      </p>
    </div>

    {/* Card 2 */}
    <div className="activity-card">
      <div className="activity-icon">
        <FaCalendarAlt />
      </div>
      <h3>कार्यक्रम एवं आयोजन</h3>
      <p>
        विशेष सत्संग, पर्व, यात्राएँ एवं आध्यात्मिक
        कार्यक्रम वर्ष भर आयोजित किए जाते हैं।
      </p>
    </div>

    {/* Card 3 */}
    <div className="activity-card">
      <div className="activity-icon">
        <FaUsers />
      </div>
      <h3>समुदाय सहयोग</h3>
      <p>
        समाज में मार्गदर्शन, एकता, सेवा भावना एवं
        आवश्यकता अनुसार सहयोग प्रदान करना।
      </p>
    </div>

    {/* Card 4 */}
    <div className="activity-card">
      <div className="activity-icon">
        <FaGlobe />
      </div>
      <h3>ऑनलाइन सेवाएँ</h3>
      <p>
        वेबसाइट के माध्यम से सूचनाएँ, घोषणाएँ,
        अपडेट एवं आध्यात्मिक संसाधनों की उपलब्धता।
      </p>
    </div>
  </div>
</section>

{/* ===== DECORATIVE DIVIDER ===== */}
<div className="section-divider" />

{/* ===== SOCIAL LINKS SECTION START ===== */}
<section className="social-section">
  <h2 className="section-heading">महत्वपूर्ण लिंक</h2>
  <div className="social-grid">

    {/* YouTube */}
    <div className="social-box">
      <div className="social-title">
        <FaYoutube className="social-icon youtube" />
        <span>YouTube चैनल</span>
      </div>

      <ul>
        <li>
          <a
            href="https://youtube.com/@jaigurubande?feature=shared"
            target="_blank"
            rel="noopener noreferrer"
          >
            जय गुरुबंदे
          </a>
        </li>
        <li>
          <a
            href="youtube.com/@jaygurubande1?si=7f0-bxVAZFTx7r-8"
            target="_blank"
            rel="noopener noreferrer"
          >
            जय गुरुबंदे 3377
          </a>
        </li>
      </ul>
    </div>

    {/* Instagram */}
    <div className="social-box">
      <div className="social-title">
        <FaInstagram className="social-icon instagram" />
        <span>इंस्टाग्राम</span>
      </div>

      <ul>
        <li>
          <a
            href="https://www.instagram.com/jaigurubande__official?igsh=NnIwdnI5cGMxemYy"
            target="_blank"
            rel="noopener noreferrer"
          >
            जय गुरुबंदे आधिकारिक
          </a>
        </li>
      </ul>
    </div>

    {/* Facebook */}
    <div className="social-box">
      <div className="social-title">
        <FaFacebook className="social-icon facebook" />
        <span>फेसबुक</span>
      </div>

      <ul>
        <li>
          <a
            href="https://www.facebook.com/share/g/1AZvFisxcs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            जय गुरुबंदे
          </a>
        </li>
      </ul>
    </div>

    {/* WhatsApp */}
    <div className="social-box">
      <div className="social-title">
        <FaWhatsapp className="social-icon whatsapp" />
        <span>व्हाट्सएप</span>
      </div>

      <ul>
        <li>
          <a
            href="https://chat.whatsapp.com/GwdDS530clKJsNc4zkPCyD"
            target="_blank"
            rel="noopener noreferrer"
          >
            जय गुरुबंदे
          </a>
        </li>
      </ul>
    </div>

  </div>
</section>
{/* ===== SOCIAL LINKS SECTION END ===== */}

<ScrollingText />
</div>
  );
};

export default Hero;