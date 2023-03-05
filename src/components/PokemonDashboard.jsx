import {
    Avatar,
    Box,
    Chip,
    Divider,
    Grid,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import PokemonStatSheet from "./PokemonStatSheet";

const PokemonTypeCard = ({ types }) => {
    return (
        <Box sx={{ width: "100%", backgroundColor: "#EDEAD1", height: "100%" }}>
            <Typography variant="h4" align="center" sx={{ mb: 2 }}>
                TYPES
            </Typography>
            {types?.map((type, index) => (
                <Typography key={index} variant="h6" align="center">
                    {type?.slot} - {type?.type.name.toLocaleUpperCase()}
                </Typography>
            ))}
        </Box>
    );
};

const MoveList = ({ moves }) => {
    return (
        <Box sx={{ width: "100%", backgroundColor: "#EDEAD1" }}>
            <Typography variant="h4" align="center" sx={{ mb: 2 }}>
                MOVES
            </Typography>
            <Stack spacing={2}>
                {moves?.map((move, index) => (
                    <Paper
                        key={index}
                        sx={{ textAlign: "center", p: 1, backgroundColor: "#D0D9CD" }}
                    >
                        <Typography variant="body2">
                            {move?.move.name.toLocaleUpperCase()}
                        </Typography>
                    </Paper>
                ))}
            </Stack>
        </Box>
    );
};

export default function PokemonDashboard({ pokemon }) {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Paper elevation={12} sx={{ mt: 2, backgroundColor: "#EDEAD1" }}>
                    <Avatar
                        sx={{ width: 125, height: 125, m: "auto" }}
                        alt={`${pokemon?.name}'s front facing sprite`}
                        src={pokemon?.sprites.front_default}
                    />
                    <Typography variant="h2" align="center">
                        {pokemon?.name.toLocaleUpperCase()}
                    </Typography>
                    <Box sx={{ flexGrow: 1, m: 4, textAlign: "center", p: 2 }}>
                        <Divider sx={{ mb: 1 }}>
                            <Chip label="ID" />
                        </Divider>
                        <Typography variant="h6">{pokemon?.id}</Typography>
                        <Divider sx={{ mt: 1 }}>
                            <Chip label="HEIGHT" />
                        </Divider>
                        <Typography variant="h6">{pokemon?.height}</Typography>
                        <Divider sx={{ mt: 1 }}>
                            <Chip label="WEIGHT" />
                        </Divider>
                        <Typography variant="h6">{pokemon?.weight}</Typography>
                        <Divider sx={{ mt: 1 }}>
                            <Chip label="BASE EXP" />
                        </Divider>
                        <Typography variant="h6">{pokemon?.base_experience}</Typography>
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
                <PokemonTypeCard types={pokemon?.types} />
            </Grid>
            <Grid item xs={12} md={6}>
                <PokemonStatSheet stats={pokemon?.stats} />
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper elevation={12} sx={{ mt: 2 }}>
                    <MoveList moves={pokemon?.moves} />
                </Paper>
            </Grid>
        </Grid>
    );
}
