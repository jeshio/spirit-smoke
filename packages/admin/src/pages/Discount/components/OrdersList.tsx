import { DiscountItemPageFragment } from '@/gql/__generated__/types'
import UButton from '@/ui-components/UButton'
import UPrice from '@/ui-components/UPrice'
import UTable from '@/ui-components/UTable'
import { IColumn } from '@/ui-components/UTable/types'
import { ImportOutlined } from '@ant-design/icons'
import * as React from 'react'

interface IOrdersListProps {
  discount: DiscountItemPageFragment
}

const columns: IColumn<DiscountItemPageFragment['orders'][0]>[] = [
  {
    field: 'id',
    title: 'ID',
    render: (id: any) => (
      <>
        <UButton href={`/orders/${id}`} type="link" icon={<ImportOutlined />} />
        {id}
      </>
    ),
  },
  {
    field: 'status',
    title: 'Статус',
  },
  {
    field: 'updatedAt',
    title: 'Обновлён',
  },
  {
    field: ['orderTotal', 'totalPrice'],
    title: 'Цена без скидки',
    render: (price) => <UPrice>{price}</UPrice>,
  },
  {
    field: ['orderTotal', 'totalPriceWithDiscount'],
    title: 'Итоговая цена',
    render: (price) => <UPrice>{price}</UPrice>,
  },
]

const OrdersList: React.FunctionComponent<IOrdersListProps> = ({ discount }) => {
  return <UTable dataSource={discount.orders} columns={columns} />
}

export default OrdersList
