import * as React from 'react'
import Link, { LinkProps } from 'next/link'

interface IULinkProps extends LinkProps {
  className?: string
}

/**
 * Обёртка для ссылки с возможностями next/link
 */
const ULink: React.FunctionComponent<IULinkProps> = ({ className, children, ...props }) => {
  return (
    <Link {...props}>
      <a className={className}>{children}</a>
    </Link>
  )
}

export default ULink
