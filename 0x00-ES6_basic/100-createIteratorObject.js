export default function createIteratorObject(report) {
    const engineering = report.allEmployees.engineering
    const marketing = report.allEmployees.marketing
    return [...engineering, ...marketing]
}
