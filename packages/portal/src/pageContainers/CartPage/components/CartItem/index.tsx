import { CartProductsQuery } from '@/gql/__generated__/types'
import useProductCountChanger from '@/hooks/useProductCountChanger'
import UPrice from '@/ui-components/UPrice'
import WCartItemCounter from '@/ui-widgets/WCartItemCounter'
import { CloseIcon } from '@@icons'
import * as React from 'react'
import styled from 'styled-components'
import { ProductLineName, DeleteButton, Footer, StyledCartItem, Title } from './index.styled'

interface ICartItemProps {
  product: CartProductsQuery['productsByIds'][0]
  className?: string
}

const CartItem: React.FunctionComponent<ICartItemProps> = ({ product, className }) => {
  const [productsCount, handleProductCountChange] = useProductCountChanger(product.id)
  const deleteHandle = () => handleProductCountChange(0)

  return (
    <StyledCartItem className={className}>
      <ProductLineName>{product.productLine?.name}</ProductLineName>
      <Title>{product.name}</Title>

      <DeleteButton onClick={deleteHandle}>
        <CloseIcon />
      </DeleteButton>

      <Footer>
        <UPrice>{product.price}</UPrice>
        <WCartItemCounter productsCount={productsCount} onChange={handleProductCountChange} />
      </Footer>
    </StyledCartItem>
  )
}

export default styled(CartItem)``
