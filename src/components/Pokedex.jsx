import { Box, Button, Container, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "../App.css";
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
                const response = await fetch(
                    "https://pokeapi.co/api/v2/pokemon/?limit=25"
                );
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
                            <Box key={index} sx={{ textAlign: "center" }}>
                                <Paper key={index} square elevation={13}>
                                    {p.name}
                                </Paper>
                            </Box>
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
                <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6">
                            Loading...
                        </Typography>
                    </Box>
                </Container>
            )}
        </Container>
    );
}
