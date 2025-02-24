import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon } from "../redux/slices/pokemonSlice";
import { PokemonCard } from "./PokemonCard";

export default function MyComponent() {
  const dispatch = useDispatch();
  const { pokemonList, loading } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);

  return (
    <div className="flex justify-center">
      <div className="pb-10 grid gap-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {loading ? (
          <p className="text-center text-black">Cargando...</p>
        ) : (
          pokemonList.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              height={pokemon.height}
              weight={pokemon.weight}
              types={pokemon.types}
            />
          ))
        )}
      </div>
    </div>
  );
}
