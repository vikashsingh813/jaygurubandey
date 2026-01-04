import React from "react";
import "./UpcomingPrograms.css";

const UpcomingPrograms = () => {
  const programs = [
    {
      title: "🙏 जय गुरुबंदे स्वर योग साधना 🙏",
      subtitle: "🌹 नियमित सत्संग कार्यक्रम 🌹",
      date: "25 दिसंबर 2025",
      day: "गुरुवार",
      time: "दोपहर 12:30 बजे से",
      location: "जय गुरुबंदे आश्रम, छितोना, जल्हूपुर, वाराणसी",
      message:
        "👉 सभी आध्यात्मिक साधकों एवं सत्संग प्रेमियों को सपरिवार इस कार्यक्रम में सादर आमंत्रित किया जाता है। कृपया पधारकर सतगुरु साहेब जी के दिव्य दर्शन एवं आशीर्वाद प्राप्त करें।",
      contact: "📞 7080224214 | 📞 7080224215 | 📞 7080224216",
    },
    {
      title: "🙏 जय गुरुबंदे स्वर योग साधना 🙏",
      subtitle: "🌸 विशेष मासिक सत्संग 🌸",
      date: "12 जनवरी 2026",
      day: "सोमवार",
      time: "प्रातः 10:00 बजे से",
      location: "जय गुरुबंदे आश्रम, छितोना, जल्हूपुर, वाराणसी",
      message:
        "👉 आध्यात्मिक उन्नति, दिव्य आशीर्वाद एवं आंतरिक शांति के लिए सभी भक्तों को इस विशेष मासिक सत्संग में सादर आमंत्रित किया जाता है।",
      contact: "📞 7080224214 | 📞 7080224215",
    },
    {
      title: "🙏 जय गुरुबंदे स्वर योग साधना 🙏",
      subtitle: "🌼 गुरु पूर्णिमा महा सत्संग 🌼",
      date: "21 जुलाई 2026",
      day: "मंगलवार",
      time: "प्रातः 9:00 बजे से",
      location: "जय गुरुबंदे आश्रम, छितोना, जल्हूपुर, वाराणसी",
      message:
        "👉 गुरु पूर्णिमा के पावन अवसर पर सभी श्रद्धालुओं को सतगुरु साहेब जी के दिव्य दर्शन एवं आशीर्वाद प्राप्त करने हेतु सादर आमंत्रित किया जाता है।",
      contact: "📞 7080224216 | 📞 7080224215",
    },
  ];

  return (
    <section className="up-page">
      {/* ===== Page Header ===== */}
      <div className="up-header">
        <h1>आगामी कार्यक्रम 📅</h1>
        <p>आने वाले महत्वपूर्ण आध्यात्मिक कार्यक्रम</p>
      </div>

      {/* ===== Program Cards Grid ===== */}
      <div className="program-grid">
        {programs.map((program, index) => (
          <div className="program-card" key={index}>
            <h2 className="program-title">{program.title}</h2>
            <h3 className="program-subtitle">{program.subtitle}</h3>

            <div className="program-info">
              <p><strong>दिनांक:</strong> {program.date}</p>
              <p><strong>दिन:</strong> {program.day}</p>
              <p><strong>समय:</strong> {program.time}</p>
              <p><strong>स्थान:</strong> {program.location}</p>
            </div>

            <div className="program-message">
              <p>{program.message}</p>
            </div>

            <div className="program-contact">
              <p><strong>संपर्क विवरण:</strong></p>
              <p>{program.contact}</p>
            </div>

            <div className="program-blessing">
              🙏 साहेब सबका 🙏
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingPrograms;
