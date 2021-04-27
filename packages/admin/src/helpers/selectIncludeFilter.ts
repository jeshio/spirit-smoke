import { Select } from 'antd'
import { ComponentProps } from 'react'

const selectIncludeFilter: ComponentProps<typeof Select>['filterOption'] = (input, option) => {
  return (
    (typeof option?.children === 'string' ? option?.children : option?.children.join())
      .toLowerCase()
      .indexOf(input.toLowerCase()) >= 0
  )
}

export default selectIncludeFilter
