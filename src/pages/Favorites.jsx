import BookGridList from '../components/BookGridList'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useQuery } from '@tanstack/react-query'
import { getAll } from '../services/books'

const Favorites = () => {

    
    
    const { data: books, error, isLoading } = useQuery({
              queryKey: ['books'],
              queryFn: () => getAll('/books')
        })
    
    if(isLoading) {
        return <span>Loading...</span>
    }
    if(error) {
        return(<span>Error when fetching books...</span>)
    }

    const favorites = books.filter((book) => book.favorite === 1)

    return(
        <>
            <Box component="section" sx={{p: 6, mx: 10}}>
                <Typography variant='h3'>Favorites</Typography>
            </Box>
            <BookGridList booksToMap={favorites} books={books} />
        </>
    )
}

export default Favorites