import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./About.css";
import guruji from "../assets/guruji.jpg";
import vision from "../assets/vision.jpg";
import daily from "../assets/journey.jpg";

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const initialPage = location.state?.currentPage || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);

  const sectionsPerPage = 3;

  const sections = [
    {
      id: 1,
      className: "about-journey",
      photo: guruji,
      title: "गुरुजी की जीवन यात्रा",
      text: [
        "गुरुजी का जीवन भक्ति, ज्ञान और मानवता की सेवा की एक पवित्र यात्रा है...",
        "वर्षों की साधना, शास्त्रों के अध्ययन और दिव्य अनुभवों के माध्यम से गुरुजी आध्यात्मिक ज्ञान के प्रकाशपुंज बन गए...",
        "आज असंख्य साधक उनके मार्गदर्शन से प्रेरणा प्राप्त करते हैं। उनका जीवन हमें यह सिखाता है कि सच्ची महानता धन या प्रसिद्धि में नहीं, बल्कि विनम्रता, करुणा और परमात्मा के प्रति समर्पण में है।"
      ],
    },
    {
      id: 2,
      className: "about-vision",
      photo: vision,
      title: "आश्रम का उद्देश्य और मूल्य",
      text: [
        "आश्रम केवल एक स्थान नहीं, बल्कि एक जीवंत पवित्र धाम है जहाँ साधक शांति, उद्देश्य और आध्यात्मिक ऊर्जा पाते हैं...",
        "वेदांत की शाश्वत शिक्षाओं में जड़े हुए इस आश्रम का संदेश है — परमात्मा प्रत्येक जीव में समान रूप से विद्यमान है...",
        "आश्रम के मूल्य साधकों को सत्यनिष्ठा, करुणा और कृतज्ञता के साथ जीवन जीने की प्रेरणा देते हैं, जिससे हर दिन एक आध्यात्मिक यात्रा बन जाता है।"
      ],
    },
    {
      id: 3,
      className: "about-daily",
      photo: daily,
      title: "आश्रम में दैनिक जीवन",
      text: [
        "आश्रम का जीवन प्रकृति और परमात्मा की लय के अनुरूप चलता है। प्रत्येक दिन सूर्योदय से पहले आरंभ होता है...",
        "सुबह का समय प्रार्थना, ध्यान, शास्त्र अध्ययन और निःस्वार्थ सेवा के लिए समर्पित रहता है...",
        "संध्या को आश्रम भजन, सत्संग और ध्यान से आलोकित हो उठता है..."
      ],
    },
    {
      id: 4,
      className: "about-teachings",
      photo: guruji,
      title: "गुरुजी की शिक्षाएँ",
      text: [
        "गुरुजी की शिक्षाएँ कालातीत ज्ञान के मोती हैं जो साधकों को आत्मबोध और करुणा की दिशा में मार्गदर्शन करती हैं...",
        "उनके प्रवचन यह बताते हैं कि सांसारिक कर्तव्यों और आध्यात्मिक साधना में संतुलन कैसे स्थापित किया जाए...",
        "ये शिक्षाएँ अनगिनत आत्माओं को प्रेरित करती हैं कि वे चुनौतियों में धैर्य, मौन में शांति और सेवा में जीवन का उद्देश्य खोजें।"
      ],
    },
    {
      id: 5,
      className: "about-seva",
      photo: vision,
      title: "समाजसेवा और करुणा",
      text: [
        "‘सेवा’ या निःस्वार्थ कर्म आश्रम की धड़कन है...",
        "आश्रम की सेवा सीमाओं से परे जाकर समाज में भोजन वितरण, स्वास्थ्य शिविर और शिक्षा कार्यक्रमों के माध्यम से फैलती है...",
        "गुरुजी अक्सर कहते हैं — 'जो हाथ सेवा करते हैं, वे उन होंठों से पवित्र हैं जो केवल प्रार्थना करते हैं।'"
      ],
    },
    {
      id: 6,
      className: "about-festivals",
      photo: daily,
      title: "उत्सव और आध्यात्मिक पर्व",
      text: [
        "आश्रम आध्यात्मिक उत्सवों के दौरान आनंद और भक्ति के रंगों से भर उठता है — प्रार्थना, संगीत और सामूहिक भंडारे से वातावरण पवित्र हो जाता है...",
        "यहाँ उत्सव केवल परंपरा नहीं, बल्कि सामूहिकता में परमात्मा का अनुभव करने का अवसर हैं...",
        "ये पर्व हमें स्मरण कराते हैं कि अध्यात्म केवल एकांत की नहीं, बल्कि एकता और प्रेम की यात्रा है।"
      ],
    },
  ];

  const indexOfLast = currentPage * sectionsPerPage;
  const indexOfFirst = indexOfLast - sectionsPerPage;
  const currentSections = sections.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(sections.length / sectionsPerPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="about-page">
      <section className="about-intro">
        <h1>गुरुजी की कृपा के प्रकाश में</h1>
        <p className="subtext">“यह आश्रम केवल एक स्थान नहीं — यह एक उपस्थिति है।”</p>
      </section>

      {currentSections.map((sec) => (
        <section key={sec.id} className={sec.className}>
          <div className={`${sec.className.split("-")[1]}-photo`}>
            <img src={sec.photo} alt={sec.title} />
          </div>
          <div className={`${sec.className.split("-")[1]}-text`}>
            <h2>{sec.title}</h2>
            {sec.text.slice(0, 1).map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <button
              className="know-more-btn"
              onClick={() =>
                navigate(`/about/${sec.id}`, { state: { section: sec, currentPage } })
              }
            >
              और जानें
            </button>
          </div>
        </section>
      ))}

      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          ⬅ पिछला
        </button>
        <span>
          पेज {currentPage} / {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
        >
          अगला ➡
        </button>
      </div>

      <div
        className="map-button-container fade-in-up"
        style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" }}
      >
        <button
          className="know-more-btn"
          onClick={() => navigate("/intlcenters")}
        >
          🌏 आध्यात्मिक नेटवर्क
        </button>

        <button
          className="know-more-btn"
          onClick={() => navigate("/spotlight")}
        >
          🔦 प्रमुख आकर्षण
        </button>

        <button
          className="know-more-btn"
          onClick={() => navigate("/dailyschedule")}
        >
          📅 दैनिक कार्यक्रम
        </button>
      </div>
    </div>
  );
};

export default About;
