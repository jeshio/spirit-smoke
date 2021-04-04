export type OptionType = {
  title: string
  value: string
  iconUrl?: string
  extra?: string
  link?: string
  isDisabled?: boolean
  count?: number
}

export type UItemsSelectorValueObjectType = {
  id: string
  count: number
  price: number
}

export type ValueType = string | UItemsSelectorValueObjectType

export interface IUItemsSelectorProps {
  placeholder?: string
  optionsToAdd: Array<OptionType>
  value?: ValueType[]
  loading?: boolean
  onChange?: (value: ValueType[]) => void
  /* Передатчик внутренний функции для добавления item в список */
  setAddValueFn?: (cb: (value: ValueType) => void) => void
  enableToSelectDisabledItems?: boolean
  disabled?: boolean
  withCount?: boolean
  withPriceSetter?: boolean
}
