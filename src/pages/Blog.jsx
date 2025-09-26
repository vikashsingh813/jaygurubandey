import React, { useState, useEffect } from "react";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [review, setReview] = useState({ name: "", message: "", rating: 0 });
  const [reviews, setReviews] = useState({});
  const [currentImages, setCurrentImages] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const posts = [
    { id: 1, images: [blog1a, blog1b], title: "गुरु पूर्णिमा 2025", date: "6 जुलाई 2025", author: "आश्रम टीम", description: "इस पवित्र आयोजन में भक्तों ने पूरे दिल से गुरुजी के प्रति अपनी कृतज्ञता व्यक्त की।" },
    { id: 2, images: [blog2a, blog2b, blog2c, blog2d], title: "आश्रम में सत्संग", date: "10 अगस्त 2025", author: "आश्रम टीम", description: "शांतिपूर्ण आश्रम वातावरण में एक गहन सत्संग आयोजन किया गया, जहाँ साधक आत्मिक अनुभवों में डूबे।" },
    { id: 3, images: [blog3a, blog3b, blog3c], title: "भजन संध्या", date: "26 जनवरी 2025", author: "भक्तजन", description: "यह एक आत्मिक भजन और सत्संग की संध्या थी, जहाँ परिवार और मित्र मिलकर भक्ति में रमे।" },
    { id: 4, images: [blog1a, blog1b], title: "सेवा और समाजिक कार्य", date: "15 फरवरी 2025", author: "आश्रम स्वयंसेवक", description: "भक्तों ने स्वच्छता अभियान, भोजन वितरण और अन्य सेवा गतिविधियों में भाग लिया।" },
    { id: 5, images: [blog2a, blog2b, blog2c, blog2d], title: "ध्यान रिट्रीट", date: "20 मार्च 2025", author: "आश्रम टीम", description: "तीन दिवसीय ध्यान रिट्रीट का आयोजन किया गया ताकि साधक मौन और ध्यान में गहरी आत्मीयता अनुभव कर सकें।" },
    { id: 6, images: [blog3a, blog3b, blog3c], title: "दीपावली महोत्सव", date: "12 नवम्बर 2025", author: "समुदाय", description: "आश्रम को दीपों और फूलों से सजाया गया और भक्तजन मिलकर दीपावली का उत्सव मनाए।" },
  ];

  // Slideshow effect
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

  // Pagination logic
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
        गुरुजी की शिक्षाएँ, आयोजनों और अनुभवों का संग्रह।
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
              <p className="blog-desc">{post.description}</p>

              {reviews[post.id] && reviews[post.id].length > 0 && (
                <div className="review-list">
                  <h4>भक्तों की समीक्षा:</h4>
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

      {/* Previous / Next Pagination */}
      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>⬅ पिछला</button>
        <span className="page-info">पृष्ठ {currentPage} / {totalPages}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>अगला ➡</button>
      </div>

      {/* Modal for review */}
      {isModalOpen && selectedPost && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>"{selectedPost.title}" के लिए अपनी समीक्षा साझा करें</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="आपका नाम"
                value={review.name}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="अपनी समीक्षा लिखें..."
                value={review.message}
                onChange={handleChange}
                required
              />
              <div style={{ marginBottom: "10px" }}>
                <strong>रेटिंग: </strong>
                {[1,2,3,4,5].map((i) => (
                  <span
                    key={i}
                    onClick={() => handleStarClick(i)}
                    style={{
                      fontSize: "24px",
                      cursor: "pointer",
                      color: i <= review.rating ? "#FFD700" : "#ccc",
                      marginRight: "5px",
                    }}
                  >★</span>
                ))}
              </div>
              <div className="modal-buttons">
                <button type="submit" className="submit-btn">सबमिट</button>
                <button type="button" className="cancel-btn" onClick={() => setIsModalOpen(false)}>रद्द करें</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
