import { Component, OnInit, Inject } from '@angular/core';

import {FormFields} from '../shared/form.model'
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';

import { CreateFacade } from '../+state/create.facade';
import { FormGroup, FormControl } from '@angular/forms';

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
  taskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  });

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    private createFacade: CreateFacade,
    private formFields: FormFields
  ) {}

  initializeData(task: any) {
    
    this.formFields.id = Math.floor(Date.now() / 1000);
    this.formFields.title = task.title;
    this.formFields.status = 'Done'
    this.formFields.time_spent = 2
    this.formFields.created_on = new Date().toISOString();
    this.formFields.description = task.description
    this.formFields.estimation = 3
    this.formFields.meta.persons_involved = 'Marium Malik'
  }

  ngOnInit() {
  
  }

  getRoles() {
    this.createFacade.loadRoles();
    this.createFacade.roles$.subscribe(roles => console.log(roles));
  }

  onNoClick(): void {
    this.createFacade.closeModal();
  }

  submitResults() {
    this.initializeData(this.taskForm.value);
    this.createFacade.createTask(this.formFields);
  }

  updateResults()
  {
    
  }

  
}
