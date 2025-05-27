import theme from './utils/theme'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from './components/Navbar'
import AllBooks from './pages/AllBooks'
import Favorites from './pages/Favorites'
import ReadingChallenge from './pages/ReadingChallenge'
import { BrowserRouter, Routes, Route } from 'react-router'
import { useState } from 'react'


function App() {

  const [darkMode, setDarkMode] = useState(true) 
  const [alert, setAlert] = useState({
    visibility: false,
    severity: '',
    message: ''
})

  return (
    <ThemeProvider theme={darkMode ? theme.darkTheme : theme.lightTheme}>
      <CssBaseline />
      <BrowserRouter>
          <Routes>
            <Route 
              path='/' 
              element=
                {<Navbar
                  alert={alert} 
                  setAlert={setAlert} 
                  darkMode={darkMode} 
                  setDarkMode={setDarkMode} />}>
              <Route index element={<AllBooks setAlert={setAlert}/>} />
              <Route path='/favorites' element={<Favorites />} />
              <Route path='/challenge' element={<ReadingChallenge setAlert={setAlert}/>} />
            </Route>
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App