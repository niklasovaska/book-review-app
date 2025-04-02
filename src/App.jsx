import { useEffect, useState } from 'react'
import bookService from './services/books'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Booklist from './components/Booklist'

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})


function App() {

  const [books, setBooks, error, loading] = useFetch()
  const [searchValue, setSearchValue] = useState('')

  const booksToShow = books.filter((book) => book.name.toLowerCase().includes(searchValue.toLowerCase()) || book.author.toLowerCase().includes(searchValue.toLowerCase())) 

  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Dashboard books={books} setBooks={setBooks}/>
      <Booklist books={booksToShow} handleSearchValueChange={handleSearchValueChange} />
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