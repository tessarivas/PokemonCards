import React from "react";

export function PokemonCard({ name, image, height, weight, types }) {
  return (
    <div className="border-5 border-white p-6 rounded-lg text-center w-48 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 font-bold shadow-md hover:scale-105 transition-all">
      <img src={image} alt={name} className="w-28 h-28 mx-auto" />
      <p className="text-sm text-white mt-2">Name:</p>
      <h3 className="capitalize text-[#ffa1eb] text-lg font-extrabold drop-shadow-[0_0_5px_#ff00c8]">{name}</h3>
      <p className="text-sm text-white mt-2">Height: {height / 10} m</p>
      <p className="text-sm text-white">Weight: {weight / 10} kg</p>
      <p className="text-sm text-white">Types: {types}</p>
    </div>
  );
}
