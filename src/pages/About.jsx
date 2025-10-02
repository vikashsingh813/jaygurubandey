import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./About.css";
import guruji from "../assets/guruji.jpg";
import vision from "../assets/vision.jpg";
import daily from "../assets/journey.jpg";

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Restore currentPage from location state if available
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
        "वर्षों की साधना, शास्त्र अध्ययन और दिव्य अनुभूतियों के माध्यम से गुरुजी आध्यात्मिक ज्ञान के दीपस्तंभ बन गए...",
        "आज असंख्य साधक उनके मार्गदर्शन में चलते हैं। उनका जीवन सिखाता है कि सच्ची महानता धन या मान-सम्मान में नहीं, बल्कि विनम्रता, करुणा और ईश्वर की इच्छा के प्रति समर्पण में है।"
      ],
    },
    {
      id: 2,
      className: "about-vision",
      photo: vision,
      title: "आश्रम की दृष्टि और मूल्य",
      text: [
        "आश्रम केवल एक स्थान नहीं है; यह एक जीवंत तीर्थ है जहाँ साधक शांति, उद्देश्य और आत्मिक पोषण पाते हैं...",
        "वेदांत की शाश्वत शिक्षाओं में गहराई से निहित, आश्रम हर आत्मा को स्मरण कराता है कि ईश्वर सभी प्राणियों में समान रूप से विद्यमान है...",
        "सबसे बढ़कर, आश्रम के मूल्य साधकों को सत्यनिष्ठा, करुणा और कृतज्ञता के साथ जीना सिखाते हैं, जिससे दैनिक जीवन ही एक आध्यात्मिक यात्रा बन जाता है।"
      ],
    },
    {
      id: 3,
      className: "about-daily",
      photo: daily,
      title: "आश्रम में दैनिक जीवन",
      text: [
        "आश्रम का जीवन-क्रम प्रकृति और ईश्वर के साथ सामंजस्य में बहता है। प्रत्येक दिन का आरंभ सूर्योदय से पहले होता है...",
        "सुबह का समय प्रायः शास्त्रों के अध्ययन, सत्संग और निःस्वार्थ सेवा से भरा होता है...",
        "शाम होते ही आश्रम में भजन, ध्यान और सत्संग की मधुर लहरियाँ गूँज उठती हैं..."
      ],
    },
    {
      id: 4,
      className: "about-teachings",
      photo: guruji,
      title: "गुरुजी की शिक्षाएँ",
      text: [
        "गुरुजी की शिक्षाएँ कालातीत ज्ञान का खजाना हैं, जो साधकों को आत्म-साक्षात्कार और करुणा की ओर ले जाती हैं...",
        "उनके प्रवचनों में अक्सर सांसारिक कर्तव्यों और आध्यात्मिक साधना के बीच संतुलन पर बल दिया जाता है...",
        "ये शिक्षाएँ असंख्य आत्माओं को प्रेरित करती रहती हैं — कठिनाइयों में शक्ति, मौन में शांति और सेवा में जीवन का उद्देश्य खोजने के लिए।"
      ],
    },
    {
      id: 5,
      className: "about-seva",
      photo: vision,
      title: "समाज सेवा और सेवा-भाव",
      text: [
        "सेवा, या निःस्वार्थ कर्म, आश्रम की धड़कन है...",
        "आश्रम की दीवारों से परे, सेवा समाज में भोजन वितरण, स्वास्थ्य शिविर और शिक्षा कार्यक्रमों के माध्यम से पहुँचती है...",
        "गुरुजी अक्सर कहते हैं, 'जो हाथ सेवा करते हैं, वे उन होंठों से पवित्र हैं जो केवल प्रार्थना करते हैं।'"
      ],
    },
    {
      id: 6,
      className: "about-festivals",
      photo: daily,
      title: "आश्रम के उत्सव और पर्व",
      text: [
        "आश्रम आध्यात्मिक पर्वों के समय आनंद और रंगों से भर उठता है — यहाँ प्रार्थना, संगीत और सामूहिक भंडारा होता है...",
        "यहाँ के पर्व केवल अनुष्ठान नहीं हैं, बल्कि दिव्यता को एक साथ अनुभव करने के अवसर हैं...",
        "ये उत्सव स्मरण कराते हैं कि आध्यात्मिकता केवल एकांत साधना नहीं है, बल्कि मिलकर चलने वाला साझा मार्ग है..."
      ],
    },
  ];

  const indexOfLast = currentPage * sectionsPerPage;
  const indexOfFirst = indexOfLast - sectionsPerPage;
  const currentSections = sections.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(sections.length / sectionsPerPage);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="about-page">
      <section className="about-intro">
        <h1>गुरुजी की कृपा की रोशनी में</h1>
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
          पृष्ठ {currentPage} में से {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
        >
          अगला ➡
        </button>
      </div>
    </div>
  );
};

export default About;
