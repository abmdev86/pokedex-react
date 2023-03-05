import { Box, Container, Typography } from "@mui/material";
import NavBar from "./NavBar";



export default function LoadingComponent() {

    return (
        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
            <NavBar pageName="LOADING">

                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6">
                        Loading...
                    </Typography>
                </Box>
            </NavBar>

        </Container>
    )
}