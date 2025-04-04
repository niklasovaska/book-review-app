import Grid from '@mui/material/Grid2'
import Box from '@mui/material/Box'
import BookCard from './BookCard'

const BookGridList = ({ booksToMap, books, setBooks }) => {
    return(
        <Box component="section" sx={{p: 4, margin: 10, border: 1, borderColor: '#03DAC5'}}>
            <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                {booksToMap.map(book => 
                    <Grid key={book.id} size={{xs: 2, sm: 4, md: 4}}>
                        <BookCard book={book} books={books} setBooks={setBooks}/>
                    </Grid>)}
            </Grid>
        </Box>
    )
}

export default BookGridList