import { FC, HTMLProps } from "react";

const TableCaption: FC<HTMLProps<HTMLTableCaptionElement>> = ({ className, ...rest }) => (
  <caption className={'govuk-table__caption govuk-table__caption--m ' + className} {...rest} />
);
TableCaption.displayName = 'Table.Caption';

export default TableCaption;