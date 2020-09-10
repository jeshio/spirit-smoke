import { SpaceProps, ColorProps, DisplayProps, AlignItemsProps, JustifyContentProps } from 'styled-system'
import { ThemeType } from '@/styles/theme'
import { ComponentProps } from 'react'
import { DisplayWithVisibleCheckingProps } from '@/helpers/displayWithVisibleChecking'

export interface IUBlockProps
  extends DisplayWithVisibleCheckingProps,
    SpaceProps,
    ColorProps<ThemeType>,
    DisplayProps,
    AlignItemsProps,
    JustifyContentProps {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export type TagType = 'div' | 'ul' | 'li' | 'a' | React.ComponentType

type RequiredKeys<T> = { [K in keyof T]-?: Record<any, any> extends Pick<T, K> ? never : K }[keyof T]

export type UBlockPropsType<T extends TagType> = {
  tag?: T
} & IUBlockProps &
  (T extends React.ComponentType
    ? RequiredKeys<ComponentProps<T>> extends keyof T
      ? {
          tagComponentProps?: React.ComponentProps<T>
        }
      : { tagComponentProps: React.ComponentProps<T> }
    : { tagComponentProps?: React.ComponentProps<T> })
