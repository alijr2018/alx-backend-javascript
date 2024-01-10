export interface Student {
    firstName:string;
    lastName:string;
    age:number;
    location:string;
}
    const student1: Student = {
        firstName: "Ali",
        lastName: "Jr",
        age: 23,
        location:"Casblanca, Morocco",
    };
    const student2: Student = {
        firstName: "Abdel",
        lastName: "Rj",
        age: 21,
        location:"Rabat, Morocco",
    };

    const studentsList: Student[] = [student1, student2];

    const table = document.createElement('table');
    const tableBody = document.createElement('tbody');
    
    studentsList.forEach((student: Student) => {
      const row = document.createElement('tr');
      const cell1 = document.createElement('td');
      const cell2 = document.createElement('td');
    
      cell1.textContent = student.firstName;
      cell2.textContent = student.location;
    
      row.appendChild(cell1);
      row.appendChild(cell2);
      tableBody.appendChild(row);
    });
    
    table.appendChild(tableBody);
    document.body.appendChild(table);

