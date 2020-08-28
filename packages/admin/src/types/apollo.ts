import { MutationHookOptions, MutationTuple, QueryResult, QueryHookOptions } from '@apollo/client';

export type MutationHookType<TData, TVariables> = (
  baseOptions: MutationHookOptions<TData, TVariables>,
) => MutationTuple<TData, TVariables>;

export type QueryHookType<TData, TVariables> = (
  baseOptions: QueryHookOptions<TData, TVariables>,
) => QueryResult<TData, TVariables>;
