import { Component, OnInit } from '@angular/core';
import { CreateFacade } from './+state/create.facade';

@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todos';

  constructor( private createFacade: CreateFacade) {}

  ngOnInit()
  {
    
  }

  getRoles()
  {
    //this.createFacade.showModal();
   // this.createFacade.loadRoles();
   // this.createFacade.roles$.subscribe(roles => console.log(roles));
  }
}
