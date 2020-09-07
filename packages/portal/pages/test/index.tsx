import * as React from 'react'
import { useProductSimpleListQuery } from '@/gql/__generated__/types'
import UBlock from '@/ui-components/UBlock'

interface ITestProps {}

const Test: React.FunctionComponent<ITestProps> = () => {
  const productsRequest = useProductSimpleListQuery()
  if (productsRequest.loading || !productsRequest.data) return <div>Загрузка</div>

  return (
    <UBlock my={[1, 1, 3, 3, 5, 5]}>
      {productsRequest.data.products.map((product) => (
        <span key={product.id}>{product.name}&nbsp;</span>
      ))}
    </UBlock>
  )
}

export default Test
