import * as fromUser from '../user/user.reducer';
import { environment } from '../../environments/environment';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

export interface State {
  user: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {
  user: fromUser.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
