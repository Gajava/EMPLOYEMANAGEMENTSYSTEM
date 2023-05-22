import { Component, VERSION } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Employee Management Application';
  constructor(private router: Router){
    
  }

  ngOnInit()
  {    
  } 

  gotoHome()
  {
    this.router.navigate(['']);
  }
  gotoAddemployee()
  {    
    this.router.navigate(['app-add-employee']);
  }
}
