import { useState } from "react";
import "./App.css";
import PokedexMenu from "./components/PokedexMenu";
import PokemonList from "./components/PokemonList";

function App() {
  const [isPokedex, setIsPokedex] = useState(false);

  const handleShowPokedex = (event) => {
    event.preventDefault();
    setIsPokedex(!isPokedex);
  };

  return (
    <PokedexMenu handlePokemonList={handleShowPokedex}>
      {isPokedex ? <PokemonList /> : null}
    </PokedexMenu>
  );
}

export default App;
