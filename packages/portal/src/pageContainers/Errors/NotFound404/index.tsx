import React from 'react'
import UContent from '@/ui-components/UContent'
import Link from 'next/link'

interface INotFound404Props {}

const NotFound404: React.FunctionComponent<INotFound404Props> = () => {
  return (
    <UContent
      forwardStyleConfig={{
        py: [8],
      }}
    >
      Извините, но страница не найдена. <Link href="/">Вернуться на главную</Link>
    </UContent>
  )
}

export default NotFound404
