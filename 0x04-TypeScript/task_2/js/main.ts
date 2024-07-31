interface DirectorInterface {
  workFromHome(): string
  getCoffeeBreak?(): string
  workDirectorTasks(): string
}

interface TeacherInterface {
  workFromHome(): string
  getCoffeeBreak(): string
  workTeacherTasks(): string
}


class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home'
  }
  getToWork(): string {
    return 'a coffee break'
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks'
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home'
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break'
  }
  workTeacherTasks(): string {
    return 'Getting to work'
  }
}

const createEmployee = (salary: number | string) => {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher
  } return new Director
}

// 6 Creating functions specific to employees
const isDirector = (employee: number | string) => {
  return createEmployee(employee)
}
const executeWork = (employee: number | string) => {

}

// 7. String literal types
type Subjects = 'Math' | 'History'
const teachClass = (todayClass:Subjects):string => {
  return `Teaching ${todayClass}`
}
