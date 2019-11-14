import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';

import { CreateFacade } from '../+state/create.facade';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'myorg-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    private createFacade: CreateFacade
  ) {}

  ngOnInit() {}

  getRoles() {
    this.createFacade.loadRoles();
    this.createFacade.roles$.subscribe(roles => console.log(roles));
  }

  onNoClick(): void {
    this.createFacade.closeModal();
  }

  submitResults(task:any)
  {
    this.createFacade.createTask(task);
  }
}
