import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Tooltip from '@mui/material/Tooltip'
import { updateBook } from '../services/books' 
import { useMutation, useQueryClient } from '@tanstack/react-query'

const CardFavoriteIcon = ({ book, books, setAlert }) => {

    const queryClient = useQueryClient()
    
    const updateBookMutation = useMutation({
        mutationFn: updateBook,
        onError: (err) => {
            console.log(err)
            setAlert({...alert, 
                visibility: true,                                     
                severity: 'error', 
                message: 'There was an error adding to favorites'
            })
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['books']})
            console.log('Favorite toggled successfully', data)
        }
    })

    

    const handleFavoriteToggle = () => {
        console.log('clicked')
        const existingBook = books.find(b => b.id === book.id)
        const updatedBook = {...existingBook, favorite: !existingBook.favorite}
        updateBookMutation.mutate(updatedBook)
    }

    return(
        <Tooltip title={book.favorite ? `` : `Add to favorites`}>
            <IconButton onClick={handleFavoriteToggle}>
                {book.favorite ? <FavoriteIcon fontSize='small' sx={{color: '#f66e5f'}}/> : <FavoriteBorderIcon fontSize='small'/>}
            </IconButton>
        </Tooltip>
    )
}

export default CardFavoriteIcon