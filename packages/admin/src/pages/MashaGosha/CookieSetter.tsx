import * as React from 'react'
import { RouteComponentProps } from 'react-router'

interface ICookieSetterProps
  extends RouteComponentProps<{
    pass: string
  }> {}

const CookieSetter: React.FunctionComponent<ICookieSetterProps> = (props) => {
  window.sessionStorage.setItem('token', props.match.params.pass)

  return null
}

export default CookieSetter
