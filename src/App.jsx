import { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Booklist from './components/Booklist'
import Form from './components/Form'

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

import initialBooks from './data/initialBooks'


function App() {

  const [books, setBooks] = useState(initialBooks)
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
