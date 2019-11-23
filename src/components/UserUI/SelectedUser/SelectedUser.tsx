import * as React from "react";
import UserForm from "components/UserUI/UserForm/UserForm";

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

export default SelectedUser;
