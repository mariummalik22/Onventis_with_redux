import { Action } from '@ngrx/store';
import { Tasks, Roles } from '../shared/tasks.model';

export enum GeneralActionTypes {
  LoadRoles = '[General] Load all roles',
  RolesLoaded = '[General] Loaded roles',
  ShowModal = '[General] Display modal',
  CloseModal = '[General] Close modal',
  CreateTask = '[General] Create new task',
  TaskCreated= '[General] Success for task creation',
  UpdateTask= '[General] Update Task',
  UpdateSuccess= '[General] Update Success',
  UpdateTaskError='[General] Update Task Error'
}

export class LoadRoles implements Action {
  readonly type = GeneralActionTypes.LoadRoles;

  constructor() {}
}

export class RolesLoaded implements Action {
  readonly type = GeneralActionTypes.RolesLoaded;

  constructor(public payload: Roles[]) {}
}

export class ShowModal implements Action {
  readonly type = GeneralActionTypes.ShowModal;

  constructor() {}
}

export class CloseModal implements Action {
  readonly type = GeneralActionTypes.CloseModal;
  constructor() {}
}

export class TaskCreated implements Action {
  readonly type = GeneralActionTypes.TaskCreated;

  constructor(public payload: any) {}
}

export class CreateTask implements Action {
  readonly type = GeneralActionTypes.CreateTask;
  constructor(public payload: any) {}
}


export class TaskCreatedError implements Action {
  readonly type = GeneralActionTypes.CreateTask;
  constructor(public payload: any) {}
}

export class UpdateTask implements Action{
  readonly type= GeneralActionTypes.UpdateTask;
  constructor(public payload: any) {}
}

export class UpdateTaskError implements Action{
readonly type= GeneralActionTypes.UpdateTask;
constructor(public payload: any) {}
}

export class UpdateSuccess implements Action{
  readonly type= GeneralActionTypes.UpdateTask;
  constructor(public payload: any) {}
}

export type GeneralActions =
  | LoadRoles
  | RolesLoaded
  | ShowModal
  | CloseModal
  | CreateTask
  | TaskCreated
  | TaskCreatedError
  | UpdateTask
  | UpdateSuccess
  | UpdateTaskError
;
