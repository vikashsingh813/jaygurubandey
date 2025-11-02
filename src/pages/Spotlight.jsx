import React, { useState, useEffect } from "react";
import "./Spotlight.css";

// ===== सभी आर्टिकल इमेज आयात करें =====
import articleImage1 from "../assets/article1.jpg";
import articleImage2 from "../assets/article2.jpg";
import articleImage3 from "../assets/article3.jpg";
import articleImage4 from "../assets/article4.jpg";
import articleImage5 from "../assets/article5.jpg";
import articleImage6 from "../assets/article6.jpg";
import articleImage7 from "../assets/article7.jpg";
import articleImage8 from "../assets/article8.jpg";
import articleImage9 from "../assets/article9.jpg";
import articleImage10 from "../assets/article10.jpg";
import articleImage11 from "../assets/article11.jpg";
import articleImage12 from "../assets/article12.jpg";
import articleImage13 from "../assets/article13.jpg";
import articleImage14 from "../assets/article14.jpg";
import articleImage15 from "../assets/article15.jpg";
import articleImage16 from "../assets/article16.jpg";
import articleImage17 from "../assets/article17.jpg";
import articleImage18 from "../assets/article18.jpg";

const Spotlight = () => {
  const [selectedType, setSelectedType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 4;

  // ====== लेखों का डेटा ======
  const articles = [
    { image: articleImage1, title: "‘द स्पिरिचुअल टाइम्स’ में गुरुजी के उपदेश", date: "28 अक्टूबर 2025", desc: "इस लेख में गुरुजी की आध्यात्मिक यात्रा को बहुत सुंदर ढंग से प्रस्तुत किया गया है...", download: articleImage1 },
    { image: articleImage2, title: "‘द डिवाइन हेराल्ड’ में गुरुजी की दिव्य वाणी", date: "15 अक्टूबर 2025", desc: "गुरुजी की आध्यात्मिक दार्शनिकता पर गहराई से प्रकाश डालता लेख...", download: articleImage2 },
    { image: articleImage3, title: "गुरुजी का प्रेम संदेश नई ऊंचाइयों तक पहुँचा", date: "30 सितम्बर 2025", desc: "इस लेख में गुरुजी के प्रेम और करुणा के संदेश को प्रमुखता दी गई है...", download: articleImage3 },
    { image: articleImage4, title: "भक्ति का मार्ग: गुरुजी की प्रेरणादायक कथा", date: "18 सितम्बर 2025", desc: "गुरुजी की दिव्य यात्रा का हृदयस्पर्शी वर्णन...", download: articleImage4 },
    { image: articleImage5, title: "गुरुजी का संदेश – ‘एकत्व ही सच्चा मार्ग’", date: "10 सितम्बर 2025", desc: "गुरुजी के सामंजस्य और एकता के उपदेशों पर प्रेरक लेख...", download: articleImage5 },
    { image: articleImage6, title: "विश्व शांति हेतु गुरुजी का दृष्टिकोण", date: "3 सितम्बर 2025", desc: "इस लेख में गुरुजी के सतत प्रयासों का वर्णन है...", download: articleImage6 },
    { image: articleImage7, title: "भक्ति की शक्ति: गुरुजी के जीवन के पाठ", date: "25 अगस्त 2025", desc: "गुरुजी बताते हैं कि भक्ति और करुणा से जीवन कैसे बदलता है...", download: articleImage7 },
    { image: articleImage8, title: "गुरुजी का प्रकाश: आशा का दीपस्तंभ", date: "15 अगस्त 2025", desc: "गुरुजी की दिव्य उपस्थिति पर आधारित प्रेरणादायक कथा...", download: articleImage8 },
    { image: articleImage9, title: "दिव्य उपदेश: गुरुजी का पवित्रता का मार्ग", date: "1 अगस्त 2025", desc: "इस लेख में गुरुजी द्वारा दी गई पवित्रता की शिक्षा का उल्लेख...", download: articleImage9 },
    { image: articleImage10, title: "सीमाओं से परे गुरुजी की यात्रा", date: "20 जुलाई 2025", desc: "गुरुजी की साधारण शुरुआत से महान यात्रा का प्रतिबिंब...", download: articleImage10 },
    { image: articleImage11, title: "गुरुजी के आशीर्वाद की उपचार शक्ति", date: "10 जुलाई 2025", desc: "भक्तों के हृदयस्पर्शी अनुभव और परिवर्तन की कहानियाँ...", download: articleImage11 },
    { image: articleImage12, title: "आधुनिक जीवन में गुरुजी का मार्गदर्शन", date: "28 जून 2025", desc: "गुरुजी के उपदेश कैसे आधुनिक जीवन में शांति लाते हैं...", download: articleImage12 },
    { image: articleImage13, title: "युवाओं के लिए गुरुजी का संदेश: ज्ञान का पथ", date: "15 जून 2025", desc: "गुरुजी युवाओं को आध्यात्मिकता अपनाने का आह्वान करते हैं...", download: articleImage13 },
    { image: articleImage14, title: "गुरुजी के उपदेशों ने लाखों दिलों को छुआ", date: "2 जून 2025", desc: "गुरुजी के संदेश के अद्भुत प्रभाव को दर्शाता लेख...", download: articleImage14 },
    { image: articleImage15, title: "दिव्य मार्ग: गुरुजी का शाश्वत ज्ञान", date: "20 मई 2025", desc: "गुरुजी का अमर संदेश – मानवता के लिए प्रेम और एकता...", download: articleImage15 },
    { image: articleImage16, title: "गुरुजी की करुणा ने जीवन बदले", date: "8 मई 2025", desc: "गुरुजी से प्रेरित जीवन परिवर्तन की सच्ची कहानियाँ...", download: articleImage16 },
    { image: articleImage17, title: "आध्यात्मिक जागरण: गुरुजी का वैश्विक अभियान", date: "25 अप्रैल 2025", desc: "गुरुजी के वैश्विक प्रचार कार्य का सारांश...", download: articleImage17 },
    { image: articleImage18, title: "गुरुजी का अनंत प्रेम संदेश", date: "10 अप्रैल 2025", desc: "गुरुजी का अंतिम संदेश — प्रेम ही परम मार्ग है...", download: articleImage18 },
  ];

  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const indexOfLast = currentPage * articlesPerPage;
  const indexOfFirst = indexOfLast - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirst, indexOfLast);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="spotlight-page">
      {/* ===== शीर्षक सेक्शन ===== */}
      <div className="spotlight-header">
        <h1>📰 प्रमुख झलकियाँ</h1>
        <div className="underline"></div>
        <p>
          समाचार-पत्रों में प्रकाशित लेख और साक्षात्कार जो गुरुजी के दिव्य कार्यों और संदेशों को उजागर करते हैं।
        </p>

        {/* ===== ड्रॉपडाउन ===== */}
        <div className="dropdown-container">
          <select
            value={selectedType}
            onChange={(e) => {
              setSelectedType(e.target.value);
              setCurrentPage(1);
            }}
            className="spotlight-dropdown"
          >
            <option value="" disabled hidden>
              -- प्रकार चुनें --
            </option>
            <option value="article">लेख</option>
            <option value="interview">साक्षात्कार</option>
          </select>
        </div>
      </div>

      {/* ===== चयन संदेश ===== */}
      {selectedType === "" && (
        <p className="select-message">
          कृपया ऊपर दिए गए ड्रॉपडाउन से एक विकल्प चुनें ताकि आप गुरुजी के लेख या साक्षात्कार देख सकें।
        </p>
      )}

      {/* ===== लेख सेक्शन ===== */}
      {selectedType === "article" && (
        <>
          <div className="spotlight-grid">
            {currentArticles.map((item, index) => (
              <div className="spotlight-card" key={index}>
                <img src={item.image} alt={item.title} className="spotlight-img" />
                <div className="spotlight-content">
                  <h2>{item.title}</h2>
                  <span className="spotlight-date">प्रकाशित तिथि: {item.date}</span>
                  <p>{item.desc}</p>
                  <a href={item.download} download className="read-btn">
                    पूरा लेख डाउनलोड करें
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* ===== पेजिनेशन ===== */}
          <div className="spotlight-pagination">
            <button
              className="spotlight-page-btn prev"
              onClick={() => setCurrentPage((prev) => prev - 1)}
              disabled={currentPage === 1}
            >
              ⬅ पिछला
            </button>

            <span>
              पेज {currentPage} / {totalPages}
            </span>

            <button
              className="spotlight-page-btn next"
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={currentPage === totalPages}
            >
              अगला ➡
            </button>
          </div>
        </>
      )}

      {/* ===== साक्षात्कार सेक्शन ===== */}
      {selectedType === "interview" && (
        <div className="spotlight-grid">
          <div className="spotlight-card">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/bWdtyhYGKJU"
                title="Guruji Interview Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="spotlight-content">
              <h2>गुरुजी का विशेष साक्षात्कार – ‘दिव्य दृष्टि और करुणा का मार्ग’</h2>
              <span className="spotlight-date">प्रकाशित तिथि: 10 अक्टूबर 2025</span>
              <p>
                इस प्रेरणादायक साक्षात्कार में गुरुजी ने भक्ति, करुणा और आध्यात्मिक जीवन पर अपने विचार साझा किए,
                जिससे साधक शांति और आत्मज्ञान की ओर प्रेरित होते हैं।
              </p>
              <a
                href="https://youtu.be/bWdtyhYGKJU?si=xKJzkiFcR7CSXWEu"
                target="_blank"
                rel="noopener noreferrer"
                className="read-btn"
              >
                पूरा साक्षात्कार देखें
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Spotlight;
