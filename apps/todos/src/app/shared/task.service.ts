import { Injectable, Inject, Optional } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Roles } from './tasks.model';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { DialogData } from '../app.component';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public roles = [
    {
      display: 'Owner',
      value: 'owner'
    },
    {
      display: 'Developer',
      value: 'developer'
    },
    {
      display: 'Reporter',
      value: 'reporter'
    }
  ];

  animal: string;
  name: string;
  TASKS_URL = `${environment.serverUrl}/entities`;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private httpClient: HttpClient
  ) {}

  getRoles(): Observable<Roles[]> {
    return of(this.roles);
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(ModalComponent, dialogConfig);
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  createTask(task:any)
  {
    this.httpClient
    .post(this.TASKS_URL, JSON.stringify(task), {
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
