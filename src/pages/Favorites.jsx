import { Link } from 'react-router-dom';

export default function Favorites() {
  return (
    <>
      <div className="p-10 text-4xl text-pink-500 font-bold font-mono">
        <h1>Favoritos</h1>
      </div>
      <div className=" text-black font-mono text-center">
        <h2>Aún no hay favoritos...</h2>
      </div>
    </>
  );
}