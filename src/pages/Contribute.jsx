import React, { useState } from "react";
import "./Contribute.css";
import qrImg from "../assets/scanner.jpg";

// ✅ Same Apps Script URL as English site
const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxjEChyTBmqyA4kB8fkR058PrZWBTEc9lStNTz1JZ_ICdQllGl1n8Vd2bFk73AR6toa/exec";

const Contribute = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    amount: "",
    transactionId: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const showMessage = (text, time = 4000) => {
    setMessage(text);
    setTimeout(() => setMessage(""), time);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "name") {
      // Hindi + English letters allowed
      newValue = value.replace(/[^a-zA-Z\s\u0900-\u097F]/g, "");
    }

    if (name === "phone") {
      newValue = value.replace(/\D/g, "").slice(0, 10);
    }

    if (name === "amount") {
      newValue = value.replace(/\D/g, "");
      if (parseInt(newValue || "0", 10) > 100000) {
        newValue = "100000";
      }
    }

    if (name === "transactionId") {
      newValue = value.replace(/\D/g, "").slice(0, 12);
    }

    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    let errors = [];

    if (!formData.name.trim()) {
      errors.push("❌ नाम आवश्यक है।");
    }

    if (formData.phone.length !== 10) {
      errors.push("❌ मोबाइल नंबर ठीक 10 अंकों का होना चाहिए।");
    }

    const amountNum = parseInt(formData.amount, 10);
    if (!amountNum || amountNum <= 0) {
      errors.push("❌ राशि 0 से अधिक होनी चाहिए।");
    } else if (amountNum > 100000) {
      errors.push("❌ राशि ₹1,00,000 से अधिक नहीं हो सकती।");
    }

    if (formData.transactionId.length !== 12) {
      errors.push("❌ लेन-देन आईडी ठीक 12 अंकों की होनी चाहिए।");
    }

    // ❌ Validation errors
    if (errors.length > 0) {
      showMessage(errors.join("\n"));

      // 🔥 Clear all fields (same as English)
      setFormData({
        name: "",
        phone: "",
        amount: "",
        transactionId: "",
      });
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        body: new URLSearchParams({
          name: formData.name,
          phone: formData.phone,
          amount: formData.amount,
          transactionId: formData.transactionId,
        }),
      });

      const text = await response.text();

      // ❌ Duplicate transaction (server-side)
      if (text === "Duplicate transaction") {
        showMessage("❌ यह लेन-देन आईडी पहले से सबमिट की जा चुकी है।");

        setFormData({
          name: "",
          phone: "",
          amount: "",
          transactionId: "",
        });
        return;
      }

      // ✅ Success
      if (text === "Success") {
        showMessage("✅ आपका योगदान सफलतापूर्वक दर्ज हो गया है!", 3000);

        setFormData({
          name: "",
          phone: "",
          amount: "",
          transactionId: "",
        });
        return;
      }

      // ❌ Unknown response
      showMessage("❌ कुछ गलत हो गया। कृपया पुनः प्रयास करें।");

      setFormData({
        name: "",
        phone: "",
        amount: "",
        transactionId: "",
      });
    } catch {
      // ❌ Server error
      showMessage("❌ सर्वर त्रुटि। कृपया बाद में प्रयास करें।");

      setFormData({
        name: "",
        phone: "",
        amount: "",
        transactionId: "",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contribute-container">
      <h1 className="contribute-title">योगदान करें</h1>

      <div className="contribute-card">
        <img src={qrImg} alt="स्कैनर / क्यूआर कोड" className="contribute-image" />

        <form className="contribute-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="नाम"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="मोबाइल नंबर (10 अंक)"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="amount"
            placeholder="राशि (अधिकतम ₹1,00,000)"
            value={formData.amount}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="transactionId"
            placeholder="लेन-देन आईडी (12 अंक)"
            value={formData.transactionId}
            onChange={handleChange}
            required
          />

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "भेजा जा रहा है..." : "जमा करें"}
          </button>
        </form>
      </div>

      {message && (
        <div
          style={{
            color: message.startsWith("✅") ? "#00ff9d" : "#ff6b6b",
            marginTop: "20px",
            whiteSpace: "pre-line",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default Contribute;
