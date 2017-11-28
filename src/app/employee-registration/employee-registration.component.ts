import { Component, OnInit , ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  constructor(private employeeService: EmployeeService) {}

  @ViewChild('uploadedFile') uploadedFile;

  submitData(value) {
    console.log(value);
    this.employeeService.getData(value.fname, value.lname , value.uploadedFile);
  }

  ngOnInit() {
  }
}
