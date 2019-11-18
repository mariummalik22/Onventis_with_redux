import {
  GeneralActions,
  GeneralActionTypes,
  RolesLoaded,
  ShowModal,
  TaskCreated,
  UpdateTask
} from './create.actions';
import { Roles } from '../shared/tasks.model';
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
    ...initialState,
    opened: true
  };
  return state;
}

function rolesLoaded(state: CreateState, action: RolesLoaded) {
  state = {
    ...initialState,
    opened: true,
    role: action.payload
  };
  return state;
}
function taskCreated(state: CreateState, action: TaskCreated) {
  state = {
    ...state,
    title: action.payload.title
  };
  return state;
}

function showModal(state: CreateState, action: ShowModal) {
  state = {
    ...state,
    opened: true,
    creating: true
  };

  return state;
}

function updateTask(state: CreateState, action: UpdateTask)
{
state={
  ...state
}
}

export function reducer(
  state: CreateState = initialState,
  action: GeneralActions
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
      state = showModal(state, action);
      break;
    }

    case GeneralActionTypes.CloseModal: {
      state = {
        ...initialState,
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

    case GeneralActionTypes.TaskCreated: {
      state = {
        ...state,
        title: action.payload.title,
        success: true,
        creating: false
      };
      break;
    }
  }
  return state;
}
