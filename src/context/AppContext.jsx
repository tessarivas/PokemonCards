import { createContext, useState, useEffect } from 'react';
import { getPokemon } from '../api';

// crear el contexto
export const AppContext = createContext();

// proveedor del contexto
export const AppProvider = ({ children }) => {
    const[user, setUser] = useState({name: 'tere', email: 'tere@gmail.com'}); 
    console.log('usuario ' + JSON.stringify(user));

    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        const pokemonsResponse = getPokemon();
        pokemonsResponse.then((pokemons) => {
            setPokemons(pokemons);
        });
    }, []);
    console.log(pokemons);

    return (
        <AppContext.Provider value={{ user, setUser, pokemons }}>
            {children}
        </AppContext.Provider>
    );    
}
