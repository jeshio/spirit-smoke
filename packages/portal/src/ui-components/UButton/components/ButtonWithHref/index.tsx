import Link from 'next/link'
import * as React from 'react'
import { IUButtonProps } from '../../types'

const ButtonWithHref: React.FunctionComponent<Omit<IUButtonProps, 'type'>> = ({ href, ...props }) => {
  if (href) {
    return (
      <Link prefetch passHref href={href}>
        <a {...props} />
      </Link>
    )
  }

  return <button {...props} />
}

export default ButtonWithHref
