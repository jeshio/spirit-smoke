import { Theme } from 'styled-system'

export interface IBreakpoints {
  xs?: string
  sm?: string
  md?: string
  lg?: string
  xl?: string
  xxl?: string
  xxxl?: string
}

const breakpoints: Theme['breakpoints'] = ['480px', '576px', '768px', '992px', '1200px', '1600px', '2100px']

/* eslint-disable prefer-destructuring, @typescript-eslint/dot-notation */
breakpoints['xs'] = breakpoints[0]
breakpoints['sm'] = breakpoints[1]
breakpoints['md'] = breakpoints[2]
breakpoints['lg'] = breakpoints[3]
breakpoints['xl'] = breakpoints[4]
breakpoints['xxl'] = breakpoints[5]
breakpoints['xxxl'] = breakpoints[6]
/* eslint-enable prefer-destructuring, @typescript-eslint/dot-notation */

const theme = {
  breakpoints,
  colors: {
    primaryColor: '#1890ff',
    infoColor: '#1890ff',
    successColor: '#52c41a',
    processingColor: '#1890ff',
    errorColor: '#f5222d',
    border: '#f0f0f0',
    highlightColor: '#f5222d',
    warningColor: '#faad14',
    extraInfoColor: '#999',
    normalColor: '#d9d9d9',
    placeholder: '#a9a9a9',
    disableBackground: '#eee',
    disableColor: '#999',
    white: '#fff',
    black: '#000',
  },
  space: [0, 4, 8, 12, 16, 24, 32, 42, 54],
}

export type ThemeType = typeof theme

export default theme
