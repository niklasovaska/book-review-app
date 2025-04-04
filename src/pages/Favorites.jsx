import BookGridList from '../components/BookGridList'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


const Favorites = ({ books, setBooks }) => {

    const favorites = books.filter((book) => book.favorite === true)
    

    return(
        <>
            <Box component="section" sx={{p: 4, margin: 10}}>
                <Typography variant='h4'>Favorites</Typography>
            </Box>
            <BookGridList booksToMap={favorites} books={books} setBooks={setBooks} />
        </>
    )
}

export default Favorites