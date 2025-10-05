import { useParams, Link, useLocation } from "react-router-dom";
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

const posts = [
  {
    id: 1,
    images: [blog1a, blog1b],
    title: "गुरु पूर्णिमा 2025",
    date: "6 जुलाई 2025",
    author: "आश्रम टीम",
    description: [
      "एक पवित्र सभा का आयोजन किया गया, जिसमें श्रद्धालुओं ने गुरुजी के प्रति अपनी गहन कृतज्ञता व्यक्त की। गुरुजी ने अपने ज्ञान, करुणा और आशीर्वाद से सभी के जीवन को प्रकाशित किया।",
      "कार्यक्रम में भजन, ध्यान सत्र और श्रद्धा से की गई अर्पणाएँ शामिल थीं, जिससे वातावरण प्रेम, एकता और दिव्यता से भर गया।"
    ]
  },
  {
    id: 2,
    images: [blog2a, blog2b, blog2c, blog2d],
    title: "आश्रम में सत्संग",
    date: "10 अगस्त 2025",
    author: "आश्रम टीम",
    description: [
      "आश्रम के शांत वातावरण में एक प्रेरणादायक सत्संग का आयोजन किया गया। कार्यक्रम में भजन, ध्यान और गुरुजी के प्रवचन हुए, जिन्होंने साधकों को आत्मचिंतन की दिशा में अग्रसर किया।",
      "इस सत्संग ने सभी को यह सिखाया कि श्रद्धा और भक्ति के मार्ग पर स्थिर रहकर जीवन में स्पष्टता और शांति प्राप्त की जा सकती है।"
    ]
  },
  {
    id: 3,
    images: [blog3a, blog3b, blog3c],
    title: "भजन संध्या",
    date: "26 जनवरी 2025",
    author: "भक्तगण",
    description: [
      "यह एक आत्मिक भजन संध्या थी, जहाँ परिवार, मित्र और पड़ोसी एकत्र होकर सामूहिक रूप से भक्ति भाव से गान कर रहे थे। उनके स्वर और ताल के साथ पूरा वातावरण भक्ति रस से सराबोर हो गया।",
      "सामूहिक भजन की ऊर्जा ने सभी के हृदयों को छू लिया और सबने गहन शांति एवं आनंद का अनुभव किया।"
    ]
  },
  {
    id: 4,
    images: [blog1a, blog1b],
    title: "सेवा और समर्पण",
    date: "15 फरवरी 2025",
    author: "आश्रम स्वयंसेवक",
    description: [
      "भक्तों ने सेवा गतिविधियों में भाग लिया जिनमें स्वच्छता अभियान, भोजन वितरण और ज़रूरतमंदों की सहायता शामिल थी।",
      "इन सेवाकार्यों ने सभी को यह प्रेरणा दी कि ‘मानव सेवा ही ईश्वर सेवा है’, और करुणा से किया गया प्रत्येक कार्य एक साधना है।"
    ]
  },
  {
    id: 5,
    images: [blog2a, blog2b, blog2c, blog2d],
    title: "ध्यान शिविर",
    date: "20 मार्च 2025",
    author: "आश्रम टीम",
    description: [
      "तीन दिवसीय ध्यान शिविर का आयोजन किया गया ताकि साधक मौन और आत्म-शांति का अनुभव कर सकें। गुरुजी की सान्निध्य में साधकों ने ध्यान की गहराई को महसूस किया।",
      "इस शिविर ने मन को शांत किया, आंतरिक ऊर्जा को पुनर्जीवित किया और साधकों को आत्मिक बल प्रदान किया।"
    ]
  },
  {
    id: 6,
    images: [blog3a, blog3b, blog3c],
    title: "दीपों का पर्व",
    date: "12 नवम्बर 2025",
    author: "समुदाय",
    description: [
      "आश्रम को दीपों, फूलों और रंगों से सजाया गया। भक्तगण एकत्र होकर प्रार्थना, भजन और उत्सव में सम्मिलित हुए।",
      "पूरा वातावरण प्रेम, उल्लास और आध्यात्मिक आनंद से भर उठा — यह सचमुच प्रकाश और भक्ति का पर्व था।"
    ]
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { currentPage = 1 } = location.state || {};   

  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) return <h2>ब्लॉग नहीं मिला</h2>;

  return (
    <div className="blog-details-wrapper">
      <div className="blog-details-container">
        <h2 className="blog-details-title">{post.title}</h2>
        <p className="blog-meta">📅 {post.date} | 👤 {post.author}</p>

        <div className="blog-details-images">
          {post.images.map((img, idx) => (
            <img key={idx} src={img} alt={`${post.title} ${idx}`} />
          ))}
        </div>

        <div className="blog-details-desc">
          {post.description.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

        <div className="back-btn-container">
          <Link to="/blog" state={{ currentPage }} className="back-btn">
            ⬅ ब्लॉग पर वापस जाएँ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
