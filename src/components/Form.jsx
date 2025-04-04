import {Box, Button, Container,FormControl, InputLabel, MenuItem, OutlinedInput, Rating, Select, TextField, Typography} from '@mui/material'
import bookService from '../services/books'
import { useState } from 'react'
import genreList from '../data/listOfGenres'


const Form = ({ books, setBooks, handleClose, setAlert }) => {

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
    
    const handleAddBook = (e) => {
        e.preventDefault()
        
        const newBook = {
                ...form,
                publicationYear: parseInt(form.publicationYear),
                genres: selectedGenres,
                ratings: [ratingValue],
                favorite: false,
                challengeNumber: null
            }
        
        bookService
            .create(newBook)
            .then(res => {
                setBooks(books.concat(res.data))
                setAlert({...alert, 
                    visibility: true, 
                    severity: 'success', 
                    message: 'New book review added successfully!'
                })
            })
            .catch(error => {
                console.log(error)
                setAlert({...alert, 
                    visibility: true, 
                    severity: 'error', 
                    message: 'There was an error adding a book review'
                })
            })
    
        handleClose()
    
        setForm({name: '', author: '', publicationYear: 0})
    }
    
    return(
        <Container> 
            <Typography sx={{padding: '2rem'}}variant='h5'>Review a new book</Typography>
            <form onSubmit={handleAddBook} 
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
                <Button type='submit' variant='outlined' color='secondary'>Add</Button>
            </form>
        </Container>
    )
}

export default Form