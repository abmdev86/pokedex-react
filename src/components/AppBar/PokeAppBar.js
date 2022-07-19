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
    <AppBar>
      <Container
        maxWidth="xl"
        sx={{
          margin: "auto",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CatchingPokemonIcon
            sx={{
              marginRight: "auto",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "red",
              textDecoration: "none",
              margin: "auto",
              alignSelf: "center",
            }}
          >
            PKMR
          </Typography>
          <Box
            sx={{
              padding: ".3rem",
              marginLeft: "auto",
              paddingBlock: 0,
            }}
          >
            <Avatar alt="Remy Sharp" src="#" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default PokeAppBar;
