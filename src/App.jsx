import useFetch from './hooks/useFetch'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Typography } from '@mui/material'
import Navbar from './components/Navbar'
import AllBooks from './pages/AllBooks'
import Favorites from './pages/Favorites'
import ReadingChallenge from './pages/ReadingChallenge'
import { BrowserRouter, Routes, Route } from 'react-router'

function App() {

  const [books, setBooks, error, loading] = useFetch() 

  const darkTheme = createTheme({
    palette: {
      mode: 'dark'
    }
  })

  if(error) {
    return <Typography>Something went wrong</Typography>
  }

  if(loading) {
    return <Typography>Loading...</Typography>
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar books={books} setBooks={setBooks} />}>
            <Route index element={<AllBooks books={books} setBooks={setBooks} />} />
            <Route path='/favorites' element={<Favorites books={books} setBooks={setBooks} />} />
            <Route path='/challenge' element={<ReadingChallenge />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App