export default function createReportObject(employeesList) {
  const allEmployees = {};

  // Populate allEmployees object
  for (const department in employeesList) {
    allEmployees[department] = [...employeesList[department]];
  }

  // Return object with allEmployees and getNumberOfDepartments method
  return {
    allEmployees,
    getNumberOfDepartments: (employeesList) => Object.keys(employeesList).length,
  };
}
