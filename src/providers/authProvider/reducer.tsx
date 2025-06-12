import { handleActions } from "redux-actions";
import { INITIAL_STATE, IUserStateContext } from "./context";
import { UserActionEnums } from "./actions";

export const UserReducer = handleActions<IUserStateContext, IUserStateContext>({
    // getUser
    [UserActionEnums.getUserPending]:(state, action) =>(
        {...state, ...action.payload}),

    [UserActionEnums.getUserSuccess]:(state, action) =>(
        {...state, ...action.payload}),

    [UserActionEnums.getUserError]:(state, action) =>(
        {...state, ...action.payload}),

    // createUser
    [UserActionEnums.createUserPending]:(state, action) =>(
        {...state, ...action.payload}),
    
    [UserActionEnums.createUserSuccess]:(state, action) =>(
        {...state, ...action.payload}),
    
    [UserActionEnums.createUserError]:(state, action) =>(
        {...state, ...action.payload}),

    // loginUser
    [UserActionEnums.loginUserPending]:(state, action) =>(
        {...state, ...action.payload}),

    [UserActionEnums.loginUserSuccess]:(state, action) =>(
        {...state, ...action.payload}),

    [UserActionEnums.loginUserError]:(state, action) =>(
        {...state, ...action.payload}),

    // updateUser
    [UserActionEnums.updateUserPending]:(state, action) =>(
        {...state, ...action.payload}),

    [UserActionEnums.updateUserSuccess]:(state, action) =>(
        {...state, ...action.payload}),

    [UserActionEnums.updateUserError]:(state, action) =>(
        {...state, ...action.payload}),

    // deleteUser
    [UserActionEnums.deleteUserPending]:(state, action) =>(
        {...state, ...action.payload}),

    [UserActionEnums.deleteUserSuccess]:(state, action) =>(
        {...state, ...action.payload}),
    
    [UserActionEnums.deleteUserError]:(state, action) =>(
        {...state, ...action.payload}),
    },INITIAL_STATE)