import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function PokemonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!res.ok) throw new Error("No se encontró el Pokémon");
        const data = await res.json();

        setPokemon({
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
          height: data.height / 10,
          weight: data.weight / 10,
          types: data.types.map((type) => type.type.name).join(", "),
        });
      } catch (error) {
        console.error("Error al obtener el Pokémon:", error);
      }
    };

    fetchPokemon();
  }, [id]);

  if (!pokemon) return <p className="pt-20 text-center text-black">Cargando...</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 p-6">
      <div className="relative border-5 border-white p-6 rounded-lg text-center w-64 
                      bg-white shadow-lg hover:scale-105 transition-all">
        <div className="absolute top-2 left-2 bg-gray-200 text-black px-3 py-1 rounded-full text-xs font-bold shadow-md">
          #{pokemon.id}
        </div>
        <img src={pokemon.image} alt={pokemon.name} className="w-32 h-32 mx-auto" />
        <h3 className="capitalize text-xl font-extrabold text-gray-800 mt-3">{pokemon.name}</h3>
        <p className="text-sm text-gray-600 mt-2">Altura: {pokemon.height} m</p>
        <p className="text-sm text-gray-600">Peso: {pokemon.weight} kg</p>
        <p className="text-sm text-gray-600">Tipo: {pokemon.types}</p>
      </div>
      <button
        onClick={() => navigate(-1)}
        className="mt-6 bg-red-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-red-700 transition-all shadow-lg"
      >
        Regresar
      </button>
    </div>
  );
}

export default PokemonDetail;
