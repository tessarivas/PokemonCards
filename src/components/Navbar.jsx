import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export const Navbar = () => {
  const { pokemons } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!search.trim()) return; 

    const found = pokemons.find(
      (pokemon) =>
        pokemon.name.toLowerCase() === search.toLowerCase() || pokemon.id.toString() === search
    );

    if (found) {
      navigate(`/pokemon/${found.id}`); 
      setSearch("");
      setError(null);
    } else {
      setError("No se encontró el Pokémon"); 
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#ff56d2] via-[#d946ef] to-[#8b5cf6] text-white font-bold p-4 flex justify-between items-center">
      <div className="hidden md:flex items-center space-x-4">
        <ul className="text-2xl pl-5 gap-5 flex">
          <li><Link to="/" className="hover:text-[#8b5cf6]">Home</Link></li>
          <li><Link to="/favorites" className="hover:text-[#8b5cf6]">Favorites</Link></li>
          <li><Link to="/pokemons" className="hover:text-[#8b5cf6]">Pokemons</Link></li>
        </ul>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
          {isMenuOpen ? "X" : "☰"}
        </button>
      </div>

      <div className={`md:hidden absolute top-16 left-0 right-0 bg-gradient-to-r from-[#ff56d2] via-[#d946ef] to-[#8b5cf6] text-white p-4 flex flex-col space-y-4 ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="text-2xl text-center space-y-4">
          <li><Link to="/" className="hover:text-[#8b5cf6]">Home</Link></li>
          <li><Link to="/favorites" className="hover:text-[#8b5cf6]">Favorites</Link></li>
          <li><Link to="/pokemons" className="hover:text-[#8b5cf6]">Pokemons</Link></li>
        </ul>
      </div>

      <div className="relative flex items-center space-x-2">
        <input
          type="text"
          placeholder="Type a Name or ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 rounded-lg bg-amber-50 text-black focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        <button
          onClick={handleSearch}
          className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-all"
        >
          Search
        </button>
      </div>

      {error && (
        <p className="absolute top-16 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg">
          {error}
        </p>
      )}
    </nav>
  );
};
