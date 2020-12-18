import { ProductItemPageFragment } from '@/gql/__generated__/types'
import { procurementsStatusSorter } from '@/pages/Procurement/List'
import UButton from '@/ui-components/UButton'
import UTable from '@/ui-components/UTable'
import { IColumn } from '@/ui-components/UTable/types'
import { ImportOutlined } from '@ant-design/icons'
import * as React from 'react'

interface IProcurementsListProps {
  product: ProductItemPageFragment
}

const columns: IColumn<ProductItemPageFragment['productProcurements'][0]>[] = [
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
  },
  {
    field: ['procurement', 'status'],
    title: 'Статус',
    sorter: procurementsStatusSorter,
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
