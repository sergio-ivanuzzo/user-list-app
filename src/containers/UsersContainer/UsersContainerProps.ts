import * as React from "react";

import { IPromiseMethod } from "helpers";
import { IUser } from "reducers/userReducer";

export interface IUsersContainerProps {
    fetchUsers: (request: any, resolve: IPromiseMethod, reject: IPromiseMethod) => void;
    users: Array<IUser>;
    children: (injectedProps: any) => React.ReactNode;
}

export interface IUsersContainerChildProps {
    users: Array<IUser>;
    fetchUsers: (request) => Promise<void>;
}
