// Teacher interface
interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [index: string]: any
}

// directors extending the teacher class
interface Directors extends Teacher {
  numberOfReports: number
}

function printTeacher(FName: string, Lname: string):string {
  return FName.charAt(0) + '.' + ' ' + Lname
}

// creating a student Class interface 
interface StudentInterface{
  firstName: string,
  lastName: string,
  displayName():string
}

// student class
class StudentClass implements StudentInterface {
  firstName: string
  lastName: string

  constructor(
    firstName: string,
    lastName: string
  ){
    this.firstName = firstName,
    this.lastName = lastName
  }
  displayName(): string {
      return this.firstName
  }
}
