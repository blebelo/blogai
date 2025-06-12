'use client'
import { createContext } from 'react';

export interface IUser {
    name: string;
    email: string;
    age: number;
    password: string;
}

export interface ILogin{
    email: string;
    password: string;
}

export interface IUserStateContext {
    isPending: boolean;  
    isSuccess: boolean;  
    isError: boolean;    
    user?: IUser; 
    login?: ILogin;
}

export interface IUserActionContext {
    createUser: (user: IUser) => void;

}

export const INITIAL_STATE: IUserStateContext = {
    isPending: false,
    isSuccess: false,
    isError: false,
  };

export const UserStateContext = createContext<IUserStateContext>(INITIAL_STATE);
export const UserActionContext = createContext<IUserActionContext | undefined>(undefined);