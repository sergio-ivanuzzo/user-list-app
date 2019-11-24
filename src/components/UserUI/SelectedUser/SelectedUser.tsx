import * as React from "react";
import { withRouter } from "react-router";
import {Paper, Theme} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { StyleRules } from "@material-ui/core/styles";
import withStyles from "@material-ui/core/styles/withStyles";

import UserForm from "components/UserUI/UserForm/UserForm";
import ButtonPanel from "components/UserUI/ButtonPanel/ButtonPanel";
import { HistoryContext } from "components/AppProps";
import { ISelectedUserProps } from "components/UserUI/SelectedUser/SelectedUserProps";
import { ISelectedUserState } from "components/UserUI/SelectedUser/SelectedUserState";

const styles = (theme: Theme): StyleRules => ({
    root: {
        padding: theme.spacing(3, 2),
        display: "flex"
    },
    card: {
        width: "50%",
        marginLeft: theme.spacing(3)
    },
});

class SelectedUser extends React.Component<ISelectedUserProps, ISelectedUserState> {
    constructor(props) {
        super(props);

        const { id } = props.match.params;
        const selectedUser = props.users.find((user) => user.id === Number(id));

        this.state = {
            selectedUser
        }
    }
    public render(): React.ReactNode {
        const { classes } = this.props;
        const { selectedUser } = this.state;

        return (
            <>
                <ButtonPanel
                    redirectTo="/"
                    buttonText="Back"
                />
                <Paper className={classes.root}>
                    <UserForm selectedUser={selectedUser} {...this.props} />
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography color="textPrimary">
                                First Name: {selectedUser.first_name}
                            </Typography>
                            <Typography color="textSecondary">
                                Last Name: {selectedUser.last_name}
                            </Typography>
                            <Typography color="textSecondary">
                                Birth Date: {selectedUser.birth_date}
                            </Typography>
                            <Typography color="textSecondary">
                                Gender: {selectedUser.gender}
                            </Typography>
                            <Typography color="textSecondary">
                                Job: {selectedUser.job}
                            </Typography>
                            <Typography color="textSecondary">
                                Biography: {selectedUser.biography}
                            </Typography>
                            <Typography color="textSecondary">
                                Active: {selectedUser.is_active ? "Yes" : "No"}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <IconButton aria-label="delete" onClick={this.handleRemove}>
                                <DeleteIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Paper>
            </>
        );
    }

    protected handleRemove = async (): Promise<void> => {
        const { selectedUser } = this.state;
        await this.props.removeUser(selectedUser.id);
    }
}

SelectedUser.contextType = HistoryContext;

export default withRouter(
    withStyles(styles)(SelectedUser)
);
