import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  employeeData= [];

  constructor() { }

  getData(fname, lname , uploadedFile) {
    this.employeeData.push({
      fname : fname,
      lname: lname,
      userFile : uploadedFile
    });
    console.log(this.employeeData);
  }

  sendData(){
    return this.employeeData;
  }
}
