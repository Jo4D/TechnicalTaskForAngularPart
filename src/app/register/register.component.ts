import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { EmployeeService } from '../_services/employee.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Employee } from '../_models/employee';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})     
export class RegisterComponent implements OnInit {
  model:any={};
   @Input() maxDate:Date;
   bsConfig:Partial<BsDatepickerConfig>;
  constructor(private formBuilder:FormBuilder,
    private employeeService:EmployeeService,
    private toastr:ToastrService,
    private router:Router,
    ){  
         this.bsConfig ={
      containerClass:'theme-red',
      dateInputFormat:'DD MMMM YYYY'
    }
    this.maxDate=new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear()-18);
  }
 ngOnInit(): void {  
 }
cancel(){
  confirm("Are you sure you want to cancel")
  return false;
  }
  addEmployee(){
    this.employeeService.addEmployee(this.model).subscribe(response=>{
      console.log(response);
  this.toastr.success("Added Successfully")
      this.router.navigateByUrl('/home');
    },err=>{
      console.log(err);
      this.toastr.error(err.error);
    },    
    ()=>{console.log('completed');
    })
    console.log(this.model);
  }
 
}