import { FC, HTMLProps } from "react";
import Table from "./Table";
import { classNames } from "@/app/_lib/util";

const TableHead: FC<HTMLProps<HTMLTableSectionElement>> = ({ className, children, ...rest }) => (
  <thead className={classNames('govuk-table__head', className)} {...rest}>
    <Table.Row>
      {children}
    </Table.Row>
  </thead>
);

TableHead.displayName = 'Table.Head';

export default TableHead;