export const getPokemon = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");
    if (!res.ok) throw new Error("Error en la petición");
    const data = await res.json();

    const pokemons = await Promise.all(
      data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const details = await res.json();
        return {
          name: details.name,
          image: details.sprites.front_default,
        };
      })
    );

    return pokemons;
  } catch (error) {
    console.error(error);
    return [];
  }
};
