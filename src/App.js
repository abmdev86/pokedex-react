import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Pokedex from "./components/Pokedex";
import PokedexMenu from "./components/PokedexMenu";

function App() {
  const [isPokedex, setIsPokedex] = useState(false);

  const handleShowPokedex = (event) => {
    event.preventDefault();
    setIsPokedex(!isPokedex);
  };

  return (
    <NavBar pageName="POKEDEX">
      <PokedexMenu handleShowPokemonList={handleShowPokedex}>
        {isPokedex ? <Pokedex /> : null}
      </PokedexMenu>
    </NavBar>
  );
}

export default App;
