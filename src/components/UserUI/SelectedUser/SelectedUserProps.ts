import * as React from "react";
import { RouteComponentProps } from "react-router";

import { IUser } from "reducers/userReducer";

interface IEditUserParams {
    id: string;
}

export interface ISelectedUserProps extends RouteComponentProps<IEditUserParams> {
    onClick: (e?: React.MouseEvent) => Promise<void>;
    users: Array<IUser>;
}
