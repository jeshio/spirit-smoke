import React, { useCallback, useState } from 'react'
import { addCartItem } from '@/gql/cache/vars/Cart'
import { ProductsCatalogQuery } from '@/gql/__generated__/types'
import { CartIcon } from '@@icons'
import FeatureItem from './components/FeatureItem'
import {
  ButtonsBlock,
  BuyButton,
  ProductLineName,
  Description,
  FeatureList,
  Footer,
  Header,
  Image,
  ImageWrapper,
  InfoButton,
  ProductCard,
  StyledWCartItemCounter,
  TagsRow,
  Title,
} from './index.styled'
import useProductCountChanger from '@/hooks/useProductCountChanger'
import UPrice from '@/ui-components/UPrice'

interface IWProductCardProps {
  product: Partial<ProductsCatalogQuery['productsByCategory'][0]>
}

const WProductCard: React.FunctionComponent<IWProductCardProps> = ({ product }) => {
  const featureListItems = product.features?.map((feature) => <FeatureItem feature={feature} key={feature.id} />)
  const [descIsVisible, setDescIsVisible] = useState(false)
  const [productsCount, handleProductCountChange] = useProductCountChanger(product.id)
  const switchDescVisible = useCallback(() => setDescIsVisible(!descIsVisible), [descIsVisible])
  const infoButtonFocusoutHandler = useCallback(() => setDescIsVisible(false), [])
  const handleBuyClick = useCallback(() => {
    handleProductCountChange(1)
    addCartItem({
      id: product.id,
      productsCount: 1,
    })
  }, [product])

  return (
    <ProductCard>
      <Header>
        <ImageWrapper>
          <Image src={product.imageUrl} alt={`Купить ${product.productLine.name}, ${product.name}`} />
        </ImageWrapper>
        <div>
          <TagsRow />
          {product.description && (
            <InfoButton onClick={switchDescVisible} onBlur={infoButtonFocusoutHandler}>
              i
            </InfoButton>
          )}
          <Description isVisible={descIsVisible}>{product.description}</Description>
          <ProductLineName title={product.productLine.name} color={product.productLine.color}>
            {product.productLine.name}
          </ProductLineName>
          <Title>{product.name}</Title>
        </div>
        <div>
          <FeatureList items={featureListItems} isHorizontal />
        </div>
      </Header>
      <Footer>
        <UPrice>{product.price}</UPrice>
        <ButtonsBlock>
          <StyledWCartItemCounter
            productsCount={productsCount}
            onChange={handleProductCountChange}
            isVisible={productsCount > 0}
          />
          <BuyButton icon={<CartIcon />} type="primary" onClick={handleBuyClick} isVisible={productsCount < 1} />
        </ButtonsBlock>
      </Footer>
    </ProductCard>
  )
}

export default WProductCard
