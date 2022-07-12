import Container from "@mui/material/Container";
import { Divider, Grid } from "@mui/material";
import Navbar from "components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <Container maxWidth="xl">
      <Divider />
      <Grid container spacing={2}>
        <Navbar />
        <Outlet />
      </Grid>
    </Container>
  );
}

export default App;
