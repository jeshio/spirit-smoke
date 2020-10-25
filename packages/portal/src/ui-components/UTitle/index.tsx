import React, { useMemo } from 'react'
import { getUBlockWithProps } from '../UBlock'

interface IUTitleProps {
  level: 1 | 2 | 3 | 4
}

const UTitle: React.FunctionComponent<IUTitleProps> = ({ level, children }) => {
  const Tag = `h${level}`
  let styleConfig: Parameters<typeof getUBlockWithProps>[0]['styleConfig'] = {}
  switch (level) {
    case 1:
      styleConfig = {}
      break
    case 2:
      styleConfig = {}
      break
  }

  const Component = useMemo(
    () =>
      getUBlockWithProps({
        tag: Tag as any,
        styleConfig,
      }),
    [level]
  )

  return <Component>{children}</Component>
}

export default UTitle
