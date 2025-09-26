import React, { useState } from "react";
import "./Contribute.css";
import qrImg from "../assets/scanner.jpeg";

const Contribute = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    amount: "",
    transactionId: "",
  });

  const [message, setMessage] = useState("");

  const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/1FAIpQLSc--mBcPRvUVQPkEUSYrd6bI_Ht86Y9uXOgtuqUYoVtt6pUcA/formResponse";

  const FORM_FIELDS = {
    name: "entry.1031043690",
    phone: "entry.2024733768",
    amount: "entry.783555986",
    transactionId: "entry.1214302814",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "name") newValue = value.replace(/[^a-zA-Z\s\u0900-\u097F]/g, ""); // English + Hindi
    if (name === "phone") newValue = value.replace(/\D/g, "").slice(0, 10);
    if (name === "amount") {
      newValue = value.replace(/\D/g, "");
      if (parseInt(newValue, 10) > 100000) {
        newValue = "100000";
      }
    }
    if (name === "transactionId") newValue = value.replace(/\D/g, "").slice(0, 12);

    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = [];

    if (!formData.name.trim()) errors.push("❌ नाम आवश्यक है।");
    if (formData.phone.length !== 10) errors.push("❌ मोबाइल नंबर 10 अंकों का होना चाहिए।");
    if (!formData.amount || parseInt(formData.amount, 10) <= 0)
      errors.push("❌ राशि 0 से अधिक होनी चाहिए।");
    else if (parseInt(formData.amount, 10) > 100000)
      errors.push("❌ राशि ₹1,00,000 से अधिक नहीं हो सकती।");
    if (formData.transactionId.length !== 12)
      errors.push("❌ लेन-देन आईडी 12 अंकों की होनी चाहिए।");

    if (errors.length > 0) {
      setMessage(errors.join("\n"));
      setTimeout(() => setMessage(""), 5000);
      return;
    }

    // ✅ Create a hidden form and submit it
    const form = document.createElement("form");
    form.action = GOOGLE_FORM_ACTION;
    form.method = "POST";
    form.target = "hidden_iframe"; // avoid redirect
    form.style.display = "none";

    Object.entries(FORM_FIELDS).forEach(([key, entryId]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = entryId;
      input.value = formData[key];
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    setMessage("✅ आपका योगदान सफलतापूर्वक भेज दिया गया!");
    setFormData({ name: "", phone: "", amount: "", transactionId: "" });
    setTimeout(() => setMessage(""), 3000);
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

          <button type="submit" className="submit-btn">
            जमा करें
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
          }}
        >
          {message}
        </div>
      )}

      {/* Hidden iframe to avoid redirect after submit */}
      <iframe
        name="hidden_iframe"
        style={{ display: "none" }}
        title="hidden_iframe"
      ></iframe>
    </div>
  );
};

export default Contribute;
