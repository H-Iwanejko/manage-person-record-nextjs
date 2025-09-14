import { ComponentProps, FC, HTMLProps } from "react"
import TableCaption from './TableCaption';
import TableHead from "./TableHead";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableCell from "./TableCell";
import TableRow from "./TableRow";


interface TableProps extends HTMLProps<HTMLTableElement> {
    caption?: string;
    captionProps?: ComponentProps<typeof TableCaption>;
    scrollable?: boolean;
}

const Table = ({
    caption,
    captionProps,
    scrollable,
    children,
}: TableProps) => {
    const table = (
        <table className="govuk-table">
            {caption && <TableCaption {...captionProps}>{caption}</TableCaption>}
            {children}
        </table>
    )
    return scrollable ? <div className="moj-scrollable-pane">{table}</div> : table
}

Table.Head = TableHead;
Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;

export default Table;