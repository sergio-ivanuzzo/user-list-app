import { WithStyles } from "@material-ui/core";

import { IUser } from "reducers/userReducer";

export interface IUsersTableProps extends WithStyles {
    users: Array<IUser>;
    removeUser: (id: number) => void;
}
