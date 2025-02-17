import React from "react";

export function PokemonCard({ name, image }) {
    return (
        <div className="border-3 border-white p-4 rounded-lg text-center w-36 
        bg-gradient-to-br from-blue-400 via-purple-300 to-pink-500 font-bold shadow-lg
        transform transition duration-300 hover:scale-105">
            <img src={image} alt={name} className="w-24 h-24 mx-auto" />
            <h3 className="capitalize text-white text-shadow-xl">{name}</h3>
        </div>
    );
}
