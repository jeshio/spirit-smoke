import { getUBlockWithProps } from '@/ui-components/UBlock'
import UButton from '@/ui-components/UButton'
import UList from '@/ui-components/UList'
import { size } from 'polished'
import styled from 'styled-components'

export const Root = styled(
  getUBlockWithProps({
    tag: UList,
    styleConfig: {
      px: ['14px'],
      py: ['20px'],
    },
  })
)`
  max-width: 100%;
  overflow-x: scroll;

  > * {
    margin-right: 19px;
  }
`

export const CompanyItem = styled(
  getUBlockWithProps({
    tag: UButton,
    styleConfig: {
      height: ['64px'],
      width: ['64px'],
    },
  })
)`
  border-radius: 50%;
  text-align: center;
  font-size: 12px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: #fff;
  position: relative;
  font-weight: 300;

  &::after {
    content: '';
    position: absolute;
    ${size(4, 10)};
    border-radius: 4px;
    background-color: #5f5;
    bottom: 7px;
    left: 50%;
    margin-left: -5px;
  }
`
