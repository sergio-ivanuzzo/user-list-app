import * as React from "react";

import { IUser } from "reducers/userReducer";

export interface IUserFormProps {
    onClick: (e?: React.MouseEvent) => Promise<void>;
    selectedUser?: IUser;
}
