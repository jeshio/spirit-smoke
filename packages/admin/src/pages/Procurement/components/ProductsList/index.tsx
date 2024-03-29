import { ProcurementItemPageFragment } from '@/gql/__generated__/types'
import UButton from '@/ui-components/UButton'
import UPrice from '@/ui-components/UPrice'
import UTable from '@/ui-components/UTable'
import { IColumn } from '@/ui-components/UTable/types'
import { ImportOutlined } from '@ant-design/icons'
import * as React from 'react'

interface IProductsListProps {
  procurement: ProcurementItemPageFragment
}

const columns: IColumn<ProcurementItemPageFragment['productProcurements'][0]>[] = [
  {
    field: ['product', 'productLine', 'company'],
    title: 'Компания',
    render: (company) =>
      company && (
        <>
          <UButton href={`/companies/${company?.id}`} type="link" icon={<ImportOutlined />} />
          {company?.name}
        </>
      ),
  },
  {
    field: ['product', 'productLine'],
    title: 'Линейка продуктов',
    render: (productLine) => (
      <>
        <UButton href={`/product-lines/${productLine?.id}`} type="link" icon={<ImportOutlined />} />
        {productLine?.name}
      </>
    ),
  },
  {
    field: ['product', 'name'],
    title: 'Продукт',
    render: (name, { product: { id } }) => (
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
    field: 'costs',
    title: 'Цена за шт.',
    render: (price) => <UPrice>{price}</UPrice>,
  },
  {
    title: 'Цена продажи',
    field: ['product', 'price'],
    render: (price) => <UPrice>{price}</UPrice>,
  },
  {
    field: ['product', 'price'],
    title: 'Маржа',
    render: (price, { costs }) => <>{Number((price / costs) * 100 - 100).toFixed(2)}%</>,
  },
]

const ProductsList: React.FunctionComponent<IProductsListProps> = ({ procurement }) => {
  return <UTable dataSource={procurement?.productProcurements} columns={columns} rowKey={(row) => row.product.id} />
}

export default ProductsList
