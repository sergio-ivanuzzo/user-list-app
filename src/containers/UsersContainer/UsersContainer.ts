import * as React from "react";
import { AnyAction, Dispatch } from "redux";
import { connect } from "react-redux";

import { IUsersContainerChildProps, IUsersContainerProps } from "./UsersContainerProps";
import { IStoreState } from "reducers/rootReducer";

import * as UserActions from "actions/userActions";
import { awaitify, IPromiseMethod } from "helpers";

class UsersContainer extends React.Component<IUsersContainerProps> {
    public render(): React.ReactNode {
        return this.props.children(this.injectedProps);
    }

    protected get injectedProps(): IUsersContainerChildProps {
        return {
            users: this.props.users,
            fetchUsers: this.fetchUsers
        }
    };

    protected fetchUsers = async (request) => {
        await awaitify((resolve, reject) => this.props.fetchUsers(request, resolve, reject));
    }
}

const mapStateToProps = (state: IStoreState) => ({
    users: state.userReducer.users,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    fetchUsers: (
        request,
        resolve: IPromiseMethod,
        reject: IPromiseMethod
    ) => dispatch(UserActions.actionUsersFetch(request, resolve, reject))
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
