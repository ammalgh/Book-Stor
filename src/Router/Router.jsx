import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Signup from '../Pages/Signup';
  import Login from '../Pages/Login';
  import Books from '../Pages/Books';
  import BookDetails from '../Pages/BookDetails';
  
  function createRouter(isLoggedIn, setSelectedBook, selectedBook) {
    return createBrowserRouter([
      {
        path: "/",
        element: <Signup />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/books",
        // eslint-disable-next-line no-undef
        element: <Books books={Booksinfo} setSelectedBook={setSelectedBook} />,
      },
      {
        path: "/book-details",
        element: <BookDetails book={selectedBook} setSelectedBook={setSelectedBook} />,
      },
    ]);
  }
  
  // eslint-disable-next-line react/prop-types
  function Router({ isLoggedIn, setSelectedBook, selectedBook }) {
    const router = createRouter(isLoggedIn, setSelectedBook, selectedBook);
    return (
      <RouterProvider router={router} />
    );
  }
  
  export default Router;
  



