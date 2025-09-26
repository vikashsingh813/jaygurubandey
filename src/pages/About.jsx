import React, { useState } from "react";
import "./About.css";
import guruji from "../assets/guruji.jpg";
import vision from "../assets/vision.jpg";
import daily from "../assets/journey.jpg";

const About = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const sectionsPerPage = 3;

  const sections = [
    {
      id: 1,
      className: "about-journey",
      photo: guruji,
      title: "गुरुजी की यात्रा",
      text: [
        "गुरुजी का जीवन भक्ति, ज्ञान और मानवता की सेवा की एक पवित्र यात्रा है। उनका प्रारंभिक जीवन सरलता और विनम्रता से भरा हुआ था।",
        "सालों की ध्यान साधना, शास्त्रों का अध्ययन और दिव्य अनुभवों के माध्यम से, गुरुजी आध्यात्मिक ज्ञान के एक प्रकाशस्तंभ बन गए।",
        "आज अनगिनत साधक उनकी मार्गदर्शन की तलाश में हैं। उनका जीवन हमें यह याद दिलाता है कि सच्ची महानता धन या पहचान में नहीं, बल्कि विनम्रता, करुणा और ईश्वर की इच्छा में समर्पण में निहित है।"
      ],
    },
    {
      id: 2,
      className: "about-vision",
      photo: vision,
      title: "आश्रम का दृष्टिकोण और मूल्य",
      text: [
        "आश्रम केवल एक स्थान नहीं है; यह एक जीवंत पवित्र स्थल है जहाँ साधक शांति, उद्देश्य और आध्यात्मिक पोषण पाते हैं।",
        "वेदांत की शाश्वत ज्ञान पर आधारित, आश्रम प्रत्येक आत्मा को स्मरण कराता है कि ईश्वर सभी प्राणियों में समान रूप से विद्यमान हैं।",
        "आश्रम के मूल्य साधकों को ईमानदारी, करुणा और कृतज्ञता के साथ जीने की प्रेरणा देते हैं, जिससे दैनिक जीवन एक आध्यात्मिक यात्रा में बदल जाता है।"
      ],
    },
    {
      id: 3,
      className: "about-daily",
      photo: daily,
      title: "आश्रम में दैनिक जीवन",
      text: [
        "आश्रम की लय प्रकृति और ईश्वर के साथ सामंजस्य में बहती है। प्रत्येक दिन सूर्योदय से पहले शुरू होता है।",
        "सुबह का समय अक्सर शास्त्रों के अध्ययन, प्रवचन और नि:स्वार्थ सेवा से भरा होता है।",
        "शाम को आश्रम में सत्संग, भजन और ध्यान के माध्यम से आंतरिक शांति और भक्ति का अनुभव होता है।"
      ],
    },
    {
      id: 4,
      className: "about-teachings",
      photo: guruji,
      title: "गुरुजी के उपदेश",
      text: [
        "गुरुजी के उपदेश अनंत काल के लिए ज्ञान के खजाने हैं, जो साधकों को आत्म-साक्षात्कार और करुणा की ओर मार्गदर्शन करते हैं।",
        "उनके प्रवचन अक्सर सांसारिक कर्तव्यों और आध्यात्मिक अभ्यासों के बीच संतुलन बनाए रखने पर जोर देते हैं।",
        "ये उपदेश अनगिनत आत्माओं को चुनौतियों में शक्ति, मौन में शांति और सेवा में उद्देश्य खोजने के लिए प्रेरित करते हैं।"
      ],
    },
    {
      id: 5,
      className: "about-seva",
      photo: vision,
      title: "समुदाय और सेवा",
      text: [
        "सेवा, या नि:स्वार्थ सेवा, आश्रम का हृदयस्पंदन है।",
        "आश्रम की दीवारों से परे, सेवा समाज तक पहुँचती है, जैसे भोजन वितरण, स्वास्थ्य शिविर और शिक्षा कार्यक्रम।",
        "गुरुजी अक्सर कहते हैं, 'जो हाथ सेवा में व्यस्त हैं, वे होंठों से प्रार्थना करने से अधिक पवित्र हैं।'"
      ],
    },
    {
      id: 6,
      className: "about-festivals",
      photo: daily,
      title: "त्योहार और उत्सव",
      text: [
        "आश्रम में आध्यात्मिक त्योहारों के दौरान खुशियों के रंग बिखरे होते हैं — जो प्रार्थना, संगीत और सामुदायिक भोज के साथ मनाए जाते हैं।",
        "यहाँ के त्योहार केवल अनुष्ठान नहीं हैं; ये मिलकर दिव्यता का अनुभव करने का अवसर हैं।",
        "ये उत्सव हमें याद दिलाते हैं कि आध्यात्मिकता अकेली यात्रा नहीं है, बल्कि साझा और मिलकर निभाई जाने वाली पवित्र यात्रा है।"
      ],
    },
  ];

  const indexOfLast = currentPage * sectionsPerPage;
  const indexOfFirst = indexOfLast - sectionsPerPage;
  const currentSections = sections.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(sections.length / sectionsPerPage);

  return (
    <div className="about-page">
      <section className="about-intro">
        <h1>गुरुजी की कृपा के प्रकाश में</h1>
        <p className="subtext">“यह आश्रम केवल एक स्थान नहीं है—यह एक अनुभूति है।”</p>
      </section>

      {currentSections.map((sec) => (
        <section key={sec.id} className={sec.className}>
          <div className={`${sec.className.split("-")[1]}-photo`}>
            <img src={sec.photo} alt={sec.title} />
          </div>
          <div className={`${sec.className.split("-")[1]}-text`}>
            <h2>{sec.title}</h2>
            {sec.text.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
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
          पृष्ठ {currentPage} / {totalPages}
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
