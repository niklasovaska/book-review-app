import bookService from '../services/books'
import { useState, useEffect } from 'react'

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

export default useFetch
