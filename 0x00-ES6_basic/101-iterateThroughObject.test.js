import iterateThroughObject from './101-iterateThroughObject.js';

const engineering = ['John Doe', 'Guillaume Salva'];
const marketing = ['Agatha Christie', 'Jason Leverson'];

test('createEmployeesObject returns the correct object', () => {
    const employees = {
      ...createEmployeesObject('engineering', engineering),
      ...createEmployeesObject('marketing', marketing),
    };
  
    const holbertonEmployees = {
      engineering,
      marketing,
    };
  
    expect(employees).toEqual(holbertonEmployees);
  });
  