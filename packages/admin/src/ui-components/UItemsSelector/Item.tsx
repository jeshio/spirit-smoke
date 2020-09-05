import * as React from 'react'
import { Link } from 'umi'
import * as styled from './index.styled'
import UBlock from '../UBlock'
import { OptionType } from './types'

interface IItemProps {
  option: OptionType
  disabled?: boolean
  noLink?: boolean
}

const Item: React.FunctionComponent<IItemProps> = ({ option, disabled, noLink }) => {
  return (
    <styled.ItemWrapper isDisabled={option.isDisabled}>
      {option.iconUrl && (
        <styled.ItemImage
          style={{
            backgroundImage: `url(${option.iconUrl})`,
          }}
        />
      )}
      <UBlock>
        {(!option.link || noLink || disabled) && <styled.ItemTitle>{option.title}</styled.ItemTitle>}
        {option.link && !noLink && !disabled && (
          <styled.ItemTitle>
            {!disabled && (
              <Link to={option.link} target="_blank">
                {option.title}
              </Link>
            )}
            {disabled && option.title}
          </styled.ItemTitle>
        )}
        {option.extra && <styled.ItemExtra>{option.extra}</styled.ItemExtra>}
      </UBlock>
    </styled.ItemWrapper>
  )
}

export default Item
