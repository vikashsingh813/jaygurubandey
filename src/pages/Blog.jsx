import React, { useState, useEffect } from "react";
import "./Blog.css";
import blog1a from "../assets/photo4.jpg"; // first blog1 image
import blog1b from "../assets/photo25.jpg"; // second blog1 image
import blog2a from "../assets/photo3.jpg";  // first blog2 image
import blog2b from "../assets/photo27.jpg"; // second blog2 image
import blog2c from "../assets/photo28.jpg"; // third blog2 image
import blog2d from "../assets/photo29.jpg"; // fourth blog2 image
import blog3a from "../assets/photo5.jpg";   // blog3 image
import blog3b from "../assets/photo26.jpg";  // blog3 image
import blog3c from "../assets/photo30.jpg";  // blog3 image

const Blog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [review, setReview] = useState({ name: "", message: "", rating: 0 });
  const [reviews, setReviews] = useState({});
  const [currentImages, setCurrentImages] = useState({});

  const posts = [
    {
      id: 1,
      images: [blog1a, blog1b],
      title: "गुरु पूर्णिमा 2025",
      date: "6 जुलाई 2025",
      author: "आश्रम टीम",
      description:
        "एक पवित्र संगम का आयोजन हुआ, जहाँ भक्तों ने गुरुजी के प्रति अपनी कृतज्ञता हृदय से प्रकट की। वातावरण भक्ति से सराबोर हो उठा जब सभी ने सत्संग में भाग लिया, भावपूर्ण भजन गाए और गहन श्रद्धा व आनंद के साथ सेवा में संलग्न हुए।",
    },
    {
      id: 2,
      images: [blog2a, blog2b, blog2c, blog2d],
      title: "आश्रम में सत्संग",
      date: "10 अगस्त 2025",
      author: "आश्रम टीम",
      description:
        "एक गहन रिट्रीट शांत आश्रम वातावरण में आयोजित किया गया, जिसने प्रतिभागियों को योग और ध्यान का अभ्यास गहराई से करने का अवसर प्रदान किया। इस रिट्रीट में आत्म-प्रतिबिंब, आंतरिक शांति और आध्यात्मिक विकास पर विशेष जोर दिया गया, जिससे भक्त शांत परिवेश में अपने सच्चे आत्मा से पुनः जुड़ सके।",
    },
    {
      id: 3,
      images: [blog3a, blog3b, blog3c],
      title: "भजन",
      date: "26 जनवरी 2025",
      author: "भक्त",
      description:
        "यह एक भावपूर्ण संध्या थी जिसमें भजन और सत्संग का आनंद लिया गया, जहाँ परिवार, मित्र और पड़ोसी भक्ति भाव से एकत्र हुए। उन्होंने हर्षोल्लास के साथ भजन गाए और पारंपरिक वाद्ययंत्रों की ताल पर तालियों के साथ सहभाग किया। साधारण सजावट, हृदय से की गई प्रार्थनाएँ और सामूहिक आवाज़ ने एक ऐसा वातावरण तैयार किया जो सकारात्मकता, शांति और दिव्य ऊर्जा से परिपूर्ण था, और सभी को एकजुटता, श्रद्धा और आंतरिक सामंजस्य की शक्ति की याद दिलाई।",
    },
  ];

  // Slideshow effect for ALL posts dynamically
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

  const handleReadMore = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleStarClick = (rating) => {
    setReview((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!review.name || !review.message || review.rating === 0) return;

    setReviews((prev) => ({
      ...prev,
      [selectedPost.id]: [...(prev[selectedPost.id] || []), { ...review }],
    }));

    setReview({ name: "", message: "", rating: 0 });
    setIsModalOpen(false);
  };

  const renderStars = (count) =>
    Array.from({ length: 5 }, (_, i) => (
      <span key={i} style={{ color: i < count ? "#FFD700" : "#ccc" }}>★</span>
    ));

  return (
    <div className="blog-container">
      <h2 className="blog-title">🌸 आध्यात्मिक यात्रा 🌸</h2>
      <p className="blog-subtitle">
        आध्यात्मिक यात्रा से शिक्षाएँ, कार्यक्रम और अनुभव.
      </p>

      <div className="blog-grid">
        {posts.map((post) => (
          <div key={post.id} className="blog-card">
            <img
              src={post.images[currentImages[post.id] || 0]}
              alt={post.title}
            />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p className="blog-meta">📅 {post.date} | 👤 {post.author}</p>
              <p className="blog-desc">{post.description}</p>

              {reviews[post.id] && reviews[post.id].length > 0 && (
                <div className="review-list">
                  <h4>Devotees' Reviews:</h4>
                  {reviews[post.id].map((r, index) => (
                    <div key={index} className="review-item">
                      <strong>{r.name}</strong> {renderStars(r.rating)}
                      <p>{r.message}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for review */}
      {isModalOpen && selectedPost && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Share Your Review for "{selectedPost.title}"</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={review.name}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Write your review..."
                value={review.message}
                onChange={handleChange}
                required
              />
              <div style={{ marginBottom: "10px" }}>
                <strong>Rating: </strong>
                {[1, 2, 3, 4, 5].map((i) => (
                  <span
                    key={i}
                    onClick={() => handleStarClick(i)}
                    style={{
                      fontSize: "24px",
                      cursor: "pointer",
                      color: i <= review.rating ? "#FFD700" : "#ccc",
                      marginRight: "5px",
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
              <div className="modal-buttons">
                <button type="submit" className="submit-btn">Submit</button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
