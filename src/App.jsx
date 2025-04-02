import { useEffect, useState } from 'react'
import bookService from './services/books'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Typography } from '@mui/material'
import Navbar from './components/Navbar'
import Booklist from './components/Booklist'
import Favorites from './components/Favorites'
import ReadingChallenge from './components/ReadingChallenge'
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
          <Route path='/' element={<Navbar books={books} setBooks={setBooks}/>}>
            <Route index element={<Booklist books={books} />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/challenge' element={<ReadingChallenge />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App


const useFetch = () => {
  const [books, setBooks] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async () => {
      setError(false)
      setLoading(true)
      await bookService
        .getAll()
        .then(res => {
          setBooks(res.data)
        })
        .catch(err => {
          console.log(err)
          setError(true)
        })
        setLoading(false)
    })()
  }, [])

  return [books, setBooks, error, loading]
}