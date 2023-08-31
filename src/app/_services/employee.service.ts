import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../_models/employee';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  members:Employee[]=[]
   count:number=0;
  constructor(private http:HttpClient) { 
  }
  addEmployee(model:any){
    debugger;
    confirm("Are you sure you want to submit ?")
    return this.http.post(environment.apiUrl+'Employees/AddEmployee',model)
    .pipe(
      map((employee:any)=>{
     return employee; 
     }) 
    )
  }
  getAllEmployees()
  {
    return this.http.get<Employee[]>
    (
      environment.apiUrl+'Employees/GetAllEmployees'
    )
    .pipe
    (
      map
      (
        employees=>{
          this.members=employees;
          return employees;
        }
      )
    )
  }
  getAllEmployeesCount(){
    return this.http.get<Employee[]>
    (
      environment.apiUrl+'Employees/GetAllEmployees'
    )
    .pipe
    (
      map
      (
        employees=>{ 
          this.members=employees; 
          return employees.length; 
        }
      )
    )
  }

  getAllMaleEmployeesCount(){
    return this.http.get<Employee[]>
    (
      environment.apiUrl+'Employees/GetAllMaleEmployees'
    )
    .pipe
    (
      map
      (
        employees=>{ 
          this.members=employees; 
          return employees.length; 
        }
      )
    )
  }  getAllFemaleEmployeesCount(){
    return this.http.get<Employee[]>
    (
      environment.apiUrl+'Employees/GetAllFemaleEmployees'
    )
    .pipe
    (
      map
      (
        employees=>{ 
          this.members=employees; 
          return employees.length; 
        }
      )
    )
  }
  getAllActiveEmployeesCount(){
    return this.http.get<Employee[]>
    (
      environment.apiUrl+'Employees/GetAllActiveEmployees'
    )
    .pipe
    (
      map
      (
        employees=>{ 
          this.members=employees; 
          return employees.length; 
        }
      )
    )
  }
  
}


  
