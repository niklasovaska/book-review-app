import BookCard from './BookCard'
import { Box, TextField } from '@mui/material'
import Grid from '@mui/material/Grid2'

const Booklist = ({ books, handleSearchValueChange }) => {
    return(
        <Box component="section" sx={{p: 4, margin: 10, border: 1, borderColor: '#03DAC5'}}>
            <Box sx={{p: 3}}>
                <TextField label="Search book reviews" onChange={handleSearchValueChange}/>
            </Box>
            <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                {books.map(book => <Grid key={book.id} size={{xs: 2, sm: 4, md: 4}}><BookCard book={book} /></Grid>)}
            </Grid>
        </Box>
    )
}

export default Booklist