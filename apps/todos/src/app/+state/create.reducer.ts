import {
  CreateAction,
  GeneralActionTypes,
  RolesLoaded,
  ShowModal
} from './create.actions';
import { Roles, Status } from '../shared/tasks.model';
export const CREATE_FEATURE_KEY = 'create';

export interface CreateState {
  creating: boolean;
  success?: boolean;
  name: string;
  error?: any;
  opened: boolean;
  role: Roles[];
  status: Status[];
}

export interface CreatePartialState {
  readonly [CREATE_FEATURE_KEY]: CreateState;
}

export const initialState: CreateState = {
  creating: false,
  name: undefined,
  opened: false,
  role: [],
  status: []
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
  }
  return state;
}
