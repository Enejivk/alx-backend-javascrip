export default function iterateThroughObject(reportWithIterator) {
    const employeeNames = []

    for (const name of reportWithIterator) {
        employeeNames.push(name)
    }

    return employeeNames.join(' | ')
}
