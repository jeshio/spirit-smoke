import styled, { css } from 'styled-components'
import theme from '@/styles/theme'
import { InputNumber, List as OriginalList } from 'antd'
import UBlock from '../UBlock'

export const Root = styled(UBlock)`
  .ant-select-selection-search {
    &::before {
      content: 'Начните вводить текст, чтобы выбрать';
      color: ${() => theme.colors.placeholder};
      top: 0;
      position: absolute;
      left: 4px;
      width: 340px;
      color: #a9a9a9;
      font-size: 14px;
      font-weight: 100;
    }
  }

  .ant-select-focused {
    .ant-select-selection-search {
      &::before {
        content: '';
      }
    }
  }
`

export const SelectDropdown = styled.div`
  .ant-select-item-option-state {
    display: flex;
    align-items: center;
  }
`

export const ItemWrapper = styled.div<any>`
  display: flex;
  align-items: center;

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.6;
    `}
`

export const ItemImage = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-size: contain;
  background-position: center;
  margin-right: 15px;
`

export const ItemTitle = styled.strong`
  display: block;
  font-weight: 500;
`

export const ItemExtra = styled.small`
  display: block;
  color: ${() => theme.colors.extraInfoColor};
  margin-top: -5px;
  font-size: 14px;
`

export const List = styled(OriginalList)`
  padding: 10px 20px 5px;
`

export const ListItem = styled.li`
  border-bottom: 1px solid ${() => theme.colors.border};

  &:last-of-type {
    border-bottom: unset;
  }
`

export const ListItemDeleteButton = styled.button``

export const ProductNumberFieldInput = styled(InputNumber)`
  & + & {
    margin-left: 5px;
  }
`
