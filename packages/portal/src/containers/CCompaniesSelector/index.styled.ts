import createComponentWithPropsOmit from '@/helpers/createComponentWithPropsOmit'
import { getUBlockWithProps } from '@/ui-components/UBlock'
import UButton from '@/ui-components/UButton'
import UList from '@/ui-components/UList'
import { size } from 'polished'
import styled from 'styled-components'
import { space } from 'styled-system'

export const Root = styled(
  getUBlockWithProps({
    tag: UList,
    styleConfig: {
      p: [3],
    },
  })
)`
  max-width: 100%;
  overflow-x: scroll;

  > * + * {
    ${space({ ml: [2] })}
  }
`

export const CompanyItem = styled(
  getUBlockWithProps({
    tag: createComponentWithPropsOmit(UButton, ['color']),
    styleConfig: {
      height: ['64px !important'],
      width: ['64px'],
    },
  })
)<{
  color?: string
}>`
  border-radius: 50%;
  text-align: center;
  font-size: 12px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: #fff;
  position: relative;
  font-weight: 300;
  align-items: center;
  justify-content: center;
  padding: 0 0 3px 0;
  border: unset;

  &::after {
    content: '';
    position: absolute;
    ${size(4, 10)};
    border-radius: 4px;
    background-color: ${({ color = '' }) => color};
    bottom: 7px;
    left: 50%;
    margin-left: -5px;
  }
`
