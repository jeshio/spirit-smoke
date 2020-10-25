import {
  SpaceProps,
  ColorProps,
  DisplayProps,
  AlignItemsProps,
  JustifyContentProps,
  HeightProps,
  WidthProps,
  TopProps,
  BottomProps,
  LeftProps,
  RightProps,
  FontSizeProps,
  MinWidthProps,
  MinHeightProps,
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
  | TopProps
  | BottomProps
  | LeftProps
  | RightProps
  | FontSizeProps
  | MinWidthProps
  | MinHeightProps

export interface IUBlockProps {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  styleConfig?: StyleConfigType
}

export type TagType = 'div' | 'ul' | 'li' | 'a' | 'input' | 'button' | 'img' | 'h4' | React.ComponentType

export type UBlockPropsType<T extends TagType> = {
  tag?: T
} & IUBlockProps &
  React.ComponentProps<T>
