import { Link, useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/signup'); 
  };

  return (
    <div className="navbar bg-[#1d3557] ">
      <div className="flex-1">
        {!isLoggedIn ? (
          <>
            <Link to="/login" className="btn btn-ghost text-xl text-[#fff]">Login</Link>
            <Link to="/signup" className="btn btn-ghost text-xl text-[#fff]">Signup</Link>
          </>
        ) : (
          <button
            className="btn btn-ghost text-xl text-[#fff]"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;





// import { Link } from 'react-router-dom';

// // eslint-disable-next-line react/prop-types
// function Navbar({ isLoggedIn, setIsLoggedIn }) {
//   return (
//     <div className="navbar bg-[#1d3557] ">
//       <div className="flex-1">
//         {!isLoggedIn ? (
//           <>
//             <Link to="/login" className="btn btn-ghost text-xl text-[#fff]">Login</Link>
//             <Link to="/" className="btn btn-ghost text-xl text-[#fff]">Signup</Link>
//           </>
//         ) : (
//           <button
//             className="btn btn-ghost text-xl text-[#fff]"
//             onClick={() => setIsLoggedIn(false)}
//           >
//             Logout
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Navbar;







