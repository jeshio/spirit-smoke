import { ProductsSelectorFragment, useProductsSelectorQuery } from '@/gql/__generated__/types'
import getProductName from '@/helpers/getProductName'
import UItemsSelector, {
  IUItemsSelectorProps,
  UItemsSelectorValueObjectType,
  ValueType,
} from '@/ui-components/UItemsSelector'
import { keyBy } from 'lodash'
import React, { ComponentProps, useCallback, useEffect, useMemo, useRef } from 'react'

interface IUWProductsSelectorProps extends Omit<IUItemsSelectorProps, 'onChange' | 'optionsToAdd' | 'loading'> {
  onChange?: (
    value: Array<
      UItemsSelectorValueObjectType & {
        product: ProductsSelectorFragment
      }
    >
  ) => void
  /* Передатчик внутренней функции добавления продукта */
  setAddProductByBarcodeFn?: (cb: (barcode: string) => void) => void
}

const UWProductsSelector: React.FunctionComponent<IUWProductsSelectorProps> = (props) => {
  const productsRequest = useProductsSelectorQuery()
  const addValueFnRef = useRef<(_: ValueType) => void>()
  const productItems = useMemo(
    (): ComponentProps<typeof UItemsSelector>['optionsToAdd'] =>
      productsRequest.data?.products.map((product) => ({
        title: getProductName(product),
        value: product.id,
        link: `/products/${product.id}`,
        extra: `${product.price || 0} ₽`,
      })) || [],
    [productsRequest.data]
  )
  const productsById = useMemo(() => keyBy(productsRequest.data?.products, 'id'), [productsRequest.data?.products])
  const productsByBarcode = useMemo(() => keyBy(productsRequest.data?.products, 'barcode'), [
    productsRequest.data?.products,
  ])
  const handleChange: IUItemsSelectorProps['onChange'] = useCallback(
    (items) => {
      props.onChange?.(
        (items as UItemsSelectorValueObjectType[]).map((item) => ({
          ...item,
          product: productsById[item?.id],
        }))
      )
    },
    [props.onChange, productsById]
  )
  const setAddValueFn = (setter: typeof addValueFnRef.current) => {
    addValueFnRef.current = setter
  }

  // передача функции добавления продукта во внешний компонент
  useEffect(() => {
    props.setAddProductByBarcodeFn?.((barcode: string) => {
      const product = productsByBarcode[barcode]
      if (product) {
        addValueFnRef.current?.(product.id)
      }
    })
  }, [productsByBarcode, addValueFnRef])

  return (
    <UItemsSelector
      optionsToAdd={productItems}
      loading={productsRequest.loading}
      {...props}
      setAddValueFn={setAddValueFn}
      onChange={handleChange}
    />
  )
}

export default UWProductsSelector
