import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <nav className="bg-gray-300 shadow-md">
      <div className="max-w-5xl flex justify-between gap-4 p-4 items-center">
        <Link to="/">Home</Link>
        {token ? (
          <button onClick={handleLogOut}>SignOut</button>
        ) : (
          <div className="flex gap-4">
            <Link to="/login">Login</Link>
            <Link to="/register">Signup</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
