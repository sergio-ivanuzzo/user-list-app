import { WithStyles } from "@material-ui/core";

import { IUser } from "reducers/userReducer";

export interface IUserFormProps extends WithStyles {
    addUser?: (user: IUser) => Promise<void>;
    updateUser?: (user: IUser) => Promise<void>;
    selectedUser?: IUser;
}
