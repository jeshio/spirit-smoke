import createComponentWithPropsOmit from '@/helpers/createComponentWithPropsOmit'
import { getUBlockWithProps } from '@/ui-components/UBlock'
import styled from 'styled-components'

export const Root = styled(getUBlockWithProps())``

export const Image = styled(
  getUBlockWithProps({
    tag: createComponentWithPropsOmit('div', ['url']),
    styleConfig: {
      width: ['14px'],
      height: ['14px'],
    },
  })
)<{
  url?: string
}>`
  background-image: ${({ url = '' }) => `url(${url})`};
  background-size: contain;
  background-repeat: no-repeat;
`
