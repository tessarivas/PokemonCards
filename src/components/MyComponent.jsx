import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { PokemonCard } from "./PokemonCard";

export default function MyComponent() {
  const { pokemons } = useContext(AppContext);

  return (
    <>
      <h1 className="text-2xl text-[#ff00bb] font-bold p-5">Lista de Pokémon</h1>
      <div className="p-5">
        <div className="grid gap-10 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {pokemons.length > 0 ? (
            pokemons.map((pokemon, index) => (
              <PokemonCard key={index} name={pokemon.name} image={pokemon.image} />
            ))
          ) : (
            <p className="text-center text-black">Cargando...</p>
          )}
        </div>
      </div>
    </>
  );
}
