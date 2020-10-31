export interface IUButtonProps {
  icon?: React.ReactNode
  type?: 'primary' | 'ghost'
  noPaddings?: boolean
  onClick?: () => void
  onBlur?: () => void
}
