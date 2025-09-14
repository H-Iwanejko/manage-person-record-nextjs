
import { FC, HTMLProps } from "react";

const TableHeader: FC<HTMLProps<HTMLTableCellElement>> = ({ className, children, ...rest }) => (
  <th scope="col" className={'govuk-table__header ' + className} {...rest}>
      {children}
  </th>
);

TableHeader.displayName = 'Table.Header';

export default TableHeader;