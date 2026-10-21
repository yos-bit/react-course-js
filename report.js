const withStatus = (students) => {
  const updatedList = [];
  for (const student of students) {
    const status = student.grade >= 56 ? "pass" : "fail";
    const StudentCopy = { ...student, status: status };
    updatedList.push(StudentCopy);
  }
  return updatedList;
};
export default withStatus;
