import React from 'react';

export function PokemonCard({ name }) {
    return (
        <div className="border-2 border-black p-4 rounded-lg text-center w-36 bg-gray-100 font-bold shadow-md">
            <h3 className="capitalize text-black">{name}</h3>
        </div>
    );
}
