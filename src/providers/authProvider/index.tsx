'use client'
import { useContext, useReducer } from "react";
import { INITIAL_STATE, IUser, UserActionContext, UserStateContext } from "./context";
import { UserReducer } from "./reducer";
import { createUserError, createUserPending, createUserSuccess } from "./actions";
import { createDbUser } from "@/utils/queries/insert"; 



export const UserProvider = ({children}: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);
    
    const createUser = async (user: IUser) => {
        dispatch(createUserPending());

        await createDbUser(user). 
        then((response) => {
            dispatch(createUserSuccess(response))
        }).catch(() => {
            dispatch(createUserError())
        })   
    }

    return (
        <UserStateContext.Provider value={state}>
            <UserActionContext value={{createUser}}>
                {children}
            </UserActionContext>
        </UserStateContext.Provider>

    )
}

export const useUserState = () => {
    const context = useContext(UserStateContext);
    if (!context) {
        throw new Error('useUserState must be used within a ProductProvider');
    }
    return context;
}

export const useUserActions = () => {
    const context = useContext(UserActionContext);
    if (!context) {
        throw new Error('useUserActions must be used within a ProductProvider');
    }
    return context;
}