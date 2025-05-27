import {Box, Button, Container,FormControl, InputLabel, MenuItem, OutlinedInput, Select, Typography} from '@mui/material'
import { updateChallenge } from '../services/books'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { getAll } from '../services/books' 


const ChallengeForm = ({ handleClose, setAlert, challenge }) => {
    const [selectedBook, setSelectedBook] = useState('')

    const queryClient = useQueryClient()

    const { data: challengeBooks, error, isLoading } = useQuery({
        queryKey: ['challengeBooks'],
        queryFn: () => getAll('/books')
    })
    
    const updateChallengeMutation = useMutation({
            mutationFn: updateChallenge,
            onError: (err) => {
                console.log(err)
                setAlert({...alert, 
                    visibility: true,                                     
                    severity: 'error', 
                    message: 'There was an error adding to challenge'
                })
            },
            onSuccess: (data) => {
                queryClient.invalidateQueries({ queryKey: ['challenges']})
                setAlert({...alert, 
                    visibility: true,                                     
                    severity: 'success', 
                    message: 'Challenge completed successfully'
                })
                console.log('Challenge completed successfully', data)
            }
    })


    const handleBookChange = (e) => {
        setSelectedBook(e.target.value)
    }
    
    const handleAddBook = (e) => {
        e.preventDefault()
        
        const updatedChallenge = {...challenge, book_id: parseInt(selectedBook)}
        updateChallengeMutation.mutate(updatedChallenge)
    
        handleClose()
    
        setSelectedBook('')
    }
    
    if(error) {
        return <Typography>Something went wrong</Typography>
      }
    
    if(isLoading) {
    return <Typography>Loading...</Typography>
    }


    return(
        <Container> 
            <Typography sx={{padding: '2rem'}}variant='h5'>Add a book to challenge</Typography>
            <form onSubmit={handleAddBook} 
            style={{display: 'flex', flexDirection: 'column', gap: 15, padding: '2rem'}}>
                <Box>
                    <FormControl fullWidth>
                        <InputLabel id="genres">Select book</InputLabel>
                        <Select
                            labelId="challenge-label"
                            id="books"
                            value={selectedBook}
                            onChange={handleBookChange}
                            input={<OutlinedInput label="Select book" />}
                        >
                            {challengeBooks.map((challenge) => (
                            <MenuItem
                                key={challenge.id}
                                value={challenge.id}
                            >
                                {challenge.name}
                            </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Button type='submit' variant='outlined' color='secondary'>Add</Button>
            </form>
        </Container>
    )
}

export default ChallengeForm