import * as React from 'react'
import { IColumn } from '@/ui-components/UTable/types'
import UButton from '@/ui-components/UButton'
import { ImportOutlined } from '@ant-design/icons'
import { ProductLineItemPageFragment } from '@/gql/__generated__/types'
import UTable from '@/ui-components/UTable'

const productColumns: IColumn<ProductLineItemPageFragment['products'][0]>[] = [
  {
    field: 'id',
    title: 'ID',
    width: 50,
  },
  {
    field: 'name',
    title: 'Название',
    render: (name, { id }) => (
      <>
        <UButton href={`/products/${id}`} type="link" icon={<ImportOutlined />} />
        {name}
      </>
    ),
  },
  {
    field: 'count',
    title: 'Количество',
  },
  {
    field: 'price',
    title: 'Цена',
    render: (price) => `${price} ₽`,
  },
]

interface IProductsTableProps {
  products?: ProductLineItemPageFragment['products']
  tableProps?: Partial<React.ComponentProps<typeof UTable>>
}

const ProductsTable: React.FunctionComponent<IProductsTableProps> = ({ products = [], tableProps }) => {
  return <UTable<any> dataSource={products} columns={productColumns} {...tableProps} />
}

export default ProductsTable
