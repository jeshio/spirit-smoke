import theme from '@/styles/theme'
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
      styleConfig = {
        fontSize: [28, 32],
      }
      break
    case 2:
      styleConfig = {
        fontSize: [21, 25],
      }
      break
    case 3:
      styleConfig = {
        fontSize: [21, 25],
        fontWeight: [500],
      }
      break
  }

  const Component = useMemo(
    () =>
      getUBlockWithProps({
        tag: Tag as any,
        styleConfig: {
          my: [0],
          mb: theme.blocksSpace.map((n) => n - 3),
          ...styleConfig,
        },
      }),
    [level]
  )

  return <Component>{children}</Component>
}

export default UTitle
