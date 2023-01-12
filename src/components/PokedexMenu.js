import {
  AppBar,
  CssBaseline,
  Divider,
  Fab,
  IconButton,
  Toolbar,
} from "@mui/material";
import styled from "@emotion/styled";
import MoreIcon from "@mui/icons-material/More";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

export default function PokedexMenu({ children, handlePokemonList }) {
  return (
    <>
      <CssBaseline />
      {children}
      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: "auto", bottom: 0, backgroundColor: "red" }}
      >
        <Toolbar>
          <StyledFab
            color="primary"
            aria-label="add"
            onClick={handlePokemonList}
          >
            <CatchingPokemonIcon />
          </StyledFab>
          <Divider />

          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
