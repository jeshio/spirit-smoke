import UInput from '@/ui-components/UInput'
import UMetaTitle from '@/ui-components/UMetaTitle'
import UParagraph from '@/ui-components/UParagraph'
import UTitle from '@/ui-components/UTitle'
import * as React from 'react'
import { DeliveryTextWrapper, ExtraInputsWrapper, Root, TitleWrapper } from './index.styled'

interface ICheckoutPageProps {}

const CheckoutPage: React.FunctionComponent<ICheckoutPageProps> = () => {
  return (
    <Root>
      <UMetaTitle title="Оформление заказа" />
      <TitleWrapper>
        <UTitle level={1}>Оформление заказа</UTitle>
      </TitleWrapper>

      <DeliveryTextWrapper>
        <UParagraph>Доставка осуществляется только в городе Ханты-Мансийск.</UParagraph>
      </DeliveryTextWrapper>

      <UTitle level={3}>Адрес</UTitle>

      <UInput placeholder="ул. Анны-Коньковой, д. 302, кв 1008" />

      <ExtraInputsWrapper>
        <UInput placeholder="Подъезд" />
        <UInput placeholder="Этаж" />
        <UInput placeholder="Код от домофона" />
      </ExtraInputsWrapper>
    </Root>
  )
}

export default CheckoutPage
