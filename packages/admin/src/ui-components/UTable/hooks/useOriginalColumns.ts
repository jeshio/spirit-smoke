import { ColumnsType } from 'antd/lib/table';

/**
 * Преобразует колонки к формату, необходимому для оригинальной таблицы
 * @param columns UTableTypes.IColumn[]
 */
export default function useOriginalColumns(columns: UTableTypes.IColumn[]): ColumnsType<any> {
  const result: ColumnsType = columns.map(({ title, field, key }) => ({
    title,
    dataIndex: field,
    key: key || field,
  }));

  return result;
}
