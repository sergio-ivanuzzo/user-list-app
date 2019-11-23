import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { StyleRules, Theme, withStyles } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import DataTable from "components/DataTable/DataTable";
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

const UsersTableSchema = (handleEdit, handleDelete) => {
    return [{
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
                    <IconButton
                        color="primary"
                        aria-label="edit"
                        onClick={handleEdit(id)}
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton
                        color="secondary"
                        aria-label="delete"
                        onClick={handleDelete(id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </div>
            )
        }
    }];
};

class UsersTable extends React.Component<IUsersTableProps> {
    public render(): React.ReactNode {
        const { classes, users } = this.props;
        return (
            <Paper className={classes.root}>
                <DataTable
                    className={classes.table}
                    data={users}
                    schema={this.schema}
                />
            </Paper>
        );
    }

    protected get schema() {
        return UsersTableSchema(this.goToEditPage, this.handleDelete);
    }

    protected goToEditPage = (
        id: number
    ): () => void => (): void => {
        this.context.history.push(`/edit/${id}`);
    };

    protected handleDelete = (
        id: number
    ): () => void => (): void => {
        this.props.removeUser(id);
    };
}

UsersTable.contextType = HistoryContext;

export default withStyles(styles)(UsersTable);
