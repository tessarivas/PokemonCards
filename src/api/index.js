export const getPokemon = () => {
    return fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error en la petición");
        }
        return res.json();
      })
      .then((data) =>
        Promise.all(
          data.results.map((pokemon) =>
            fetch(pokemon.url)
              .then((res) => res.json())
              .then((pokemonData) => ({
                name: pokemonData.name,
                image: pokemonData.sprites.front_default,
                height: pokemonData.height,
                weight: pokemonData.weight,
                types: pokemonData.types.map((type) => type.type.name).join(", "),
              }))
          )
        )
      )
      .catch((err) => console.log(err));
  };
  