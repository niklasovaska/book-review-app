const calculateAverage = (array) => {
    let sum = 0

    array.forEach(element => {
        sum += element
    })

    return sum / array.length
}

export default calculateAverage