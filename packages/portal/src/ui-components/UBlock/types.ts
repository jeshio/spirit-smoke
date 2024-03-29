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
  MaxHeightProps,
  MaxWidthProps,
} from 'styled-system'
import { ThemeType } from '@/styles/theme'
import { DisplayWithVisibleCheckingProps } from '@/helpers/displayWithVisibleChecking'
import { Ref } from 'react'

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
  | MaxHeightProps
  | MaxWidthProps
  | BorderRadiusProps
  | LineHeightProps
  | FontWeightProps

export interface IUBlockProps {
  children?: React.ReactNode
  className?: string
  forwardRef?: Ref<any>
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
