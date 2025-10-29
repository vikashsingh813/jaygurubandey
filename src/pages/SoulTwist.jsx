import React, { useState } from "react";
import "./SoulTwist.css";
import img1 from "../assets/guruji.jpg";
import img2 from "../assets/guruji.jpg";
import img3 from "../assets/guruji.jpg";
import img4 from "../assets/guruji.jpg";

const SoulTwist = () => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const images = [
    { src: img1, alt: "SoulTwist 1", date: "20 अक्टूबर 2025" },
    { src: img2, alt: "SoulTwist 2", date: "22 अक्टूबर 2025" },
    { src: img3, alt: "SoulTwist 3", date: "24 अक्टूबर 2025" },
    { src: img4, alt: "SoulTwist 4", date: "20 अक्टूबर 2024" },
  ];

  const filteredImages =
    selectedMonth && selectedYear
      ? images.filter((img) => {
          const [day, month, year] = img.date.split(" ");
          return month.includes(selectedMonth) && year === selectedYear;
        })
      : [];

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
    setSelectedYear("");
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const monthOptions = [
    { value: "जनवरी", label: "जनवरी" },
    { value: "फ़रवरी", label: "फ़रवरी" },
    { value: "मार्च", label: "मार्च" },
    { value: "अप्रैल", label: "अप्रैल" },
    { value: "मई", label: "मई" },
    { value: "जून", label: "जून" },
    { value: "जुलाई", label: "जुलाई" },
    { value: "अगस्त", label: "अगस्त" },
    { value: "सितंबर", label: "सितंबर" },
    { value: "अक्टूबर", label: "अक्टूबर" },
    { value: "नवंबर", label: "नवंबर" },
    { value: "दिसंबर", label: "दिसंबर" },
  ];

  const yearOptions = ["2023", "2024", "2025"];

  return (
    <div className="soul-page">
      <h2 className="soul-title">आत्मिक पल</h2>
      <div className="soul-line"></div>

      {/* Dropdown Filters */}
      <div className="soul-filters">
        <select value={selectedMonth} onChange={handleMonthChange}>
          <option value="" disabled>
            महीना चुनें
          </option>
          {monthOptions.map((month) => (
            <option key={month.value} value={month.value}>
              {month.label}
            </option>
          ))}
        </select>

        <select value={selectedYear} onChange={handleYearChange} disabled={!selectedMonth}>
          <option value="" disabled>
            वर्ष चुनें
          </option>
          {yearOptions.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Gallery or Prompt */}
      {!selectedMonth || !selectedYear ? (
        <p className="no-images">कृपया तस्वीर देखने के लिए महीना और वर्ष चुनें।</p>
      ) : filteredImages.length > 0 ? (
        <div className="soul-gallery">
          {filteredImages.map((img, index) => (
            <div className="soul-card" key={index}>
              <div className="soul-image-container">
                <img src={img.src} alt={img.alt} className="soul-image" />
              </div>
              <div className="soul-date">
                <p>
                  <strong>तिथि:</strong> {img.date}
                </p>
              </div>
              <div className="soul-download">
                <a href={img.src} download={`SoulTwist_${index + 1}.jpg`} className="download-button">
                  डाउनलोड करें
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-images">इस चयन के अनुसार कोई तस्वीर उपलब्ध नहीं है।</p>
      )}
    </div>
  );
};

export default SoulTwist;
