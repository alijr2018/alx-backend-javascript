//8. Ambient Namespaces
/// <reference path="crud.d.ts" />
import { RowID, RowElement } from "./interface.js";
import * as CRUD from "./crud.js";

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`CRUD.insertRow(${JSON.stringify(row)})`);

const updatedRow: RowElement = {
  ...row,
  age: 23
};

CRUD.updateRow(newRowID, updatedRow);
console.log(`CRUD.updateRow(${newRowID}, ${JSON.stringify(updatedRow)})`);

CRUD.deleteRow(newRowID);
console.log(`CRUD.deleteRow(${newRowID})`);

