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
              आरती दास सदा करें प्रभु जी, सतगुरु द्वार तुम्हारो। <br />
              बिना थाल कपूर दीप के, गगन देख उजियारो॥ <br /><br />
              विरह से व्याकुल जाए वहाँ पर, प्रेमी प्रेम सहारो। <br />
              शब्द ध्वनि सुनीं सुरति सुधा रस, मन-मन सुधि बिसारो॥ <br /><br />
              कर से कृपा करो स्वामी जी, मिले प्रेमतम प्यारे। <br />
              निज सुख पग तले चरणागत, मन माया सब हारे॥ <br /><br />
              नाम देश जहाँ तूर निरंतर, आठों पहर निहारो। <br />
              ज्ञान की गंगा भक्ति का सागर, जाए हंस मिलारो॥ <br /><br />
              जय गुरुबंदे परम पुरुष प्रभु, संतों को गही तोरो। <br />
              अलख अनामी अगम अगोचर, जय गुरुबंदे हमारे॥ <br />
            </p>
          )}

          {page === 2 && (
            <p>
              <b>(2)</b> <br />
              आरती सतगुरुदेव प्रभु की, होए बारंबार रे मनवा — चल साचे दरबार॥ <br /><br />
              काल अकाल से मुक्ति मिले, जय गुरुबंदे पार रे मनवा... ॥ <br /><br />
              ब्रह्मा विष्णु महेश्वर, कर सेवा करता रे मनवा... ॥ <br /><br />
              कोटि-कोटि सूरज चंद्र जहाँ, भूमि पहाड़ हजार रे मनवा... ॥ <br /><br />
              नूर देश जहाँ नाम निरंतर, बहता अमृत धार रे मनवा... ॥ <br /><br />
              पारब्रह्म जहाँ मानसरोवर, हंसों का संसार रे मनवा... ॥ <br /><br />
              भँवर गुफा की गुप्त गली में, बंशी की झंकार रे मनवा... ॥ <br /><br />
              सतलोक के प्रेम नगर में, हंसों का संस्कार रे मनवा... ॥ <br /><br />
              जय गुरुबंदे सतगुरु साहिब, करते सबसे प्यार रे मनवा... ॥ <br />
            </p>
          )}

          {page === 3 && (
            <p>
              <b>(3)</b> <br />
              अखंड मंडलाकार ज्योति, सम रही सतलोक। <br />
              जीव देखे जय गुरुबंदे, मिले जगत का शोक॥ <br /><br />
              सतगुरु बड़ गोविंद नहीं, नाम लिए और कहाया। <br />
              पीढ़ी-पीढ़ी जय गुरुबंदे, बिर मिलने की बताया॥ <br /><br />
              संत समानन सब से उत्तम, मन भक्तों मन लाया। <br />
              भजों-भजों जय गुरुबंदे, हरि दर्शन का पाया॥ <br />
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
