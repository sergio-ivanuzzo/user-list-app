import * as React from "react";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { Container } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

import { store } from "store/store";

import UsersContainer, { IUsersContainerChildProps } from "containers/UsersContainer";
import UsersTable from "components/UserUI/UsersTable/UsersTable";
import SelectedUser from "components/UserUI/SelectedUser/SelectedUser";
import { HistoryContext } from "components/AppProps";
import ButtonPanel from "components/UserUI/ButtonPanel/ButtonPanel";
import UserForm from "components/UserUI/UserForm/UserForm";

class App extends React.Component {
    public render(): React.ReactNode {
        const history = {
            history: createBrowserHistory()
        };

        return (
            <Container>
                <Provider store={store}>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <HistoryContext.Provider value={history}>
                            <HistoryContext.Consumer>
                                {() => (
                                    <UsersContainer>
                                        {this.renderUsersUI}
                                    </UsersContainer>
                                )}
                            </HistoryContext.Consumer>
                        </HistoryContext.Provider>
                    </MuiPickersUtilsProvider>
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
                        <UserForm {...props} />
                    </Route>
                    <Route path="/edit/:id">
                        <SelectedUser {...props} />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </Router>
        );
    }
}

App.contextType = HistoryContext;

export default App;
