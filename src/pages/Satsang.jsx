import React, { useState } from "react";
import "./Satsang.css";

const Satsang = () => {
  const videos = [
    {
      id: 1,
      title: "सत्संग वीडियो 1",
      embedUrl: "https://www.youtube.com/embed/su7VYdVdn-M",
      linkUrl: "https://www.youtube.com/live/su7VYdVdn-M?si=Hf4L8v5t1X3GjmLv",
    },
    {
      id: 2,
      title: "सत्संग वीडियो 2",
      embedUrl: "https://www.youtube.com/embed/0gbUwz9uc78",
      linkUrl: "https://www.youtube.com/live/0gbUwz9uc78?si=gbyM2-962bcKQtPK",
    },
    {
      id: 3,
      title: "सत्संग वीडियो 3",
      embedUrl: "https://www.youtube.com/embed/X5LPFy50VdY",
      linkUrl: "https://www.youtube.com/live/X5LPFy50VdY?si=C-Rozj2xmj_YDsH7",
    },
    {
      id: 4,
      title: "सत्संग वीडियो 4",
      embedUrl: "https://www.youtube.com/embed/InNsbUsqhns",
      linkUrl: "https://www.youtube.com/live/InNsbUsqhns?si=fUgfjkVIgswBWght",
    },
    {
      id: 5,
      title: "सत्संग वीडियो 5",
      embedUrl: "https://www.youtube.com/embed/_RfgvDG0oHA",
      linkUrl: "https://www.youtube.com/live/_RfgvDG0oHA?si=alZWuIwh1oyfc9mM",
    },
    {
      id: 6,
      title: "सत्संग वीडियो 6",
      embedUrl: "https://www.youtube.com/embed/MqJaPpO7yek?si=PQ0satWzucqIpi_8",
      linkUrl: "https://www.youtube.com/live/MqJaPpO7yek?si=PQ0satWzucqIpi_8",
    },
    {
      id: 7,
      title: "सत्संग वीडियो 7",
      embedUrl: "https://www.youtube.com/embed/ukHXW8T_8z4",
      linkUrl: "https://youtu.be/ukHXW8T_8z4",
    },
    {
      id: 8,
      title: "सत्संग वीडियो 8",
      embedUrl: "https://www.youtube.com/embed/gxKxXbX4NiY?si=gfn67CoV2aSXk696",
      linkUrl: "https://www.youtube.com/live/gxKxXbX4NiY?si=gfn67CoV2aSXk696",
    },
    {
      id: 9,
      title: "सत्संग वीडियो 9",
      embedUrl: "https://www.youtube.com/embed/Bm03O_ViuMY?si=3-gt6Ok8-4-GOjWA",
      linkUrl: "https://www.youtube.com/watch?v=Bm03O_ViuMY&si=3-gt6Ok8-4-GOjWA",
    },
    {
      id: 10,
      title: "सत्संग वीडियो 10",
      embedUrl: "https://www.youtube.com/embed/WalaJzM6pfY",
      linkUrl: "https://www.youtube.com/watch?v=WalaJzM6pfY",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 6;

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  const totalPages = Math.ceil(videos.length / videosPerPage);

  return (
    <div className="satsang-container">
      <h1 className="satsang-title">अमृतवाणी</h1>

      {/* वीडियो ग्रिड */}
      <div className="video-grid">
        {currentVideos.map((video) => (
          <div key={video.id} className="video-card">
            <iframe src={video.embedUrl} title={video.title} allowFullScreen></iframe>
            <a href={video.linkUrl} target="_blank" rel="noopener noreferrer">
              देखें {video.title}
            </a>
          </div>
        ))}
      </div>

      {/* पृष्ठक्रमण */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          ← पिछला
        </button>
        <span className="page-circle">
          पृष्ठ {currentPage} / {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          अगला →
        </button>
      </div>

      {/* बटन सेक्शन */}
      <div className="satsang-buttons">
        <a
          href="https://drive.google.com/file/d/1jEzeXzcdI7qOkSmWoRUn4sJcfwgmykQk/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          अनमोल राखी <span className="arrow">→</span>
        </a>

        <a
          href="https://drive.google.com/file/d/your-hari-pagh-link/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          हरि पग <span className="arrow">→</span>
        </a>
        <a
          href="https://drive.google.com/file/d/your-anmol-wadi-link/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          अनमोल वाडी <span className="arrow">→</span>
        </a>
      </div>
    </div>
  );
};

export default Satsang;
