import styled from 'styled-components'
import media from '@/styles/media'
import theme from '@/styles/theme'

export const ItemImage = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`

export const ItemImageWrapper = styled.div`
  width: 100%;
  background-color: ${theme.colors.normalColor};
  height: 300px;
  
  ${media.md`
    height: 250px;
  `}
  
  ${media.xl`
    height: 300px;
  `}
  
  ${media.xxl`
    height: 350px;
  `}
`
