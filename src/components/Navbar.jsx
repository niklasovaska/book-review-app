import { AppBar, Toolbar, Typography } from '@mui/material/'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import Tooltip from '@mui/material/Tooltip'
import { Link, Outlet } from 'react-router'

import { useState } from 'react'

const Navbar = ({ books, setBooks }) => {
    const [DrawerOpen, setDrawerOpen] = useState(false)

    const toggleDrawer = (newOpen) => () => {
        setDrawerOpen(newOpen)
    }

    const DrawerItems = () => {
        return(
            <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                <List>
                    <ListItem component={ Link } to='/'>
                        <ListItemButton>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText primary='Home'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem component={ Link } to='/favorites'>
                        <ListItemButton>
                            <ListItemIcon><FavoriteIcon /></ListItemIcon>
                            <ListItemText primary='Favorites'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem component={ Link } to='/challenge'>
                        <ListItemButton>
                            <ListItemIcon><ElectricBoltIcon /></ListItemIcon>
                            <ListItemText primary='Reading challenge'/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        )
    }


    return(
        <>
            <Box sx={{flexGrow: 1, marginBottom: 10}}>
                <AppBar position='fixed'>
                    <Toolbar>
                        <IconButton onClick={toggleDrawer(true)}><MenuIcon /></IconButton>
                        <Typography variant='h5' sx={{marginLeft: 6, fontWeight: 'bold', flexGrow: 1}}>the book review club</Typography>
                        <Tooltip title='Add new course'>
                            <IconButton><AddCircleIcon fontSize='large'/></IconButton>
                        </Tooltip>
                    </Toolbar>
                </AppBar>
                <Drawer
                    open={DrawerOpen}
                    onClose={toggleDrawer(false)}>
                    <DrawerItems />
                </Drawer>
            </Box>
            <Outlet />
        </>
    )
}

export default Navbar