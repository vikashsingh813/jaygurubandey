import { useState } from "react";
import "./Subscribe.css";
import guruji from "../assets/guruji.jpg";

// ✅ Telegram Group Link
const TELEGRAM_GROUP_LINK = "https://t.me/+kRGL_XXEAS05ZDA1";

const Subscribe = () => {
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const showMessage = (text) => {
        setMessage(text);
        setTimeout(() => setMessage(""), 3000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loading) return;

        // 🇮🇳 Indian mobile number validation
        const numberRegex = /^[6-9][0-9]{9}$/;
        if (!numberRegex.test(number)) {
            showMessage("❌ कृपया एक मान्य 10 अंकों का मोबाइल नंबर दर्ज करें।");
            return;
        }

        setLoading(true);

        fetch(
            "https://script.google.com/macros/s/AKfycbyZ7ZL-dlhhLTt2K9nKQYCzD99bekIVa3kcl2ar3Xsg5VqVu_q03UpoOsU2ndVuQGqr/exec",
            {
                method: "POST",
                body: new URLSearchParams({
                    number,
                }),
            }
        )
            .then((res) => res.text())
            .then((text) => {
                if (text === "Already subscribed") {
                    showMessage("⚠️ यह मोबाइल नंबर पहले से सब्सक्राइब है।");
                    setNumber("");
                } else {
                    showMessage("✅ आप सफलतापूर्वक सब्सक्राइब हो गए हैं!");
                    setNumber("");

                    // 🕒 Show popup after 2 seconds
                    setTimeout(() => {
                        setShowPopup(true);
                    }, 2000);
                }
            })
            .catch(() => {
                showMessage("❌ कुछ गलत हो गया। कृपया पुनः प्रयास करें।");
            })
            .finally(() => setLoading(false));
    };

    return (
        <div className="subscribe-page">
            <div className="subscribe-box">

                {/* Guruji Image */}
                <div className="guruji-photo">
                    <img src={guruji} alt="गुरुजी" />
                </div>

                <h2>🔔 मुझे सूचित करें</h2>
                <p>जब भी हम कुछ नया साझा करें, सूचना प्राप्त करें</p>

                <form onSubmit={handleSubmit} className="subscribe-form">
                    <input
                        type="tel"
                        placeholder="अपना मोबाइल नंबर दर्ज करें"
                        required
                        value={number}
                        onChange={(e) =>
                            setNumber(e.target.value.replace(/[^0-9]/g, ""))
                        }
                        maxLength={10}
                        disabled={loading}
                    />

                    <button type="submit" disabled={loading}>
                        {loading ? "सब्सक्राइब किया जा रहा है..." : "सब्सक्राइब करें"}
                    </button>
                </form>

                {message && <span className="message">{message}</span>}
            </div>

            {/* 🟢 SUCCESS POPUP */}
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-box">
                        <h3>🙏 स्वागत है</h3>
                        <p>आप सफलतापूर्वक सब्सक्राइब हो गए हैं</p>

                        <a
                            href={TELEGRAM_GROUP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="telegram-btn"
                        >
                            👉 Telegram ग्रुप जॉइन करें
                        </a>

                        <button
                            className="close-btn"
                            onClick={() => setShowPopup(false)}
                        >
                            बंद करें
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Subscribe;
