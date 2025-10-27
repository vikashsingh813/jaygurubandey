import React, { useEffect, useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const faqs = [
    {
      question: "गुरुजी कौन हैं और जय गुरुबंदे क्या है?",
      answer:
        "गुरुजी हमारे दिव्य मार्गदर्शक और आध्यात्मिक शक्ति स्रोत हैं। जय गुरुबंदे एक ऐसा भक्त समुदाय है जो सेवा, भक्ति और प्रेम के माध्यम से गुरुजी की शिक्षाओं का प्रचार करता है।",
    },
    {
      question: "मैं इस समुदाय का हिस्सा कैसे बन सकता/सकती हूँ?",
      answer:
        "आप हमारे आधिकारिक WhatsApp समूह में जुड़कर, सोशल मीडिया पर हमें फॉलो करके या हमारी सेवा और कार्यक्रमों में भाग लेकर इस परिवार का हिस्सा बन सकते हैं।",
    },
    {
      question: "यह समुदाय कौन-कौन सी गतिविधियाँ करता है?",
      answer:
        "हम सत्संग, सेवा कार्यक्रम, आध्यात्मिक चर्चा और सामुदायिक मेल-मिलाप जैसे आयोजन करते हैं, ताकि गुरुजी का संदेश अधिक से अधिक लोगों तक पहुँच सके।",
    },
    {
      question: "क्या इसमें जुड़ने के लिए कोई शुल्क देना होता है?",
      answer:
        "नहीं। जय गुरुबंदे से जुड़ना पूरी तरह मुफ्त है। बस प्रेम, भक्ति और सेवा का भाव साथ लाना है।",
    },
    {
      question: "मैं समिति सदस्यों से कैसे संपर्क कर सकता/सकती हूँ?",
      answer:
        "आप फुटर में दिए गए 'समिति सदस्य' पेज से संबंधित टीम से संपर्क कर सकते हैं या हमारे आधिकारिक सोशल मीडिया चैनलों के माध्यम से भी संदेश भेज सकते हैं।",
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
              <span className="faq-icon">{openIndex === index ? "–" : "＋"}</span>
            </div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
