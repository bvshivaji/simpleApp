import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule , Routes } from '@angular/router';

import { FileSelectDirective } from 'ng2-file-upload';

import { EmployeeService } from './employee.service';

import { AppComponent } from './app.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';

const appRoutes: Routes = [
  { path: 'employee-registration' , component : EmployeeRegistrationComponent },
  { path : 'employee-data' , component : EmployeeDataComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDataComponent,
    EmployeeRegistrationComponent
  ],
  imports: [
    BrowserModule , FormsModule , RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
