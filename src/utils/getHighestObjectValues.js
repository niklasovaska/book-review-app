//Return list of n number of highest values in genre countMap object

const getHighestObjectValues = (countMap, n) => {
    let sortingList = []

    for (let obj in countMap) {
        sortingList.push([obj, countMap[obj]])
    }

    sortingList.sort((a, b) => b[1] - a[1])

    return(sortingList.slice(0, n))
}

export default getHighestObjectValues