import 'styled-components'
import { ThemeType } from '@/styles/theme'

declare module 'styled-components' {
  interface DefaultTheme extends ThemeType {}
}
