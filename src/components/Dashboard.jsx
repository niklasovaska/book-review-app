import {Box, Paper, Tab, Typography} from '@mui/material/'
import {TabContext, TabList, TabPanel} from '@mui/lab'
import { useState } from 'react'
import Form from './Form'

const Dashboard = ({ books, setBooks }) => { 

    const [menuValue, setMenuValue] = useState("1")

    const handleChange = (e, newValue) => {
        setMenuValue(newValue)
    }

    return(
        <Box component="section" sx={{p: 4, margin: 10, border: 1}}>
            <Paper>
                <TabContext value={menuValue}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="book review app tabs">
                            <Tab label="About" value="1" />
                            <Tab label="Search books" value="2" />
                            <Tab label="Add new book" value="3" />
                        </TabList>
                    </Box>    
                    <TabPanel value="1"><Typography variant='h4'>The Book Review Club has reviewed a total of {books.length} books</Typography></TabPanel>
                    <TabPanel value="2">Filters here

                    </TabPanel>
                    <TabPanel value="3"><Form books={books} setBooks={setBooks}/></TabPanel>
                </TabContext>
            </Paper>
        </Box>
    )
}

export default Dashboard