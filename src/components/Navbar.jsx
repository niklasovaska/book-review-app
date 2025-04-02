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

import { useState } from 'react'

const Navbar = () => {
    const [DrawerOpen, setDrawerOpen] = useState(false)

    const toggleDrawer = (newOpen) => () => {
        setDrawerOpen(newOpen)
    }

    const DrawerItems = () => {
        return(
            <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                <List>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText primary='Home'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon><FavoriteIcon /></ListItemIcon>
                            <ListItemText primary='Favorites'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
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
        <Box>
            <AppBar position='sticky'>
                <Toolbar>
                    <IconButton onClick={toggleDrawer(true)}><MenuIcon /></IconButton>
                    <Typography variant='h5' sx={{marginLeft: 6, fontWeight: 'bold'}}>the book review club</Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                open={DrawerOpen}
                onClose={toggleDrawer(false)}>
                <DrawerItems />
            </Drawer>
        </Box>
    )
}

export default Navbar