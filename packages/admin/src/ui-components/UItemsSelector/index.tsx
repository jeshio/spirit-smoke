import React, { ComponentProps, useCallback, useRef, useState } from 'react'
import { Select, Skeleton } from 'antd'
import { keyBy, isEqual, difference, uniq } from 'lodash'
import { CloseOutlined } from '@ant-design/icons'
import * as styled from './index.styled'
import UBlock from '../UBlock'
import UButton from '../UButton'
import Item from './Item'
import { OptionType } from './types'

export type UItemsSelectorValueObjectType = {
  id: string
  count: number
}

type ValueType = string | UItemsSelectorValueObjectType

interface IUItemsSelectorProps {
  placeholder?: string
  optionsToAdd: Array<OptionType>
  value?: ValueType[]
  loading?: boolean
  onChange?: (value: ValueType[]) => void
  enableToSelectDisabledItems?: boolean
  disabled?: boolean
  withCount?: boolean
}

const getIdsFromValueTypes = (valueTypes: ValueType[]): string[] =>
  valueTypes.map((val) => (typeof val === 'string' ? val : val.id))

const getExtraFromValues = (values: ValueType[]) =>
  values.reduce((base, val) => {
    const valIsString = typeof val === 'string'
    const id = valIsString ? (val as string) : (val as UItemsSelectorValueObjectType).id
    const valObject = (valIsString
      ? {
          id: val,
          count: 1,
        }
      : val) as UItemsSelectorValueObjectType
    return {
      ...base,
      [id]: valObject,
    }
  }, {})

/**
 * Компонент с селектом для выбора нескольких опций и их отображения в списке
 * С возможностью заполнения дополнительных полей в списке
 */
const UItemsSelector: React.FunctionComponent<IUItemsSelectorProps> = ({ value = [], loading, ...props }) => {
  const { placeholder, optionsToAdd, disabled, enableToSelectDisabledItems, withCount } = props
  const [selectedIds, setSelectedIds] = useState(getIdsFromValueTypes(value))
  const [selectedValuesExtra, setSelectedValuesExtra] = useState(getExtraFromValues(value))
  const setSelectedValues = useCallback(
    (values: ValueType[]) => {
      setSelectedIds(getIdsFromValueTypes(values))
      setSelectedValuesExtra(getExtraFromValues(values))
    },
    [selectedValuesExtra, setSelectedIds, setSelectedValuesExtra]
  )
  const isChanged = useRef(false)
  const optionsToAddByValue = keyBy(optionsToAdd, 'value')
  const options = React.useMemo(
    () =>
      optionsToAdd.map((option) => (
        <Select.Option
          value={option.value}
          key={option.value}
          label={option.title}
          disabled={enableToSelectDisabledItems ? disabled : option.isDisabled}
        >
          <Item option={option} disabled={disabled} noLink />
        </Select.Option>
      )),
    [optionsToAdd, selectedIds, enableToSelectDisabledItems]
  )
  const deleteItemHandlerFn = useCallback(
    (deletedId: ValueType) => () => {
      setSelectedIds(selectedIds.filter((selectedValue) => selectedValue !== deletedId))
      setSelectedValuesExtra(
        Object.keys(selectedValuesExtra).reduce(
          (base, id) => ({
            ...base,
            ...(id !== deletedId ? { [id]: selectedValuesExtra[id] } : {}),
          }),
          {}
        )
      )
    },
    [selectedIds]
  )
  const handleSelectChange = useCallback(
    (_selectedValues: string[]) => {
      const newIds = difference(_selectedValues, selectedIds)
      const currentSelectedIds = uniq([...newIds, ..._selectedValues])

      isChanged.current = true
      setSelectedIds(currentSelectedIds)
      setSelectedValuesExtra(
        currentSelectedIds.reduce(
          (base, id) => ({
            ...base,
            ...(selectedValuesExtra[id]
              ? { [id]: selectedValuesExtra[id] }
              : {
                  [id]: {
                    id,
                    count: 1,
                  },
                }),
          }),
          {}
        )
      )
    },
    [selectedValuesExtra, selectedIds]
  )
  const handleCountChange = useCallback(
    (id: string) => (count?: string | number) => {
      isChanged.current = true
      setSelectedValuesExtra({
        ...selectedValuesExtra,
        [id]: {
          ...selectedValuesExtra[id],
          count: Number(count) || 1,
        },
      })
    },
    [setSelectedValuesExtra, selectedValuesExtra]
  )
  const renderListItem = useCallback(
    (id: string) => {
      const option = optionsToAddByValue[id]

      if (!option) return <styled.ListItem />

      return (
        <styled.ListItem>
          <UBlock py="8px" display="flex" justifyContent="space-between" alignItems="center">
            <Item option={option} disabled={disabled} />
            <UBlock display="flex" alignItems="center">
              {withCount && selectedValuesExtra[id] && (
                <styled.CountInput value={selectedValuesExtra[id].count} onChange={handleCountChange(id)} min={1} />
              )}
              <UButton
                icon={<CloseOutlined />}
                type="link"
                size="small"
                onClick={deleteItemHandlerFn(id)}
                disabled={disabled}
              />
            </UBlock>
          </UBlock>
        </styled.ListItem>
      )
    },
    [optionsToAddByValue, withCount, selectedValuesExtra, disabled]
  )
  const handleFilterOptions: ComponentProps<typeof Select>['filterOption'] = useCallback(
    (searchValue, option) =>
      option?.label ? String(option.label).toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) : false,
    []
  )

  React.useEffect(() => {
    if (value.length !== 0) {
      setSelectedValues(value)
    }
  }, [value])

  React.useEffect(() => {
    if (!loading && isChanged.current) {
      if (withCount) {
        const valuesWithExtra: UItemsSelectorValueObjectType[] = selectedIds.map((id) => selectedValuesExtra[id])
        if (!isEqual(value, valuesWithExtra)) {
          props.onChange?.(valuesWithExtra)
        }
      } else if (!isEqual(getIdsFromValueTypes(value), selectedIds)) {
        props.onChange?.(selectedIds)
      }
    }
  }, [selectedIds, selectedValuesExtra, withCount, props.onChange, loading, isChanged.current])

  return (
    <styled.Root>
      <Select
        placeholder={placeholder}
        mode="multiple"
        optionLabelProp="label"
        value={selectedIds}
        loading={loading}
        onChange={handleSelectChange}
        dropdownRender={(node) => <styled.SelectDropdown>{node}</styled.SelectDropdown>}
        tagRender={() => <></>}
        maxTagCount={0}
        filterOption={handleFilterOptions}
        listHeight={208}
        disabled={disabled}
      >
        {options}
      </Select>
      <Skeleton active loading={loading} />
      {!loading && (
        <styled.List
          dataSource={selectedIds}
          renderItem={renderListItem as any}
          pagination={{
            defaultPageSize: 5,
            size: 'small',
            showTotal: (total) => `Всего ${total}`,
            hideOnSinglePage: true,
          }}
        />
      )}
    </styled.Root>
  )
}

export default UItemsSelector