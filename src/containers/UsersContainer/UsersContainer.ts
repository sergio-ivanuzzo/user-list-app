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
            currentUser: this.props.currentUser,
            fetchUsers: this.fetchUsers,
            addUser: this.addUser,
            updateUser: this.updateUser,
            removeUser: this.removeUser,
        }
    };

    protected fetchUsers = async (request) => {
        await awaitify((resolve, reject) => this.props.fetchUsers(request, resolve, reject));
    };

    protected addUser = async (request) => {
        await awaitify((resolve, reject) => this.props.addUser(request, resolve, reject));
    };

    protected updateUser = async (request) => {
        await awaitify((resolve, reject) => this.props.updateUser(request, resolve, reject));
    };

    protected removeUser = async (request) => {
        await awaitify((resolve, reject) => this.props.removeUser(request, resolve, reject));
    };
}

const mapStateToProps = (state: IStoreState) => ({
    users: state.userReducer.users,
    currentUser: state.userReducer.currentUser,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    fetchUsers: (
        request,
        resolve: IPromiseMethod,
        reject: IPromiseMethod
    ) => dispatch(UserActions.actionUsersFetch(request, resolve, reject)),
    addUser: (
        request,
        resolve: IPromiseMethod,
        reject: IPromiseMethod
    ) => dispatch(UserActions.actionUserAdd(request, resolve, reject)),
    updateUser: (
        request,
        resolve: IPromiseMethod,
        reject: IPromiseMethod
    ) => dispatch(UserActions.actionUserUpdate(request, resolve, reject)),
    removeUser: (
        request,
        resolve: IPromiseMethod,
        reject: IPromiseMethod
    ) => dispatch(UserActions.actionUserRemove(request, resolve, reject))
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
