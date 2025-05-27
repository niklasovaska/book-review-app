import Form from './Form'
import modalStyle from '../utils/modalStyles'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

const AddBookModal = ({ openModal, handleClose, books, setBooks, setAlert }) => {

    return(
        <Modal
            open={openModal}
            onClose={handleClose}>
            <Box sx={modalStyle}>
                <Form 
                    handleClose={handleClose} 
                    setAlert={setAlert}
                />
            </Box>
        </Modal>
    )
}

export default AddBookModal