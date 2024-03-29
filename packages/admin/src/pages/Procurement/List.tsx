import * as React from 'react'

import {
  useProcurementsListPageQuery,
  ProcurementStatus,
  ProcurementsListPageFragment,
} from '@/gql/__generated__/types'
import { IColumn, IColumnSorter } from '@/ui-components/UTable/types'
import { Link } from 'umi'
import { EditFilled, ImportOutlined } from '@ant-design/icons'
import ListPageBuilder, { ListColumnsType } from '@/builders/ListPage'
import { generateSorter } from '@/ui-components/UTable/hooks/useOriginalColumns'
import USpace from '@/ui-components/USpace'
import UPrice from '@/ui-components/UPrice'
import UWeight from '@/ui-components/UWeight'

/** Статусы, обозначающие, что поставка завершена */
const READY_ORDER_STATUSES = [ProcurementStatus.Canceled, ProcurementStatus.Success]

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

export const procurementsStatusSorter: IColumnSorter = (a, b, aFields, bFields) => {
  const aIndex = STATUSES_ORDER.indexOf(a)
  const bIndex = STATUSES_ORDER.indexOf(b)
  if (a === b) {
    return generateSorter(STATUS_SECOND_ORDER_COLUMN_NAME, undefined, true)(aFields, bFields)
  }

  return aIndex - bIndex
}

const columns: ListColumnsType = (): IColumn<ProcurementsListPageFragment>[] => [
  {
    title: 'ID',
    field: 'id',
    width: 50,
  },
  {
    title: 'Имя',
    field: 'name',
    render: (name, { id }) => <Link to={`/procurements/${id}`}>{name}</Link>,
  },
  {
    field: 'deliveryCost',
    title: 'Стоимость доставки',
    render: (price) => <UPrice>{price}</UPrice>,
  },
  {
    field: 'productsPrice',
    title: 'Стоимость продуктов',
    render: (price) => <UPrice>{price}</UPrice>,
  },
  {
    field: 'totalPrice',
    title: 'Итоговая стоимость',
    render: (price) => <UPrice>{price}</UPrice>,
  },
  {
    field: 'weight',
    title: 'Вес (г)',
    render: (weight) => <UWeight>{weight}</UWeight>,
  },
  {
    field: 'margin',
    title: 'Маржа',
    render: (margin) => `${margin > 0 ? '+' : ''}${margin}%`,
  },
  {
    field: 'status',
    title: 'Статус',
    defaultSortOrder: 'ascend',
    sorter: procurementsStatusSorter,
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
