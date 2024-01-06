import iterateThroughObject from './101-iterateThroughObject.js';
import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';
import createIteratorObject from './100-createIteratorObject.js';

describe('Testing iterateThroughObject function', () => {
  it('Should return a string of concatenated employee names separated by "|"', () => {
    const employees = {
      ...createEmployeesObject('engineering', ['Bob', 'Jane']),
      ...createEmployeesObject('marketing', ['Sylvie'])
    };

    const report = createReportObject(employees);
    const reportWithIterator = createIteratorObject(report);

    const result = iterateThroughObject(reportWithIterator);
    expect(result).toBe('Bob | Jane | Sylvie');
  });

  it('Should handle an empty iterator', () => {
    const emptyIterator = (function* () {})();
    const result = iterateThroughObject(emptyIterator);
    expect(result).toBe('');
  });

  // Add more test cases as needed
});
