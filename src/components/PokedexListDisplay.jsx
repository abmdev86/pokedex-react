import { Box, Button, Paper } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function PokedexListDisplay({ name }) {
    return (
        <Box sx={{ textAlign: "center" }}>
            <Paper square elevation={13}>
                <Button component={RouterLink} to={`pokemon/${name}`}>
                    {name}
                </Button>
            </Paper>
        </Box>
    );
}
