import * as React from "react";
import { withRouter } from "react-router";

import UserForm from "components/UserUI/UserForm/UserForm";
import { HistoryContext } from "components/AppProps";
import { ISelectedUserProps } from "components/UserUI/SelectedUser/SelectedUserProps";
import ButtonPanel from "components/UserUI/ButtonPanel/ButtonPanel";

class SelectedUser extends React.Component<ISelectedUserProps> {
    public render(): React.ReactNode {
        const { id } = this.props.match.params;
        const selectedUser = this.props.users.find((user) => user.id === Number(id));

        return (
            <>
                <ButtonPanel
                    redirectTo="/"
                    buttonText="Back"
                />
                {this.renderUserInfo()}
                <UserForm onClick={this.handleClick} selectedUser={selectedUser} />
            </>
        );
    }

    protected renderUserInfo = (): React.ReactNode => {
        return null;
    };

    protected handleBackRedirect = (): void => {
        this.context.router.history.goBack();
    };

    protected handleClick = async (): Promise<void> => {
        this.props.onClick();
    }
}

SelectedUser.contextType = HistoryContext;

export default withRouter(SelectedUser);
