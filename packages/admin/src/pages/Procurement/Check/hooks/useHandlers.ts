import { useCallback } from 'react'
import { getColumns } from '../constants'
import { ICurrentProducts } from '../types'

const useHandlers = (
  currentProducts: ICurrentProducts,
  setCurrentProducts: (currentProducts: ICurrentProducts) => void
) => {
  const handleAddProduct = (productId: string) =>
    setCurrentProducts({
      ...currentProducts,
      [productId]: {
        procurementPrice: 0,
        count: 1,
        isNew: true,
      },
    })

  const handleCountDecrement: Parameters<typeof getColumns>[0]['onCountDecrement'] = useCallback(
    (productId) => () => {
      if (!currentProducts[productId] || !currentProducts[productId].count) return

      setCurrentProducts({
        ...currentProducts,
        [productId]: {
          ...currentProducts[productId],
          count: currentProducts[productId].count - 1,
        },
      })
    },
    [setCurrentProducts, currentProducts]
  )

  const handleCountIncrement: Parameters<typeof getColumns>[0]['onCountIncrement'] = useCallback(
    (productId) => () => {
      if (!(productId in currentProducts)) {
        handleAddProduct(productId)
      } else {
        setCurrentProducts({
          ...currentProducts,
          [productId]: {
            ...currentProducts[productId],
            count: currentProducts[productId].count + 1,
          },
        })
      }
    },
    [setCurrentProducts, currentProducts]
  )

  const handleChangePrice: Parameters<typeof getColumns>[0]['onChangePrice'] = useCallback(
    (productId) => (e) => {
      let value = parseInt(e.target.value, 10)

      if (!currentProducts[productId]) return

      if (Number.isNaN(value)) value = 0

      setCurrentProducts({
        ...currentProducts,
        [productId]: {
          ...currentProducts[productId],
          procurementPrice: value,
        },
      })
    },
    [setCurrentProducts, currentProducts]
  )

  return {
    handleCountDecrement,
    handleCountIncrement,
    handleChangePrice,
    handleAddProduct,
  }
}

export default useHandlers
