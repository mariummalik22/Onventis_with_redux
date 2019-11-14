import { Component, OnInit } from '@angular/core';
import { CreateFacade } from './+state/create.facade';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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

  constructor(private createFacade: CreateFacade,) {}

  
  ngOnInit() {}

  showModal()
  {
    this.createFacade.showModal();
    
  }

  
}
