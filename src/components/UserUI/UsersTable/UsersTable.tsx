import * as React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { StyleRules, Theme, withStyles } from '@material-ui/core/styles';
import { withRouter} from "react-router-dom";

import { IUsersTableProps } from "components/UserUI/UsersTable/UsersTableProps";
import { IUser } from "reducers/userReducer";

const styles = (theme: Theme): StyleRules => ({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
});

class UsersTable extends React.Component<IUsersTableProps> {
    public render(): React.ReactNode {
        const { classes, users } = this.props;
        return (
            <Paper className={classes.root}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell align="right">Last Name</TableCell>
                            <TableCell align="right">Birth Date</TableCell>
                            <TableCell align="right">Gender</TableCell>
                            <TableCell align="right">Job</TableCell>
                            <TableCell align="right">Biography</TableCell>
                            <TableCell align="right">Active</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(this.renderTableItem)}
                    </TableBody>
                </Table>
            </Paper>
        );
    }

    protected renderTableItem = (user: IUser) => {
        return (
            <TableRow key={user.id}>
                <TableCell component="th" scope="row">
                    {user.first_name}
                </TableCell>
                <TableCell align="right">{user.last_name}</TableCell>
                <TableCell align="right">{user.birth_date}</TableCell>
                <TableCell align="right">{user.gender}</TableCell>
                <TableCell align="right">{user.job}</TableCell>
                <TableCell align="right">{user.biography}</TableCell>
                <TableCell align="right">{user.is_active}</TableCell>
                <TableCell align="right">

                </TableCell>
                <TableCell align="right"></TableCell>
            </TableRow>
        );
    }
}

export default withRouter(
    withStyles(styles)(UsersTable)
);
