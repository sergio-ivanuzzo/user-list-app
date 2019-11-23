import * as React from "react";
import { Provider } from "react-redux";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { Container } from "@material-ui/core";
import { createBrowserHistory } from "history";

import { store } from "store/store";

import UsersContainer, { IUsersContainerChildProps } from "containers/UsersContainer";
import UsersTable from "components/UserUI/UsersTable/UsersTable";
import SelectedUser from "components/UserUI/SelectedUser/SelectedUser";
import { HistoryContext } from "components/AppProps";
import ButtonPanel from "components/UserUI/ButtonPanel/ButtonPanel";
import UserForm from "components/UserUI/UserForm/UserForm";
import Button from "@material-ui/core/Button";

class App extends React.Component {
    public render(): React.ReactNode {
        const history = {
            history: createBrowserHistory()
        };

        return (
            <Container>
                <Provider store={store}>
                    <HistoryContext.Provider value={history}>
                        <HistoryContext.Consumer>
                            {() => (
                                <UsersContainer>
                                    {this.renderUsersUI}
                                </UsersContainer>
                            )}
                        </HistoryContext.Consumer>
                    </HistoryContext.Provider>
                </Provider>
            </Container>
        );
    }

    protected renderUsersUI = (props: IUsersContainerChildProps): React.ReactNode => {
        return (
            <Router history={this.context.history}>
                <Switch>
                    <Route exact path="/">
                        <ButtonPanel
                            redirectTo="/add"
                            buttonText="Add New User"
                        />
                        <UsersTable {...props} />
                    </Route>
                    <Route path="/add">
                        <ButtonPanel
                            redirectTo="/"
                            buttonText="Back"
                        />
                        <UserForm onClick={props.addUser} />
                    </Route>
                    <Route path="/edit/:id">
                        <SelectedUser
                            onClick={props.updateUser}
                            users={props.users}
                        />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </Router>
        );
    }
}

App.contextType = HistoryContext;

export default App;
