import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  GeneralActionTypes,
  LoadRoles,
  RolesLoaded,
  ShowModal,
  CloseModal,
  CreateTask,
  TaskCreated,
  TaskCreatedError,
  UpdateTask,
  UpdateSuccess,
  UpdateTaskError
} from './create.actions';
import { tap, map, switchMap } from 'rxjs/operators';
import { TaskService } from '../shared/task.service';
import { DataPersistence } from '@nrwl/angular';
import { CreatePartialState } from './create.reducer';
import { of } from 'rxjs';

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
      this.taskService.openDialog();
    })
  );

  @Effect({ dispatch: false }) closeModal$ = this.actions$.pipe(
    ofType<CloseModal>(GeneralActionTypes.CloseModal),
    tap(() => {
      this.taskService.closeDialog();
    })
  );

  @Effect() createTask$ = this.dataPersistence.fetch(
    GeneralActionTypes.CreateTask,
    {
      run: (action: CreateTask) => {
        return this.taskService
          .createTask(action.payload)
          .pipe(map(task => new TaskCreated(task)
          
          ));
      },

      onError: (action: CreateTask, error) => {
        console.error(error);
       // return new TaskCreatedError(error);
      }
    }
  );

  // @Effect() updateTasks$ = this.dataPersistence.optimisticUpdate(
  //   GeneralActionTypes.UpdateTask,
  //   {
  //     run: (action: UpdateTask) => {
  //       return this.taskService
  //         .updateTask(action.payload)
  //         .pipe(map(task => new UpdateSuccess(task)
          
  //         ));
  //     },

  //     undoAction: (action: UpdateTask, error) => {

  //       return of(new UpdateTaskError(task => ))
  //       console.error(error);
  //      // return new TaskCreatedError(error);
  //     }
  //   }
  // );




  constructor(
    private actions$: Actions,
    private taskService: TaskService,
    private dataPersistence: DataPersistence<CreatePartialState>
  ) {}
}
