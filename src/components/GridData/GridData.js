import * as React from "react";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import PokedexRowData from "data/PokedexRowData";

import { Box } from "@mui/material";
import Pokedex from "pokedex-promise-v2";
import { useState } from "react";
const P = new Pokedex();

const colDef = [
  { field: "col1", headerName: "First Name", width: 150 },
  { field: "col2", headerName: "Last Name ", width: 150 },
  { field: "col3", headerName: "Address ", width: 150 },
];

export default function GridData() {
  const [row, setRow] = useState([]);

  useEffect(() => {
    P.getPokemonByName("eevee")
      .then((res) => {
        let rowData = new PokedexRowData(res.id, res.name, res.is_Main_Series);
        setRow(() => {
          row.push(rowData);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [row]);
  return (
    <Box
      sx={{
        display: "flex",
        margin: "auto",

        padding: "3rem",
      }}
    >
      <DataGrid
        sx={{
          display: "flex",
          padding: "2rem",
        }}
        autoHeight
        rows={row}
        columns={colDef}
      />
    </Box>
  );
}
