import { createContext, useState, useEffect } from "react";
import { getPokemon } from "../api";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "tere", email: "tere@gmail.com" });
  console.log("usuario " + JSON.stringify(user));

  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsData = await getPokemon();
      setPokemons(pokemonsData);
    };
    fetchPokemons();
  }, []);
  console.log(pokemons);

  return (
    <AppContext.Provider value={{ user, setUser, pokemons }}>
      {children}
    </AppContext.Provider>
  );
};
