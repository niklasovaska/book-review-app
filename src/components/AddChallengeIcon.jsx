import AddCircleIcon from '@mui/icons-material/AddCircle'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import AddChallengeModal from './AddChallengeModal'
import { useState } from 'react'

const AddChallengeIcon = ({ challenge, setAlert }) => {

    const [openModal, setOpenModal] = useState(false)
    
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    return(
        <>
            <Tooltip title={`Add book`}>
                <IconButton onClick={handleOpen}>
                    <AddCircleIcon fontSize='small'/>
                </IconButton>
            </Tooltip>
            <AddChallengeModal 
                openModal={openModal} 
                handleClose={handleClose}
                setAlert={setAlert}
                challenge={challenge}
            />
        </>
    )
}

export default AddChallengeIcon