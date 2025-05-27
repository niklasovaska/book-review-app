import modalStyle from '../utils/modalStyles'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import ChallengeForm from './ChallengeForm'

const AddChallengeModal = ({ openModal, handleClose, setAlert, challenge }) => {

    return(
        <Modal
            open={openModal}
            onClose={handleClose}>
            <Box sx={modalStyle}>
                <ChallengeForm
                    handleClose={handleClose} 
                    setAlert={setAlert}
                    challenge={challenge}
                />
            </Box>
        </Modal>
    )
}

export default AddChallengeModal