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
                        <UsersTable users={props.users} />
                    </Route>
                    <Route path="/add">
                        <div>Soon...</div>
                    </Route>
                    <Route path="/edit/:id">
                        <SelectedUser />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </Router>
        );
    }
}

App.contextType = HistoryContext;

export default App;
