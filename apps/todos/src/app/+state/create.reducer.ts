import {
  CreateAction,
  GeneralActionTypes,
  RolesLoaded,
  ShowModal
} from './create.actions';
import { Roles, Status } from '../shared/tasks.model';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';
export const CREATE_FEATURE_KEY = 'create';

export interface CreateState {
  creating: boolean;
  success?: boolean;
  title: string;
  error?: any;
  opened: boolean;
  role: Roles[];
}

export interface CreatePartialState {
  readonly [CREATE_FEATURE_KEY]: CreateState;
}

export const initialState: CreateState = {
  creating: false,
  title: undefined,
  opened: false,
  role: []
};
function loadRoles(state: CreateState) {
  state = {
    ...state
  };
  return state;
}

function rolesLoaded(state: CreateState, action: RolesLoaded) {
  state = {
    ...state,
    role: action.payload
  };
  return state;
}

function showModal(state: CreateState, action: ShowModal)
{
    state= {
        ...state,
        opened: true
    }

    return state;
}

export function reducer(
  state: CreateState = initialState,
  action: CreateAction
): CreateState {
  switch (action.type) {

    case GeneralActionTypes.LoadRoles: {
      state = loadRoles(state);
      break;
    }

    case GeneralActionTypes.RolesLoaded: {
      state = rolesLoaded(state, action);
      break;
    }

    case GeneralActionTypes.ShowModal: {
        state= showModal(state,action);
        break;
    }

    case GeneralActionTypes.CloseModal: {
      state = {
        ...state,
        opened: false
      };
      break;
    }

    case GeneralActionTypes.CreateTask: {
      state = {
        ...state,
        creating: true,
        title: action.payload.title
       
      };
      break;
    }
  }
  return state;
}
