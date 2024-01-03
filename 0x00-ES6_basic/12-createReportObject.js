export default function createReportObject(employeesList) {
  const allEmployees = {};

  for (const department in employeesList) {
    allEmployees[department] = [...employeesList[department]];
  }

  return {
    allEmployees,
    getNumberOfDepartments: (employeesList) => Object.keys(employeesList).length,
  };
}
