import BookGridList from '../components/BookGridList'
import Statistics from '../components/Statistics'
import Searchbox from '../components/Searchbox'
import Box from '@mui/material/Box'
import { useState } from 'react'

const AllBooks = ({ books, setBooks }) => {

    const [searchValue, setSearchValue] = useState('')

    const handleSearchValueChange = (e) => {
        setSearchValue(e.target.value)
      }

    const booksToMap = books.filter((book) => book.name.toLowerCase().includes(searchValue.toLowerCase()) || book.author.toLowerCase().includes(searchValue.toLowerCase()))

    return(
        <>
            <Statistics books={books} />
            <Box component='section' sx={{p: 1, m: 10}}>
                <Searchbox handleSearchValueChange={handleSearchValueChange} />
            </Box>
            <BookGridList booksToMap={booksToMap} books={books} setBooks={setBooks} />
        </>
    )
}

export default AllBooks