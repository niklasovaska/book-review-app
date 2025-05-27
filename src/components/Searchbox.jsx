import  Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const Searchbox = ({ handleSearchValueChange }) => {
    return(
        <Box sx={{mt: 4}}>
            <TextField label="Search book reviews" onChange={handleSearchValueChange} fullWidth/>
        </Box>
    )
}

export default Searchbox