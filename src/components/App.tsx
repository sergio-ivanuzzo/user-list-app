import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Container } from "@material-ui/core";

import { store } from "store/store";

import UsersContainer, { IUsersContainerChildProps } from "containers/UsersContainer";
import UsersTable from "components/UserUI/UsersTable/UsersTable";


class App extends React.Component {
    public render(): React.ReactNode {
        return (
            <Provider store={store}>
                <UsersContainer>
                    {this.renderUsersUI}
                </UsersContainer>
            </Provider>
        );
    }

    protected renderUsersUI = (props: IUsersContainerChildProps): React.ReactNode => {
        return (
            <Container>
                <Router>
                    <Switch>
                        <Route path="/">
                            <UsersTable users={props.users} />
                        </Route>
                        <Route path="/add">
                            <div>Soon...</div>
                        </Route>
                        <Route path="/edit">
                            <div>Soon...</div>
                        </Route>
                        <Redirect to="/" />
                    </Switch>
                </Router>
            </Container>
        );
    }
}

export default App;
