import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { PokemonCard } from './PokemonCard';

export default function MyComponent() {
    const { pokemons } = useContext(AppContext);

    return (
        <>
            <h1 className='text-2xl text-[#530000] font-bold p-5'>Lista de Pokémon</h1>
            <div className=''>
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(5, 1fr)',  
                    gap: '20px', 
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
            </div>
        </>
    );
}
