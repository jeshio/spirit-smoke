/**
 * Проверяет переданный discount по всем параметрам на возможность применения в заказе
 * @param {Discount} discount
 * @param {Order[]} discountOrders
 * @returns DiscountStatus
 */
export default function checkDiscount(discount, discountOrders) {
  const isExists = Boolean(discount)
  let isDisabled = !isExists
  let isOutdated = false
  let isUsed = false

  if (isExists) {
    const parsedStartDate = Date.parse(discount.startDate)
    const parsedEndDate = Date.parse(discount.endDate)
    const currentDate = new Date().getTime()
    isOutdated = currentDate - parsedStartDate < 0 || parsedEndDate - currentDate < 0

    if (isOutdated) {
      isDisabled = true
    }

    if (discount.isDisposable) {
      isUsed = discountOrders.length > 0

      if (isUsed) {
        isDisabled = true
      }
    }
  }

  return {
    isDisabled,
    isExists,
    isUsed,
    isOutdated,
  }
}
