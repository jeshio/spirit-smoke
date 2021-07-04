import { Input } from 'antd'
import React, { ChangeEvent, FunctionComponent } from 'react'

interface IFiltersProps {
  onFiltersChange: (filters: { productName: string }) => void
}

const Filters: FunctionComponent<IFiltersProps> = ({ onFiltersChange }) => {
  const handleProductNameSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    onFiltersChange({
      productName: e.target.value,
    })
  }

  return (
    <div>
      <Input onChange={handleProductNameSearchChange} placeholder="Поиск по названию" />
    </div>
  )
}

export default Filters
