import { RouteComponentProps } from "react-router";

import { IUser } from "reducers/userReducer";

interface IEditUserParams {
    id: string;
}

export interface ISelectedUserProps extends RouteComponentProps<IEditUserParams> {
    updateUser: (user: IUser) => Promise<void>;
    users: Array<IUser>;
}
