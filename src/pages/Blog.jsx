import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";   // ✅ Import useLocation
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

  // ✅ Restore saved page from state if available
  const savedPage = location.state?.currentPage || 1;
  const [currentPage, setCurrentPage] = useState(savedPage);
  const [currentImages, setCurrentImages] = useState({});

  const posts = [
    {
      id: 1,
      images: [blog1a, blog1b],
      title: "गुरु पूर्णिमा 2025",
      date: "6 जुलाई 2025",
      author: "आश्रम परिवार",
      description: "इस पावन अवसर पर श्रद्धालुओं ने गुरुजी के प्रति अपनी कृतज्ञता व्यक्त की। गुरुजी ने अपने आशीर्वाद, करुणा और ज्ञान से सभी को मार्गदर्शन दिया..."
    },
    {
      id: 2,
      images: [blog2a, blog2b, blog2c, blog2d],
      title: "आश्रम में सत्संग",
      date: "10 अगस्त 2025",
      author: "आश्रम परिवार",
      description: "आश्रम के शांत वातावरण में भक्ति गीत, ध्यान और गहन प्रवचनों के साथ एक विशेष सत्संग हुआ जिसने साधकों को आध्यात्मिक मार्ग पर आगे बढ़ने के लिए प्रेरित किया..."
    },
    {
      id: 3,
      images: [blog3a, blog3b, blog3c],
      title: "भजन संध्या",
      date: "26 जनवरी 2025",
      author: "भक्तगण",
      description: "भजन और सत्संग की इस संध्या में परिवार, मित्र और पड़ोसी एकत्र होकर सामूहिक भक्ति में लीन हुए। वातावरण दिव्य ऊर्जा और प्रेम से भर गया..."
    },
    {
      id: 4,
      images: [blog1a, blog1b],
      title: "सेवा और समर्पण",
      date: "15 फरवरी 2025",
      author: "आश्रम स्वयंसेवक",
      description: "भक्तों ने सफाई अभियान, भोजन वितरण और ज़रूरतमंदों की मदद जैसे सेवा कार्यों में भाग लिया। यह सभी को याद दिलाता है कि मानव सेवा ही ईश्वर सेवा है..."
    },
    {
      id: 5,
      images: [blog2a, blog2b, blog2c, blog2d],
      title: "ध्यान शिविर",
      date: "20 मार्च 2025",
      author: "आश्रम परिवार",
      description: "तीन दिवसीय ध्यान शिविर का आयोजन हुआ, जिसमें साधकों ने मौन और शांति में गहराई से उतरकर अपने मन को शुद्ध किया और गुरुजी की उपस्थिति में आत्मिक शांति का अनुभव किया..."
    },
    {
      id: 6,
      images: [blog3a, blog3b, blog3c],
      title: "प्रकाश पर्व",
      date: "12 नवम्बर 2025",
      author: "समुदाय",
      description: "आश्रम दीपकों और पुष्पों से सुसज्जित किया गया। सभी भक्त प्रार्थना, भजन और उत्सव में सम्मिलित हुए। वातावरण प्रेम, आनंद और आध्यात्मिकता से भर गया..."
    },
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

  return (
    <div className="blog-container">
      <h2 className="blog-title">🌸 आध्यात्मिक यात्रा 🌸</h2>
      <p className="blog-subtitle">
        शिक्षाएँ, आयोजन और अनुभव – आध्यात्मिक पथ से जुड़े हुए।
      </p>

      <div className="blog-grid">
        {currentPosts.map(post => (
          <div key={post.id} className="blog-card">
            <img
              src={post.images[currentImages[post.id] || 0]}
              alt={post.title}
            />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p className="blog-meta">📅 {post.date} | 👤 {post.author}</p>
              
              <p className="blog-desc">
                {post.description.slice(0, 100)}...
              </p>
              
              {/* ✅ Pass currentPage in state */}
              <Link 
                to={`/blog/${post.id}`} 
                state={{ currentPage }} 
                className="read-more-btn"
              >
                और जानें
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>⬅ पिछला</button>
        <span className="page-info">पृष्ठ {currentPage} / {totalPages}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>अगला ➡</button>
      </div>
    </div>
  );
};

export default Blog;
