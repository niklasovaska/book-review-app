import bookService from '../services/books'

const handleFavoriteUpdate = (id, books, setBooks) =>  {

    const book = books.find(b => b.id === id)
    const changedBook = {...book, favorite: !book.favorite}

    bookService
        .update(id, changedBook).then(returnedBook => {
            const booksUpdated = books.map(book => book.id === id ? returnedBook.data : book)
            setBooks(booksUpdated)
        })
        .catch(error => {
            console.log(error)
            alert(`The book ${book.name} was already deleted from server`)
            setBooks(books.filter(b => b.id !== id))
        })
}

export default handleFavoriteUpdate