import { ColumnsType } from 'antd/lib/table'
import { useMemo } from 'react'
import { get } from 'lodash'
import { IColumn, IColumnSorter } from '../types'
import { IS_INVALID_ROW_COLUMN } from './useServiceDataWithRows'

const GRAY_COLOR = '#f5f5f5'

const colRender = (render: IColumn<any>['render']) => (...args: Parameters<Required<IColumn<any>>['render']>) => {
  const { [IS_INVALID_ROW_COLUMN]: isGrayRow = false } = args[1]
  return {
    props: {
      style: {
        backgroundColor: isGrayRow ? GRAY_COLOR : 'auto',
      },
    },
    children: render ? render(...args) : args[0],
  }
}

export const defaultSorter = (a: any, b: any) => {
  // если использовать Number.isNaN, то проверка происходит неверно
  /* eslint-disable-next-line no-restricted-properties */
  if (!window.isNaN(a) && !window.isNaN(b)) {
    return parseFloat(a) - parseFloat(b)
  }

  return `${a}`.localeCompare(b)
}

/**
 * Генерирует сортировщика для его дальнейшего использования
 * @param field Поле для сортировки
 * @param sorter Кастомный сортировщик
 * @param invert Обратная сортировка
 */
export const generateSorter = (field: any | any[], sorter?: IColumnSorter, invert?: boolean) => (a: any, b: any) => {
  const aVal = get(invert ? b : a, field)
  const bVal = get(invert ? a : b, field)

  if (sorter) return sorter(aVal, bVal, a, b)

  return defaultSorter(aVal, bVal)
}

/**
 * Преобразует колонки к формату, необходимому для оригинальной таблицы
 * @param columns IColumn[]
 */
export default function useOriginalColumns(columns: IColumn<any>[]): ColumnsType<any> {
  const result = useMemo(() => {
    const cols = columns.map(
      ({ title, field, key, render, responsive, disableSort, width, sorter, defaultSortOrder }) => ({
        title,
        dataIndex: field,
        key: key || field,
        sorter: disableSort ? undefined : generateSorter(field, sorter),
        defaultSortOrder,
        render: colRender(render),
        responsive,
        width,
      })
    ) as ColumnsType<any>

    cols.unshift({
      title: '№',
      key: 'index',
      render: colRender((text, record, index) => index + 1),
      width: 50,
    })

    return cols
  }, [columns])

  return result
}
