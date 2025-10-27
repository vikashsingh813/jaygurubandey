import React, { useState, useEffect } from "react";
import "./SatguruArti.css";
import guruImage from "../assets/photo24.jpg"; // सही पथ लगाएँ

const SatguruArti = () => {
  const [page, setPage] = useState(1);

  // हर पेज बदलने पर ऊपर स्क्रॉल करें
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const handleNext = () => setPage((prev) => Math.min(prev + 1, 3));
  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="arti-container">
      <h1 className="arti-title">🙏 सतगुरु आरती 🙏</h1>

      <div className="arti-content">
        {/* बाईं ओर: गुरु जी की छवि */}
        <div className="arti-image-box">
          <img src={guruImage} alt="Satguru" className="arti-image" />
        </div>

        {/* दाईं ओर: आरती का पाठ */}
        <div className="arti-text-box">
          {page === 1 && (
            <p>
              <b>(1)</b> <br />
              आरती दास सदा करें प्रभु जी, सतगुरु द्वार तुम्हारे || <br />
              बिना थाल कपूर दीप के, गगन देख उजियारे || <br /><br />

              विरह से व्याकुल जाएं वहाँ पर, प्रेमी प्रेम सहारे || <br />
              शब्द ध्वनि सुने सूरति सुधा रस, तन मन सुधि बिसारे || <br /><br />

              कर से कृपा करें स्वामी जी, मिले प्रियतम प्यारे || <br />
              निज सुख वहाँ मिले चरणामृत, मन माया सब हारे || <br /><br />

              नाम देश जहाँ नूर निरंतर, आठों पहर निहारे || <br />
              ज्ञान की गंगा भक्ति का सागर, जाए हंस मिलो रे || <br /><br />

              जय गुरुबन्दे परम पुरुष प्रभु, संतों को गहि तारे || <br />
              अलख अनामी अगम अगोचर, जय गुरुबन्दे हमारे || <br />
            </p>
          )}

          {page === 2 && (
            <p>
              <b>(2)</b> <br />
              आरती सतगुरुदेव प्रभु की, होय बारंबार रे मनवा चल सच्चे दरबारा | <br /><br />
              काल अकाल से मुक्ति मिले, जय गुरुबन्दे पार रे मनवा... <br /><br />
              ब्रह्मा विष्णु महेश्वर, कर सेवा करतार रे मनवा... <br /><br />
              कोटिन सूरज चंद्र जहाँ, भूमि पहाड़ हजार रे मनवा... <br /><br />
              नूर देश जहाँ नाम निरंतर, बहता अमृत धार रे मनवा... <br /><br />
              परब्रह्म जहाँ मानसरोवर, हंसों का संसार रे मनवा... <br /><br />
              भंवर गुफा की गुप्त गली में, बंसी की झंकार रे मनवा... <br /><br />
              सतलोक के प्रेम नगर में, हंसों की सरकार रे मनवा... <br /><br />
              जय गुरुबन्दे सतगुरु साहेब, करते सबसे प्यार रे मनवा... <br />
            </p>
          )}

          {page === 3 && (
            <p>
              <b>(3)</b> <br />
              अखण्ड मण्डलाकर ज्योति, सम रही सतलोक | <br />
              जीव देखी जय गुरुबन्दे, मिटे जगत का शोक ॥ <br /><br />
              सतगुरु बड़ गोविंद नहीं नभ से परे कहाया | <br />
              पीछे पीछे जय गुरुबन्दे, हरि मिलने को बताया ॥ <br /><br />
              संत समागम सबसे अच्छा मत भटको मनलाया | <br />
              भजते भजते जय गुरुबन्दे, हरि दर्शन को पाया ॥ <br />
            </p>
          )}
        </div>
      </div>

      {/* पेज बटन */}
      <div className="arti-pagination">
        <button onClick={handlePrev} disabled={page === 1}>
          ⬅️ पिछला
        </button>
        <span>पृष्ठ {page} / 3</span>
        <button onClick={handleNext} disabled={page === 3}>
          अगला ➡️
        </button>
      </div>

      <div className="arti-footer">
        <p>🙏 जय गुरुबंदे साहिब सबका 🙏</p>
      </div>
    </div>
  );
};

export default SatguruArti;
