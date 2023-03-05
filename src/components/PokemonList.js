import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableBody,
  IconButton,
  Collapse,
  Typography,
  TablePagination,
  TableFooter,
} from "@mui/material";
import { useState } from "react";
import data from "../Data/pokedex.json";
import PropTypes from "prop-types";
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material";
import { Box } from "@mui/system";
function createDataFromSource(
  name,
  id,
  type = [],
  hp,
  attack,
  def,
  specAtk,
  specDef,
  speed
) {
  return {
    name,
    id,
    type: [...type],
    base: {
      hp: hp,
      attack: attack,
      defense: def,
      specialAtk: specAtk,
      specialDef: specDef,
      speed: speed,
    },
  };
}
function getPokemonJson() {
  let response = data.map((data) => {
    let [attack, defense, hp, specAttack, specDefense, speed] = Object.values(
      data.base
    );
    let pokemon = createDataFromSource(
      data.name,
      data.id,
      [...data.type],
      hp,
      attack,
      defense,
      specAttack,
      specDefense,
      speed
    );

    return pokemon;
  });
  return response;
}
function PokeDataRow(props) {
  const [open, setOpen] = useState(false);
  const { pokemon } = { ...props };

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpOutlined /> : <KeyboardArrowDownOutlined />}
          </IconButton>
        </TableCell>
        <TableCell>{pokemon.id}</TableCell>
        <TableCell align="right">{pokemon.name.english}</TableCell>
        <TableCell align="right">{pokemon.type}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={2}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                {pokemon.name.english}'s Base Stats
              </Typography>
              <Table size="small" aria-label="pokemon base stats">
                <TableHead>
                  <TableRow>
                    <TableCell>HP</TableCell>
                    <TableCell>Attack</TableCell>
                    <TableCell>Defense</TableCell>
                    <TableCell>Special Attack</TableCell>
                    <TableCell>Special Defense</TableCell>
                    <TableCell>Speed</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{pokemon.base.hp}</TableCell>
                    <TableCell>{pokemon.base.attack}</TableCell>
                    <TableCell>{pokemon.base.defense}</TableCell>
                    <TableCell>{pokemon.base.specialAtk}</TableCell>
                    <TableCell>{pokemon.base.specialDef}</TableCell>
                    <TableCell>{pokemon.base.speed}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

PokeDataRow.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.shape({
      english: PropTypes.string,
      japanese: PropTypes.string,
      chinese: PropTypes.string,
      french: PropTypes.string,
    }),
    type: PropTypes.array,
    base: PropTypes.shape({
      hp: PropTypes.number,
      attack: PropTypes.number,
      defense: PropTypes.number,
      specialAtk: PropTypes.number,
      specialDef: PropTypes.number,
      speed: PropTypes.number,
    }),
  }),
};
export default function PokemonList() {
  const [pokedex, setPokedex] = useState(getPokemonJson());
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    event.preventDefault();
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value), 10);
    setPage(0);
  };
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label=" Collapsible Pokemon list table"
      >
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>ID</TableCell>
            <TableCell align="right">NAME</TableCell>
            <TableCell align="right">TYPE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? pokedex.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : pokedex
          ).map((pokemon) => (
            <PokeDataRow key={pokemon.name.english} pokemon={pokemon} />
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              count={pokedex.length}
              page={page}
              rowsPerPage={rowsPerPage}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              component={Paper}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
