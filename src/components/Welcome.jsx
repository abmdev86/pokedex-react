import { Container, Paper, Typography } from "@mui/material";

export default function Welcome() {
    return (
        <Container maxWidth="sm">
            <Paper elevation={13} sx={{ p: 2 }}>
                <Typography variant="body1" paragraph sx={{ m: "auto" }}>
                    Welcome to your Pokedex. To get started, click the Pokeball below to
                    pull up your list of Pokemon!
                </Typography>
            </Paper>
        </Container>
    );
}
