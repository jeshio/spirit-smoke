import {
  SpaceProps,
  ColorProps,
  DisplayProps,
  AlignItemsProps,
  JustifyContentProps,
  HeightProps,
  WidthProps,
} from 'styled-system'
import { ThemeType } from '@/styles/theme'
import { DisplayWithVisibleCheckingProps } from '@/helpers/displayWithVisibleChecking'

type StyleConfigType =
  | DisplayWithVisibleCheckingProps
  | SpaceProps
  | ColorProps<ThemeType>
  | DisplayProps
  | AlignItemsProps
  | JustifyContentProps
  | HeightProps
  | WidthProps

export interface IUBlockProps {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  styleConfig?: StyleConfigType
}

export type TagType = 'div' | 'ul' | 'li' | 'a' | 'input' | 'button' | React.ComponentType

export type UBlockPropsType<T extends TagType> = {
  tag?: T
} & IUBlockProps &
  React.ComponentProps<T>
