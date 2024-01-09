export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const matchingGrade = newGrades.find((grade) => grade.studentID === student.id);
      if (matchingGrade) {
        return { ...student, grade: matchingGrade.grade };
      }
      return { ...student, grade: 'N/A' };
    });
}
