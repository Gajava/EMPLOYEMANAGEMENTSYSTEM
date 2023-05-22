import { Component, OnInit } from '@angular/core';
import { DmAppServiceService } from '../dm-app-service.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {  
  inputVal:string = '';
  constructor(public dmService:DmAppServiceService, private router:Router){   
  }
  ngOnInit()
  {
    this.dmService.getAllEmployees();
  }
  editEmpDetails(empID:any)
  {
    this.router.navigate(['app-edit-employee/' +empID]);  
  }
  deleteEmpDetails(empID:any)
  {
    this.myfunction(empID)
    
  }
  myfunction(empID:any){
    var r = confirm('Do you Want to delete?')
    if(r==true){
    this.dmService.employees = this.dmService.employees.filter(x => x.id != empID); 
  }
  else{
    this.dmService.getAllEmployees
  }
  }
}