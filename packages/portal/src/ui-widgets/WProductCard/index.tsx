import React, { useCallback, useEffect, useState } from 'react'
import { addCartItem, cartItemsVar, changeCartItemCount } from '@/gql/cache/vars/Cart'
import { ProductsCatalogQuery } from '@/gql/__generated__/types'
import { CartIcon } from '@@icons'
import { useReactiveVar } from '@apollo/client'
import { debounce } from 'lodash'
import FeatureItem from './components/FeatureItem'
import {
  ButtonsBlock,
  BuyButton,
  CartItemCountValue,
  CartItemCount,
  CompanyName,
  DecrementButton,
  Description,
  FeatureList,
  Footer,
  Header,
  Image,
  ImageWrapper,
  IncrementButton,
  InfoButton,
  Price,
  ProductCard,
  TagsRow,
  Title,
  CartItemCountWrapper,
} from './index.styled'

interface IWProductCardProps {
  product: Partial<ProductsCatalogQuery['productsByCategory'][0]>
}

const debouncedChangeCartItemCount = debounce(changeCartItemCount, 500)

const WProductCard: React.FunctionComponent<IWProductCardProps> = ({ product }) => {
  const [countChangedAnimationIsActive, setCountChangedAnimationIsActive] = useState(false)
  const [currentCartItemCount, setCurrentCartItemCount] = useState(product.cartItem?.count)
  const featureListItems = product.features?.map((feature) => <FeatureItem feature={feature} key={feature.id} />)
  const [descIsVisible, setDescIsVisible] = useState(false)
  const switchDescVisible = useCallback(() => setDescIsVisible(!descIsVisible), [descIsVisible])
  const infoButtonFocusoutHandler = useCallback(() => setDescIsVisible(false), [])
  const cartItems = useReactiveVar(cartItemsVar)
  const handleBuyClick = useCallback(() => {
    setCurrentCartItemCount(1)
    addCartItem({
      id: product.id,
      count: 1,
    })
  }, [product, cartItems])
  const makeHandleCartItemCountChange = useCallback(
    (newCount: number) => () => {
      setCountChangedAnimationIsActive(newCount !== 0)
      setCurrentCartItemCount(newCount)
      debouncedChangeCartItemCount(product.id, newCount)
    },
    [product, cartItems, currentCartItemCount]
  )
  let countChangeTimer

  useEffect(() => {
    if (!countChangedAnimationIsActive) return
    clearTimeout(countChangeTimer)

    countChangeTimer = setTimeout(() => {
      setCountChangedAnimationIsActive(false)
    }, 70)
    return () => clearTimeout(countChangeTimer)
  }, [countChangedAnimationIsActive])

  return (
    <ProductCard>
      <Header>
        <ImageWrapper>
          <Image src={product.imageUrl} alt={`Купить ${product.company.name}, ${product.name}`} />
        </ImageWrapper>
        <div>
          <TagsRow />
          {product.description && (
            <InfoButton onClick={switchDescVisible} onBlur={infoButtonFocusoutHandler}>
              i
            </InfoButton>
          )}
          <Description isVisible={descIsVisible}>{product.description}</Description>
          <CompanyName title={product.company.name} color={product.company.color}>
            {product.company.name}
          </CompanyName>
          <Title>{product.name}</Title>
        </div>
        <div>
          <FeatureList items={featureListItems} isHorizontal />
        </div>
      </Header>
      <Footer>
        <Price>{product.price} ₽</Price>
        <ButtonsBlock>
          <CartItemCountWrapper isVisible={currentCartItemCount > 0}>
            <CartItemCount>
              <CartItemCountValue isChanged={countChangedAnimationIsActive}>
                {currentCartItemCount || 1}
              </CartItemCountValue>
              <DecrementButton onClick={makeHandleCartItemCountChange(currentCartItemCount - 1)}>—</DecrementButton>
              <IncrementButton onClick={makeHandleCartItemCountChange(currentCartItemCount + 1)}>+</IncrementButton>
            </CartItemCount>
          </CartItemCountWrapper>
          <BuyButton
            icon={<CartIcon />}
            type="primary"
            onClick={handleBuyClick}
            isVisible={(currentCartItemCount || 0) < 1}
          />
        </ButtonsBlock>
      </Footer>
    </ProductCard>
  )
}

export default WProductCard
