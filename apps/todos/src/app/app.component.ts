import { Component, OnInit } from '@angular/core';
import { CreateFacade } from './+state/create.facade';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import {FlavorSizePipe} from './flavors.pipe'

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todos';
  loading:boolean;

  size=this.flavorSizePipe.transform(1073741824,'MB');

  constructor(private createFacade: CreateFacade, private flavorSizePipe: FlavorSizePipe) {}

  
  ngOnInit() {

    this.check();
  }

  showModal()
  {
    this.createFacade.showModal();
    
  }

  check ()
{
  this.loading = true;
  console.log('In check');
  let size=9485039485039445;
  let unit = 0;

    while (size >= 1024) {
        size /= 1024;
        
        console.log(size);
        unit++;
        console.log(unit);
    } 

  }

  
}
