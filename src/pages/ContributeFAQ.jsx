import React, { useEffect, useState } from "react";
import "./ContributeFAQ.css";

const ContributeFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const faqs = [
    {
      question: "आश्रम में योगदान क्यों करें?",
      answer:
        "आपका योगदान आध्यात्मिक गतिविधियों, सेवा कार्यक्रमों, अन्नदान और आश्रम के दैनिक संचालन में सहयोग प्रदान करता है।",
    },
    {
      question: "मैं कैसे योगदान कर सकता/सकती हूँ?",
      answer:
        "आप ऑनलाइन भुगतान, क्यूआर कोड स्कैन करके या सीधे आश्रम में आकर योगदान कर सकते हैं।",
    },
    {
      question: "क्या ऑनलाइन भुगतान सुरक्षित है?",
      answer:
        "हाँ। सभी ऑनलाइन योगदान सुरक्षित और विश्वसनीय भुगतान माध्यमों के द्वारा किए जाते हैं।",
    },
    {
      question: "क्या मैं किसी भी राशि का योगदान कर सकता/सकती हूँ?",
      answer:
        "हाँ। कोई निश्चित राशि नहीं है। छोटा हो या बड़ा, हर योगदान श्रद्धा और कृतज्ञता के साथ स्वीकार किया जाता है।",
    },
    {
      question: "क्या योगदान के बाद मुझे पुष्टि प्राप्त होगी?",
      answer:
        "हाँ। सफल योगदान के बाद आपको पुष्टि या स्वीकृति संदेश प्राप्त होगा।",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <h2 className="faq-title">योगदान – सामान्य प्रश्न</h2>

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
    </div>
  );
};

export default ContributeFAQ;
