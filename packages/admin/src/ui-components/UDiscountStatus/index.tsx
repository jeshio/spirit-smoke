import { Discount } from '@/gql/__generated__/types'
import * as React from 'react'
import { ErrorsList, ErrorsListItem, FailureMessage, Root, SuccessMessage } from './styled.index'

interface IUDiscountStatusProps {
  discount?: Partial<Discount> | null
}

const UDiscountStatus: React.FunctionComponent<IUDiscountStatusProps> = ({ discount }) => {
  const { isDisabled, isExists, isOutdated, isUsed } = discount?.status || {}

  if (discount === null) {
    return (
      <Root>
        <FailureMessage>Промокод не найден</FailureMessage>
      </Root>
    )
  }

  if (!discount) {
    return null
  }

  if (isDisabled) {
    return (
      <Root>
        <FailureMessage>
          Промокод не действителен:
          <ErrorsList>
            {!isExists && <ErrorsListItem>промокод не найден в базе данных</ErrorsListItem>}
            {isOutdated && <ErrorsListItem>срок действия промокода закончился (или не начался)</ErrorsListItem>}
            {isUsed && <ErrorsListItem>промокод уже был использован</ErrorsListItem>}
          </ErrorsList>
        </FailureMessage>
      </Root>
    )
  }

  return (
    <Root>
      <SuccessMessage>Промокод успешно применён!</SuccessMessage>
    </Root>
  )
}

export default UDiscountStatus
