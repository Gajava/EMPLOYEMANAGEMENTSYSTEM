import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {EditEmployeeComponent} from './edit-employee/edit-employee.component';
import { DmAppServiceService } from './dm-app-service.service';
import { DetailsComponent } from './details/details.component';
import { Employee } from './employee';

const  routes:Routes =[
  { path:'employees',component: HomeComponent },
  { path:'employees/:empid',component: DetailsComponent },
  { path:'app-add-employee', component:AddEmployeeComponent},
  { path:'app-edit-employee/:empID', component:EditEmployeeComponent},

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ApproutingModule { 

  
}