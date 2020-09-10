type ConvertToUnion<U> = U extends Array<infer X> ? { [K in keyof X]: X[K] } : never
type ConvertToIntersection<U extends { [K: string]: any }> = (U extends any ? (x: U) => void : never) extends (
  x: infer X
) => void
  ? X
  : never
// https://stackoverflow.com/questions/63827245/how-to-convert-array-of-objects-type-to-flat-object-type-with-typescript
type ConvertToFlat<T> = ConvertToIntersection<ConvertToUnion<T>>

/**
 * Последовательное создание объекта. Функции-аргументы будут по-очереди строить объект.
 * В каждой следующей функции в качестве параметра передаётся объект созданный в предыдущих.
 * Пример использования:
 *
 * createObjectWithSequence(
 *    () => ({ base: '#88f' }),
 *    (prev) => ({ hover: prev.base })
 *  )
 *
 * @param args Функции, возвращающие параметры, которыми будудет заполнен новый объект
 */
export function createObjectWithSequence<Functions extends Array<(...prevProps: any) => any>>(...args: Functions) {
  /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
  // @ts-ignore
  type ResultType = { [R in keyof Functions]: ReturnType<Functions[R]> }

  return args.reduce(
    (base, currentFn) => ({
      ...base,
      ...currentFn(base),
    }),
    {}
  ) as ConvertToFlat<ResultType>
}
