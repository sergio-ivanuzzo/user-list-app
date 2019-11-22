import * as React from "react";

import { IPromiseMethod } from "helpers";
import { IUser } from "reducers/userReducer";

export interface IUsersContainerProps {
    fetchUsers: (request: any, resolve: IPromiseMethod, reject: IPromiseMethod) => void;
    addUser: (request: any, resolve: IPromiseMethod, reject: IPromiseMethod) => void;
    updateUser: (request: any, resolve: IPromiseMethod, reject: IPromiseMethod) => void;
    removeUser: (request: any, resolve: IPromiseMethod, reject: IPromiseMethod) => void;
    users: Array<IUser>;
    currentUser: IUser;
    children: (injectedProps: any) => React.ReactNode;
}

export interface IUsersContainerChildProps {
    users: Array<IUser>;
    currentUser: IUser;
    fetchUsers: (request) => Promise<void>;
    addUser: (request) => Promise<void>;
    updateUser: (request) => Promise<void>;
    removeUser: (request) => Promise<void>;
}
