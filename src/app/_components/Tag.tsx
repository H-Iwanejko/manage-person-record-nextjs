import { HTMLProps } from "react"
import { classNames } from '../_lib/util';

export enum TagColour {
    GREY = "govuk-tag--grey",
    GREEN = "govuk-tag--green",
    TURQUOISE = "govuk-tag--turquoise",
    BLUE = "govuk-tag--blue",
    LIGHT_BLUE = "govuk-tag--light-blue",
    PURPLE = "govuk-tag--purple",
    PINK = "govuk-tag--pink",
    RED = "govuk-tag--red",
    ORANGE = "govuk-tag--orange",
    YELOW = "govuk-tag--yellow"
}

interface TagProps extends HTMLProps<HTMLElement> {
    colour: TagColour;
}

const Tag = ({ colour, children, ...rest}: TagProps) => {
    return (
        <strong className={classNames("govuk-tag", colour)} {...rest}>{children}</strong>
    )
}

export default Tag;
