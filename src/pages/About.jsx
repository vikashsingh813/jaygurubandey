import React from "react";
import "./About.css";
import guruji from "../assets/guruji.jpg";
import vision from "../assets/vision.jpg";
import daily from "../assets/journey.jpg";

const About = () => {
  return (
    <div className="about-page">
      {/* Sacred Introduction */}
      <section className="about-intro">
        <h1>गुरुजी की कृपा के प्रकाश में</h1>
        <p className="subtext">“यह आश्रम केवल एक स्थान नहीं है—यह एक अनुभूति है।”</p>
      </section>

      {/* Guruji’s Journey */}
      <section className="about-journey">
        <div className="journey-photo">
          <img src={guruji} alt="Guruji" />
        </div>
        <div className="journey-text">
          <h2>गुरुजी की यात्रा</h2>
          <p>
            गुरुजी का जीवन भक्ति, ज्ञान और मानवता की सेवा की एक पवित्र यात्रा है।
            सरलता और विनम्रता में जन्मे, उनके प्रारंभिक वर्ष अनुशासन, करुणा और धर्म में अटूट विश्वास से परिपूर्ण थे।
            सभी प्राणियों के प्रति प्रेम से भरे हृदय के साथ, उन्होंने आध्यात्मिकता और आत्म-साक्षात्कार का मार्ग अपनाया,
            और प्रत्येक क्षण को आत्माओं को प्रकाश और सत्य की ओर मार्गदर्शन करने के उच्च उद्देश्य को समर्पित किया।
            <br /><br />
            सालों की ध्यान साधना, शास्त्रों के अध्ययन और दिव्य अनुभवों के माध्यम से, गुरुजी आध्यात्मिक ज्ञान का एक प्रकाशस्तंभ बन गए।
            उनके शब्द केवल शिक्षा नहीं हैं, बल्कि उनके अनुभव किए हुए ज्ञान का प्रतिबिंब हैं —
            प्रत्येक उपदेश में करुणा की खुशबू, सत्य की शक्ति और आंतरिक शांति की शांति समाहित है।
          </p>
        </div>
      </section>

      {/* Ashram Vision & Values */}
      <section className="about-vision">
        <div className="vision-photo">
          <img src={vision} alt="Vision" />
        </div>
        <div className="vision-text">
          <h2>आश्रम का दृष्टिकोण और मूल्य</h2>
          <p>
            आश्रम केवल एक स्थान नहीं है; यह एक जीवंत पवित्र स्थल है जहाँ साधक शांति, उद्देश्य और आध्यात्मिक पोषण पाते हैं।
            इसका दृष्टिकोण उन सभी के लिए एक मार्गदर्शक प्रकाश के रूप में कार्य करना है, जो भौतिक जगत की व्यस्तताओं से ऊपर उठने और अपने भीतर के शाश्वत सत्य से जुड़ने की लालसा रखते हैं।
            <br /><br />
            वेदांत की शाश्वत ज्ञान पर गहराई से आधारित — जो एकता का दर्शन है — आश्रम प्रत्येक आत्मा को स्मरण कराता है कि ईश्वर सभी प्राणियों में समान रूप से विद्यमान हैं।
            भक्ति योग के मार्ग से साधक भक्ति और नि:स्वार्थ प्रेम की खेती करते हैं, हृदय को कोमल बनाते हैं और दिव्य कृपा के मार्ग को खोलते हैं।
            कर्म योग के माध्यम से, वे नि:स्वार्थ सेवा की कला सीखते हैं और यह अनुभव करते हैं कि सच्ची पूर्णता लेने में नहीं, बल्कि देने में निहित है।
          </p>
        </div>
      </section>

      {/* Daily Life at the Ashram */}
      <section className="about-daily">
        <div className="daily-photo">
          <img src={daily} alt="Daily" />
        </div>
        <div className="daily-text">
          <h2>Daily Life at the Ashram</h2>
          <p>
            The rhythm of the Ashram flows in harmony with nature and the Divine. Each day begins before sunrise, when the stillness of dawn is embraced with sacred chants and prayers that awaken the spirit. As the sun rises, seekers gather for meditation, immersing themselves in silence and inner reflection, aligning their hearts with peace and clarity.
            <br /><br />
            The mornings are often filled with study of scriptures, discourses, and selfless service — whether it be tending to the gardens, preparing prasad, or supporting the needs of fellow seekers. Every action, no matter how small, is performed with mindfulness and devotion, transforming daily duties into acts of worship.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
