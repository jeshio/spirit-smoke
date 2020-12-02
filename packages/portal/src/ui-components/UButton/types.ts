export interface IUButtonProps {
  icon?: React.ReactNode
  type?: 'primary' | 'ghost' | 'green'
  fill?: boolean
  noPaddings?: boolean
  onClick?: () => void
  onBlur?: () => void
}
