import { AppBar, Toolbar, Typography } from '@mui/material/'


const Navbar = () => {
    return(
        <>
            <AppBar position='sticky' sx={{backgroundColor: '#BB86FC'}}>
                <Toolbar>
                    <Typography variant='h5' sx={{marginLeft: 6, color: '#000000', fontWeight: 'bold'}}>the book review club</Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar