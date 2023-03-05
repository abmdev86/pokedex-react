import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        const response = await fetch(`${process.env.REACT_APP_BASEURL}${name}`);

        if (response.ok) {
          let newPokemonData = await response.json();
          if (!ignore) {
            setCurrentPokemon(newPokemonData);
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
  return <Container maxWidth="sm">{currentPokemon?.name}</Container>;
}
