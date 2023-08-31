import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../_services/employee.service';
import { count, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  totalEmployeescount:number=0;
  totalMaleEmployeescount:number=0;
  totalFeMaleEmployeescount:number=0;
  totalActiveEmployeescount:number=0;
  constructor(private employeeService:EmployeeService){

  }
  ngOnInit(): void {
this.loadTotalEmployeesCount();
this.loadTotalMaleEmployeescount();
this.loadTotalFeMaleEmployeescount();
this.loadTotalActiveEmployeescount();
  }
loadTotalEmployeesCount(){
  return this.employeeService.getAllEmployeesCount().subscribe(
    count=>{
      console.log(this.totalEmployeescount);
      this.totalEmployeescount=count;
    }
  )
}
loadTotalMaleEmployeescount(){
  return this.employeeService.getAllMaleEmployeesCount().subscribe(
    count=>{
      console.log(this.totalMaleEmployeescount);
      this.totalMaleEmployeescount=count;
    }
  )
}
loadTotalFeMaleEmployeescount(){
  return this.employeeService.getAllFemaleEmployeesCount().subscribe(
    count=>{
      console.log(this.totalFeMaleEmployeescount);
      this.totalFeMaleEmployeescount=count;
    }
  )
}
loadTotalActiveEmployeescount(){
  return this.employeeService.getAllActiveEmployeesCount().subscribe(
    count=>{
      console.log(this.totalActiveEmployeescount);
      this.totalActiveEmployeescount=count;
    }
  )
}
}
