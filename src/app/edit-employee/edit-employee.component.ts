import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DmAppServiceService } from '../dm-app-service.service';
import { Location} from '@angular/common';
import { Employee } from '../employee';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  EmployeeData:any;
  EmpID!: number;
  constructor(private route:ActivatedRoute, private location:Location,public dmService:DmAppServiceService) { }

  ngOnInit() {
    this.EmpID = Number(this.route.snapshot.paramMap.get('empID'));
    this.EmployeeData = this.dmService.employees.find(x=> x.id == this.EmpID );
  }
  updateEmployee(EmpDetails: Employee)
  {   
  
    this.dmService.editEmployee(EmpDetails);
    this.location.back();
   
  }
  Cancel()
  {
    this.location.back();
  }

}