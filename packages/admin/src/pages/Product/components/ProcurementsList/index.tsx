import { ProductItemFragment } from '@/gql/__generated__/types'
import { PROCUREMENT_STATUSES } from '@/pages/Procurement/constants'
import { procurementsStatusSorter } from '@/pages/Procurement/List'
import UButton from '@/ui-components/UButton'
import UPrice from '@/ui-components/UPrice'
import UTable from '@/ui-components/UTable'
import { IColumn } from '@/ui-components/UTable/types'
import { ImportOutlined } from '@ant-design/icons'
import * as React from 'react'

interface IProcurementsListProps {
  product: ProductItemFragment
}

const columns: IColumn<ProductItemFragment['productProcurements'][0]>[] = [
  {
    field: ['procurement', 'name'],
    title: 'Поставка',
    render: (name, { procurement: { id } }) => (
      <>
        <UButton href={`/procurements/${id}`} type="link" icon={<ImportOutlined />} />
        {name}
      </>
    ),
  },
  {
    field: 'count',
    title: 'Количество',
  },
  {
    field: 'costs',
    title: 'Цена за шт.',
    render: (price) => <UPrice>{price}</UPrice>,
  },
  {
    field: ['procurement', 'status'],
    title: 'Статус',
    sorter: procurementsStatusSorter,
    render: (status) => PROCUREMENT_STATUSES[status],
  },
  {
    field: ['procurement', 'nextStatusDate'],
    title: 'Дата следующего статуса',
  },
]

const ProcurementsList: React.FunctionComponent<IProcurementsListProps> = ({ product }) => {
  return (
    <UTable dataSource={product.productProcurements} columns={columns} rowKey={({ procurement }) => procurement.id} />
  )
}

export default ProcurementsList
