import * as React from 'react'
import { IColumn } from '@/ui-components/UTable/types'
import UButton from '@/ui-components/UButton'
import { ImportOutlined } from '@ant-design/icons'
import { CompanyItemPageFragment } from '@/gql/__generated__/types'
import UTable from '@/ui-components/UTable'

const productLineColumns: IColumn<CompanyItemPageFragment['productLines'][0]>[] = [
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
        <UButton href={`/product-lines/${id}`} type="link" icon={<ImportOutlined />} />
        {name}
      </>
    ),
  },
]

interface IProductLinesTableProps {
  productLines?: CompanyItemPageFragment['productLines']
  tableProps?: Partial<React.ComponentProps<typeof UTable>>
}

const ProductLinesTable: React.FunctionComponent<IProductLinesTableProps> = ({ productLines = [], tableProps }) => {
  return <UTable<any> dataSource={productLines} columns={productLineColumns} {...tableProps} />
}

export default ProductLinesTable
