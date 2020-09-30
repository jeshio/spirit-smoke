import { useMemo } from 'react'
import { findKey, isObject, isEqual } from 'lodash'

/* eslint-disable no-shadow */
/**
 * Сравнивает если любое свойство двух объектов совпадает
 * Поддерживает массив значений (проверяет вхождение свойства второго объекта в массив значений этого свойства в первом объекте)
 */
function somePropIsEqual(object: any, base: any) {
  function changes(object: any, base: any): boolean {
    return !!findKey(object, (value, key) => {
      if (isObject(value) && isObject(base[key])) {
        return changes(value, base[key])
      }
      if (
        isEqual(value, base[key]) ||
        (value === undefined && base[key] === null) ||
        (Array.isArray(value) && value.find((v) => isEqual(v, base[key])))
      ) {
        return true
      }
      return false
    })
  }
  return changes(object, base)
}

export const IS_INVALID_ROW_COLUMN = '__isGrayRow'

export default function useServiceDataWithRows(rows: any[], invalidRowCondition?: any) {
  const result = useMemo(
    () =>
      rows.map((row) => ({
        ...row,
        [IS_INVALID_ROW_COLUMN]: somePropIsEqual(invalidRowCondition, row),
      })),
    [rows]
  )
  return result
}
