import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../_services/employee.service';
import { Employee } from '../_models/employee';
//import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-employeeslist',
  templateUrl: './employeeslist.component.html',
  styleUrls: ['./employeeslist.component.css']
})
export class EmployeeslistComponent implements OnInit{
  members:Employee[]=[];
constructor(private employeesSevice:EmployeeService,
  //private dialogRef:MatDialog
  ){
}
  ngOnInit(): void {    
      this.getAllEmployees(); 
  }
  getAllEmployees(){
    this.employeesSevice.getAllEmployees().subscribe(
      employees=>{
        console.log(employees);
        this.members=employees;
      }
    )
  }

}
