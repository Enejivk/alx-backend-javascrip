const updateStudentGradeByCity = (arrayList, city, newGrade) => {
  const filteredList = arrayList.filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrade.find((studentGrade) => studentGrade.studentId === student.id);
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
  return filteredList;
};
exports.default = updateStudentGradeByCity;
