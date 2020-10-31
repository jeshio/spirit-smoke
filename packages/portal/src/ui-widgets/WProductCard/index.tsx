import { ProductsCatalogQuery } from '@/gql/__generated__/types'
import { CartIcon } from '@@icons'
import React, { useCallback, useState } from 'react'
import FeatureItem from './components/FeatureItem'
import {
  ButtonsBlock,
  BuyButton,
  CompanyName,
  Description,
  FeatureList,
  Footer,
  Header,
  Image,
  ImageWrapper,
  InfoButton,
  Price,
  ProductCard,
  TagsRow,
  Title,
} from './index.styled'

interface IWProductCardProps {
  product: Partial<ProductsCatalogQuery['productsByCategory'][0]>
}

const WProductCard: React.FunctionComponent<IWProductCardProps> = ({ product }) => {
  const featureListItems = product.features?.map((feature) => <FeatureItem feature={feature} key={feature.id} />)
  const [descIsVisible, setDescIsVisible] = useState(false)
  const switchDescVisible = useCallback(() => setDescIsVisible(!descIsVisible), [descIsVisible])
  const infoButtonFocusoutHandler = useCallback(() => setDescIsVisible(false), [])

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
          <BuyButton icon={<CartIcon />} type="primary" />
        </ButtonsBlock>
      </Footer>
    </ProductCard>
  )
}

export default WProductCard
