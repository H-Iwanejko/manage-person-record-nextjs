import { FC, HTMLProps } from "react";

const TableRow: FC<HTMLProps<HTMLTableRowElement>> = ({ children, ...rest }) => {
    return (
        <tr className="govuk-table__row" {...rest} >
            {children}
        </tr>
    )
}

TableRow.displayName = "Table.Row";

export default TableRow;
