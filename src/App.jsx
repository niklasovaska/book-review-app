import useFetch from './hooks/useFetch'
import theme from './utils/theme'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Typography } from '@mui/material'
import Navbar from './components/Navbar'
import AllBooks from './pages/AllBooks'
import Favorites from './pages/Favorites'
import ReadingChallenge from './pages/ReadingChallenge'
import { BrowserRouter, Routes, Route } from 'react-router'
import { useState } from 'react'

function App() {

  const [books, setBooks, error, loading] = useFetch()
  const [darkMode, setDarkMode] = useState(true) 

  if(error) {
    return <Typography>Something went wrong</Typography>
  }

  if(loading) {
    return <Typography>Loading...</Typography>
  }

  return (
    <ThemeProvider theme={darkMode ? theme.darkTheme : theme.lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route 
            path='/' 
            element=
              {<Navbar 
                books={books} 
                setBooks={setBooks} 
                darkMode={darkMode} 
                setDarkMode={setDarkMode} />}>
            <Route index element={<AllBooks books={books} setBooks={setBooks} />} />
            <Route path='/favorites' element={<Favorites books={books} setBooks={setBooks} />} />
            <Route path='/challenge' element={<ReadingChallenge books={books} setBooks={setBooks}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App