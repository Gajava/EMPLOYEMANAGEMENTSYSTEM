import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'
import {Employee} from './employee';
import {Observable} from 'rxjs'

@Injectable()
export class DmAppServiceService {
  constructor(private http: HttpClient) {
  }

  private path:string="/api/dbEmployees";
  LocList = ['Banglore', 'Chennai', 'Pune', 'Hyderabad'];  
  employees: Employee[] = [];
  
  
  getEmployee(id:number){
    const URL = `${this.path}/${id}`;
    return this.http.get<Employee>(URL);
  
  }
  getAllEmployees()
  {
    this.http.get<Employee[]>(this.path)
    .subscribe(EmpDetails=>{
       this.employees=EmpDetails
    });
  }
  addEmployee(EmpDetails:Employee)
  {
    this.http.post(this.path, EmpDetails)
    .subscribe(EmpDetails=>{
       let output =EmpDetails;
       console.log(output);
    });
  }
  editEmployee(EmpDetails:Employee)
  {
    this.http.put(this.path, EmpDetails)
    .subscribe(EmpDetails=>{
       let output =EmpDetails;
       console.log(output);
    });
  }
  deleteEmployee(id:number)
  {
  const params = new HttpParams().set('Employee.id', id);
  this.http.delete(this.path, { params })
    .subscribe(
      result => console.log(result),
      err => console.error(err)
    );
  }
}