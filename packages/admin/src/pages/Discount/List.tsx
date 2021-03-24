import * as React from 'react'
import { DiscountListPageFragment, useDiscountListPageQuery } from '@/gql/__generated__/types'
import { IColumn } from '@/ui-components/UTable/types'
import ListPageBuilder, { ListColumnsType } from '@/builders/ListPage'
import { Link } from 'umi'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import UPrice from '@/ui-components/UPrice'

const columns: ListColumnsType = (): IColumn<DiscountListPageFragment>[] => [
  {
    title: 'ID',
    field: 'id',
    width: 50,
  },
  {
    title: 'Имя',
    field: 'name',
    render: (name, { id }) => <Link to={`/discounts/${id}`}>{name}</Link>,
  },
  {
    title: 'Код',
    field: 'code',
  },
  {
    title: 'Рубли',
    field: 'rub',
    render: (price) => <UPrice>{price}</UPrice>,
  },
  {
    title: 'Проценты',
    field: 'percent',
    render: (percent) => `${percent}%`,
  },
  {
    field: 'isDisposable',
    title: 'Одноразовый',
    render: (isDisposable) =>
      isDisposable ? (
        <Tooltip title="Промокод применяется только один раз">
          <CheckOutlined />
        </Tooltip>
      ) : (
        <Tooltip title="Значит промокод многоразовый">
          <CloseOutlined />
        </Tooltip>
      ),
    width: 50,
  },
  {
    field: 'isGlobal',
    title: 'На все товары',
    render: (isGlobal) =>
      isGlobal ? (
        <Tooltip title="Промокод действует на все товары">
          <CheckOutlined />
        </Tooltip>
      ) : (
        <Tooltip title="Значит промокод действует на выбранные товары или группы товаров">
          <CloseOutlined />
        </Tooltip>
      ),
    width: 50,
  },
  {
    title: 'Дата начала',
    field: 'startDate',
  },
  {
    title: 'Срок окончания',
    field: 'endDate',
  },
]

interface IDiscountListPageProps {}

const DiscountListPage: React.FunctionComponent<IDiscountListPageProps> = () => {
  return (
    <ListPageBuilder
      addItemButton={{
        link: '/discounts/add',
        name: 'Добавить скидку',
      }}
      columns={columns}
      listQuery={{
        hook: useDiscountListPageQuery,
        queryName: 'discounts',
      }}
      loadingTip="Загрузка скидки"
      title="Список скидки"
      tableProps={{
        invalidRowCondition: {
          isDisabled: true,
        },
      }}
    />
  )
}

export default DiscountListPage
