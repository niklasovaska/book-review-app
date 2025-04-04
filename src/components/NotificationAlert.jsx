import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Fade from '@mui/material/Fade'
import Box from '@mui/material/Box'
import modalStyle from '../utils/modalStyles'

const NotificationAlert = ({ alert, setAlert }) => {

    return(
        <Fade
            in={alert.visibility}
            addEndListener={() => {
                setTimeout(() => {
                    setAlert({...alert, visibility: false, severity: '', message: ''})
                }, 3000)
            }}
            >
            <Box sx={modalStyle}>
                <Alert severity={alert.severity}>
                    <AlertTitle>{alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}</AlertTitle>
                    {alert.message}
                </Alert>
            </Box>
        </Fade>
    )
}

export default NotificationAlert