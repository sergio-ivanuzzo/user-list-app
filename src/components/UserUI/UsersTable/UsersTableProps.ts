import { WithStyles } from "@material-ui/core";
import { RouteComponentProps } from "react-router";

import { IUser } from "reducers/userReducer";

export interface IUsersTableProps extends WithStyles, RouteComponentProps {
    users: Array<IUser>;
}
