import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { StyleRules, Theme, withStyles } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import DataTable from "components/DataTable/DataTable";
import { ISchemaItem } from "components/DataTable/DataTableProps";
import { IUsersTableProps } from "components/UserUI/UsersTable/UsersTableProps";
import { HistoryContext } from "components/AppProps";

const styles = (theme: Theme): StyleRules => ({
    root: {
        width: '100%',
        overflowX: 'auto',
        background: 'snow'
    },
    table: {
        minWidth: 650,
    },
});

const UsersTableSchema: Array<ISchemaItem> = [{
    title: "First Name",
    fieldName: "first_name"
}, {
    title: "Last Name",
    fieldName: "last_name"
}, {
    title: "Birth Date",
    fieldName: "birth_date"
}, {
    title: "Gender",
    fieldName: "gender"
}, {
    title: "Job",
    fieldName: "job"
}, {
    title: "Biography",
    fieldName: "biography"
}, {
    title: "Is Active",
    fieldName: "is_active",
    cell: (is_active) => (is_active) ? "Yes" : "No"
}, {
    cell: (id) => {
        return (
            <div>
                <IconButton color="primary" aria-label="edit">
                    <EditIcon />
                </IconButton>
                <IconButton color="secondary" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </div>
        )
    }
}];

class UsersTable extends React.Component<IUsersTableProps> {
    public render(): React.ReactNode {
        const { classes, users } = this.props;
        return (
            <Paper className={classes.root}>
                <DataTable
                    className={classes.table}
                    data={users}
                    schema={UsersTableSchema}
                />
            </Paper>
        );
    }
}

UsersTable.contextType = HistoryContext;

export default withStyles(styles)(UsersTable);
