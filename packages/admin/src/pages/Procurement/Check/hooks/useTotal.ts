import { ProcurementCheckProductsQuery } from '@/gql/__generated__/types'
import { useMemo } from 'react'
import { ICurrentProducts } from '../types'

const useTotal = ({
  currentProducts,
  productsById,
}: {
  currentProducts: ICurrentProducts
  productsById: { [id: string]: ProcurementCheckProductsQuery['products'][0] }
}) => {
  const totalProcurementPrice = useMemo(
    () => Object.values(currentProducts).reduce((base, item) => base + item.procurementPrice * item.count, 0),
    [currentProducts]
  )
  const totalWeight = useMemo(
    () =>
      Object.keys(currentProducts).reduce(
        (base, itemId) => base + (productsById[itemId]?.weight || 0) * currentProducts[itemId].count,
        0
      ),
    [currentProducts, productsById]
  )
  const totalPrice = useMemo(
    () =>
      Object.keys(currentProducts).reduce(
        (base, itemId) => base + (productsById[itemId]?.price || 0) * currentProducts[itemId].count,
        0
      ),
    [currentProducts, productsById]
  )
  const totalMargin = useMemo(() => {
    const value = Number((totalPrice / totalProcurementPrice - 1) * 100 || 0)

    if (!Number.isFinite(value)) {
      return '? '
    }

    return value.toFixed(2)
  }, [totalPrice, totalProcurementPrice])

  return {
    totalProcurementPrice,
    totalWeight,
    totalPrice,
    totalMargin,
  }
}

export default useTotal
