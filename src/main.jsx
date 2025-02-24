import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// STYLE
import "./index.css";
// APP
import App from "./App.jsx";
// PROVIDERS
import { Provider } from "react-redux";
import store from "./redux/store.js";
// PAGES
import PokemonDetail from "./pages/PokemonDetails.jsx";
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites.jsx";
import Pokemons from "./pages/Pokemons.jsx";

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/PokemonCards">
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/pokemon/:id" element={<PokemonDetail />} />
            <Route index element={<Home />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="pokemons" element={<Pokemons />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
