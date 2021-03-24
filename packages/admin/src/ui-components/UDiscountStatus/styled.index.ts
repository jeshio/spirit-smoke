import styled from 'styled-components'
import UBlock from '../UBlock'

export const Root = styled(UBlock)``

export const SuccessMessage = styled.span`
  color: ${({ theme }) => theme.colors.successColor};
`

export const FailureMessage = styled.span`
  color: ${({ theme }) => theme.colors.errorColor};
`

export const ErrorsList = styled.ul``

export const ErrorsListItem = styled.li``
