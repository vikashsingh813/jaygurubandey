import React, { useState } from "react";
import "./SubmitTestimony.css";

const SubmitTestimony = () => {
  const [form, setForm] = useState({
    name: "",
    location: "",
    date: "",
    testimony: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const googleFormURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSfcllwXd3tGuJJ1LOFzZladFB_EB1RKQ3kz_8ORLf8jm36vpg/formResponse";

  const entryName = "entry.555167835";
  const entryLocation = "entry.187690684";
  const entryDate = "entry.1369967811";
  const entryTestimony = "entry.1077217407";

  const handleNameChange = (e) => {
    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
    setForm({ ...form, name: value });
  };

  const handleLocationChange = (e) => {
    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
    setForm({ ...form, location: value });
  };

  const handleTestimonyChange = (e) => {
    setForm({ ...form, testimony: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append(entryName, form.name);
    formData.append(entryLocation, form.location);
    formData.append(entryDate, form.date);
    formData.append(entryTestimony, form.testimony);

    fetch(googleFormURL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });

    setSubmitted(true);
    setForm({ name: "", location: "", date: "", testimony: "" });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="submit-testimony-page">
      <h1>🌸 अपनी गवाही साझा करें 🌸</h1>
      <p>आपकी कहानी किसी ज़रूरतमंद को आशा दे सकती है।</p>

      <form onSubmit={handleSubmit} className="submit-form">
        <label>नाम</label>
        <input
          type="text"
          value={form.name}
          required
          onChange={handleNameChange}
          placeholder="अपना पूरा नाम दर्ज करें"
        />

        <label>स्थान</label>
        <input
          type="text"
          value={form.location}
          required
          onChange={handleLocationChange}
          placeholder="शहर / स्थान"
        />

        <label>तारीख़</label>
        <input
          type="date"
          value={form.date}
          required
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <label>गवाही</label>
        <textarea
          rows="6"
          value={form.testimony}
          required
          onChange={handleTestimonyChange}
          placeholder="अपनी गवाही यहाँ लिखें..."
        />

        <button type="submit" className="submit-testimony-btn">
          सबमिट करें
        </button>

        {submitted && (
          <p className="success-message">
            🌸 धन्यवाद! आपकी गवाही सफलतापूर्वक जमा हो गई है।
          </p>
        )}
      </form>
    </div>
  );
};

export default SubmitTestimony;
