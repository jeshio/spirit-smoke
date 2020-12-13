import { cartItemsVar, clearCart } from '@/gql/cache/vars/Cart'
import { useCreateCheckoutOrderMutation } from '@/gql/__generated__/types'
import makeFormResolver, { validators } from '@/helpers/makeFormResolver'
import UForm from '@/ui-components/UForm'
import UInput from '@/ui-components/UInput'
import UMetaTitle from '@/ui-components/UMetaTitle'
import UParagraph from '@/ui-components/UParagraph'
import UTitle from '@/ui-components/UTitle'
import WCartTotalBar from '@/ui-widgets/WCartTotalBar'
import { useReactiveVar } from '@apollo/client'
import { useRouter } from 'next/dist/client/router'
import * as React from 'react'
import { useForm } from 'react-hook-form'

import { DeliveryTextWrapper, ExtraInputsWrapper, Root, TitleWrapper } from './index.styled'

interface ICheckoutPageProps {}

const resolver = makeFormResolver({
  phoneNumber: validators.required(validators.phone()),
  address: validators.required(),
  entrance: validators.string(),
  floor: validators.string(),
  intercomCode: validators.string(),
  deliveryTime: validators.required(),
})

const CheckoutPage: React.FunctionComponent<ICheckoutPageProps> = () => {
  const { push } = useRouter()
  const { control, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: (values, context) =>
      resolver(
        {
          ...values,
          phoneNumber: values?.phoneNumber.replace(/[\s-()]/g, ''),
        },
        context
      ),
  })
  const cartItems = useReactiveVar(cartItemsVar)
  const [createOrder, createOrderRequest] = useCreateCheckoutOrderMutation()
  const handleCreateOrder = handleSubmit(
    async ({ phoneNumber, address, entrance, floor, intercomCode, deliveryTime }) => {
      let fullAddress = address

      if (entrance) {
        fullAddress += `, подъезд ${entrance}`
      }

      if (floor) {
        fullAddress += `, этаж ${floor}`
      }

      try {
        await createOrder({
          variables: {
            address: fullAddress,
            deliveryTime,
            phoneNumber,
            intercomCode,
            products: cartItems,
          },
        })
        clearCart()
        push('/checkout/success')
      } catch (e) {
        console.error(e.message)
        // TODO: показать пользователю сообщение об ошибке
      }
    }
  )

  React.useEffect(() => {
    if (cartItems.length === 0 && !createOrderRequest.called) {
      push('/cart')
    }
  }, [cartItems.length])

  return (
    <Root>
      <UForm onSubmit={handleCreateOrder}>
        <UMetaTitle title="Оформление заказа" />
        <TitleWrapper>
          <UTitle level={1}>Оформление заказа</UTitle>
        </TitleWrapper>

        <DeliveryTextWrapper>
          <UParagraph>Доставка осуществляется только в городе Ханты-Мансийск.</UParagraph>
        </DeliveryTextWrapper>

        <UTitle level={3}>Телефон</UTitle>

        <UInput
          name="phoneNumber"
          type="tel"
          mask="+7 999 999-99-99"
          control={control}
          placeholder="+7 952 700-00-70"
          maskChar={null}
          errors={errors}
        />

        <UTitle level={3}>Адрес</UTitle>

        <UInput name="address" control={control} placeholder="ул. Анны-Коньковой, д. 302, кв 1008" errors={errors} />

        <ExtraInputsWrapper>
          <UInput
            name="entrance"
            type="number"
            control={control}
            placeholder="Подъезд"
            noAutocomplete
            errors={errors}
          />
          <UInput name="floor" type="number" control={control} placeholder="Этаж" noAutocomplete errors={errors} />
          <UInput
            name="intercomCode"
            type="tel"
            control={control}
            placeholder="Код от домофона"
            noAutocomplete
            errors={errors}
          />
        </ExtraInputsWrapper>

        <UTitle level={3}>Время доставки</UTitle>

        <UInput
          name="deliveryTime"
          numberKeyboard
          control={control}
          placeholder="19:00 — 23:00"
          noAutocomplete
          errors={errors}
        />

        <WCartTotalBar isOrderCreator isLoading={createOrderRequest.loading} isDisabled={cartItems.length === 0} />
      </UForm>
    </Root>
  )
}

export default CheckoutPage
