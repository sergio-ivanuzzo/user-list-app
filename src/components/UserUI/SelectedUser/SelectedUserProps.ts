import { RouteComponentProps } from "react-router";
import { WithStyles } from "@material-ui/core";

import { IUser } from "reducers/userReducer";

interface IEditUserParams {
    id: string;
}

export interface ISelectedUserProps extends WithStyles, RouteComponentProps<IEditUserParams> {
    updateUser: (user: IUser) => Promise<void>;
    removeUser: (id: number) => void;
    users: Array<IUser>;
}
