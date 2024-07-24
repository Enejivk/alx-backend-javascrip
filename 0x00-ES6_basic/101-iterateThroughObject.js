export default function iterateThroughObject(reportWithIterator) {
    let newArray = '';
    for (const name of reportWithIterator ) {
        newArray += name + ' | '
    }
    
    return newArray
}