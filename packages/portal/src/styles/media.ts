import theme, { IBreakpoints } from './theme'

/* eslint-disable @typescript-eslint/restrict-template-expressions */
const media: {
  [K in keyof IBreakpoints]: (style: TemplateStringsArray | string) => string
} = {}

Object.keys(theme.breakpoints || {}).forEach((key) => {
  if (typeof key === 'string') {
    media[key] = (style: TemplateStringsArray | string) =>
      `@media (min-width: ${theme.breakpoints?.[key] || ''}) { ${style} }`
  }
})

export default media as Required<typeof media>
