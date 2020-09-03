import * as React from 'react'
import { Select } from 'antd'
import { keyBy, difference, isEqual } from 'lodash'
import { CloseOutlined } from '@ant-design/icons'
import * as styled from './index.styled'
import UBlock from '../UBlock'
import UButton from '../UButton'
import Item from './Item'
import { OptionType } from './types'

interface IUItemsSelectorProps {
  placeholder?: string
  optionsToAdd: Array<OptionType>
  value?: string[]
  loading?: boolean
  onChange?: (value: string[]) => void
  enableToSelectDisabledItems?: boolean
}

const UItemsSelector: React.FunctionComponent<IUItemsSelectorProps> = (props) => {
  const { placeholder, optionsToAdd } = props
  const [selectedValues, setSelectedValues] = React.useState(props.value || [])
  const optionsToAddByValue = keyBy(optionsToAdd, 'value')
  const options = React.useMemo(
    () =>
      optionsToAdd.map((option) => (
        <Select.Option
          value={option.value}
          key={option.value}
          label={option.title}
          disabled={props.enableToSelectDisabledItems ? false : option.isDisabled}
        >
          <Item option={option} />
        </Select.Option>
      )),
    [optionsToAdd, selectedValues]
  )
  const renderListItem = (value: string) => {
    const option = optionsToAddByValue[value]

    if (!option) return <styled.ListItem />

    return (
      <styled.ListItem>
        <UBlock py="8px" display="flex" justifyContent="space-between" alignItems="center">
          <Item option={option} />
          <UButton
            icon={<CloseOutlined />}
            type="link"
            size="small"
            onClick={() => setSelectedValues(selectedValues.filter((selectedValue) => selectedValue !== value))}
          />
        </UBlock>
      </styled.ListItem>
    )
  }
  const handleSelectChange = (_selectedValues: string[]) =>
    setSelectedValues([...difference(_selectedValues, selectedValues), ...selectedValues])

  React.useEffect(() => {
    setSelectedValues(props.value || [])
  }, [props.value])

  React.useEffect(() => {
    if (!isEqual(props.value, selectedValues)) props.onChange?.(selectedValues)
  }, [selectedValues])

  return (
    <styled.Root>
      <Select
        placeholder={placeholder}
        mode="multiple"
        optionLabelProp="label"
        value={selectedValues}
        loading={props.loading}
        onChange={handleSelectChange}
        dropdownRender={(node) => <styled.SelectDropdown>{node}</styled.SelectDropdown>}
        tagRender={() => <></>}
        maxTagCount={0}
        filterOption={(value, option) =>
          option?.label ? String(option.label).toLocaleLowerCase().startsWith(value.toLocaleLowerCase()) : false
        }
        listHeight={208}
      >
        {options}
      </Select>
      <styled.List
        dataSource={selectedValues}
        renderItem={renderListItem as any}
        pagination={{
          defaultPageSize: 5,
          size: 'small',
          showTotal: (total) => `Всего ${total}`,
          hideOnSinglePage: true,
        }}
      />
    </styled.Root>
  )
}

UItemsSelector.defaultProps = {
  value: [],
}

export default UItemsSelector
