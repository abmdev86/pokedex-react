import {
    AppBar,
    Box,

    Toolbar,
    Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

export default function NavBar({ children, pageName }) {
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

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {pageName ?? "Welcome to the Pokedex"}
                    </Typography>

                    <Link to="/">HOME</Link>
                </Toolbar>
            </AppBar>
            {children}
        </Box>
    );
}
