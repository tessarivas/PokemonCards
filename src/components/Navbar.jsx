import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export const Navbar = () => {
  const { pokemons } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState(null);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);

    if (query === "") {
      setFilteredPokemon(null);
      return;
    }

    const found = pokemons.find(
      (pokemon) => pokemon.name.toLowerCase() === query || pokemon.id.toString() === query
    );

    setFilteredPokemon(found || null);
  };

  return (
    <nav className="bg-gradient-to-r from-[#ff56d2] via-[#d946ef] to-[#8b5cf6] text-white font-bold p-4 flex justify-between items-center">
      <ul className="text-2xl pl-5 gap-5 flex space-x-4">
        <li><Link to="/" className="hover:text-[#8b5cf6]">Home</Link></li>
        <li><Link to="/favorites" className="hover:text-[#8b5cf6]">Favorites</Link></li>
        <li><Link to="/pokemons" className="hover:text-[#8b5cf6]">Pokemons</Link></li>
      </ul>

      <div className="relative">
        <input
          type="text"
          placeholder="Search by name or ID..."
          value={search}
          onChange={handleSearch}
          className="p-2 rounded-lg bg-amber-50 text-black focus:outline-none focus:ring-2 focus:ring-pink-300"
        />

        {filteredPokemon && (
          <div className="absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-lg p-4">
            <img src={filteredPokemon.image} alt={filteredPokemon.name} className="w-20 h-20 mx-auto" />
            <h3 className="text-lg font-bold text-[#ff56d2] capitalize">{filteredPokemon.name}</h3>
            <p className="text-sm text-gray-700">ID: {filteredPokemon.id}</p>
            <p className="text-sm text-gray-700">Altura: {filteredPokemon.height / 10} m</p>
            <p className="text-sm text-gray-700">Peso: {filteredPokemon.weight / 10} kg</p>
            <p className="text-sm text-gray-700">Tipos: {filteredPokemon.types}</p>
          </div>
        )}
      </div>
    </nav>
  );
};
