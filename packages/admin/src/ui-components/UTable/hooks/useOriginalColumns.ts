import { ColumnsType } from 'antd/lib/table';
import { useMemo } from 'react';

/**
 * Преобразует колонки к формату, необходимому для оригинальной таблицы
 * @param columns UTableTypes.IColumn[]
 */
export default function useOriginalColumns(columns: UTableTypes.IColumn<any>[]): ColumnsType<any> {
  const result = useMemo(
    () =>
      columns.map(({ title, field, key }) => ({
        title,
        dataIndex: field,
        key: key || field,
      })) as ColumnsType<any>,
    [columns],
  );

  return result;
}
