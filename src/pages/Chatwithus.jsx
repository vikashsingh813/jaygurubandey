import React, { useState } from "react";
import "./Chatwithus.css";
import sideImage from "../assets/guruji.jpg"; // <-- replace with your image path

const ChatWithUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [question, setQuestion] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSeuxiyEAvdTkwzSJUKYhx6BKkqR1bQvyUV2GOELQacWwBAA-g/formResponse";

    const formData = new FormData();
    formData.append("entry.189061439", name);     // Name
    formData.append("entry.1391401379", email);      // Email (replace with actual ID)
    formData.append("entry.1240440170", phone);      // Phone (replace with actual ID)
    formData.append("entry.747611041", question); // Question

    try {
      await fetch(formURL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setSuccessMessage("संदेश सफलतापूर्वक भेजा गया ✅");
      setName("");
      setEmail("");
      setPhone("");
      setQuestion("");

      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Error!", error.message);
      setSuccessMessage("❌ संदेश भेजने में विफल");
    }
  };

  return (
    <div className="chatwithus-wrapper">
      {/* Left Side Image */}
      <div className="chat-image-box">
        <img src={sideImage} alt="Chat Side" />
      </div>

      {/* Right Side Chat Box */}
      <div className="chat-container">
        <h2 className="chat-title">हमसे चैट करें</h2>
        <form className="chat-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="अपना नाम दर्ज करें"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="अपना ईमेल दर्ज करें"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="अपना फ़ोन नंबर दर्ज करें"
            value={phone}
            onChange={(e) => {
              const onlyNums = e.target.value.replace(/\D/g, ""); // remove non-digits
              setPhone(onlyNums);
            }}
            pattern="\d{10}"         // only digits, exactly 10 if you want
            maxLength={10}
            required
          />

          <textarea
            placeholder="अपना प्रश्न दर्ज करें"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
          <button type="submit">संदेश भेजें</button>
        </form>
        {successMessage && <p className="success-msg">{successMessage}</p>}
      </div>
    </div>
  );
};

export default ChatWithUs;
