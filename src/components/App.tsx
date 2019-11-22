import * as React from "react";
import { Provider } from "react-redux";

import { store } from "store/store";

import UsersContainer, { IUsersContainerChildProps } from "containers/UsersContainer";
import WeatherUI from "components/WeatherUI/WeatherUI";


class App extends React.Component {
    public render(): React.ReactNode {
        return (
            <Provider store={store}>
                <UsersContainer>
                    {this.renderWeatherUI}
                </UsersContainer>
            </Provider>
        );
    }

    protected renderWeatherUI = (props: IUsersContainerChildProps): React.ReactNode => {
        return (
            <WeatherUI {...props} />
        );
    }
}

export default App;
