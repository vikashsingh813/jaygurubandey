import React, { useState } from "react";
import "./LatestBhajan.css";

const bhajans = [
  {
    id: 1,
    title: "नवीनतम भजन – श्री राम नाम",
    embed: "https://www.youtube.com/embed/SXWtAGqBaNE",
  },
  {
    id: 2,
    title: "नवीनतम भजन – कृष्ण लीला",
    embed: "https://www.youtube.com/embed/QvsZ4SVZhE8",
  },
  {
    id: 3,
    title: "नवीनतम भजन – हनुमान चालीसा",
    embed: "https://www.youtube.com/embed/DXhUMvBtc6o",
  },
  {
    id: 4,
    title: "नवीनतम भजन – शिव भक्ति",
    embed: "https://www.youtube.com/embed/F8CcmJ77jYk",
  },
  {
    id: 5,
    title: "नवीनतम भजन – देवी स्तुति",
    embed: "https://www.youtube.com/embed/uSnPVCL2CzI",
  },
  {
    id: 6,
    title: "नवीनतम भजन – गुरु वंदना",
    embed: "https://www.youtube.com/embed/zB9IL7md6iI",
  },
  {
    id: 7,
    title: "नवीनतम भजन – राम भजन",
    embed: "https://www.youtube.com/embed/tKc0pbP0aSc",
  },
  {
    id: 8,
    title: "नवीनतम भजन – कृष्ण भजन",
    embed: "https://www.youtube.com/embed/MjVr70JW2gA",
  },
];

const PER_PAGE = 6;

const LatestBhajan = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(bhajans.length / PER_PAGE);
  const startIndex = (currentPage - 1) * PER_PAGE;
  const currentBhajans = bhajans.slice(startIndex, startIndex + PER_PAGE);

  return (
    <section className="latest-bhajan">
      <h1 className="bhajan-title">
        नवीनतम <span>भजन</span> 🎵
      </h1>
      <p className="bhajan-subtitle">
        भक्ति और दिव्य संगीत से भरपूर मधुर भजन
      </p>

      <div className="bhajan-grid">
        {currentBhajans.map((bhajan) => (
          <div className="bhajan-card" key={bhajan.id}>
            <div className="bhajan-video">
              <iframe
                src={bhajan.embed}
                title={bhajan.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            <h3>{bhajan.title}</h3>

            <a
              href={bhajan.embed.replace("embed/", "watch?v=")}
              target="_blank"
              rel="noreferrer"
              className="bhajan-btn"
            >
              भजन सुनें
            </a>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="bhajan-pagination">
        <button
          onClick={() => setCurrentPage((p) => p - 1)}
          disabled={currentPage === 1}
        >
          ⬅ पिछला
        </button>

        <span>
          पृष्ठ <strong>{currentPage}</strong> /{" "}
          <strong>{totalPages}</strong>
        </span>

        <button
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={currentPage === totalPages}
        >
          अगला ➡
        </button>
      </div>
    </section>
  );
};

export default LatestBhajan;
