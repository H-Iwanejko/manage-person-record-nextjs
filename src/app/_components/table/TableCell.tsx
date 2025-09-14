import { FC, HTMLProps } from "react";

const TableCell: FC<HTMLProps<HTMLTableCellElement>> = ({ children, ...rest}) => {
    return (
        <td className="govuk-table__cell" {...rest}>{children}</td>
    )
}

TableCell.displayName = "Table.Cell"

export default TableCell;
