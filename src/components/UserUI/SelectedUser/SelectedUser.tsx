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
                <UserForm selectedUser={selectedUser} {...this.props} />
            </>
        );
    }
}

SelectedUser.contextType = HistoryContext;

export default withRouter(SelectedUser);
