import * as React from 'react'

import { OrdersListPageFragment, useOrdersListPageQuery, OrderStatus } from '@/gql/__generated__/types'
import { IColumn } from '@/ui-components/UTable/types'
import { Link } from 'umi'
import { EditFilled, ImportOutlined } from '@ant-design/icons'
import ListPageBuilder, { ListColumnsType } from '@/builders/ListPage'
import { generateSorter } from '@/ui-components/UTable/hooks/useOriginalColumns'
import USpace from '@/ui-components/USpace'
import UPrice from '@/ui-components/UPrice'

/** Статусы, обозначающие, что заказ завершён */
const READY_ORDER_STATUSES = [OrderStatus.Canceled, OrderStatus.Failure, OrderStatus.Success]

/** При совпадении статусов (готов/не готов) вторая колонка для сортировки */
const STATUS_SECOND_ORDER_COLUMN_NAME = 'deliveryTime'

const columns: ListColumnsType = (): IColumn<OrdersListPageFragment>[] => [
  {
    title: 'ID',
    field: 'id',
    width: 50,
  },
  {
    field: 'updatedAt',
    title: 'Последнее обновление',
    width: 200,
  },
  {
    field: 'status',
    title: 'Статус',
    defaultSortOrder: 'ascend',
    sorter: (a, b, aFields, bFields) => {
      if (READY_ORDER_STATUSES.includes(a)) {
        if (READY_ORDER_STATUSES.includes(b)) {
          return generateSorter(STATUS_SECOND_ORDER_COLUMN_NAME, undefined, true)(aFields, bFields)
        }

        return 1
      }
      if (!READY_ORDER_STATUSES.includes(b)) {
        return generateSorter(STATUS_SECOND_ORDER_COLUMN_NAME)(aFields, bFields)
      }

      return -1
    },
  },
  // {
  //   field: 'address',
  //   title: 'Адрес',
  // },
  // {
  //   field: 'phoneNumber',
  //   title: 'Телефон',
  // },
  {
    field: ['orderTotal', 'totalDiscount'],
    title: 'Скидка',
    render: (totalDiscount) => <UPrice>{totalDiscount}</UPrice>,
  },
  {
    field: ['orderTotal', 'totalPriceWithDiscount'],
    title: 'Сумма',
    render: (totalPriceWithDiscount) => <UPrice>{totalPriceWithDiscount}</UPrice>,
  },
  {
    field: 'profit',
    title: 'Прибыль',
    render: (profit) => <UPrice>{profit}</UPrice>,
  },
  {
    field: 'margin',
    title: 'Наценка',
    render: (margin) => `${margin}%`,
  },
  {
    title: '',
    field: 'id',
    key: 'controls',
    width: 100,
    disableSort: true,
    render: (id) => (
      <USpace>
        <Link to={`/orders/${id}`}>
          <ImportOutlined />
        </Link>
        <Link to={`/orders/${id}/edit`}>
          <EditFilled />
        </Link>
      </USpace>
    ),
  },
]

interface IOrderListPageProps {}

const OrderListPage: React.FunctionComponent<IOrderListPageProps> = () => {
  return (
    <ListPageBuilder<OrdersListPageFragment>
      addItemButton={{
        link: '/orders/add',
        name: 'Создать заказ',
      }}
      columns={columns}
      listQuery={{
        hook: useOrdersListPageQuery,
        queryName: 'orders',
      }}
      loadingTip="Загрузка заказов"
      title="Список заказов"
      tableProps={{
        invalidRowCondition: {
          status: (READY_ORDER_STATUSES as unknown) as OrderStatus,
        },
      }}
    />
  )
}

export default OrderListPage
