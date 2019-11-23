import * as React from "react";
import { Theme } from "@material-ui/core";
import { StyleRules } from "@material-ui/core/styles";

const styles = (theme: Theme): StyleRules => ({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
});

class ButtonPanel extends React.Component {
    public render(): React.ReactNode {
        return null;
    }
}
