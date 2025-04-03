import  Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const Searchbox = ({ handleSearchValueChange }) => {
    return(
        <Box sx={{p: 3}}>
            <TextField label="Search book reviews" onChange={handleSearchValueChange}/>
        </Box>
    )
}

export default Searchbox