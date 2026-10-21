import { students } from "./data.js";
import withStatus from "./report.js";
const studentWithStatus = withStatus(students);

for (const student of studentWithStatus) {
  console.log(`${student.name}: ${student.status}`);
}
console.log(students[0].status);
