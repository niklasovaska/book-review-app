import { Box, Paper, Typography } from '@mui/material'

const Statistics = ({ books }) => {
    return(
        <Box component="section" sx={{p: 4, margin: 10}}>
            <Paper>
                <Typography>The Book Review Club has reviewed a total of {books.length} books</Typography>
            </Paper>
        </Box>
    )
}

export default Statistics