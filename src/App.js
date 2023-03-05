import { useState } from "react";
import "./App.css";
import Pokedex from "./components/Pokedex";
import PokedexMenu from "./components/PokedexMenu";

function App() {
  const [isPokedex, setIsPokedex] = useState(false);

  const handleShowPokedex = (event) => {
    event.preventDefault();
    setIsPokedex(!isPokedex);
  };

  return (
    <PokedexMenu handlePokemonList={handleShowPokedex}>
      {isPokedex ? <Pokedex /> : null}
    </PokedexMenu>
  );
}

export default App;
