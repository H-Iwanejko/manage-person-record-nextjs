import { HTTP_METHOD } from "next/dist/server/web/http"
import { Button } from "./Button"
import { HTMLProps } from "react"
import { classNames } from "../_lib/util"

interface SearchProps {
  action: string,
  method: HTTP_METHOD
  labelText: string
  hintText: string
  error?: string
}

export default function Search(props: SearchProps) {
    return (
        <div className="moj-search">
          <form action={props.action} method={props.method}>
            <div className={classNames("govuk-form-group", { "govuk-form-group--error": props.error })}>
              <label className="govuk-label moj-search__label govuk-!-font-weight-bold" htmlFor="search">
                {props.labelText}
              </label>
              <div id="search-hint" className="govuk-hint moj-search__hint ">
                {props.hintText}
              </div>
              {props.error && <p id="search-error" className="govuk-error-message">
                <span className="govuk-visually-hidden">Error:</span> {props.error}
              </p>}
              <input className={classNames("govuk-input moj-search__input", { "govuk-input--error": props.error })} id="search" name="search" type="search" aria-describedby="search-hint"/>
            </div>
            <Button type="submit" className="govuk-button moj-search__button" data-module="govuk-button">
              Search
            </Button>
          </form>
      </div>
    )
}