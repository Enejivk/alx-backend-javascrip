const getStudentIdsSum = (arrayList) => {
  const sum = arrayList.reduce((previousValue, currentValue) => previousValue + currentValue.id, 0);
  return sum;
};
export default getStudentIdsSum;
