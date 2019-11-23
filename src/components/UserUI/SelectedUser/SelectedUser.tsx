import * as React from "react";

import UserForm from "components/UserUI/UserForm/UserForm";
import { HistoryContext } from "components/AppProps";

class SelectedUser extends React.Component {
    public render(): React.ReactNode {
        return (
            <>
                {this.renderUserInfo()}
                <UserForm />
            </>
        );
    }

    protected renderUserInfo = (): React.ReactNode => {
        return null;
    };

    protected handleBackRedirect = (): void => {
        this.context.router.history.goBack();
    };
}

SelectedUser.contextType = HistoryContext;

export default SelectedUser;
