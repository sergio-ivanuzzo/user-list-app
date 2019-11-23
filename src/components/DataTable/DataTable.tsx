import * as React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";

import { IDataTableProps, ISchemaItem } from "components/DataTable/DataTableProps";
import { uniqkey } from "helpers";

class DataTable extends React.Component<IDataTableProps> {
    public render(): React.ReactNode {
        return (
            <Table className={this.props.className}>
                <TableHead>
                    <TableRow>
                        {this.renderColumns()}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.renderRows()}
                </TableBody>
            </Table>
        );
    }

    protected renderColumns = (): React.ReactNode => {
        const { schema } = this.props;
        return schema.map((item) => (
            <TableCell key={uniqkey()}>
                {item.title}
            </TableCell>
        ));
    };

    protected renderRows = (): Array<React.ReactNode> => {
        const { schema, data } = this.props;
        return data.map((item: Object) => {
            return (
                <TableRow key={uniqkey()}>
                    {schema.map((column) => (
                        <TableCell component="th" scope="row" key={uniqkey()}>
                            {this.renderCell(column, item)}
                        </TableCell>
                    ))}
                </TableRow>
            );
        });
    };

    protected renderCell = (column: ISchemaItem, item: Object): React.ReactNode => {
        const cellValue = item[column.fieldName];
        if (column.cell) {
            return column.cell(cellValue)
        } else {
            return cellValue;
        }
    }
}

export default DataTable;
