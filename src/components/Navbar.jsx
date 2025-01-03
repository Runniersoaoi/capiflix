import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#714017] p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <Link
          to="/capiflix/"
          className="text-white text-2xl font-bold mb-2 sm:mb-0"
        >
          CapiFlix
        </Link>
        <div className="flex space-x-4">
          <Link
            to="/capiflix/"
            className="bg-[#F5E9D3] hover:bg-[#fcdda2] text-black font-sans font-medium py-2 px-4 rounded transition duration-300"
          >
            Inicio
          </Link>
          <Link
            to="/create"
            className="bg-[#F5E9D3] hover:bg-[#fcdda2] text-black font-sans font-medium py-2 px-4 rounded transition duration-300"
          >
            Crear Elemento
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
