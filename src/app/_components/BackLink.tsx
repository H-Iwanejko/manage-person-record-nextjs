import { FC, HTMLProps } from "react"

type BackLinkProps = HTMLProps<HTMLAnchorElement>

export const BackLink: FC<BackLinkProps> = ({ ...rest }) => {
    return (
        <a className="govuk-back-link" {...rest} >Back</a>
    )
}