import { cartItemsVar } from '@/gql/cache/vars/Cart'
import { useCartProductsQuery, useProductCategoryMinimumListQuery } from '@/gql/__generated__/types'
import UContent from '@/ui-components/UContent'
import UMetaTitle from '@/ui-components/UMetaTitle'
import UTitle from '@/ui-components/UTitle'
import WCartTotalBar from '@/ui-widgets/WCartTotalBar'
import { useReactiveVar } from '@apollo/client'
import { groupBy, keyBy, sortBy } from 'lodash'
import Link from 'next/link'
import React, { useCallback, useMemo } from 'react'
import CartItem from './components/CartItem'
import { ProductCategoryTitleWrapper, ProductsList, TitleWrapper } from './index.styled'

const { NEXT_PUBLIC_TOBACCO_PRODUCT_CATEGORY_SLUG } = process.env

interface ICartPageProps {}

const CartPage: React.FunctionComponent<ICartPageProps> = () => {
  const cartItems = useReactiveVar(cartItemsVar)
  const cartItemIds = useMemo(() => cartItems.map(({ id }) => id), [cartItems])
  const productCategoriesRequest = useProductCategoryMinimumListQuery()
  const cartItemsRequest = useCartProductsQuery({
    variables: {
      productIds: cartItemIds,
    },
  })
  const productsByCategory = useMemo(() => groupBy(cartItemsRequest.data?.productsByIds, 'productCategory.id') || [], [
    cartItemsRequest.data,
  ])
  const productCategoriesById = useMemo(() => keyBy(productCategoriesRequest.data?.productCategories, 'id'), [
    productCategoriesRequest.data,
  ])
  const makeProductsList = useCallback(
    (productCategoryId) =>
      sortBy(productsByCategory[productCategoryId], ['company.name', 'name']).map((item) => (
        <CartItem key={item.id} product={item} />
      )) || [],
    [productsByCategory]
  )
  const cartIsEmpty = Object.keys(productsByCategory).length === 0
  const productsList = useMemo(
    () =>
      Object.keys(productsByCategory)
        .sort((a, b) => {
          const aItem = productCategoriesById[a]
          const bItem = productCategoriesById[b]
          // NEXT_PUBLIC_TOBACCO_PRODUCT_CATEGORY_SLUG всегда в начале
          return (aItem.name < bItem.name && bItem.slug !== NEXT_PUBLIC_TOBACCO_PRODUCT_CATEGORY_SLUG) ||
            aItem.slug === NEXT_PUBLIC_TOBACCO_PRODUCT_CATEGORY_SLUG
            ? -1
            : 1
        })
        .reduce(
          (base, productCategoryId) => [
            ...base,
            <ProductCategoryTitleWrapper key={`productCategory_${productCategoryId}`}>
              <UTitle level={3}>{productCategoriesById[productCategoryId]?.name}</UTitle>
            </ProductCategoryTitleWrapper>,
            <ProductsList key={`productCategory_${productCategoryId}_products`}>
              {makeProductsList(productCategoryId)}
            </ProductsList>,
          ],
          []
        ),
    [productCategoriesById, productsByCategory]
  )

  return (
    <>
      <UContent forwardStyleConfig={{ mb: [8] }}>
        <UMetaTitle title="Корзина" />
        <TitleWrapper>
          <UTitle level={1}>Корзина</UTitle>
        </TitleWrapper>

        {productsList}

        {cartIsEmpty && (
          <div>
            Корзина пуста. <Link href="/">Посмотреть товары</Link>
          </div>
        )}
      </UContent>
      <WCartTotalBar isDisabled={cartIsEmpty} />
    </>
  )
}

export default CartPage
