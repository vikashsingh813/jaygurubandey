import React, { useState } from "react";
import "./Gallery.css";

// Import images
import photo6 from "../assets/photo6.jpg";
import photo7 from "../assets/photo7.jpg";
import photo8 from "../assets/photo8.jpg";
import photo2 from "../assets/photo2.jpg";
import photo9 from "../assets/photo9.jpg";
import photo10 from "../assets/photo10.jpg";
import photo11 from "../assets/photo11.jpg";
import photo12 from "../assets/photo12.jpg";
import photo13 from "../assets/photo13.jpg";
import photo14 from "../assets/photo14.jpg";
import photo15 from "../assets/photo15.jpg";
import photo16 from "../assets/photo16.jpg";
import photo17 from "../assets/photo17.jpg";
import photo18 from "../assets/photo18.jpg";
import photo19 from "../assets/photo19.jpg";
import photo20 from "../assets/photo20.jpg";
import photo21 from "../assets/photo21.jpg";
import photo22 from "../assets/photo22.jpg";
import photo23 from "../assets/photo23.jpg";

const photos = [
  { id: 1, src: photo23, alt: "चित्र 23" },
  { id: 2, src: photo2, alt: "चित्र 2" },
  { id: 3, src: photo9, alt: "चित्र 9" },
  { id: 4, src: photo6, alt: "चित्र 6" },
  { id: 5, src: photo7, alt: "चित्र 7" },
  { id: 6, src: photo8, alt: "चित्र 8" },
  { id: 7, src: photo10, alt: "चित्र 10" },
  { id: 8, src: photo11, alt: "चित्र 11" },
  { id: 9, src: photo12, alt: "चित्र 12" },
  { id: 10, src: photo13, alt: "चित्र 13" },
  { id: 11, src: photo14, alt: "चित्र 14" },
  { id: 12, src: photo15, alt: "चित्र 15" },
  { id: 13, src: photo16, alt: "चित्र 16" },
  { id: 14, src: photo17, alt: "चित्र 17" },
  { id: 15, src: photo18, alt: "चित्र 18" },
  { id: 16, src: photo19, alt: "चित्र 19" },
  { id: 17, src: photo20, alt: "चित्र 20" },
  { id: 18, src: photo21, alt: "चित्र 21" },
  { id: 19, src: photo22, alt: "चित्र 22" },
];

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 10;

  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  const totalPages = Math.ceil(photos.length / photosPerPage);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">गैलरी</h2>

      <div className="gallery-grid">
        {currentPhotos.map((photo) => (
          <div key={photo.id} className="gallery-item">
            <img src={photo.src} alt={photo.alt} className="gallery-photo" />
            <a href={photo.src} download className="download-btn">
              डाउनलोड करें
            </a>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          ← पिछला
        </button>

        <span>
          पृष्ठ {currentPage} / {totalPages}
        </span>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          अगला →
        </button>
      </div>
    </div>
  );
};

export default Gallery;
