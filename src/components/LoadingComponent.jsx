import { Box } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';



export default function LoadingComponent() {

    return (



        <Box sx={{ display: 'flex', p: 5, mt: '50vh' }}>
            <CircularProgress sx={{ m: 'auto' }} />
        </Box>



    )
}