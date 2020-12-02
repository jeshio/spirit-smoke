import React, { useCallback, useState, useEffect } from 'react'
import {
  CartItemCountValue,
  CartItemCount,
  DecrementButton,
  IncrementButton,
  CartItemCountWrapper,
} from './index.styled'

interface IUCartItemCounterProps {
  productsCount: number
  onChange: (newCount: number) => void
  className?: string
}

const WCartItemCounter: React.FunctionComponent<IUCartItemCounterProps> = ({ productsCount, onChange, className }) => {
  const [countChangedAnimationIsActive, setCountChangedAnimationIsActive] = useState(false)
  const makeHandlerCartItemCountChange = useCallback(
    (newCount: number) => () => {
      setCountChangedAnimationIsActive(newCount !== 0)

      onChange(newCount)
    },
    [onChange]
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
    <CartItemCountWrapper className={className}>
      <CartItemCount>
        <CartItemCountValue isChanged={countChangedAnimationIsActive}>{productsCount || 1}</CartItemCountValue>
        <DecrementButton onClick={makeHandlerCartItemCountChange(productsCount - 1)}>—</DecrementButton>
        <IncrementButton onClick={makeHandlerCartItemCountChange(productsCount + 1)}>+</IncrementButton>
      </CartItemCount>
    </CartItemCountWrapper>
  )
}

export default WCartItemCounter
