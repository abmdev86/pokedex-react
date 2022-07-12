import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
} from "@mui/material";

export default function Header(props) {
  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">Pokedex</Typography>
        </Toolbar>
        <Box>
          <Tooltip title="Open settings">
            <IconButton edge="end">
              <Avatar />
            </IconButton>
          </Tooltip>
          <Menu
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem>Setting Item</MenuItem>
          </Menu>
        </Box>
      </AppBar>
    </Box>
  );
}
