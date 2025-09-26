import React, { useState } from "react";
import "./Bhajan.css";

const Bhajan = () => {
  const videos = [
    {
      id: 1,
      title: "भजन वीडियो 1",
      embedUrl: "https://www.youtube.com/embed/SXWtAGqBaNE",
      linkUrl: "https://youtu.be/SXWtAGqBaNE?si=V2aMf7Lnbktyw5wu",
    },
    {
      id: 2,
      title: "भजन वीडियो 2",
      embedUrl: "https://www.youtube.com/embed/QvsZ4SVZhE8",
      linkUrl: "https://youtu.be/QvsZ4SVZhE8?si=sS_gOor_witPXIOy",
    },
    {
      id: 3,
      title: "भजन वीडियो 3",
      embedUrl: "https://www.youtube.com/embed/DXhUMvBtc6o",
      linkUrl: "https://youtu.be/DXhUMvBtc6o?si=CDE3MPTg7HUyTHjo",
    },
    {
      id: 4,
      title: "भजन वीडियो 4",
      embedUrl: "https://www.youtube.com/embed/F8CcmJ77jYk",
      linkUrl: "https://youtu.be/F8CcmJ77jYk?si=gUKxFgF3ej3QlIQI",
    },
    {
      id: 5,
      title: "भजन वीडियो 5",
      embedUrl: "https://www.youtube.com/embed/uSnPVCL2CzI",
      linkUrl: "https://youtu.be/uSnPVCL2CzI?si=IWxKX50haeEvgYj6",
    },
    {
      id: 6,
      title: "भजन वीडियो 6",
      embedUrl: "https://www.youtube.com/embed/zB9IL7md6iI",
      linkUrl: "https://youtu.be/zB9IL7md6iI",
    },
    {
      id: 7,
      title: "भजन वीडियो 7",
      embedUrl: "https://www.youtube.com/embed/tKc0pbP0aSc",
      linkUrl: "https://youtu.be/tKc0pbP0aSc",
    },
    {
      id: 8,
      title: "भजन वीडियो 8",
      embedUrl: "https://www.youtube.com/embed/MjVr70JW2gA",
      linkUrl: "https://youtu.be/MjVr70JW2gA",
    },
    {
      id: 9,
      title: "भजन वीडियो 9",
      embedUrl: "https://www.youtube.com/embed/6B-qH5-5JP4",
      linkUrl: "https://www.youtube.com/watch?v=6B-qH5-5JP4",
    },
    {
      id: 10,
      title: "भजन वीडियो 10",
      embedUrl: "https://www.youtube.com/embed/FLrbZNJwZ1U",
      linkUrl: "https://www.youtube.com/watch?v=FLrbZNJwZ1U",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 6;

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  const totalPages = Math.ceil(videos.length / videosPerPage);

  return (
    <div className="bhajan-container">
      <h1 className="bhajan-title">भजन के पल</h1>

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
      <div className="bhajan-buttons">
        <a
          href="https://drive.google.com/file/d/1OGK0CvhcMuOLFovRhHJUB8y6ew8VmnRX/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          सतगुरु चालीसा <span className="arrow">→</span>
        </a>

        <a
          href="https://drive.google.com/file/d/1cC-yBNHHyyvnal3NNsQdmc1iQcaOiAp6/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          सतगुरु आरती <span className="arrow">→</span>
        </a>

        <a
          href="https://drive.google.com/file/d/your-bhajan-sangrah-link/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          भजन संग्रह <span className="arrow">→</span>
        </a>
      </div>
    </div>
  );
};

export default Bhajan;
