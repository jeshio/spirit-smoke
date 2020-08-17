import * as React from 'react';
import { Table } from 'antd';
import { TableProps } from 'antd/lib/table';
import useOriginalColumns from './hooks/useOriginalColumns';

interface IUTableProps<RecordType> extends TableProps<RecordType> {
  columns: UTableTypes.IColumn[];
}

function UTable<RecordType extends Record<string, any> = any>(props: IUTableProps<RecordType>): JSX.Element {
  const columns = useOriginalColumns(props.columns);
  return <Table<RecordType> {...props} columns={columns} />;
}

export default UTable;
