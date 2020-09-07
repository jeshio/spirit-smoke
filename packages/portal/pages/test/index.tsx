import * as React from 'react'
import { useProductSimpleListQuery } from '@/gql/__generated__/types'

interface ITestProps {}

const Test: React.FunctionComponent<ITestProps> = () => {
  const productsRequest = useProductSimpleListQuery()
  if (productsRequest.loading || !productsRequest.data) return <div>Загрузка</div>

  return (
    <div>
      {productsRequest.data.products.map((product) => (
        <span key={product.id}>{product.name}&nbsp;</span>
      ))}
    </div>
  )
}

export default Test
