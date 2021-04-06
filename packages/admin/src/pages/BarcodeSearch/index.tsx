import { useSearchByBarcodeLazyQuery } from '@/gql/__generated__/types'
import useBarcodeScanner from '@/hooks/useBarcodeScanner'
import { Card, Empty } from 'antd'
import Title from 'antd/lib/typography/Title'
import React, { useState } from 'react'
import ProductDescription from '../Product/components/ProductDescription'

interface IBarcodeSearchPageProps {}

const BarcodeSearchPage: React.FunctionComponent<IBarcodeSearchPageProps> = () => {
  const [currentBarcode, setCurrentBarcode] = useState('')
  const [searchByBarcode, searchRequest] = useSearchByBarcodeLazyQuery()

  const handleSearch = (value: string) => {
    setCurrentBarcode(value)
    searchByBarcode({
      variables: {
        barcode: value,
      },
    })
  }

  useBarcodeScanner({
    isActive: true,
    onEnter: handleSearch,
  })

  if (!currentBarcode) {
    return (
      <Card>
        <Title>Отсканируйте товар, чтобы увидеть результат</Title>
      </Card>
    )
  }

  return (
    <Card loading={searchRequest.loading} title={`Штрихкод ${currentBarcode}`}>
      <p>Вы можете отсканировать другой другой товар, чтобы получить информацию о нём.</p>

      {searchRequest.data?.searchByBarcode?.__typename === 'NotFound' && (
        <Empty description={searchRequest.data.searchByBarcode.message} />
      )}

      {searchRequest.data?.searchByBarcode?.__typename === 'Product' && (
        <ProductDescription product={searchRequest.data.searchByBarcode} />
      )}
    </Card>
  )
}

export default BarcodeSearchPage
