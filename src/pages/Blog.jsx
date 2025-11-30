import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Blog.css";
import blog1a from "../assets/photo4.jpg";
import blog1b from "../assets/photo25.jpg";
import blog2a from "../assets/photo3.jpg";
import blog2b from "../assets/photo27.jpg";
import blog2c from "../assets/photo28.jpg";
import blog2d from "../assets/photo29.jpg";
import blog3a from "../assets/photo5.jpg";
import blog3b from "../assets/photo26.jpg";
import blog3c from "../assets/photo30.jpg";

const Blog = () => {
  const location = useLocation();
  const savedPage = location.state?.currentPage || 1;
  const [currentPage, setCurrentPage] = useState(savedPage);
  const [currentImages, setCurrentImages] = useState({});

  const posts = [
    {
      id: 1,
      images: [blog1a, blog1b],
      title: "गुरु पूर्णिमा 2025",
      date: "6 जुलाई 2025",
      author: "आश्रम टीम",
      description: [
        "एक पवित्र समारोह का आयोजन किया गया जिसमें श्रद्धालुओं ने गुरुजी के प्रति अपनी कृतज्ञता व्यक्त की, जिन्होंने अपनी करुणा, आशीर्वाद और ज्ञान से सभी को मार्गदर्शन दिया।",
        "कार्यक्रम में भजन, ध्यान सत्र और निष्ठा भरी अर्पणाएँ शामिल थीं, जिसने वातावरण को प्रेम और एकता से भर दिया।"
      ]
    },
    {
      id: 2,
      images: [blog2a, blog2b, blog2c, blog2d],
      title: "आश्रम में सत्संग",
      date: "10 अगस्त 2025",
      author: "आश्रम टीम",
      description: [
        "शांत और आध्यात्मिक वातावरण में एक गहन सत्संग का आयोजन किया गया, जिसमें भजन, ध्यान और प्रवचन हुए।",
        "इस सत्संग ने साधकों को जीवन में स्पष्टता और दृढ़ आस्था के साथ आगे बढ़ने की प्रेरणा दी।"
      ]
    },
    {
      id: 3,
      images: [blog3a, blog3b, blog3c],
      title: "भजन संध्या",
      date: "26 जनवरी 2025",
      author: "भक्तगण",
      description: [
        "यह एक आत्मीय भजन संध्या थी, जहाँ परिवार, मित्र और पड़ोसी एकत्र होकर भक्ति भाव से भजन गा रहे थे, जिससे वातावरण में दिव्यता फैल गई।",
        "सामूहिक भजन से उत्पन्न ऊर्जा ने सभी के मन को शांति और आनंद से भर दिया।"
      ]
    },
    {
      id: 4,
      images: [blog1a, blog1b],
      title: "सेवा और समर्पण",
      date: "15 फरवरी 2025",
      author: "आश्रम स्वयंसेवक",
      description: [
        "भक्तों ने सेवा कार्यों में भाग लिया जिसमें स्वच्छता अभियान, भोजन वितरण और ज़रूरतमंदों की सहायता शामिल थी।",
        "इन कार्यों ने सभी को यह संदेश दिया कि मानव सेवा ही सच्ची ईश्वर सेवा है।"
      ]
    },
    {
      id: 5,
      images: [blog2a, blog2b, blog2c, blog2d],
      title: "ध्यान शिविर",
      date: "20 मार्च 2025",
      author: "आश्रम टीम",
      description: [
        "तीन दिवसीय ध्यान शिविर का आयोजन किया गया ताकि साधक मौन और शांति में डूब सकें।",
        "गुरुजी की उपस्थिति में साधकों ने मन की गहराई में उतरकर आत्मिक शांति का अनुभव किया।"
      ]
    },
    {
      id: 6,
      images: [blog3a, blog3b, blog3c],
      title: "दीपों का पर्व",
      date: "12 नवम्बर 2025",
      author: "समाज समुदाय",
      description: [
        "आश्रम को दीपों और फूलों से सुंदरता से सजाया गया, जहाँ भक्तगण प्रार्थना, भजन और उत्सव के लिए एकत्र हुए।",
        "पूरा वातावरण प्रेम, आनंद और आध्यात्मिक आनंद से भर गया।"
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prev) => {
        const updated = { ...prev };
        posts.forEach((post) => {
          updated[post.id] = ((prev[post.id] || 0) + 1) % post.images.length;
        });
        return updated;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [posts]);

  const postsPerPage = 3;
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="blog-container">
      <h2 className="blog-title">🌸 आध्यात्मिक यात्रा 🌸</h2>
      <p className="blog-subtitle">
        शिक्षाएँ, आयोजन और अनुभव — साधना के पथ पर चलते हुए।
      </p>

      <div className="blog-grid">
        {currentPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img
              src={post.images[currentImages[post.id] || 0]}
              alt={post.title}
            />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p className="blog-meta">📅 {post.date} | 👤 {post.author}</p>

              <p className="blog-desc">
                {post.description[0].slice(0, 100)}...
              </p>

              <Link
                to={`/blog/${post.id}`}
                state={{ currentPage }}
                className="read-more-btn"
              >
                और पढ़ें
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>⬅ पिछला</button>
        <span className="page-info">पृष्ठ {currentPage} / {totalPages}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>अगला ➡</button>
      </div>

      {/* Bottom Navigation Buttons (added as per English file) */}
      <div
        className="map-button-container fade-in-up"
        style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" }}
      >
        <Link to="/explore" className="know-more-btn">
          🔍 आश्रम दर्शन

        </Link>

        <Link to="/testimonies" className="know-more-btn">
          🔱 अनुभव कथाएँ
        </Link>

        <Link to="/dailysatsang" className="know-more-btn">
          🔅 दैनिक सत्संग
        </Link>
      </div>
    </div>
  );
};

export default Blog;
