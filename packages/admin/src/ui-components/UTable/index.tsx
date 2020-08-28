import * as React from 'react'
import { Table } from 'antd'
import { TableProps } from 'antd/lib/table'
import useOriginalColumns from './hooks/useOriginalColumns'
import { IColumn } from './types'
import useServiceDataWithRows from './hooks/useServiceDataWithRows'

export interface IUTableProps<RecordType> extends TableProps<RecordType> {
  columns: IColumn<RecordType>[]
  /** Значения параметров элемента dataSource. При совпадении любого, строка будет покрашена в серый. */
  invalidRowCondition?: Partial<RecordType>
}

function UTable<RecordType extends Record<string, any> = any>(props: IUTableProps<RecordType>): JSX.Element {
  const columns = useOriginalColumns(props.columns)
  const dataSource = useServiceDataWithRows(props.dataSource || [], props.invalidRowCondition)
  return <Table<RecordType> {...props} dataSource={dataSource} columns={columns} rowKey={props.rowKey || 'id'} />
}

export default UTable
