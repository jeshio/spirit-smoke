import styled from 'styled-components'
import media from '@/styles/media'

export const ProductsList = styled.div`
  ${media.md`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1vw;
  `}

  ${media.xl`
    grid-template-columns: 1fr 1fr 1fr;
  `}

  ${media.xxl`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `}

  ${media.xxxl`
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  `}
`

export const Item = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 12px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 9px;

    ${media.md`
      margin-top: 0px;
    `}
  }

  ${media.md`
    padding: 16px 21px;
  `}
`

export const ItemTitle = styled.h4`
  padding: 0;
  margin: 0;
`
export const ItemProductsCount = styled.span``

export const ItemProductPrice = styled.span``

export const ItemProductTotalPrice = styled.span`
  font-weight: 500;
`
