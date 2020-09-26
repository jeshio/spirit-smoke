export interface IUSliderProps {
  className?: string
  items?: React.ReactNode[]
}

export type IUSlider = React.FunctionComponent<IUSliderProps> & {
  Item: React.ComponentType
}
