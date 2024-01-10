import { Subjects } from './subjects/Subject.ts';
import { Teacher } from './subjects/Teacher.ts';

namespace Subjects {
  export class Cpp implements Subject {
    teacher: Teacher;
    experienceTeachingC?: number;

    getRequirements(): string {
      return "Here is the list of requirements for C++";
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingC) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return "No available teacher";
    }
  }
}

export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();

const cTeacher: Teacher = {
  firstName: "Ali",
  lastName: "Jr",
  experienceTeachingC: 10,
};

console.log("C++");
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("Java");
java.teacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log("React");
react.teacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
