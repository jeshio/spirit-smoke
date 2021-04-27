import { ProductItemFragment } from '@/gql/__generated__/types'
import UButton from '@/ui-components/UButton'
import UDescriptions from '@/ui-components/UDescriptions'
import UFeaturesList from '@/ui-components/UFeaturesList'
import UPrice from '@/ui-components/UPrice'
import UWeight from '@/ui-components/UWeight'
import { ImportOutlined } from '@ant-design/icons'
import { Badge, Card, Divider } from 'antd'
import React, { FC } from 'react'
import productFeaturesToFlatFeature from '../../helpers/productFeaturesToFlatFeatures'

interface IProductDescriptionProps {
  product: ProductItemFragment
}

const ProductDescription: FC<IProductDescriptionProps> = ({ product }) => {
  if (!product) return null

  const productCategory = product.productCategory ? product.productCategory : product.productLine?.productCategory

  return (
    <Card
      title={`Информация о продукте ${
        product.productLine ? `${product.productLine.company?.name || ''} ${product.productLine.name} -` : ''
      } ${product.name}`}
      extra={!product.productLine || !productCategory ? <Badge status="warning" text="НЕВИДИМ для клиентов" /> : null}
    >
      <UDescriptions>
        <UDescriptions.Item label={`Категория${product.productCategory ? ' (особая)' : ''}`}>
          {productCategory && (
            <UButton href={`/product-categories/${productCategory.id}`} type="link" icon={<ImportOutlined />} />
          )}
          {productCategory ? productCategory.name : <Badge status="warning" text="БЕЗ КАТЕГОРИИ" />}
        </UDescriptions.Item>
        <UDescriptions.Item label="Компания">
          {product.productLine?.company && (
            <UButton href={`/product-lines/${product.productLine?.company.id}`} type="link" icon={<ImportOutlined />} />
          )}
          {product.productLine?.company ? (
            product.productLine?.company.name
          ) : (
            <Badge status="warning" text="БЕЗ КОМПАНИИ" />
          )}
        </UDescriptions.Item>
        <UDescriptions.Item label="Линейка продуктов">
          {product.productLine && (
            <UButton href={`/product-lines/${product.productLine.id}`} type="link" icon={<ImportOutlined />} />
          )}
          {product.productLine ? product.productLine.name : <Badge status="warning" text="БЕЗ ЛИНЕЙКИ" />}
        </UDescriptions.Item>
        <UDescriptions.Item label="Название">{product.name}</UDescriptions.Item>
        <UDescriptions.Item label="Осталось штук">{product.count}</UDescriptions.Item>
        <UDescriptions.Item label={`Текущая цена${product.priceIsSpecial ? ' (особая)' : ''}`}>
          <UPrice>{product.price}</UPrice>
        </UDescriptions.Item>
        <UDescriptions.Item label={`Вес${product.weightIsSpecial ? ' (особый)' : ''}`}>
          <UWeight>{product.weight}</UWeight>
        </UDescriptions.Item>
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
