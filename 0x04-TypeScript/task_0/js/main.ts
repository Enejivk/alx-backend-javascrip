interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student1: Student = {
  firstName: 'Eneji',
  lastName: 'Victor',
  age: 25,
  location: "Enugu",
}
const student2: Student = {
  firstName: 'David',
  lastName: 'Peter',
  age: 25,
  location: "Enugu",
}

const studentList: Student[] = [student1, student2]
const table: HTMLTableElement = document.createElement('table');
const headRow: HTMLTableRowElement = table.insertRow();
const headerCellFirstName: HTMLTableCellElement = headRow.insertCell()
const headerCellLocation: HTMLTableCellElement = headRow.insertCell()

// adding text to the newly created row
headerCellFirstName.textContent = 'firstName';
headerCellLocation.textContent = 'location';

// adding the actual student to the table
studentList.forEach((student) => {
  const bodyRow: HTMLTableRowElement = table.insertRow();
  const bodyCellFirstName: HTMLTableCellElement = bodyRow.insertCell();
  bodyCellFirstName.textContent = student.firstName;
  const bodyCellLocation: HTMLTableCellElement = bodyRow.insertCell();
  bodyCellLocation.textContent = student.location;
})
document.body.appendChild(table)