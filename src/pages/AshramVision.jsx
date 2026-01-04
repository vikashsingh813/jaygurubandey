import React from "react";
import "./AshramVision.css";
import guruji from "../assets/guruji.jpg";

const AshramVision = () => {
    return (
        <section className="av-page">

            {/* ===== HERO SECTION ===== */}
            <div className="av-hero">
                <h1 className="av-title">आश्रम की दृष्टि</h1>

                {/* 🔴 LINE BELOW TITLE */}
                <div className="av-title-line"></div>

                <p className="av-subtitle">
                    आस्था, अनुशासन और आत्म-साक्षात्कार की पवित्र यात्रा
                </p>
            </div>


            {/* ===== GURUJI IMAGE ===== */}
            <div className="av-guruji">
                <div className="av-guruji-frame">
                    <img src={guruji} alt="Guruji" />
                </div>
                <p className="av-guruji-text">
                    गुरुजी की दिव्य कृपा और मार्गदर्शन से प्रेरित
                </p>
            </div>

            {/* ===== MAIN CONTENT ===== */}
            <div className="av-container">

                <div className="av-card">
                    <p>
                        आश्रम की दृष्टि एक ऐसे शांत और पवित्र आध्यात्मिक स्थान का निर्माण करना है,
                        जहाँ साधक गुरुजी के मार्गदर्शन में आस्था, अनुशासन और आत्म-साक्षात्कार की
                        दिशा में आगे बढ़ सकें।
                    </p>

                    <p>
                        आश्रम का उद्देश्य प्रेम, करुणा और आंतरिक शांति का प्रसार करना है,
                        जिससे भक्ति, सेवा और सत्य पर आधारित जीवन को प्रोत्साहन मिले।
                    </p>

                    <p>
                        गुरुजी की शिक्षाओं से प्रेरित होकर आश्रम आध्यात्मिक साधनाओं,
                        सत्संग, सेवा कार्यों और नैतिक मूल्यों के माध्यम से
                        व्यक्ति और समाज के उत्थान हेतु कार्य करता है,
                        ताकि लोग संतुलित और सार्थक जीवन जी सकें।
                    </p>
                </div>

                {/* ===== VALUES ===== */}
                <div className="av-values">
                    <div className="av-value-card">
                        <span>🕉️</span>
                        <h3>आस्था</h3>
                        <p>आध्यात्मिक अनुशासन के माध्यम से भक्ति को सशक्त बनाना</p>
                    </div>

                    <div className="av-value-card">
                        <span>🤲</span>
                        <h3>सेवा</h3>
                        <p>निःस्वार्थ सेवा को आत्मशुद्धि का मार्ग बनाना</p>
                    </div>

                    <div className="av-value-card">
                        <span>🌼</span>
                        <h3>करुणा</h3>
                        <p>दयालुता, प्रेम और संवेदनशीलता के साथ जीवन जीना</p>
                    </div>

                    <div className="av-value-card">
                        <span>✨</span>
                        <h3>सत्य</h3>
                        <p>ईमानदारी के साथ धर्म और सत्य के मार्ग पर चलना</p>
                    </div>
                </div>

                {/* ===== QUOTE ===== */}
                <div className="av-quote">
                    “जब आत्मा शांत होती है, तब जीवन दिव्य बन जाता है।”
                </div>

            </div>
        </section>
    );
};

export default AshramVision;
