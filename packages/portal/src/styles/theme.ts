import { Theme } from 'styled-system'
import { createObjectWithSequence } from '@/helpers/createObjectWithSequence'
import { lighten } from 'polished'

export interface IBreakpoints {
  xs?: string
  sm?: string
  md?: string
  lg?: string
  xl?: string
  xxl?: string
}

const breakpoints: Theme['breakpoints'] = ['480px', '576px', '768px', '992px', '1200px', '1600px']

/* eslint-disable prefer-destructuring, @typescript-eslint/dot-notation */
breakpoints['xs'] = breakpoints[0]
breakpoints['sm'] = breakpoints[1]
breakpoints['md'] = breakpoints[2]
breakpoints['lg'] = breakpoints[3]
breakpoints['xl'] = breakpoints[4]
breakpoints['xxl'] = breakpoints[5]
/* eslint-enable prefer-destructuring, @typescript-eslint/dot-notation */

const theme = {
  breakpoints,
  colors: {
    primaryColor: '#2D2C2E',
    secondColor: '#FEF900',
    placeholderColor: '#9a9a9a',
    inactive: { background: '#e9e9e9', color: '#9a9a9a' },
    red: '#f66',
    black: '#2D2C2E',
    blue: '#0F5CFE',
    gray: '#e9e9e9',
    green: '#7BDE62',
    white: '#fff',
    linkColor: createObjectWithSequence(
      () => ({ base: '#77f' }),
      (prev) => ({ hover: lighten(0.1, prev.base) })
    ),
  },
  fonts: {
    primary: "'Gilroy', sans-serif",
  },
  space: [0, 5, 10, 15, 20, 25, 30, 35, 40],
  blocksSpace: [6],
  card: {
    borderRadius: ['5px'],
    boxShadow: '8px 8px 40px rgba(218, 220, 228, 0.5)',
  },
  bottomBar: {
    height: ['55px', '60px'],
    boxShadow: '0px 0px 2px rgba(154, 154, 154, 0.5)',
  },
}

export type ThemeType = typeof theme

export default theme
