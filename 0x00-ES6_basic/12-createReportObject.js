export default function createReportObject(employeesList) {
   const obj = {
       allEmployees: employeesList,
       getNumberOfDepartments(empL) {
           return Object.keys(empL).length
       },
   }
    return obj
}
