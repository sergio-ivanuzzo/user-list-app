import * as React from "react";

export interface ISchemaItem {
    title?: string;
    fieldName?: string;
    cell?: (value?: any) => React.ReactNode;
}

export interface IDataTableProps {
    data: Array<Object>;
    schema: Array<ISchemaItem>;
    className?: string;
}
