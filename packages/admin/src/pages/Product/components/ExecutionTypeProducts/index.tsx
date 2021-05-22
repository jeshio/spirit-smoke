import { ProductItemFragment } from '@/gql/__generated__/types'
import UButton from '@/ui-components/UButton'
import UTable from '@/ui-components/UTable'
import { IColumn } from '@/ui-components/UTable/types'
import { ImportOutlined } from '@ant-design/icons'
import React, { FC } from 'react'

interface IExecutionTypeProductsProps {
  product: ProductItemFragment
}

const columns: IColumn<ProductItemFragment['executionTypeProducts'][0]>[] = [
  {
    field: ['name'],
    title: 'Название',
    render: (name, { id }) => (
      <>
        <UButton href={`/products/${id}`} type="link" icon={<ImportOutlined />} />
        {name}
      </>
    ),
  },
]

const ExecutionTypeProducts: FC<IExecutionTypeProductsProps> = ({ product }) => (
  <UTable dataSource={product.executionTypeProducts} columns={columns} />
)

export default ExecutionTypeProducts
