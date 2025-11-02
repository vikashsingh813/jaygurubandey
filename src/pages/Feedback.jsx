import React, { useState } from "react";
import "./Feedback.css";

const Feedback = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    rating: "",
    feedback: "",
    issues: "",
    contact: "",
  });
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // सत्यापन नियम
    if (name === "fullName") {
      const valid = /^[A-Za-z\s]*$/;
      if (!valid.test(value)) return;
    }

    if (name === "email") {
      const valid = /^[A-Za-z0-9@._]*$/;
      if (!valid.test(value)) return;
    }

    if (name === "feedback") {
      const valid = /^[A-Za-z0-9\s.,!?'"()-]*$/;
      if (!valid.test(value)) return;
    }

    // यदि "issues" का मान "Yes" हो तो contact को "Yes" सेट करें
    if (name === "issues" && value === "Yes") {
      setFormData({ ...formData, [name]: value, contact: "Yes" });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.rating ||
      !formData.feedback ||
      !formData.issues ||
      !formData.contact
    ) {
      alert("कृपया सभी आवश्यक फ़ील्ड भरें");
      return;
    }

    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLScf4ZHbRqnSXPLPAkigv8r5vpnFxAvrVDyebp8CTx68K8z0Lw/formResponse";

    const data = new FormData();
    data.append("entry.1857278895", formData.fullName); // पूरा नाम
    data.append("entry.507307777", formData.email); // ईमेल
    data.append("entry.2055035440", formData.rating); // रेटिंग
    data.append("entry.109448343", formData.feedback); // प्रतिक्रिया
    data.append("entry.1041245354", formData.issues); // समस्याएँ
    data.append("entry.1655150439", formData.contact); // संपर्क

    try {
      await fetch(formURL, {
        method: "POST",
        body: data,
        mode: "no-cors",
      });

      setSuccessMsg("✅ आपकी प्रतिक्रिया के लिए धन्यवाद!");
      setFormData({
        fullName: "",
        email: "",
        rating: "",
        feedback: "",
        issues: "",
        contact: "",
      });

      setTimeout(() => setSuccessMsg(""), 4000);
    } catch (err) {
      console.error("फ़ॉर्म सबमिट करने में त्रुटि:", err);
      setSuccessMsg("❌ सबमिट असफल रहा। कृपया पुनः प्रयास करें।");
    }
  };

  return (
    <div className="feedback-page">
      <div className="feedback-container">
        <h1 className="feedback-title">🙏 भक्त प्रतिक्रिया फ़ॉर्म</h1>

        <form className="feedback-form" onSubmit={handleSubmit}>
          <label>
            पूरा नाम <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="केवल अक्षर दर्ज करें"
          />

          <label>
            ईमेल पता <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="example@gmail.com"
          />

          <label>
            समग्र रेटिंग <span style={{ color: "red" }}>*</span>
          </label>
          <div className="rating-group">
            {[1, 2, 3, 4, 5].map((star) => (
              <label key={star}>
                <input
                  type="radio"
                  name="rating"
                  value={star}
                  checked={formData.rating === String(star)}
                  onChange={handleChange}
                />
                <span className="star">★</span>
              </label>
            ))}
          </div>

          <label>
            आपकी प्रतिक्रिया <span style={{ color: "red" }}>*</span>
          </label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
            placeholder="यहाँ अपनी प्रतिक्रिया लिखें..."
          ></textarea>

          <label>
            क्या आपको कोई समस्या हुई? <span style={{ color: "red" }}>*</span>
          </label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="issues"
                value="Yes"
                checked={formData.issues === "Yes"}
                onChange={handleChange}
              />{" "}
              हाँ
            </label>
            <label>
              <input
                type="radio"
                name="issues"
                value="No"
                checked={formData.issues === "No"}
                onChange={handleChange}
              />{" "}
              नहीं
            </label>
          </div>

          <label>
            क्या आप चाहते हैं कि हम आपसे संपर्क करें?{" "}
            <span style={{ color: "red" }}>*</span>
          </label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="contact"
                value="Yes"
                checked={formData.contact === "Yes"}
                onChange={handleChange}
              />{" "}
              हाँ
            </label>

            {/* 👇 यदि उपयोगकर्ता ने "हाँ" नहीं चुना है, तो "नहीं" दिखाएँ */}
            {formData.issues !== "Yes" && (
              <label>
                <input
                  type="radio"
                  name="contact"
                  value="No"
                  checked={formData.contact === "No"}
                  onChange={handleChange}
                />{" "}
                नहीं
              </label>
            )}
          </div>

          <button type="submit" className="submit-btn">
            प्रतिक्रिया सबमिट करें
          </button>

          {successMsg && <p className="success-msg">{successMsg}</p>}
        </form>
      </div>
    </div>
  );
};

export default Feedback;
