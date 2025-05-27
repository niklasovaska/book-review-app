import {Box, Button, Container,FormControl, InputLabel, MenuItem, OutlinedInput, Rating, Select, TextField, Typography} from '@mui/material'
import { getAll, createBook } from '../services/books'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

const Form = ({ handleClose, setAlert }) => {
    const queryClient = useQueryClient()

    const { data: genres, error, isLoading } = useQuery({
        queryKey: ['genres'],
        queryFn: () => getAll('/genres')
    })

    // const genreMap = returnMapFromObjectList(genres)

    const { mutate } = useMutation({
        mutationFn: createBook,
        onError: (err) => { 
            console.log(err)
            setAlert({...alert, 
                visibility: true, 
                severity: 'error', 
                message: 'There was an error adding a book review'
            })
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['books']})
            console.log('Success: ', data)
            setAlert({...alert, 
                visibility: true, 
                severity: 'success', 
                message: 'New book review added successfully!'
            })
        }
    })

    const [form, setForm] = useState({
        name: '',
        author: '',
        publicationYear: 0
    })

    const [ratingValue, setRatingValue] = useState(0)
    const [selectedGenre, setSelectedGenre] = useState('')

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleGenreChange = (e) => {
        setSelectedGenre(e.target.value)
    }
    
    const handleAddBook = (e) => {
        e.preventDefault()
        
        const newBook = {
                ...form,
                publicationYear: parseInt(form.publicationYear),
                rating: ratingValue,
                favorite: false,
                genreId: parseInt(selectedGenre)
            }
        mutate(newBook)       
    
        handleClose()
    
        setForm({name: '', author: '', publicationYear: 0})
    }
    
    if(error) {
        return <Typography>Something went wrong</Typography>
      }
    
    if(isLoading) {
    return <Typography>Loading...</Typography>
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
                    <FormControl fullWidth>
                        <InputLabel id="genres">Select genre</InputLabel>
                        <Select
                            labelId="genre-label"
                            id="genres"
                            value={selectedGenre}
                            onChange={handleGenreChange}
                            input={<OutlinedInput label="Select genres" />}
                        >
                            {genres.map((genre) => (
                            <MenuItem
                                key={genre.id}
                                value={genre.id}
                            >
                                {genre.name}
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