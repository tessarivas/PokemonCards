export const getPokemon = () => {
    return fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
        .then(res => {
            if (!res.ok) {
                throw new Error('Error en la petición')
            }
            return res.json()
        })
        .then(data => data.results)
        .catch(err => console.log(err))
}