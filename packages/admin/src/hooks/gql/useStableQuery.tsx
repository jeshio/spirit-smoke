import { QueryHookType } from '@/types/apollo'
import { QueryHookOptions, QueryResult } from '@apollo/client'
import Exception from '@/components/Exception'
import React, { ReactElement } from 'react'
import ULoading from '@/ui-components/ULoading'

interface IOptions<TData, TVariables> extends QueryHookOptions<TData, TVariables> {
  loadingTip: string
  queryName: string
}

interface RequiredQueryResult<TData, TVariables> extends QueryResult<TData, TVariables> {
  data: TData
}

/**
 * Выполнение запроса и его обработка - в случае загрузки или ошибки будет возвращён
 * компонент готовый для отображения
 * @param useQuery Оригинальный хук на запрос
 * @param param1 параметра хука
 */
function useStableQuery<TData, TVariables>(
  useQuery: QueryHookType<TData, TVariables>,
  { loadingTip, queryName, ...options }: IOptions<TData, TVariables>
): [RequiredQueryResult<TData, TVariables>, undefined] | [undefined, ReactElement] {
  const query = useQuery(options)

  if (query.error) return [undefined, <Exception apolloError={query.error} />]
  if (query.loading) return [undefined, <ULoading tip={loadingTip} />]

  if (!query?.data?.[queryName]) return [undefined, <Exception type="404" />]

  return [query as RequiredQueryResult<TData, TVariables>, undefined]
}

export default useStableQuery
