import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const faqs = [
    {
      question: "गुरुजी कौन हैं और जय गुरु बंदे क्या है?",
      answer:
        "गुरुजी हमारे दिव्य मार्गदर्शक और आध्यात्मिक प्रेरणा हैं। 'जय गुरु बंदे' एक ऐसा समुदाय है जो सेवा, प्रेम और भक्ति के माध्यम से गुरुजी की शिक्षाओं और सकारात्मकता को फैलाने के लिए समर्पित है।",
    },
    {
      question: "मैं इस समुदाय का हिस्सा कैसे बन सकता हूँ?",
      answer:
        "आप हमारे आधिकारिक व्हाट्सएप ग्रुप से जुड़ सकते हैं, सोशल मीडिया पर हमें फॉलो कर सकते हैं, या सेवा और आयोजनों में भाग लेकर जुड़े रह सकते हैं।",
    },
    {
      question: "यह समुदाय किस प्रकार की गतिविधियाँ आयोजित करता है?",
      answer:
        "हम सत्संग, सेवा कार्यक्रम, आध्यात्मिक चर्चाएँ और सामूहिक मिलन जैसे आयोजन करते हैं, जो भक्तों को जोड़ने और गुरुजी की शिक्षाओं को फैलाने में मदद करते हैं।",
    },
    {
      question: "क्या इसमें शामिल होने के लिए कोई शुल्क या सदस्यता लेनी होती है?",
      answer:
        "नहीं, 'जय गुरु बंदे' में जुड़ना पूरी तरह निःशुल्क है। आपको केवल भक्ति और सेवा की भावना के साथ भाग लेना होता है।",
    },
    {
      question: "मैं आयोजन समिति से कैसे संपर्क कर सकता हूँ?",
      answer:
        "आप फ़ुटर में दिए गए 'समिति सदस्य' पेज पर जाकर संबंधित टीम से संपर्क कर सकते हैं या हमारे आधिकारिक सोशल मीडिया चैनलों के माध्यम से संदेश भेज सकते हैं।",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <h2 className="faq-title">अक्सर पूछे जाने वाले प्रश्न</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <span className="faq-icon">
                {openIndex === index ? "–" : "＋"}
              </span>
            </div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>

      {/* ===== Feedback Button ===== */}
      <div className="feedback-button-container">
        <button
          className="feedback-button"
          onClick={() => navigate("/feedback")}
        >
          भक्तों की प्रतिक्रिया
        </button>
      </div>
    </div>
  );
};

export default FAQ;
