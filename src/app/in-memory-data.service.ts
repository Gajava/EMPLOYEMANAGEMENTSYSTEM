import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const dbEmployees: Employee[] = [
      {
        name: 'Raj',
        id: 1,
        location: 'Bangalore',
        mobile: 7653452654,
        email: 'raj@gmail.com'
      },
      {
        name: 'Ram',
        id: 2,
        location: 'Chennai',
        mobile: 9876754345,
        email: 'ram@gmail.com'
      },
      {
        id: 3,
        name: 'vinay',
        location: 'Pune',
        mobile: 9987675634,
        email: 'vinay@gmail.com'
      },
      {
        name: 'Pavan',
        id: 4,
        location: 'Hyderabad',
        mobile: 7710423451,
        email: 'pavan@gmail.com'
      },
    ];
    return { dbEmployees };
  }
  /*genId(employees: Employee[]): number {
    return employees.length > 0 ? Math.max(...employees.map(emp => emp.id)) + 1 : 0;
  }*/
}
