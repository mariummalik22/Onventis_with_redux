import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Roles } from './tasks.model';

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

  constructor() {}

  getRoles(): Observable<Roles[]> {
    return of(this.roles);
  }

  //   async presentModal() {
  //     const modal = await this.modalController.create({
  //       component: ModalComponent,
  //       backdropDismiss: false
  //     });
  //     return await modal.present();
  //   }
}
