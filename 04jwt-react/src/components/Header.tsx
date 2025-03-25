import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className=" bg-gray-300 shadow-md">
      <div className="max-w-5xl flex justify-between gap-4 p-4 items-center">
        <Link to="/">Home</Link>
        <div className="flex gap-4">
          <Link to="/login">Login</Link>
          <Link to="/register">Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
