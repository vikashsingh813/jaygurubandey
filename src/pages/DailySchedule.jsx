import React from "react";
import "./DailySchedule.css";

function DailySchedule() {
  const morningSchedule = [
    { title: "पूज्य महाराज जी द्वारा दैनिक प्रातः सत्संग", time: "सुबह 4:15 बजे - 5:45 बजे" },
    { title: "श्री जी की मंगला आरती", time: "सुबह 5:45 बजे - 6:30 बजे" },
    { title: "राधा सुधानिधि पाठ (सोमवार, शुक्रवार)", time: "सुबह 6:30 बजे - 8:15 बजे" },
    { title: "सेवक वाणी पाठ (मंगलवार)", time: "सुबह 6:30 बजे - 8:15 बजे" },
    { title: "हित चौरासी पाठ (बुध, गुरु, शनि, रवि)", time: "सुबह 6:30 बजे - 8:15 बजे" },
    { title: "दैनिक एकांतिक वार्तालाप", time: "सुबह 7:00 बजे - 8:00 बजे" },
  ];

  const afternoonSchedule = [
    { title: "धूप आरती", time: "शाम 4:00 बजे - 4:15 बजे" },
    { title: "दैनिक सायं वाणीपाठ", time: "शाम 4:15 बजे - 5:15 बजे" },
    { title: "व्यूहला महोत्सव (रविवार)", time: "शाम 4:15 बजे - 5:45 बजे" },
    { title: "सत्संग (सोमवार, गुरुवार)", time: "शाम 5:15 बजे - 5:45 बजे" },
    { title: "भक्त चरित्र (मंगल, बुध, शुक्र, शनि)", time: "शाम 5:15 बजे - 5:45 बजे" },
    { title: "सायं आरती", time: "शाम 5:45 बजे - 6:00 बजे" },
  ];

  const eveningSchedule = [
    { title: "पूज्य महाराज जी द्वारा रात्रि सत्संग", time: "रात्रि 8:00 बजे - 9:00 बजे" },
    { title: "रसिक पाठ", time: "रात्रि 9:00 बजे - 9:30 बजे" },
    { title: "भजन कीर्तन", time: "रात्रि 9:30 बजे - 10:00 बजे" },
    { title: "शयन आरती", time: "रात्रि 10:00 बजे - 10:15 बजे" },
    { title: "एकांतिक वार्ता", time: "रात्रि 10:15 बजे - 10:30 बजे" },
  ];

  return (
    <div className="schedule-page">
      <h1 className="main-title">दैनिक कार्यक्रम</h1>

      <div className="schedule-container">
        {/* सुबह का कार्यक्रम */}
        <div className="schedule-section">
          <h2 className="schedule-title">प्रातः कार्यक्रम</h2>
          <ul className="schedule-list">
            {morningSchedule.map((item, i) => (
              <li key={i} className="schedule-item">
                <span className="schedule-text">{item.title}</span>
                <span className="schedule-time">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* दोपहर का कार्यक्रम */}
        <div className="schedule-section">
          <h2 className="schedule-title">सायं कार्यक्रम</h2>
          <ul className="schedule-list">
            {afternoonSchedule.map((item, i) => (
              <li key={i} className="schedule-item">
                <span className="schedule-text">{item.title}</span>
                <span className="schedule-time">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* रात्रि का कार्यक्रम */}
        <div className="schedule-section">
          <h2 className="schedule-title">रात्रि कार्यक्रम</h2>
          <ul className="schedule-list">
            {eveningSchedule.map((item, i) => (
              <li key={i} className="schedule-item">
                <span className="schedule-text">{item.title}</span>
                <span className="schedule-time">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DailySchedule;
