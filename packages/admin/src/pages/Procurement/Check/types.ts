import { RouteComponentProps } from 'react-router-dom'

export interface ICurrentProducts {
  [x: string]: {
    /** Текущее количество отсканено */
    count: number
    /** Цена оптовой покупки за штуку */
    procurementPrice: number
    /** Изначально в поставке не было этого продукта */
    isNew?: boolean
  }
}

export interface ICheckPageProps
  extends RouteComponentProps<{
    id: string
  }> {}
