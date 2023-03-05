import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import LoadingComponent from "../components/LoadingComponent";
import PokemonDashboard from "../components/PokemonDashboard";
export default function Pokemon() {
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { name } = useParams();

  useEffect(() => {
    let ignore = false;
    setIsLoading(true);
    setCurrentPokemon(null);
    const getCurrentPokemon = async () => {
      try {
        const response = await fetch(
          `${"https://pokeapi.co/api/v2/pokemon/"}${name}`,
          {
            headers: {
              Accept: "application/json",
            },
          }
        );

        if (response.ok) {
          let newPokemonData = await response.json();
          if (!ignore) {
            setCurrentPokemon(newPokemonData);
            setIsLoading(false);
          }
        }
      } catch (err) {
        console.error(err);
      }
    };

    getCurrentPokemon();

    return () => {
      ignore = true;
    };
  }, [name]);

  return (
    <>
      {!isLoading ? (
        <NavBar pageName={`${currentPokemon?.name.toUpperCase()}'s Dashboard`}>
          <PokemonDashboard pokemon={currentPokemon} />
        </NavBar>
      ) : (
        <LoadingComponent />
      )}
    </>
  );
}
