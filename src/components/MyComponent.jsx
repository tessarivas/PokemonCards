import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { PokemonCard } from "./PokemonCard";

export default function MyComponent() {
  const { pokemons } = useContext(AppContext);

  return (
    <>
      <h1 className="font-mono text-2xl text-[#ff00bb] font-bold p-5">Lista de Pokémon</h1>
      <div className="p-5">
        <div className="grid gap-10 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {pokemons.length > 0 ? (
            pokemons.map((pokemon, index) => (
              <PokemonCard
                key={index}
                name={pokemon.name}
                image={pokemon.image}
                height={pokemon.height}
                weight={pokemon.weight}
                types={pokemon.types}
              />
            ))
          ) : (
            <p className="text-center text-black">Cargando...</p>
          )}
        </div>
        <h2 className="font-mono text-[#ff00bb] font-bold pt-20">Teresa Rivas Gómez</h2>
      </div>
    </>
  );
}
