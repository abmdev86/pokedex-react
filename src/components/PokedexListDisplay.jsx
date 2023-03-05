import { Box, Paper, Typography, } from "@mui/material";
import { Link } from "react-router-dom";


export default function PokedexListDisplay({ name }) {

    return (
        <Box sx={{ textAlign: "center" }}>
            <Paper square elevation={13}>
                <Link to={`pokemon/${name}`}>
                    <Typography align="center" variant="h3" >
                        {name}

                    </Typography>
                </Link>
            </Paper>
        </Box>
    )
}