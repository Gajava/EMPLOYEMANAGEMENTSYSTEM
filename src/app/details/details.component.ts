import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Employee } from '../employee';
import { DmAppServiceService } from '../dm-app-service.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:any;
  employee!: Employee;
  
  constructor(private route:ActivatedRoute, private location:Location,private dmServices:DmAppServiceService){}
  
  ngOnInit():void {
    this.id=this.route.snapshot.paramMap.get('empid');
    this.dmServices.getEmployee(this.id).subscribe(data => {
      console.log(data);
      this.employee = data;
    })
    
  }
  
  goBack(): void {
    this.location.back();
  }

  
  

}
