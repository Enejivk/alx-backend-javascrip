export default function appendToEachArrayValue(array, appendString) {
    const newArray = []
    for (const value of array) {
        newArray.push(value + appendString)
    }
    return newArray;
}

