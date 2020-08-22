import { ColumnsType } from 'antd/lib/table';
import { useMemo } from 'react';
import { get } from 'lodash';
import { IColumn } from '../types';

/**
 * Преобразует колонки к формату, необходимому для оригинальной таблицы
 * @param columns IColumn[]
 */
export default function useOriginalColumns(columns: IColumn<any>[]): ColumnsType<any> {
  const result = useMemo(() => {
    const cols = columns.map(({ title, field, key, render, responsive }) => ({
      title,
      dataIndex: field,
      key: key || field,
      sorter: (a, b) => `${get(a, field)}`.localeCompare(get(b, field)),
      render,
      responsive,
    })) as ColumnsType<any>;

    cols.unshift({
      title: '№',
      key: 'index',
      render: (text, record, index) => index + 1,
      width: 50,
    });

    return cols;
  }, [columns]);

  return result;
}
