import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Books from './Pages/Books';
import BookDetails from './Pages/BookDetails';

import Booksinfo from './Component/Booksinfo';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/" element={<Signup />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          </>
        ) : (
          <>
            <Route
              path="/"
              element={<Books books={Booksinfo} setSelectedBook={setSelectedBook} />}
            />
            <Route
              path="/books"
              element={<Books books={Booksinfo} setSelectedBook={setSelectedBook} />}
            />
            <Route
              path="/book-details"
              element={<BookDetails book={selectedBook} setSelectedBook={setSelectedBook} />}
            />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;















