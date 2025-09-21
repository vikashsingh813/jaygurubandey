import React, { useState } from "react";
import "./program.css";
import gurujiImage from "../assets/guruji.jpg";

const Program = () => {
  const data = [
    {
      id: 1,
      year: 2025,
      status: "Completed",
      type: "Satsang",
      title: "Completed Satsang",
      description: `🌺 Jai Gurubande Swara Yoga Sadhana 🌺

🌹 Satsang & Bhandara 🌹

Organizers: Shri Om Prakash Yadav & Family  
Contact: 8448337202, 7589076439

👉 We warmly invite all Satsang devotees to attend and receive the divine darshan and blessings of Satguru Sahib Ji.`,
      image: gurujiImage,
      time: "🕔 Time: From 5:00 PM onwards",
      date: "📅 Date: 15th June 2025, Sunday",
      location: "📍 Venue: Vishunpur Kolapatti, Post - Abu Sahidpur, Azamgarh",
    },
    {
      id: 2,
      year: 2025,
      status: "Upcoming",
      type: "Satsang",
      title: "Upcoming Satsang",
      description: `🌺 Jai Gurubande Swara Yoga Sadhana 🌺

🌹 Satsang & Bhandara 🌹

Date: 17th September 2025  
Time: From 7:00 PM onwards  
Venue: Village Silhata, Post Saraybharti, District Ballia

Organizers: Shri Kalpnath Yadav Ji  
Contact: 9756302073

👉 All devotees are requested to attend and receive blessings.`,
      image: gurujiImage,
      time: "🕖 Time: From 7:00 PM onwards",
      date: "📅 Date: 17th September 2025, Wednesday",
      location: "📍 Venue: Village Silhata, Post Saraybharti, District Ballia",
    },
    {
      id: 3,
      year: 2025,
      status: "पूरा हुआ",
      type: "यात्रा सूचना",
      title: "पूरा हुआ यात्रा सूचना",
      description: `जय गुरुबंदे स्वर योग साधना

सतगुरु साहिब अंतरराष्ट्रीय सत्संग कार्यक्रम के बाद बाबतपुर हवाई अड्डा, वाराणसी पहुँचे।

दर्शन समय: शाम 5:30 बजे  
स्थान: बाबतपुर हवाई अड्डा, वाराणसी`,
      image: gurujiImage,
      time: "🕠 सतगुरु साहिब के दर्शन: शाम 5:30 बजे",
      date: "📅 तारीख: 15 सितंबर 2025, सोमवार",
      location: "📍 स्थान: बाबतपुर हवाई अड्डा, वाराणसी",
    },
    {
      id: 4,
      year: 2025,
      status: "आगामी",
      type: "यात्रा सूचना",
      title: "आगामी यात्रा सूचना",
      description: `सूचना: सतगुरु साहिब बाबतपुर हवाई अड्डे, वाराणसी पहुँचेंगे।

दर्शन समय: शाम 5:30 बजे  
स्थान: बाबतपुर हवाई अड्डा, वाराणसी`,
      image: gurujiImage,
      time: "🕠 सतगुरु साहिब के दर्शन: शाम 5:30 बजे",
      date: "📅 तारीख: 15 सितंबर 2025, सोमवार",
      location: "📍 स्थान: बाबतपुर हवाई अड्डा, वाराणसी",
    },
    {
      id: 5,
      year: 2025,
      status: "पूरा हुआ",
      type: "आश्रम कार्यक्रम",
      title: "पूरा हुआ आश्रम कार्यक्रम",
      description: `🙏 जय गुरुबंदे स्वर योग साधना 🙏

तारीख: 01 सितंबर 2025  
समय: दोपहर 12:00 बजे से  
स्थान: जय गुरुबंदे आश्रम, चितौना, जल्हुपुर, वाराणसी

संपर्क: 7080224214, 7080224215, 7080224216

👉 सभी भक्त उपस्थित हुए और आशीर्वाद प्राप्त किया।`,
      image: gurujiImage,
      time: "🕛 समय: दोपहर 12:00 बजे से",
      date: "📅 तारीख: 01 सितंबर 2025, सोमवार",
      location: "📍 स्थान: जय गुरुबंदे आश्रम, चितौना, जल्हुपुर, वाराणसी",
    },
    {
      id: 6,
      year: 2025,
      status: "आगामी",
      type: "आश्रम कार्यक्रम",
      title: "आगामी आश्रम कार्यक्रम",
      description: `🌺 जय गुरुबंदे स्वर योग साधना 🌺

तारीख: 17 सितंबर 2025  
समय: दोपहर 12:00 बजे से  
स्थान: ऑटो टेक मारुति कार्यशाला, नादेसर ग़ौसाबाद, वाराणसी

आयोजक: श्री महेंद्र मिस्त्री, श्री प्रदीप यादव, श्री मनोज कुमार  
संपर्क: 6393271872, 9451890721

👉 सभी भक्तों को विश्वकर्मा पूजा के अवसर पर आमंत्रित किया जाता है ताकि वे आशीर्वाद प्राप्त कर सकें।`,
      image: gurujiImage,
      time: "🕛 समय: दोपहर 12:00 बजे से",
      date: "📅 तारीख: 17 सितंबर 2025, बुधवार",
      location: "📍 स्थान: ऑटो टेक मारुति कार्यशाला, नादेसर ग़ौसाबाद, वाराणसी",
    },
  ];

  const [selectedProgram, setSelectedProgram] = useState("");

  const programOptions = data.map(
    (item) => `${item.year} ${item.status} ${item.type}`
  );

  const filteredData = selectedProgram
    ? data.filter(
      (item) =>
        `${item.year} ${item.status} ${item.type}` === selectedProgram
    )
    : [];

  return (
    <div className="program-container">
      {/* Program Dropdown */}
      <div className="dropdown-group">
        <label htmlFor="program">कार्यक्रम चुनें :</label>
        <select
          id="program"
          value={selectedProgram}
          onChange={(e) => setSelectedProgram(e.target.value)}
        >
          <option value="">-- कार्यक्रम चुनें --</option>
          {programOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Program Cards */}
      {filteredData.length > 0 ? (
        filteredData.map((item) => (
          <div className="program-card" key={item.id}>
            <div className="program-image">
              <img src={item.image} alt={item.title} />
            </div>
            <h2 className="program-title">{item.title}</h2>
            <p
              className="program-description"
              style={{ whiteSpace: "pre-line" }}
            >
              {item.description}
            </p>
            <p className="program-time">{item.time}</p>
            <p className="program-date">{item.date}</p>
            <p className="program-location">{item.location}</p>
          </div>
        ))
      ) : (
        selectedProgram && (
          <p style={{ color: "#fff", marginTop: "20px" }}>
            इस चयन के लिए कोई कार्यक्रम नहीं मिला।
          </p>
        )
      )}
    </div>
  );
};

export default Program;
