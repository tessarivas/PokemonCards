import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { PokemonCard } from './PokemonCard';

export default function MyComponent() {
    const { pokemons } = useContext(AppContext);

    console.log('Pokemons desde el contexto:', pokemons);

    return (
        <>
            <h1>Lista de Pokémon</h1>
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', 
                gap: '10px', 
                justifyContent: 'center', 
                padding: '20px'
            }}>
                {pokemons.length > 0 ? (
                    pokemons.map((pokemon, index) => (
                        <PokemonCard key={index} name={pokemon.name} />
                    ))
                ) : (
                    <p>Cargando Pokémon...</p>
                )}
            </div>
        </>
    );
}
