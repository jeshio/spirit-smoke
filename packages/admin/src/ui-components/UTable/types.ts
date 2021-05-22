import { PossiblePaths } from '@@types/utils/PossiblePaths'
import { ColumnProps } from 'antd/lib/table'

export interface IColumnSorter {
  (a: any, b: any, aFields?: any, bFields?: any): number
}

export interface IColumn<RecordType> {
  /** Заголовок колонки */
  title: string
  /** Путь по объекту данных для отображения значения */
  field: keyof RecordType | PossiblePaths<RecordType>
  /** Уникальное название колонки (по-умолчанию берётся из field) */
  key?: string
  /** Обработчик вывода */
  render?: ColumnProps<RecordType>['render']
  /** Минимальный размер экрана для отображения */
  responsive?: ColumnProps<RecordType>['responsive']
  /** Отключить сортировку для колонки */
  disableSort?: boolean
  /** Сортировать это поле автоматически при загрузке страницы */
  defaultSortOrder?: ColumnProps<RecordType>['defaultSortOrder']
  /** Функция сортировки */
  sorter?: IColumnSorter
  /** Привязать колонку со стороны */
  fixed?: 'right' | 'left'
  /** Ширина колонки */
  width?: number
}
