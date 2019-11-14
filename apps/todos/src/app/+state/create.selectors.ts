import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CreateState, CREATE_FEATURE_KEY } from './create.reducer';

const getCreateState = createFeatureSelector<CreateState>(CREATE_FEATURE_KEY);

const getRoles = createSelector(
  getCreateState, (state: CreateState) => state.role
);

export const createQuery = {
  getRoles
};
