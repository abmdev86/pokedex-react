import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Typography,
} from "@mui/material";

import { Link, useNavigate } from "react-router-dom";

export default function NavBar({ children, pageName }) {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                color="primary"
                sx={{
                    top: 0,
                    bottom: "auto",
                    backgroundColor: "#CC0000",
                    clear: "both",
                }}
            >
                <Toolbar>
                    <IconButton onClick={handleGoBack} aria-label="back" sx={{ mr: 2, ml: 0 }}>
                        <ArrowBackIosNewIcon />BACK
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} href='/'>
                        {pageName ?? "Welcome to the Pokedex"}
                    </Typography>

                    <Link to="/"><CatchingPokemonIcon /></Link>

                </Toolbar>
            </AppBar>
            {children}
        </Box>
    );
}
