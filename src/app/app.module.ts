import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import{BsDatepickerModule} from 'ngx-bootstrap/datepicker'
import { ToastrModule } from 'ngx-toastr';
import { EmployeeslistComponent } from './employeeslist/employeeslist.component';
//import {MatDialogModule} from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SidebarComponent,
    RegisterComponent,
    EmployeeslistComponent,
    PopUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //MatDialogModule,
    // ReactiveFormsModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ToastrModule.forRoot({
      positionClass:'toast-bottom-right'
    }),
  ],    

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
