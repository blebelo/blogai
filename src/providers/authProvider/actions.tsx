import {createAction} from 'redux-actions';
import { ILogin, IUser, IUserStateContext } from './context';

export enum UserActionEnums {
    getUserPending = 'GET_USER_PENDING',
    getUserSuccess = 'GET_USER_SUCCESS',
    getUserError = 'GET_USER_ERROR',

    createUserPending = 'CREATE_USER_PENDING',
    createUserSuccess = 'CREATE_USER_SUCCESS',
    createUserError = 'CREATE_USER_ERROR',

    loginUserPending = 'LOGIN_USER_PENDING',
    loginUserSuccess = 'LOGIN_USER_SUCCESS',
    loginUserError = 'LOGIN_USER_ERROR',

    updateUserPending = 'UPDATE_USER_PENDING',
    updateUserSuccess = 'UPDATE_USER_SUCCESS',
    updateUserError = 'UPDATE_USER_ERROR',

    deleteUserPending = 'DELETE_USER_PENDING',
    deleteUserSuccess = 'DELETE_USER_SUCCESS',
    deleteUserError = 'DELETE_USER_ERROR',
}

// RequestState Objects Declared Once For Reuse 
export const RequestState = {
    Pending: { isPending: true, isSuccess: false, isError: false },
    Success: { isPending: false, isSuccess: true, isError: false },
    Error: { isPending: false, isSuccess: false, isError: true },
};

/*
createAction<PayloadType>(actionType, payloadCreator)
 - PayloadType: The type of data the action will contain
 - actionType: The string identifier for this action
 - payloadCreator: Function that returns the action payload
*/
// getUser Action States
export const getUserPending = createAction<IUserStateContext>(
    UserActionEnums.getUserPending, 
    () => RequestState.Pending
);

export const getUserSuccess = createAction<IUserStateContext, IUser>(
    UserActionEnums.getUserSuccess,
    (user: IUser) => (
        {...RequestState.Success,
        user
    })
);

export const getUserError = createAction<IUserStateContext>(
    UserActionEnums.getUserError,
    () => RequestState.Error
)

// createUser Action States
export const createUserPending = createAction<IUserStateContext>(
    UserActionEnums.createUserPending, 
    () => RequestState.Pending
);

export const createUserSuccess = createAction<IUserStateContext, IUser>(
    UserActionEnums.createUserSuccess,
    (user: IUser) => (
        {...RequestState.Success,
        user
    })
);

export const createUserError = createAction<IUserStateContext>(
    UserActionEnums.createUserError,
    () => RequestState.Error
)

// loginUser Action States
export const loginUserPending = createAction<IUserStateContext>(
    UserActionEnums.loginUserPending, 
    () => RequestState.Pending
);

export const loginUserSuccess = createAction<IUserStateContext, ILogin>(
    UserActionEnums.loginUserSuccess,
    (login: ILogin) => (
        {...RequestState.Success,
        login
    })
);

export const loginUserError = createAction<IUserStateContext>(
    UserActionEnums.loginUserError,
    () => RequestState.Error
)

// updateUser Action States
export const updateUserPending = createAction<IUserStateContext>(
    UserActionEnums.updateUserPending, 
    () => RequestState.Pending
);

export const updateUserSuccess = createAction<IUserStateContext, IUser>(
    UserActionEnums.updateUserSuccess,
    (user: IUser) => (
        {...RequestState.Success,
        user
    })
);

export const updateUserError = createAction<IUserStateContext>(
    UserActionEnums.updateUserError, 
    () => RequestState.Error
);

// deleteUser Action States
export const deleteUserPending = createAction<IUserStateContext>(
    UserActionEnums.deleteUserPending, 
    () => RequestState.Pending
);

export const deleteUserSuccess = createAction<IUserStateContext, IUser>(
    UserActionEnums.deleteUserSuccess,
    (user: IUser) => (
        {...RequestState.Success,
        user
    })
);

export const deleteUserError = createAction<IUserStateContext>(
    UserActionEnums.deleteUserError, 
    () => RequestState.Error
);