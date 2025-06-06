import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold hover:underline">
          ONBOARDING APP
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
