import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'


const NotificationAlert = ({ alert, setAlert }) => {

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setAlert({...alert, visibility: false, severity: '', message: ''});
      };

    return(
        <Snackbar open={alert.visibility} autoHideDuration={5000} onClose={handleClose}>
            <Alert severity={alert.severity}>
                {alert.message}
            </Alert>
        </Snackbar>
    
    )
}

export default NotificationAlert