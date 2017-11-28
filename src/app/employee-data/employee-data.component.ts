import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {
  employeeInfo = [];
  selectedEmp;

  constructor(private  employeeSerive : EmployeeService) { }

  ngOnInit() {
    this.employeeInfo = this.employeeSerive.sendData();
    console.log(this.employeeInfo);
  }
  empFullDetails(value){
    console.log(value);
    this.selectedEmp = value.fname;
  }

}
