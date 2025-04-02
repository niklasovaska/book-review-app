import BookCard from './BookCard'
import { Box, Paper, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { useState } from 'react'

const Booklist = ({ books }) => {

    const [searchValue, setSearchValue] = useState('')

    const handleSearchValueChange = (e) => {
        setSearchValue(e.target.value)
      }

    const booksToShow = books.filter((book) => book.name.toLowerCase().includes(searchValue.toLowerCase()) || book.author.toLowerCase().includes(searchValue.toLowerCase()))

    return(
        <>
            <Box component="section" sx={{p: 4, margin: 10}}>
                <Paper>
                    <Typography>The Book Review Club has reviewed a total of {books.length} books</Typography>
                </Paper>
            </Box>
            <Box component="section" sx={{p: 4, margin: 10, border: 1, borderColor: '#03DAC5'}}>
                <Box sx={{p: 3}}>
                    <TextField label="Search book reviews" onChange={handleSearchValueChange}/>
                </Box>
                <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                    {booksToShow.map(book => <Grid key={book.id} size={{xs: 2, sm: 4, md: 4}}><BookCard book={book} /></Grid>)}
                </Grid>
            </Box>
        
        </>
    )
}

export default Booklist