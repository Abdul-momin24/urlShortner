import { Link, useNavigate } from '@tanstack/react-router';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../api/user.api';
import { logout } from '../source/slice/authSlice';

function Navbar() {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    navigate({ to: '/' });
    try {
      const response = await logoutUser();
      console.log("Logout successful:", response);
      dispatch(logout());
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout failed. Please try again.");
    }
  };
  const user = useSelector((state) => state.auth.user);


  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-emerald-600 tracking-wide">
        🔗 Shortify
      </Link>
      {isAuthenticated && (
        <span className="text-sm text-gray-600">
          Welcome, {user.user.name}
        </span>
      )}

      <div className="flex items-center space-x-6">
    {!isAuthenticated && (
        <Link
          to="/"
          className="text-gray-700 hover:text-emerald-600 transition font-medium"
        >
          Home
        </Link>
      )}

        {isAuthenticated && (
          <Link
            to="/dashboard"
            className="text-gray-700 hover:text-emerald-600 transition font-medium"
          >
            Dashboard
          </Link>
        )}

        {!isAuthenticated ? (
          <Link
            to="/auth?mode=login"
            className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium rounded-lg transition"
          >
            Login
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
