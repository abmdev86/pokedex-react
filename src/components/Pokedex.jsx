import { Box, Button, Paper, Stack } from "@mui/material";
import { useEffect, useState } from "react";

export default function Pokedex() {
    const [pokemonList, setPokemonList] = useState([]);
    const [next, setNext] = useState(null);
    const [previous, setPrevious] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let ignore = false;
        setPokemonList([]);
        setIsLoading(true);
        const newList = async () => {
            try {
                const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=25");
                if (response.ok) {
                    let newPokedexList = await response.json();

                    if (!ignore) {
                        setNext(newPokedexList.next);
                        setPokemonList(newPokedexList.results);
                    }
                    setIsLoading(false);
                }
            } catch (e) {
                setIsLoading(false);

                throw e;
            }
        };

        if (!ignore) {
            newList();
        }

        return () => {
            ignore = true;
        };
    }, []);

    const handleNext = async () => {
        if (!next || next === '') return;
        setIsLoading(true);
        const response = await fetch(next);
        if (response.ok) {
            let nextPokedexList = await response.json();

            setPokemonList(nextPokedexList.results);
            setNext(nextPokedexList.next ?? null);
            setPrevious(nextPokedexList.previous ?? null);

            setIsLoading(false);
        }


    }

    const handlePrevious = async () => {
        try {
            if (!previous || previous === "") return;
            setIsLoading(true)
            const response = await fetch(previous);

            if (response.ok) {
                let previousPokedexList = await response.json();

                setPokemonList(previousPokedexList.results);
                setNext(previousPokedexList.next ?? null);
                setPrevious(previousPokedexList.previous ?? null);
                setIsLoading(false);
            }
        } catch (err) {
            console.error(err.message, err);
            setIsLoading(false);

        }

    }

    return (
        <div>
            {
                !isLoading ? (
                    <div>
                        <Stack>
                            {pokemonList?.map((p, index) => (
                                <Paper key={index}>{p.name}</Paper>
                            ))}
                        </Stack>
                        <Box>
                            <Button variant="outline" onClick={handleNext} >Next</Button>
                            <Button variant="outline" onClick={handlePrevious} >Previous</Button>

                        </Box>
                    </div>) : (
                    <div>LOADING....</div>
                )
            }
        </div>
    )

}
