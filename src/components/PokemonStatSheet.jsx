import { Box, Chip, Divider, Paper, Typography } from "@mui/material";

const StatDisplay = ({ statName, statValue }) => (
    <Box >
        <Divider >
            <Chip label={statName.toLocaleUpperCase()} />
        </Divider>
        <Typography variant="h6" align="center">
            {statValue}
        </Typography>
    </Box>
)

export default function PokemonStatSheet({ stats }) {
    return (

        <Paper elevation={12} sx={{ mt: 2, backgroundColor: '#EDEAD1', }}>
            <Typography variant="h4" align="center" sx={{ mb: 2 }}>
                STATS
            </Typography>
            {
                stats?.map((stat, index) => (
                    <StatDisplay key={index} statName={stat?.stat.name} statValue={stat?.base_stat} />

                ))
            }
        </Paper>
    )

}