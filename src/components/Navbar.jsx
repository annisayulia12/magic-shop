import { FaShoppingBag, FaSearch } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-sm bg-white">
      {/* Logo */}
      <h1 className="font-serif text-xl text-black">Magic Fashion</h1>

      {/* Menu */}
      <ul className="flex gap-4">
        <li>
          <a
            href="#home"
            className="px-4 py-1 border border-black rounded-full text-black hover:bg-zinc-700 hover:text-white transition"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="px-4 py-1 border border-black rounded-full text-black hover:bg-zinc-700 hover:text-white transition"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#products"
            className="px-4 py-1 border border-black rounded-full text-black hover:bg-zinc-700 hover:text-white transition"
          >
            Our Product
          </a>
        </li>
      </ul>

      {/* Icons */}
      <div className="flex gap-4 text-zinc-700">
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <FaShoppingBag size={18} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <FaSearch size={18} />
        </button>
      </div>
    </nav>
  );
};
