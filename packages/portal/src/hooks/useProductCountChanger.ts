import { cartItemsVar, changeCartItemCount } from '@/gql/cache/vars/Cart'
import { useReactiveVar } from '@apollo/client'
import { debounce } from 'lodash'
import { useCallback, useState, useMemo } from 'react'

const debouncedChangeCartItemCount = debounce(changeCartItemCount, 500)

/**
 * Изменяет количество продуктов с оптимизациями для максимально быстрого отклика
 */
const useProductCountChanger = (productId: string): [number, (newCount: number) => void] => {
  const cartItems = useReactiveVar(cartItemsVar)
  const productsCount = useMemo(() => cartItems.find((cartItem) => cartItem.id === productId)?.productsCount || 0, [
    cartItems,
  ])
  const [currentCartItemCount, setCurrentCartItemCount] = useState(productsCount)
  const handleCartItemCountChange = useCallback(
    (newCount: number) => {
      setCurrentCartItemCount(newCount)

      if (newCount === 0) {
        // чтобы количество позиций в корзине обновлялось сразу
        changeCartItemCount(productId, newCount)
      } else {
        debouncedChangeCartItemCount(productId, newCount)
      }
    },
    [productId, productsCount, currentCartItemCount]
  )

  return [currentCartItemCount, handleCartItemCountChange]
}

export default useProductCountChanger
