import axios from 'axios'
const baseUrl = 'http://localhost:3001/api'
const bookUrl = 'http://localhost:3001/api/books'
const challengeUrl = 'http://localhost:3001/api/challenges'

export const getAll = async (url) => {
    const response = await axios.get(`${baseUrl}${url}`)
    return response.data
}

export const createBook =  async (newBook) => {
    const response = await axios.post(bookUrl, newBook)
    return response.data
}

export const updateBook = async (updatedBook) => {
    const response = await fetch(`${bookUrl}/${updatedBook.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedBook)
    })
    return response.json()

}

export const deleteBook = async (id) => {
    const response = await axios.delete(`${bookUrl}/${id}`)
    return response.data
}

export const updateChallenge = async (updatedChallenge) => {
    const response = await fetch(`${challengeUrl}/${updatedChallenge.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedChallenge)
    })
    return response.json()
}

