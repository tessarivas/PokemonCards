import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { PokemonCard } from "./PokemonCard";

export default function MyComponent() {
  const { pokemons } = useContext(AppContext);

  return (
    <>
      <div className="flex justify-center">
      <div className="pb-10 grid gap-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {pokemons.length > 0 ? (
          pokemons.map((pokemon, index) => (
            <PokemonCard
              key={index}
              id={pokemon.id}
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
    </div>
    </>
  );
}
