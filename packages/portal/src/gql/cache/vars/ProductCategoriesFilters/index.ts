import { makeVar } from '@apollo/client'
import { IProductCategoriesFilters } from './types'

const getInitial = (): IProductCategoriesFilters => ({})

export const productCategoriesFiltersVar = makeVar<IProductCategoriesFilters>(getInitial())
