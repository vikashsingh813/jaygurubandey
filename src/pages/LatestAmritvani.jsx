import React, { useState } from "react";
import "./LatestAmritvani.css";

const videos = [
  {
    id: 1,
    title: "नवीनतम सत्संग – विजयवाड़ा",
    embed: "https://www.youtube.com/embed/su7VYdVdn-M",
  },
  {
    id: 2,
    title: "नवीनतम सत्संग – वाराणसी",
    embed: "https://www.youtube.com/embed/InNsbUsqhns",
  },
  {
    id: 3,
    title: "नवीनतम सत्संग – गोवा",
    embed: "https://www.youtube.com/embed/X5LPFy50VdY",
  },
  {
    id: 4,
    title: "नवीनतम सत्संग – दिल्ली",
    embed: "https://www.youtube.com/embed/su7VYdVdn-M",
  },
  {
    id: 5,
    title: "नवीनतम सत्संग – मुंबई",
    embed: "https://www.youtube.com/embed/InNsbUsqhns",
  },
  {
    id: 6,
    title: "नवीनतम सत्संग – जयपुर",
    embed: "https://www.youtube.com/embed/X5LPFy50VdY",
  },
  {
    id: 7,
    title: "नवीनतम सत्संग – चेन्नई",
    embed: "https://www.youtube.com/embed/su7VYdVdn-M",
  },
  {
    id: 8,
    title: "नवीनतम सत्संग – कोलकाता",
    embed: "https://www.youtube.com/embed/InNsbUsqhns",
  },
];

const PER_PAGE = 6;

const LatestAmritvani = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(videos.length / PER_PAGE);

  const startIndex = (currentPage - 1) * PER_PAGE;
  const currentVideos = videos.slice(startIndex, startIndex + PER_PAGE);

  const goPrev = () => {
    if (currentPage > 1) setCurrentPage((p) => p - 1);
  };

  const goNext = () => {
    if (currentPage < totalPages) setCurrentPage((p) => p + 1);
  };

  return (
    <section className="latest-amritvani">
      <h1 className="latest-title">
        नवीनतम <span>अमृतवाणी</span> 🆕
      </h1>

      <p className="latest-subtitle">
        हाल ही के सत्संग वीडियो एवं दिव्य प्रवचन
      </p>

      <div className="latest-grid">
        {currentVideos.map((video) => (
          <div className="latest-card" key={video.id}>
            <div className="latest-video">
              <iframe
                src={video.embed}
                title={video.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            <h3>{video.title}</h3>

            <a
              href={video.embed.replace("embed/", "watch?v=")}
              target="_blank"
              rel="noreferrer"
              className="latest-btn"
            >
              सत्संग देखें
            </a>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="latest-pagination">
        <button onClick={goPrev} disabled={currentPage === 1}>
          ⬅ पिछला
        </button>

        <span>
          पृष्ठ <strong>{currentPage}</strong> / <strong>{totalPages}</strong>
        </span>

        <button onClick={goNext} disabled={currentPage === totalPages}>
          अगला ➡
        </button>
      </div>
    </section>
  );
};

export default LatestAmritvani;
