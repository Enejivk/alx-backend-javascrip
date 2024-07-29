const getStudentsByLocation = (arrayList, city) => {
  const filteredList = arrayList.filter((student) => student.location === city);
  return filteredList;
};
export default getStudentsByLocation;
