import { Box, Button, Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import "../App.css";
import LoadingComponent from "./LoadingComponent";
import PokedexListDisplay from "./PokedexListDisplay";
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
                const response = await fetch("https://pokeapi.co/api/v2/pokemon/", {
                    headers: {
                        Accept: "application/json",
                    },
                });
                if (response.ok) {
                    let newPokedexList = await response.json();
                    console.log(newPokedexList);
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
        if (!next || next === "") return;
        setIsLoading(true);
        const response = await fetch(next);
        if (response.ok) {
            let nextPokedexList = await response.json();

            setPokemonList(nextPokedexList.results);
            setNext(nextPokedexList.next ?? null);
            setPrevious(nextPokedexList.previous ?? null);

            setIsLoading(false);
        }
    };

    const handlePrevious = async () => {
        try {
            if (!previous || previous === "") return;
            setIsLoading(true);
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
    };

    return (
        <Container maxWidth="sm">
            {!isLoading ? (
                <Container maxWidth="sm" sx={{ marginBottom: 6, paddingBottom: 2 }}>
                    <Stack spacing={2}>
                        {pokemonList?.map((p, index) => (
                            <PokedexListDisplay key={index} name={p.name} />
                        ))}
                    </Stack>
                    <Box
                        sx={{
                            margin: "auto",
                            p: 2,
                            display: { sm: "block", md: "flex" },
                            textAlign: "center",
                        }}
                    >
                        <Button
                            className="pokedex--btn"
                            variant="contained"
                            onClick={handlePrevious}
                            sx={{ margin: ".5em" }}
                        >
                            Previous
                        </Button>
                        <Button
                            className="pokedex--btn"
                            variant="contained"
                            onClick={handleNext}
                            sx={{ margin: ".5em" }}
                        >
                            Next
                        </Button>
                    </Box>
                </Container>
            ) : (
                <LoadingComponent />
            )}
        </Container>
    );
}
