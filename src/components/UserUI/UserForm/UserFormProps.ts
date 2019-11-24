import * as React from "react";

import { IUser } from "reducers/userReducer";

export interface IUserFormProps {
    addUser?: (user: IUser) => Promise<void>;
    updateUser?: (user: IUser) => Promise<void>;
    selectedUser?: IUser;
}
