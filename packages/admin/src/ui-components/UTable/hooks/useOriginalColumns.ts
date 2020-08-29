import { ColumnsType } from 'antd/lib/table'
import { useMemo } from 'react'
import { get } from 'lodash'
import { IColumn } from '../types'
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

const defaultSorter = (field: any | any[]) => (a: any, b: any) => {
  const aVal = get(a, field)
  const bVal = get(b, field)

  // если использовать Number.isNaN, то проверка происходит неверно
  /* eslint-disable-next-line no-restricted-properties */
  if (!window.isNaN(aVal) && !window.isNaN(bVal)) {
    return parseFloat(aVal) - parseFloat(bVal)
  }

  return `${aVal}`.localeCompare(bVal)
}

/**
 * Преобразует колонки к формату, необходимому для оригинальной таблицы
 * @param columns IColumn[]
 */
export default function useOriginalColumns(columns: IColumn<any>[]): ColumnsType<any> {
  const result = useMemo(() => {
    const cols = columns.map(({ title, field, key, render, responsive, disableSort, width }) => ({
      title,
      dataIndex: field,
      key: key || field,
      sorter: disableSort ? undefined : defaultSorter(field),
      render: colRender(render),
      responsive,
      width,
    })) as ColumnsType<any>

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
