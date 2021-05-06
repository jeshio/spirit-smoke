import { ProcurementCheckProductsQuery, ProcurementItemPageFragment } from '@/gql/__generated__/types'
import UButton from '@/ui-components/UButton'
import { IColumn } from '@/ui-components/UTable/types'
import { ImportOutlined } from '@ant-design/icons'
import { Badge, Input, Tooltip } from 'antd'
import React, { ChangeEventHandler } from 'react'
import { ICurrentProducts } from './types'

export const getColumns = ({
  onCountDecrement,
  onCountIncrement,
  onChangePrice,
  productsById,
  productProcurementsByProductId,
}: {
  onCountDecrement: (productId: string) => () => void
  onCountIncrement: (productId: string) => () => void
  onChangePrice: (productId: string) => ChangeEventHandler<HTMLInputElement>
  productsById: { [id: string]: ProcurementCheckProductsQuery['products'][0] }
  productProcurementsByProductId: { [id: string]: ProcurementItemPageFragment['productProcurements'][0] }
}): IColumn<[string, ICurrentProducts[0]]>[] => [
  {
    field: '0',
    key: 'productName',
    title: 'Продукт',
    render: (productId, row) => {
      const currentProduct = row?.[1]
      const { name, productLine } = productsById?.[productId] || {}
      const component = (
        <>
          <UButton href={`/products/${productId}`} type="link" icon={<ImportOutlined />} />
          {`${productLine?.company?.name || ''} ${productLine?.name || ''} ${name}`.trim()}
        </>
      )

      if (currentProduct?.isNew) {
        return (
          <Tooltip title="Этого продукта изначально не было в поставке">
            <Badge status="warning" text={component} />
          </Tooltip>
        )
      }

      if (currentProduct?.count < productProcurementsByProductId?.[productId].count) {
        return (
          <Tooltip title="Отсканировано недостаточное количество этого продукта">
            <Badge status="error" text={component} />
          </Tooltip>
        )
      }

      return (
        <Tooltip title="Этого продукта достаточно">
          <Badge status="success" text={component} />
        </Tooltip>
      )
    },
  },
  {
    field: '0',
    key: 'count',
    title: 'Ожидаемое количество',
    render: (productId) => productProcurementsByProductId?.[productId]?.count || 0,
  },
  {
    field: ['1', 'procurementPrice'],
    key: 'price',
    title: 'Стоимость единицы',
    render: (procurementPrice, row) => {
      const [productId] = Object.values(row)

      return (
        <Input
          value={procurementPrice}
          onChange={onChangePrice(productId as string)}
          style={{
            width: '100px',
          }}
          suffix="₽"
        />
      )
    },
  },
  {
    field: ['1', 'count'],
    key: 'count',
    title: 'Пришло количество',
    render: (count, row) => {
      const productId = row[0]
      const component = (
        <>
          <UButton type="link" onClick={onCountDecrement(String(productId))}>
            -
          </UButton>
          {count}
          <UButton type="link" onClick={onCountIncrement(String(productId))}>
            +
          </UButton>
        </>
      )

      if (count < 1) {
        return (
          <Tooltip title="Продукт будет удалён из поставки, т.к. его количество меньше единицы.">
            <Badge status="error" text={component} />
          </Tooltip>
        )
      }

      return component
    },
  },
]
