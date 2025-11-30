import React, { useState } from "react";
import "./DailySatsang.css";
import guruAvatar from "../assets/guruji.jpg";

const MONTHS = [
    {
        id: "sep-2024",
        label: "दैनिक सत्संग – सितम्बर 2024",
        videos: [
            {
                id: "gxKxXbX4NiY",
                title: "हम दिव्य के हैं — अच्छे हों या बुरे",
                date: "29 सितम्बर 2024",
            },
            {
                id: "LYGQQH54SVQ",
                title: "मृत्यु के भय को कैसे दूर करें",
                date: "28 सितम्बर 2024",
            },
            {
                id: "krYZEkcYrvY",
                title: "इन शिक्षाओं को अपनाएँ और जीवन बदलें",
                date: "27 सितम्बर 2024",
            },
        ],
    },
    {
        id: "aug-2024",
        label: "दैनिक सत्संग – अगस्त 2024",
        videos: [
            {
                id: "gxKxXbX4NiY",
                title: "दिव्य नाम का महिमा गान",
                date: "30 अगस्त 2024",
            },
            {
                id: "krYZEkcYrvY",
                title: "सच्चा प्रेम क्या है? (आध्यात्मिक दृष्टि से)",
                date: "28 अगस्त 2024",
            },
        ],
    },
    {
        id: "jul-2024",
        label: "दैनिक सत्संग – जुलाई 2024",
        videos: [
            {
                id: "krYZEkcYrvY",
                title: "भक्ति जीवन को कैसे बदल सकती है",
                date: "25 जुलाई 2024",
            },
        ],
    },
    {
        id: "jun-2024",
        label: "दैनिक सत्संग – जून 2024",
        videos: [],
    },
    {
        id: "may-2024",
        label: "दैनिक सत्संग – मई 2024",
        videos: [],
    },
];

const DailySatsang = () => {
    const [activeMonth, setActiveMonth] = useState(MONTHS[0].id);
    const currentMonth = MONTHS.find((m) => m.id === activeMonth);

    return (
        <div className="daily-satsang-page">

            {/* ===== Page Heading ===== */}
            <header className="daily-hero">
                <h1>दैनिक सत्संग</h1>
                <div className="daily-hero-decor">
                    <span className="line" />
                    <span className="star">★</span>
                    <span className="line" />
                </div>
            </header>

            {/* ===== Channel Card ===== */}
            <section className="channel-card">
                <div className="channel-left">
                    <img src={guruAvatar} alt="Guruji" className="channel-avatar" />
                </div>

                <div className="channel-main">
                    <h2 className="channel-title">जय गुरुबंदे</h2>
                    <p className="channel-meta">
                        4.6K सब्सक्राइबर्स • 212 वीडियो • 3.1K व्यूज़
                    </p>

                    <p className="channel-desc">
                        एक भक्तिमय YouTube चैनल जहाँ दैनिक सत्संग, दिव्य प्रवचन, 
                        मधुर भजन और गुरुदेव की ज्ञानपूर्ण शिक्षाएँ साझा की जाती हैं।
                        ये दैनिक सत्संग हर साधक को शांति, स्पष्टता, आंतरिक शक्ति, 
                        भक्ति और सकारात्मकता की ओर ले जाते हैं।
                    </p>

                    {/* Tabs */}
                    <div className="channel-tabs">
                        {MONTHS.map((month) => (
                            <button
                                key={month.id}
                                className={
                                    month.id === activeMonth
                                        ? "month-tab month-tab-active"
                                        : "month-tab"
                                }
                                onClick={() => setActiveMonth(month.id)}
                            >
                                {month.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* YouTube Button */}
                <div className="channel-right">
                    <a
                        href="https://youtube.com/@jaigurubande?feature=shared"
                        target="_blank"
                        rel="noreferrer"
                        className="yt-button"
                    >
                        <span className="yt-icon">▶</span>
                        <span>YouTube</span>
                        <span className="yt-count">4.6K</span>
                    </a>
                </div>
            </section>

            {/* ===== Video Section ===== */}
            <section className="daily-videos">
                {currentMonth?.videos?.length ? (
                    <div className="video-grid">
                        {currentMonth.videos.map((video) => (
                            <a
                                key={video.id}
                                href={`https://www.youtube.com/watch?v=${video.id}`}
                                target="_blank"
                                rel="noreferrer"
                                className="video-card"
                            >
                                <div className="video-thumb-wrapper">
                                    <img
                                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                        alt={video.title}
                                        className="video-thumb"
                                    />
                                    <div className="video-overlay">
                                        <span className="play-icon">▶</span>
                                    </div>
                                </div>

                                <div className="video-info">
                                    <h3>{video.title}</h3>
                                    <p className="video-date">{video.date}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                ) : (
                    <div className="no-videos">
                        इस माह के लिए अभी कोई सत्संग वीडियो उपलब्ध नहीं है।
                        कृपया कुछ समय बाद पुनः देखें।
                    </div>
                )}
            </section>
        </div>
    );
};

export default DailySatsang;
