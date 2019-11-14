import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  GeneralActionTypes,
  LoadRoles,
  RolesLoaded,
  ShowModal
} from './create.actions';
import { tap, map, switchMap } from 'rxjs/operators';
import { TaskService } from '../shared/task.service';
import { DataPersistence } from '@nrwl/angular';
import { CreatePartialState } from './create.reducer';


@Injectable()
export class CreateEffects {
  @Effect() getRoles$ = this.dataPersistence.fetch(
    GeneralActionTypes.LoadRoles,
    {
      run: (action: LoadRoles) => {
        return this.taskService
          .getRoles()
          .pipe(map(roles => new RolesLoaded(roles)));
      },
      onError: (action: LoadRoles, error) => {
        console.error(error);
        //return new RolesLoadError(error);
      }
    }
  );

  @Effect({ dispatch: false }) showModal$ = this.actions$.pipe(
    ofType<ShowModal>(GeneralActionTypes.ShowModal),
    tap(() => {
     // this.taskService.presentModal();
    })
  );

  constructor(
    private actions$: Actions,
    private taskService: TaskService,
    private dataPersistence: DataPersistence<CreatePartialState>
  ) {}
}
