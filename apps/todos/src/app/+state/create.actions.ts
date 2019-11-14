import { Action } from '@ngrx/store';
import { Tasks, Roles } from '../shared/tasks.model';

export enum GeneralActionTypes {
    LoadRoles = '[General] Load all roles',
    RolesLoaded= '[General] Loaded roles',
    ShowModal='[General] Display Modal'
}


export class LoadRoles implements Action {
  readonly type = GeneralActionTypes.LoadRoles;

  constructor() {}
}

export class RolesLoaded implements Action {
  readonly type = GeneralActionTypes.RolesLoaded;

  constructor(public payload: Roles[]) {}
}

export class ShowModal implements Action 
{
    readonly type= GeneralActionTypes.ShowModal;

    constructor() {}
}

export type CreateAction =
  | LoadRoles
  | RolesLoaded
  | ShowModal
