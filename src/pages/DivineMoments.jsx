import React, { useState } from "react";
import "./DivineMoments.css";

import gurujiNewYear from "../assets/guruji.jpg";
import satsangImage from "../assets/vision.jpg";

const MOMENTS = [
  {
    id: 1,
    title: "गुरुजी के साथ नववर्ष दर्शन",
    date: "01",
    month: "January",
    year: "2025",
    type: "दर्शन",
    description:
      "नववर्ष की पावन सुबह गुरुजी के दर्शन का सौभाग्य प्राप्त हुआ। भक्तों ने प्रातःकाल एकत्र होकर प्रसाद प्राप्त किया।",
    image: gurujiNewYear,
  },
  {
    id: 2,
    title: "गुरु कृपा पर विशेष सत्संग",
    date: "15",
    month: "March",
    year: "2025",
    type: "सत्संग",
    description:
      "गुरु कृपा विषय पर संध्या सत्संग, जिसमें भजन, कीर्तन एवं भक्तों द्वारा अनुभव साझा किए गए।",
    image: satsangImage,
  },
  {
    id: 3,
    title: "पूर्णिमा भजन संध्या",
    date: "24",
    month: "July",
    year: "2024",
    type: "भजन",
    description:
      "पूर्णिमा की पावन संध्या में गहन ध्यान एवं भावपूर्ण कीर्तन।",
    image: satsangImage,
  },
];

const MONTH_ORDER = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

// 👉 Month display in Hindi (value stays English)
const MONTH_HI = {
  January: "जनवरी",
  February: "फ़रवरी",
  March: "मार्च",
  April: "अप्रैल",
  May: "मई",
  June: "जून",
  July: "जुलाई",
  August: "अगस्त",
  September: "सितंबर",
  October: "अक्टूबर",
  November: "नवंबर",
  December: "दिसंबर",
};

const DivineMoments = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  const years = [...new Set(MOMENTS.map((m) => m.year))].sort().reverse();

  const monthsForYear = selectedYear
    ? [
        ...new Set(
          MOMENTS.filter((m) => m.year === selectedYear).map((m) => m.month)
        ),
      ].sort((a, b) => MONTH_ORDER.indexOf(a) - MONTH_ORDER.indexOf(b))
    : [];

  const filteredMoments = MOMENTS.filter((m) => {
    if (!selectedYear || !selectedMonth) return false;
    return m.year === selectedYear && m.month === selectedMonth;
  });

  return (
    <div className="dm-page">
      <div className="dm-inner">
        {/* HEADER */}
        <div className="dm-header">
          <h1 className="dm-title">✨ दिव्य क्षण ✨</h1>
          <p className="dm-subtitle">
            गुरुजी के साथ बिताए पावन क्षणों को पुनः अनुभव करने हेतु वर्ष एवं माह चुनें।
          </p>

          <div className="dm-filters">
            <div className="dm-select-group">
              <label>वर्ष</label>
              <select
                value={selectedYear}
                onChange={(e) => {
                  setSelectedYear(e.target.value);
                  setSelectedMonth("");
                }}
              >
                <option value="">वर्ष चुनें</option>
                {years.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>

            <div className="dm-select-group">
              <label>माह</label>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                disabled={!selectedYear}
              >
                <option value="">
                  {selectedYear ? "माह चुनें" : "पहले वर्ष चुनें"}
                </option>
                {monthsForYear.map((m) => (
                  <option key={m} value={m}>
                    {MONTH_HI[m]}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* INFO MESSAGES */}
        {!selectedYear && (
          <div className="dm-info-message">
            कृपया पहले <strong>वर्ष</strong> चुनें, फिर <strong>माह</strong> चुनें।
          </div>
        )}

        {selectedYear && !selectedMonth && (
          <div className="dm-info-message">
            चयनित वर्ष: <strong>{selectedYear}</strong>। अब कृपया माह चुनें।
          </div>
        )}

        {selectedYear && selectedMonth && filteredMoments.length === 0 && (
          <div className="dm-info-message">
            <strong>{MONTH_HI[selectedMonth]} {selectedYear}</strong> के लिए अभी कोई दिव्य क्षण उपलब्ध नहीं है।
          </div>
        )}

        {/* MOMENTS LIST */}
        <div className="dm-list">
          {filteredMoments.map((moment) => (
            <div className="dm-card" key={moment.id}>
              <div className="dm-image-wrapper">
                <img src={moment.image} alt={moment.title} className="dm-image" />
              </div>

              <div className="dm-arrow">➜</div>

              <div className="dm-content">
                <div className="dm-meta">
                  <span className="dm-date">
                    {moment.date} {MONTH_HI[moment.month]} {moment.year}
                  </span>
                  <span className="dm-type">{moment.type}</span>
                </div>

                <h3 className="dm-card-title">{moment.title}</h3>
                <p className="dm-description">{moment.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DivineMoments;
