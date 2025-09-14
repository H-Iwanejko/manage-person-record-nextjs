import { FC, HTMLProps } from "react";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type: 'button' | 'submit' | 'reset';
}

export const Button: FC<ButtonProps> = ({
    type,
    className,
    children,
    ...rest
}) => {
    return (
        <button type={type} className={"govuk-button " + className} data-module="govuk-button" {...rest}>
            {children}
        </button>
    )
}