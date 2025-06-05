import { Link, useNavigate } from '@tanstack/react-router';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../api/user.api';
import { logout } from '../source/slice/authSlice';
// import { useNavigate } from "@tanstack/react-router";



function Navbar() {
  const navigate = useNavigate();
  
  const isAuthenticated= useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    console.log("Logging out...");
    navigate({to: '/'});
    try {
      const response = await logoutUser();
      console.log("Logout successful:", response);
      dispatch(logout());
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout failed. Please try again.");
    }
  };
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-emerald-600">
        🔗 Shortify
      </Link>

      <div className="space-x-4 flex items-center">
        <Link
          to="/"
          className="text-gray-700 hover:text-emerald-600 transition font-medium"
        >
          Home
        </Link>

        {!isAuthenticated ? (
          <>
            <Link
              to="/auth?mode=login"
              className="px-4 py-1.5 text-sm bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition"
            >
              Login
            </Link>
            <Link
              to="/auth?mode=register"
              className="px-4 py-1.5 text-sm border border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-50 transition"

              
            >
            
              Register
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="px-4 py-1.5 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"

            
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
