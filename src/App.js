import Grid from "@mui/material/Grid";
import Navbar from "components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import PokeAppBar from "components/AppBar/PokeAppBar";
import Box from "@mui/material/Box";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Grid container spacing={2}>
      <PokeAppBar />
     
      <Navbar />
      <Outlet />
    </Grid>
  );
}

export default App;
