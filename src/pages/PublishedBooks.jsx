import React, { useState, useEffect } from "react";
import "./PublishedBooks.css";
import book1 from "../assets/guruji.jpg";
import book2 from "../assets/guruji.jpg";
import book3 from "../assets/guruji.jpg";

const PublishedBooks = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const booksPerPage = 6;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const books = [
    {
      id: 1,
      title: "गुरु कृपा – दिव्य अनुग्रह",
      author: "परम पूज्य सतगुरु जी",
      publisher: "दिव्य पब्लिकेशन",
      pages: 120,
      year: 2021,
      image: book1,
      link: "https://drive.google.com/file/d/1EXAMPLE_ID/view?usp=sharing",
      category: "आध्यात्मिकता",
    },
    {
      id: 2,
      title: "भक्ति का मार्ग",
      author: "परम पूज्य सतगुरु जी",
      publisher: "एकलव्य फाउंडेशन",
      pages: 95,
      year: 2020,
      image: book2,
      link: "https://drive.google.com/file/d/2EXAMPLE_ID/view?usp=sharing",
      category: "भक्ति",
    },
    {
      id: 3,
      title: "आत्मा का आंतरिक प्रकाश",
      author: "परम पूज्य सतगुरु जी",
      publisher: "स्पिरिचुअल पाथ ट्रस्ट",
      pages: 140,
      year: 2019,
      image: book3,
      link: "https://drive.google.com/file/d/3EXAMPLE_ID/view?usp=sharing",
      category: "ध्यान",
    },
    {
      id: 4,
      title: "दिव्य मार्ग",
      author: "परम पूज्य सतगुरु जी",
      publisher: "स्पिरिचुअल विजडम प्रेस",
      pages: 150,
      year: 2022,
      image: book1,
      link: "https://drive.google.com/file/d/3EXAMPLE_ID/view?usp=sharing",
      category: "ज्ञान",
    },
    {
      id: 5,
      title: "अंतर यात्रा",
      author: "परम पूज्य सतगुरु जी",
      publisher: "इटर्नल लाइट पब्लिकेशन",
      pages: 110,
      year: 2023,
      image: book2,
      link: "https://drive.google.com/file/d/3EXAMPLE_ID/view?usp=sharing",
      category: "आत्म-साक्षात्कार",
    },
    {
      id: 6,
      title: "पवित्र उपदेश",
      author: "परम पूज्य सतगुरु जी",
      publisher: "ट्रुथ पाथ फाउंडेशन",
      pages: 130,
      year: 2021,
      image: book3,
      link: "https://drive.google.com/file/d/3EXAMPLE_ID/view?usp=sharing",
      category: "दर्शन",
    },
    {
      id: 7,
      title: "अकाल ज्ञान",
      author: "परम पूज्य सतगुरु जी",
      publisher: "दिव्य पब्लिकेशन",
      pages: 115,
      year: 2024,
      image: book1,
      link: "https://drive.google.com/file/d/3EXAMPLE_ID/view?usp=sharing",
      category: "ज्ञान",
    },
  ];

  const categories = ["सभी", ...new Set(books.map((b) => b.category))];

  const filteredBooks =
    selectedCategory === "सभी"
      ? books
      : books.filter((book) => book.category === selectedCategory);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="books-page">
      <h1 className="books-title">📚 प्रकाशित पुस्तकें</h1>

      {/* Category Filter */}
      <div className="category-filter">
        <label htmlFor="categorySelect">
          <strong>श्रेणी चुनें:</strong>{" "}
        </label>
        <select
          id="categorySelect"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setCurrentPage(1);
          }}
          className="category-dropdown"
        >
          {selectedCategory === "" && (
            <option value="" disabled hidden>
              श्रेणी चुनें
            </option>
          )}
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Books Grid */}
      <div className="books-row">
        {currentBooks.map((book) => (
          <div className="book-card" key={book.id}>
            <img src={book.image} alt={book.title} className="book-image" />
            <p className="book-name">
              <strong>नाम:</strong> {book.title}
            </p>
            <p className="book-author">
              <strong>लेखक:</strong> {book.author}
            </p>
            <p className="book-category">
              <strong>श्रेणी:</strong> {book.category}
            </p>
            <button className="book-link" onClick={() => setSelectedBook(book)}>
              खोलें
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {selectedCategory !== "" && filteredBooks.length > booksPerPage && (
        <div className="pagination">
          <button
            className="page-btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ⬅ पिछला
          </button>
          <span className="page-info">
            पेज {currentPage} / {totalPages}
          </span>
          <button
            className="page-btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            अगला ➡
          </button>
        </div>
      )}

      {/* Popup Modal */}
      {selectedBook && (
        <div className="modal-overlay" onClick={() => setSelectedBook(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-left">
              <img
                src={selectedBook.image}
                alt={selectedBook.title}
                className="modal-image"
              />
            </div>
            <div className="modal-right">
              <h2>{selectedBook.title}</h2>
              <p>
                <strong>लेखक:</strong> {selectedBook.author}
              </p>
              <p>
                <strong>प्रकाशक:</strong> {selectedBook.publisher}
              </p>
              <p>
                <strong>कुल पृष्ठ:</strong> {selectedBook.pages}
              </p>
              <p>
                <strong>प्रकाशन वर्ष:</strong> {selectedBook.year}
              </p>
              <p>
                <strong>श्रेणी:</strong> {selectedBook.category}
              </p>
              <a
                href={selectedBook.link}
                target="_blank"
                rel="noopener noreferrer"
                className="read-btn"
              >
                📖 पुस्तक पढ़ें
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PublishedBooks;
