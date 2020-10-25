import { ProductsCatalogQuery } from '@/gql/__generated__/types'
import UButton from '@/ui-components/UButton'
import { BuyButtonIcon } from '@@icons'
import * as React from 'react'
import FeatureItem from './components/FeatureItem'
import {
  ButtonsBlock,
  CompanyName,
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
  return (
    <ProductCard>
      <Header>
        <ImageWrapper>
          <Image src={product.imageUrl} alt={`Купить ${product.company.name}, ${product.name}`} />
        </ImageWrapper>
        <div>
          <TagsRow />
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
          <InfoButton>i</InfoButton>
          <UButton icon={<BuyButtonIcon />} type="primary" />
        </ButtonsBlock>
      </Footer>
    </ProductCard>
  )
}

export default WProductCard
