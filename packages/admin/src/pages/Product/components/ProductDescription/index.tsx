import { ProductItemFragment } from '@/gql/__generated__/types'
import UButton from '@/ui-components/UButton'
import UDescriptions from '@/ui-components/UDescriptions'
import UFeaturesList from '@/ui-components/UFeaturesList'
import { ImportOutlined } from '@ant-design/icons'
import { Badge, Card, Divider } from 'antd'
import React, { FC } from 'react'
import productFeaturesToFlatFeature from '../../helpers/productFeaturesToFlatFeatures'

interface IProductDescriptionProps {
  product: ProductItemFragment
}

const ProductDescription: FC<IProductDescriptionProps> = ({ product }) => {
  if (!product) return null

  return (
    <Card
      title={`Информация о продукте ${product.company ? `${product.company.name} -` : ''} ${product.name}`}
      extra={
        !product.company || !product.productCategory ? <Badge status="warning" text="НЕВИДИМ для клиентов" /> : null
      }
    >
      <UDescriptions>
        <UDescriptions.Item label="Категория">
          {product.productCategory && (
            <UButton href={`/product-categories/${product.productCategory.id}`} type="link" icon={<ImportOutlined />} />
          )}
          {product.productCategory ? product.productCategory.name : <Badge status="warning" text="БЕЗ КАТЕГОРИИ" />}
        </UDescriptions.Item>
        <UDescriptions.Item label="Производитель">
          {product.company && (
            <UButton href={`/companies/${product.company.id}`} type="link" icon={<ImportOutlined />} />
          )}
          {product.company ? product.company.name : <Badge status="warning" text="БЕЗ ПРОИЗВОДИТЕЛЯ" />}
        </UDescriptions.Item>
        <UDescriptions.Item label="Название">{product.name}</UDescriptions.Item>
        <UDescriptions.Item label="Осталось штук">{product.count}</UDescriptions.Item>
        <UDescriptions.Item label="Текущая цена">{product.price} ₽</UDescriptions.Item>
        <UDescriptions.Item label="Вес (г)">{product.weight}</UDescriptions.Item>
        <UDescriptions.Item label="Slug">{product.slug}</UDescriptions.Item>
        <UDescriptions.Item label="Штрихкод">{product.barcode}</UDescriptions.Item>
        <UDescriptions.Item label="Добавлен">{product.createdAt}</UDescriptions.Item>
        <UDescriptions.Item label="Обновлён">{product.updatedAt}</UDescriptions.Item>
        <UDescriptions.Item label="Особенности">
          <UFeaturesList features={productFeaturesToFlatFeature(product.productFeatures)} />
        </UDescriptions.Item>
      </UDescriptions>
      <Divider />
      <p>{product.description}</p>
    </Card>
  )
}

export default ProductDescription
