import * as React from "react";
import { Link } from "react-router-dom";
import { Theme } from "@material-ui/core";
import { StyleRules } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { IButtonPanelProps } from "components/UserUI/ButtonPanel/ButtonPanelProps";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme: Theme): StyleRules => ({
    panel: {
        textAlign: "right",
        marginBottom: theme.spacing(2)
    },
});

class ButtonPanel extends React.Component<IButtonPanelProps> {
    public render(): React.ReactNode {
        const { classes, buttonText, redirectTo } = this.props;

        return (
            <div className={classes.panel}>
                <Button
                    component={ Link }
                    to={redirectTo}
                    variant="contained"
                    color="secondary"
                >
                    {buttonText}
                </Button>
            </div>
        );
    }
}

export default withStyles(styles)(ButtonPanel);
