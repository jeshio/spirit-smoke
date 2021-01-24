export interface IUSliderProps {
  className?: string
  items?: React.ReactNode[]
  slidesToScroll?: number[]
}

export type IUSlider = React.FunctionComponent<IUSliderProps> & {
  Item: React.ComponentType
}
