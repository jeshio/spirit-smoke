import { Maybe } from '@/gql/__generated__/types'

const getProductName = (product: {
  productLine?: Maybe<{
    company?: Maybe<{
      name: string
    }>
    name: string
  }>
  name: string
}) => `${product.productLine?.company?.name || ''} ${product.productLine?.name || ''} ${product.name}`.trim()

export default getProductName
