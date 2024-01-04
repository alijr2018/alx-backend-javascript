export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateString(name, 'Name');
    this._length = this._validateNumber(length, 'Length');
    this._students = this._validateStudents(students);
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this._validateString(newName, 'Name');
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = this._validateNumber(newLength, 'Length');
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = this._validateStudents(newStudents);
  }

  _validateString(value, propertyName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${propertyName} must be a string`);
    }
    return value;
  }

  _validateNumber(value, propertyName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${propertyName} must be a number`);
    }
    return value;
  }

  _validateStudents(students) {
    if (!Array.isArray(students) || students.some((student) => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    return students;
  }
}
