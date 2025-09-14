import { FC, HTMLProps } from "react";

const TableBody: FC<HTMLProps<HTMLTableSectionElement>> = ({ children, ...rest}) => {
    return (<tbody className="govuk-table__body" {...rest} >
        {children}
    </tbody>)
}

TableBody.displayName = 'Table.Body';

export default TableBody;