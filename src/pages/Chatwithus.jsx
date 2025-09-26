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
      "https://docs.google.com/forms/d/e/1FAIpQLSfu1cIFye5LFlSdq95GotbyRyMDFUIvAxu6FFTKMeK55M6SNA/formResponse";

    const formData = new FormData();
    formData.append("entry.1069862958", name); // Name
    formData.append("entry.1854797946", email); // Email
    formData.append("entry.511072374", phone); // Phone
    formData.append("entry.713951500", question); // Question

    try {
      await fetch(formURL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setSuccessMessage("✅ आपका संदेश सफलतापूर्वक भेज दिया गया!");
      setName("");
      setEmail("");
      setPhone("");
      setQuestion("");

      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Error!", error.message);
      setSuccessMessage("❌ संदेश भेजने में त्रुटि हुई, कृपया पुनः प्रयास करें।");
    }
  };

  return (
    <div className="chatwithus-wrapper">
      {/* Left Side Image */}
      <div className="chat-image-box">
        <img src={sideImage} alt="चैट साइड" />
      </div>

      {/* Right Side Chat Box */}
      <div className="chat-container">
        <h2 className="chat-title">हमसे चैट करें</h2>
        <form className="chat-form" onSubmit={handleSubmit}>
          {/* Name Field - only letters & spaces */}
          <input
            type="text"
            placeholder="अपना नाम दर्ज करें"
            value={name}
            onChange={(e) => {
              const onlyLetters = e.target.value.replace(/[^a-zA-Z\u0900-\u097F\s]/g, "");
              setName(onlyLetters);
            }}
            required
          />

          {/* Email Field */}
          <input
            type="email"
            placeholder="अपना ईमेल दर्ज करें"
            value={email}
            onChange={(e) => {
              const filtered = e.target.value.replace(/[^a-zA-Z0-9@._-]/g, "");
              setEmail(filtered);
            }}
            required
          />

          {/* Phone Field - only digits */}
          <input
            type="tel"
            placeholder="अपना मोबाइल नंबर दर्ज करें (10 अंक)"
            value={phone}
            onChange={(e) => {
              const onlyNums = e.target.value.replace(/\D/g, "");
              setPhone(onlyNums);
            }}
            pattern="\d{10}"
            maxLength={10}
            required
          />

          {/* Question Field */}
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
