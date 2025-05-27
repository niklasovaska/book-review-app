import BookGridList from '../components/BookGridList'
import Statistics from '../components/Statistics'
import Searchbox from '../components/Searchbox'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAll } from '../services/books'

const AllBooks = ({ setAlert }) => {

    const [searchValue, setSearchValue] = useState('')

    const handleSearchValueChange = (e) => {
        setSearchValue(e.target.value)
    }

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

    const booksToMap = books.filter((book) => book.name.toLowerCase().includes(searchValue.toLowerCase()) || book.author.toLowerCase().includes(searchValue.toLowerCase()))

    return(
        <>
            <Statistics books={books} />
            <Box component='section' sx={{p: 4, mx: 10}}>
                <Typography variant='h4'>Reviews</Typography>
                <Searchbox handleSearchValueChange={handleSearchValueChange} />
            </Box>
            <BookGridList booksToMap={booksToMap} books={books} setAlert={setAlert} />
        </>
    )
}

export default AllBooks