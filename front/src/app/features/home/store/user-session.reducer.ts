import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {UserSessionAction, UserSessionActionTypes} from './user-session.action';
import {AuthenticationProfile} from '../models/authentication-profile.model';

export interface UserSessionState extends EntityState<AuthenticationProfile> {
  token: string;
  authenticated: boolean;
  isCoach: boolean;
}

export const adapter: EntityAdapter<AuthenticationProfile> = createEntityAdapter<AuthenticationProfile>({});

export const initialState: UserSessionState = adapter.getInitialState({
  token: undefined,
  authenticated: false,
  isCoach : false
});


export function userSessionReducer(state: UserSessionState = initialState,
                                   action: UserSessionAction) {
  switch (action.type) {

    case UserSessionActionTypes.SigninSuccess: {
      const authProfile: AuthenticationProfile = action.payload;
      return {
        ...state,
        token: authProfile.token,
        isCoach: authProfile.isCoach,
        authenticated: true,
      };
    }

    case UserSessionActionTypes.SigninError: {
      return {
        ...state,
        token: undefined,
        authenticated: false,
      };
    }

    case UserSessionActionTypes.SignupSuccess: {
      const authProfile: AuthenticationProfile = action.payload;
      return {
        ...state,
        token: authProfile.token,
        isCoach: authProfile.isCoach,
        authenticated: true,
      };
    }

    case UserSessionActionTypes.SignupError: {
      return {
        ...state,
        token: undefined,
        authenticated: false,
      };
    }

    default:
      return state;
  }
}
