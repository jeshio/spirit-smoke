import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { ZodRawShape } from 'zod/lib/src/types/base'

export const validators = {
  ...z,
  phone: () =>
    z
      .string()
      .length(12, {
        message: 'Номер телефона должен содержать 11 цифр',
      })
      .refine((data) => new RegExp(/^\+\d+$/).exec(data), {
        message: 'Номер телефона должен состоять из цифр',
      }),
  required: (zod?: z.ZodString) => (zod || z.string()).refine((data) => data.length > 0, 'Нужно заполнить это поле'),
}

const makeFormResolver = <T extends ZodRawShape>(schema: T) => {
  return zodResolver(z.object(schema))
}

makeFormResolver.validators = validators

export default makeFormResolver
