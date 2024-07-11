import { useState } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Books({ books, setSelectedBook }) {
  const [searchTerm, setSearchTerm] = useState('');

  // eslint-disable-next-line react/prop-types
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <h1 className="text-3xl font-bold mb-4">Books List</h1>
      <input
        type="text"
        placeholder="Search for a book..."
        className="input input-bordered mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-wrap -mx-2">
        {filteredBooks.map((book) => (
          <div key={book.id} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
            <div className="p-4 border rounded shadow">
              <img src={book.img} alt={book.title} className="w-full h-64 object-cover mb-4" />
              <h2 className="text-xl font-bold">{book.title}</h2>
              <p>Author: {book.author}</p>
              <p>Price: ${book.Price}</p>
              <Link to="/book-details" className="btn bg-[#1d3557] text-[#fff] mt-4" onClick={() => setSelectedBook(book)}>
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



export default Books;
