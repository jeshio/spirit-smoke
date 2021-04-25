import * as React from 'react'
import UPageContainer from '@/ui-components/UPageContainer'
import { useCompanyItemPageQuery, useDeleteCompanyMutation } from '@/gql/__generated__/types'
import { RouteComponentProps } from 'react-router'
import useStableQuery from '@/hooks/gql/useStableQuery'
import { Card } from 'antd'
import UDescriptions from '@/ui-components/UDescriptions'
import { EditFilled, DeleteFilled } from '@ant-design/icons'
import UButton from '@/ui-components/UButton'
import URow from '@/ui-components/URow'
import UCol from '@/ui-components/UCol'
import UPopconfirm from '@/ui-components/UPopconfirm'
import ProductLinesTable from './components/ProductLinesTable'

interface CompanyItemPageProps
  extends RouteComponentProps<{
    id: string
  }> {}

const CompanyItemPage: React.FunctionComponent<CompanyItemPageProps> = (props) => {
  const { id } = props.match.params
  const [query, queryComponent] = useStableQuery(useCompanyItemPageQuery, {
    variables: {
      id,
    },
    loadingTip: 'Загрузка компании',
    queryName: 'company',
  })
  const [deleteCompany] = useDeleteCompanyMutation({
    variables: {
      id,
    },
    onCompleted: () => {
      props.history.push('/companies')
    },
    onError: () => {},
  })

  if (queryComponent || !query?.data.company) return queryComponent as React.ReactElement

  const { company } = query.data

  return (
    <UPageContainer
      title={`Компания ${company.name}`}
      extra={
        <>
          <UPopconfirm
            onConfirm={deleteCompany as any}
            title="Все линейки и продукты компании станут недоступны для клиентов. Вы уверены?"
            placement="topRight"
          >
            <UButton danger icon={<DeleteFilled />}>
              Удалить
            </UButton>
          </UPopconfirm>
          <UButton type="primary" href={`/companies/${company.id}/edit`} icon={<EditFilled />}>
            Редактировать
          </UButton>
        </>
      }
    >
      <Card title={`Информация о компании (ID ${company.id})`}>
        <UDescriptions>
          <UDescriptions.Item label="Название">{company.name}</UDescriptions.Item>
          <UDescriptions.Item label="Цвет в интерфейсе">{company.color}</UDescriptions.Item>
          <UDescriptions.Item label="Slug">{company.slug}</UDescriptions.Item>
          <UDescriptions.Item label="Страна">{company.country}</UDescriptions.Item>
          <UDescriptions.Item label="Штрихкод">{company.barcode}</UDescriptions.Item>
        </UDescriptions>
      </Card>
      <URow gutter={[4, 8]}>
        <UCol xxl={12}>
          <Card title="Статистика">В разработке</Card>
        </UCol>
        <UCol xxl={12}>
          <Card title="Линейки компании">
            <ProductLinesTable
              productLines={company.productLines}
              tableProps={{
                pagination: {
                  defaultPageSize: 5,
                },
              }}
            />
          </Card>
        </UCol>
      </URow>
    </UPageContainer>
  )
}

export default CompanyItemPage
