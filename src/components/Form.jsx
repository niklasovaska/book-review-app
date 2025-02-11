import {Box, Button, Container,FormControl, InputLabel, MenuItem, OutlinedInput, Paper, Rating, Select, TextField, Typography} from '@mui/material'
import { useState } from 'react'
import genreList from '../data/listOfGenres'

const Form = ({ books, setBooks }) => {

    const [form, setForm] = useState({
        name: '',
        author: '',
        publicationYear: 0
    })

    const [ratingValue, setRatingValue] = useState(0)
    const [selectedGenres, setSelectedGenres] = useState([])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleGenreChange = (e) => {
        const {
            target: { value },
          } = e;
          setSelectedGenres(
            typeof value === 'string' ? value.split(',') : value,
          )
    }

    const handleAdd = (e) => {
        e.preventDefault()
        const newBook = {
            ...form,
            publicationYear: parseInt(form.publicationYear),
            genres: selectedGenres,
            ratings: [ratingValue],
            id: books.length + 1}

        setBooks(books.concat(newBook))
        setForm({
            name: '',
            author: '',
            publicationYear: 0
        })
    }

    const styles = {

    }
    
    return(
        <Container sx={{mb: 10, width: 500}}>
            <Paper>
                <Typography sx={{padding: '2rem'}}variant='h5'>Review a new book</Typography>
                <form onSubmit={handleAdd} 
                style={{display: 'flex', flexDirection: 'column', gap: 15, padding: '2rem'}}>
                    <TextField 
                        label="Name"
                        name="name"
                        onChange={handleChange}
                    />
                    <TextField
                        label="Author"
                        name="author"
                        onChange={handleChange}
                    />
                    <TextField
                        label="Publication year"
                        name="publicationYear"
                        onChange={handleChange}
                    />
                    <Box>
                        <FormControl sx={{width: '100%' }}>
                            <InputLabel id="genres">Select genres</InputLabel>
                            <Select
                                labelId="genre-label"
                                id="genres"
                                multiple
                                value={selectedGenres}
                                onChange={handleGenreChange}
                                input={<OutlinedInput label="Select genres" />}
                            >
                                {genreList.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                >
                                    {name}
                                </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{display: 'flex', gap: 5}}>
                        <InputLabel sx={{marginLeft: 2}}>Rating</InputLabel>
                        <Rating name="rating" 
                            precision={0.5}
                            value={ratingValue}  
                            onChange={(e, newValue) => {
                                setRatingValue(newValue)
                            }}
                        />
                    </Box>
                    <Button type='submit' variant='outlined'>Add</Button>
                </form>
            </Paper>
        </Container>
        
        // <Box component="section" sx={{p: 5, margin: 10, border: '1px solid black' }}></Box>
    )
}

export default Form