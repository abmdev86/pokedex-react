import {
  AppBar,
  Container,
  CssBaseline,
  Divider,
  Fab,
  Toolbar,
} from "@mui/material";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

export default function PokedexMenu({ children, handleShowPokemonList }) {
  return (
    <Container maxWidth="sm">
      <CssBaseline />
      {children}
      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: "auto", bottom: 0, backgroundColor: "#CC0000" }}
      >
        <Toolbar>
          <StyledFab
            color="primary"
            aria-label="add"
            onClick={handleShowPokemonList}
          >
            <CatchingPokemonIcon />
          </StyledFab>
          <Divider />

          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </Container>
  );
}
