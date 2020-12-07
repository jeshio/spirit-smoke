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
  BorderRadiusProps,
  LineHeightProps,
  FontWeightProps,
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
  | BorderRadiusProps
  | LineHeightProps
  | FontWeightProps

export interface IUBlockProps {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  styleConfig?: StyleConfigType
  /** Для случаев, когда tag === UBlock */
  forwardStyleConfig?: StyleConfigType
}

export type TagType = 'div' | 'ul' | 'li' | 'a' | 'input' | 'button' | 'img' | 'h4' | 'p' | React.ComponentType

export type UBlockPropsType<T extends TagType> = {
  tag?: T
} & IUBlockProps &
  React.ComponentProps<T>
