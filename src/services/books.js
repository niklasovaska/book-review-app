import axios from 'axios'
const baseUrl = 'http://localhost:3000/books'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = newBook => {
    return axios.post(baseUrl, newBook)
}

const update = (id, newBook) => {
    return axios.put(`${baseUrl}/${id}`, newBook)
}

const deleteBook = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default {getAll, create, update, deleteBook}
