import MyComponent from '../components/MyComponent';

export default function Pokemons() {
  return (
    <div>
      <div className="p-10 text-4xl text-pink-500 font-bold font-mono">
        <h1>Lista de Pokemons</h1>
      </div>
      <MyComponent />
    </div>
  );
}