import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip'
import { deleteBook } from '../services/books'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const CardDeleteIcon = ({ book, setAlert }) => {

    const queryClient = useQueryClient()

    const { mutate } = useMutation({
        mutationFn: deleteBook,
        onError: (err) => {
            setAlert({...alert, 
                visibility: true,                                     
                severity: 'error', 
                message: 'There was an error deleting a book review'
            })
            console.log(err)
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['books']})
            setAlert({...alert, 
                visibility: true, 
                severity: 'success', 
                message: 'Book review deleted successfully!'
            })

            console.log('Successfully deleted: ', data)
        }
    })

    return(
        <Tooltip title='Delete book'>
            <IconButton onClick={() => mutate(book.id)}>
                <DeleteIcon fontSize='small' />
            </IconButton>
        </Tooltip>
    )
}

export default CardDeleteIcon