import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateChallenge } from '../services/books'

const RemoveChallengeIcon = ({ challenge, setAlert }) => {

    const queryClient = useQueryClient()
    
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
                    message: 'Book removed successfully'
                })
                console.log('Challenge updated successfully', data)
            }
        })
    
        const handleChallengeUpdate = () => {
            console.log('clicked')
            // const existingChallenge = challenge.find(b => b.id === book.id)
            const updatedChallenge = {...challenge, book_id: null}
            console.log(updatedChallenge)
            updateChallengeMutation.mutate(updatedChallenge)
        }

    return(
        <Tooltip title={`Remove book`}>
            <IconButton onClick={handleChallengeUpdate}>
                <RemoveCircleOutlineIcon fontSize='small'/>
            </IconButton>
        </Tooltip>
    )
}

export default RemoveChallengeIcon