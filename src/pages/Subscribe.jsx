import { useState } from "react";
import "./Subscribe.css";
import guruji from "../assets/guruji.jpg"; // adjust path if needed

const Subscribe = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const showMessage = (text) => {
        setMessage(text);
        setEmail("");
        setTimeout(() => setMessage(""), 3000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loading) return;

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            showMessage("❌ कृपया एक मान्य ईमेल पता दर्ज करें।");
            return;
        }

        setLoading(true);

        fetch(
            "https://script.google.com/macros/s/AKfycbyZ7ZL-dlhhLTt2K9nKQYCzD99bekIVa3kcl2ar3Xsg5VqVu_q03UpoOsU2ndVuQGqr/exec",
            {
                method: "POST",
                body: new URLSearchParams({ email }),
            }
        )
            .then((res) => res.text())
            .then((text) => {
                if (text === "Already subscribed") {
                    showMessage("⚠️ यह ईमेल पहले से सब्सक्राइब है।");
                } else {
                    showMessage("✅ आप सफलतापूर्वक सब्सक्राइब हो गए हैं!");
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
                <p>
                    जब भी हम कुछ नया साझा करें, उसकी सूचना प्राप्त करें
                </p>

                <form onSubmit={handleSubmit} className="subscribe-form">
                    <input
                        type="email"
                        placeholder="अपना ईमेल दर्ज करें"
                        required
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value.replace(/[^a-zA-Z0-9@._-]/g, ""))
                        }
                        disabled={loading}
                    />

                    <button type="submit" disabled={loading}>
                        {loading ? "सब्सक्राइब किया जा रहा है..." : "सब्सक्राइब करें"}
                    </button>
                </form>

                {message && <span className="message">{message}</span>}
            </div>
        </div>
    );
};

export default Subscribe;
