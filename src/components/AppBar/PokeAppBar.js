import React from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

const PokeAppBar = ({ isLoggedIn }) => {
  return (
    <AppBar position="absolute">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CatchingPokemonIcon />
          <Typography
            nowrap
            variant="h6"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "red",
              textDecoration: "none",
            }}
          >
            PKMR
          </Typography>

          <Box>
            <Avatar
              sx={{
                padding: ".3rem",
              }}
              alt="Remy Sharp"
              src="#"
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default PokeAppBar;
