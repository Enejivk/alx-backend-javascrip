const getListStudentIds = (arrayList) => {
  if (Array.isArray(arrayList)) {
    const id = arrayList.map((student) => student.id);
    return id;
  }
  return [];
};
export default getListStudentIds;
