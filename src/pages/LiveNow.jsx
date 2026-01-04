import React from "react";
import "./LiveNow.css";

const LiveNow = () => {
    // 🔧 आगे चलकर बैकएंड / एडमिन पैनल से जोड़ा जाएगा
    const isLive = false;

    // 🔁 लाइव प्लेटफॉर्म चुनें
    const livePlatform = "meet"; // "youtube" | "meet"

    // 🔗 लाइव लिंक
    const youtubeLiveUrl =
        "https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID";

    const googleMeetLink = "https://meet.google.com/abc-defg-hij";

    return (
        <div className="live-page">
            <div className="live-card">
                {isLive ? (
                    <>
                        {/* 🔴 लाइव संकेत */}
                        <div className="live-indicator">
                            <span className="dot"></span>
                            <span className="text">लाइव चल रहा है</span>
                        </div>

                        <h1>गुरुजी के साथ लाइव सत्संग</h1>
                        <p>इस समय चल रहे दिव्य सत्संग से जुड़ें</p>

                        {/* 🎥 लाइव कंटेंट */}
                        {livePlatform === "youtube" ? (
                            <div className="video-box">
                                <iframe
                                    src={youtubeLiveUrl}
                                    title="लाइव सत्संग"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        ) : (
                            <div className="meet-box">
                                <p>लाइव सत्संग हो रहा है</p>
                                <h2>Google Meet पर</h2>

                                <a
                                    href={googleMeetLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="join-btn"
                                >
                                    लाइव सत्संग से जुड़ें
                                </a>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <h1>फिलहाल कोई लाइव सत्संग नहीं है 🙏</h1>
                        <p>अगला सत्संग शीघ्र ही आरंभ होगा</p>

                        <div className="next-info">
                            <span>🕕 समय की सूचना शीघ्र दी जाएगी</span>
                        </div>

                        <div className="check-back-message">
                            🙏 कृपया अगले लाइव सत्संग के लिए बाद में पुनः देखें
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default LiveNow;
