import * as React from 'react'

import {
  useProcurementsListPageQuery,
  ProcurementStatus,
  ProcurementsListPageFragment,
} from '@/gql/__generated__/types'
import { IColumn } from '@/ui-components/UTable/types'
import { Link } from 'umi'
import { EditFilled, ImportOutlined } from '@ant-design/icons'
import ListPageBuilder, { ListColumnsType } from '@/builders/ListPage'
import { generateSorter } from '@/ui-components/UTable/hooks/useOriginalColumns'
import USpace from '@/ui-components/USpace'

/** Статусы, обозначающие, что поставка завершена */
const READY_ORDER_STATUSES = [ProcurementStatus.Canceled, ProcurementStatus.Success, ProcurementStatus.Failure]

const STATUSES_ORDER = [
  ProcurementStatus.Building,
  ProcurementStatus.NotConfirmed,
  ProcurementStatus.Confirmed,
  ProcurementStatus.Sent,
  ProcurementStatus.Failure,
  ProcurementStatus.Canceled,
  ProcurementStatus.Success,
]

/** При совпадении статусов (готов/не готов) вторая колонка для сортировки */
const STATUS_SECOND_ORDER_COLUMN_NAME = 'nextStatusDate'

const columns: ListColumnsType = (): IColumn<ProcurementsListPageFragment>[] => [
  {
    title: 'ID',
    field: 'id',
    width: 50,
  },
  {
    field: 'status',
    title: 'Статус',
    defaultSortOrder: 'ascend',
    sorter: (a, b, aFields, bFields) => {
      const aIndex = STATUSES_ORDER.indexOf(a)
      const bIndex = STATUSES_ORDER.indexOf(b)
      if (a === b) {
        return generateSorter(STATUS_SECOND_ORDER_COLUMN_NAME, undefined, true)(aFields, bFields)
      }

      return aIndex - bIndex
    },
  },
  {
    field: 'deliveryCost',
    title: 'Стоимость',
  },
  {
    field: 'nextStatusDate',
    title: 'Дата следующего статуса',
  },
  {
    title: '',
    field: 'id',
    key: 'controls',
    width: 100,
    disableSort: true,
    render: (id) => (
      <USpace>
        <Link to={`/procurements/${id}`}>
          <ImportOutlined />
        </Link>
        <Link to={`/procurements/${id}/edit`}>
          <EditFilled />
        </Link>
      </USpace>
    ),
  },
]

interface IProcurementListPageProps {}

const ProcurementListPage: React.FunctionComponent<IProcurementListPageProps> = () => {
  return (
    <ListPageBuilder<ProcurementsListPageFragment>
      addItemButton={{
        link: '/procurements/add',
        name: 'Добавить поставку',
      }}
      columns={columns}
      listQuery={{
        hook: useProcurementsListPageQuery,
        queryName: 'procurements',
      }}
      loadingTip="Загрузка поставок"
      title="Список поставок"
      tableProps={{
        invalidRowCondition: {
          status: (READY_ORDER_STATUSES as unknown) as ProcurementStatus,
        },
      }}
    />
  )
}

export default ProcurementListPage
