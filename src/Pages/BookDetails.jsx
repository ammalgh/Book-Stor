/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
function BookDetails({ book }) {
  return (
    <div className="min-h-screen bg-base-200 p-6">
     
      <div className="flex flex-col md:flex-row">
        <img src={book.img} alt={book.title} className="w-full md:w-1/2 h-auto object-cover mb-4 md:mb-0 md:mr-4" />
        <div>
          <h2 className="text-3xl font-bold mb-4">{book.title}</h2>
          <p className="text-xl mb-2">Author: {book.author}</p>
          <p className="text-lg mb-2">Price: ${book.Price}</p>
          <p className="mb-4">{book.summary}</p>
        </div>
      </div>
    </div>
  );
}



export default BookDetails;
