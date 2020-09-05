import { GraphQLResolveInfo } from 'graphql'
import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } &
  { [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Query = {
  __typename?: 'Query'
  _?: Maybe<Scalars['Boolean']>
  bonuses: Array<Maybe<Bonus>>
  bonus?: Maybe<Bonus>
  companies: Array<Company>
  company?: Maybe<Company>
  discounts: Array<Maybe<Discount>>
  discount?: Maybe<Discount>
  features: Array<Feature>
  feature?: Maybe<Feature>
  orders: Array<Maybe<Order>>
  order?: Maybe<Order>
  params: Array<Maybe<Param>>
  param?: Maybe<Param>
  procurements: Array<Maybe<Procurement>>
  procurement?: Maybe<Procurement>
  products: Array<Product>
  product?: Maybe<Product>
  productCategories: Array<ProductCategory>
  productCategory?: Maybe<ProductCategory>
  promotions: Array<Maybe<Promotion>>
  promotion?: Maybe<Promotion>
}

export type QueryBonusArgs = {
  id: Scalars['ID']
}

export type QueryCompanyArgs = {
  id: Scalars['ID']
}

export type QueryDiscountArgs = {
  id: Scalars['ID']
}

export type QueryFeatureArgs = {
  id: Scalars['ID']
}

export type QueryOrderArgs = {
  id: Scalars['ID']
}

export type QueryParamArgs = {
  id: Scalars['ID']
}

export type QueryProcurementArgs = {
  id: Scalars['ID']
}

export type QueryProductArgs = {
  id: Scalars['ID']
}

export type QueryProductCategoryArgs = {
  id: Scalars['ID']
}

export type QueryPromotionArgs = {
  id: Scalars['ID']
}

export type Mutation = {
  __typename?: 'Mutation'
  _?: Maybe<Scalars['Boolean']>
  createBonus: Bonus
  addOrderBonus: Bonus
  createCompany: CompanySimple
  updateCompany: CompanySimple
  deleteCompany: Scalars['ID']
  createDiscount: Discount
  addProductCategoryDiscount: Discount
  addProductDiscount: Discount
  addFeatureDiscount: Discount
  addOrderDiscount: Discount
  addBonusDiscount: Discount
  createFeature: FeatureSimple
  updateFeature: FeatureSimple
  addProductCategoryFeature: FeatureSimple
  addProductFeature: FeatureSimple
  deleteFeature: Scalars['ID']
  createOrder: Order
  createParam: Param
  createProcurement: Procurement
  addProductProcurement: Procurement
  createProduct: ProductSimple
  updateProduct: ProductSimple
  deleteProduct: Scalars['ID']
  createProductCategory: ProductCategorySimple
  updateProductCategory: ProductCategorySimple
  deleteProductCategory: Scalars['ID']
  createPromotion: Promotion
}

export type MutationCreateBonusArgs = {
  input: BonusInput
}

export type MutationAddOrderBonusArgs = {
  bonusId: Scalars['ID']
  orderId: Scalars['ID']
}

export type MutationCreateCompanyArgs = {
  input: CompanyInput
}

export type MutationUpdateCompanyArgs = {
  id: Scalars['ID']
  input: CompanyInput
}

export type MutationDeleteCompanyArgs = {
  id: Scalars['ID']
}

export type MutationCreateDiscountArgs = {
  input: DiscountInput
}

export type MutationAddProductCategoryDiscountArgs = {
  discountId: Scalars['ID']
  productCategoryId: Scalars['ID']
}

export type MutationAddProductDiscountArgs = {
  discountId: Scalars['ID']
  productId: Scalars['ID']
}

export type MutationAddFeatureDiscountArgs = {
  discountId: Scalars['ID']
  featureId: Scalars['ID']
}

export type MutationAddOrderDiscountArgs = {
  discountId: Scalars['ID']
  orderId: Scalars['ID']
}

export type MutationAddBonusDiscountArgs = {
  discountId: Scalars['ID']
  bonusId: Scalars['ID']
}

export type MutationCreateFeatureArgs = {
  input: FeatureInput
}

export type MutationUpdateFeatureArgs = {
  id: Scalars['ID']
  input: FeatureInput
}

export type MutationAddProductCategoryFeatureArgs = {
  featureId: Scalars['ID']
  productCategoryId: Scalars['ID']
}

export type MutationAddProductFeatureArgs = {
  featureId: Scalars['ID']
  productId: Scalars['ID']
}

export type MutationDeleteFeatureArgs = {
  id: Scalars['ID']
}

export type MutationCreateOrderArgs = {
  input: OrderInput
}

export type MutationCreateParamArgs = {
  input: ParamInput
}

export type MutationCreateProcurementArgs = {
  input: ProcurementInput
}

export type MutationAddProductProcurementArgs = {
  input?: Maybe<ProductProcurementInput>
}

export type MutationCreateProductArgs = {
  input: ProductInput
}

export type MutationUpdateProductArgs = {
  id: Scalars['ID']
  input: ProductInput
}

export type MutationDeleteProductArgs = {
  id: Scalars['ID']
}

export type MutationCreateProductCategoryArgs = {
  input: ProductCategoryInput
}

export type MutationUpdateProductCategoryArgs = {
  id: Scalars['ID']
  input: ProductCategoryInput
}

export type MutationDeleteProductCategoryArgs = {
  id: Scalars['ID']
}

export type MutationCreatePromotionArgs = {
  input: PromotionInput
}

export type Subscription = {
  __typename?: 'Subscription'
  _?: Maybe<Scalars['Boolean']>
}

export type BonusInput = {
  name: Scalars['String']
  slug: Scalars['String']
  conditionsDescription: Scalars['String']
  iconUrl: Scalars['String']
}

export type Bonus = {
  __typename?: 'Bonus'
  id: Scalars['ID']
  name: Scalars['String']
  slug: Scalars['String']
  conditionsDescription: Scalars['String']
  iconUrl: Scalars['String']
  orders: Array<Maybe<Order>>
  discounts: Array<Maybe<Discount>>
}

export type CompanyInput = {
  name: Scalars['String']
  slug: Scalars['String']
}

export type ICompany = {
  id: Scalars['ID']
  name: Scalars['String']
  slug: Scalars['String']
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
}

export type CompanySimple = ICompany & {
  __typename?: 'CompanySimple'
  id: Scalars['ID']
  name: Scalars['String']
  slug: Scalars['String']
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
}

export type Company = ICompany & {
  __typename?: 'Company'
  id: Scalars['ID']
  name: Scalars['String']
  slug: Scalars['String']
  products: Array<Product>
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
}

export type DiscountInput = {
  name: Scalars['String']
  percent?: Maybe<Scalars['Float']>
  rub?: Maybe<Scalars['Float']>
  code?: Maybe<Scalars['String']>
  startDate: Scalars['String']
  endDate: Scalars['String']
  isGlobal?: Maybe<Scalars['Boolean']>
}

export type Discount = {
  __typename?: 'Discount'
  id: Scalars['ID']
  name: Scalars['String']
  percent?: Maybe<Scalars['Float']>
  rub?: Maybe<Scalars['Float']>
  code?: Maybe<Scalars['String']>
  startDate: Scalars['String']
  endDate: Scalars['String']
  isGlobal: Scalars['Boolean']
  productCategories: Array<Maybe<ProductCategory>>
  products: Array<Maybe<Product>>
  features: Array<Maybe<Feature>>
  orders: Array<Maybe<Order>>
  bonuses: Array<Maybe<Bonus>>
}

export type FeatureInput = {
  name: Scalars['String']
  slug: Scalars['String']
  imageUrl: Scalars['String']
  isDisabled?: Maybe<Scalars['Boolean']>
}

export type IFeature = {
  id: Scalars['ID']
  name: Scalars['String']
  slug: Scalars['String']
  imageUrl: Scalars['String']
  isDisabled: Scalars['Boolean']
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
}

export type FeatureSimple = IFeature & {
  __typename?: 'FeatureSimple'
  id: Scalars['ID']
  name: Scalars['String']
  slug: Scalars['String']
  imageUrl: Scalars['String']
  isDisabled: Scalars['Boolean']
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
}

export type Feature = IFeature & {
  __typename?: 'Feature'
  id: Scalars['ID']
  name: Scalars['String']
  slug: Scalars['String']
  imageUrl: Scalars['String']
  isDisabled: Scalars['Boolean']
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
  productCategories: Array<ProductCategory>
  products: Array<Product>
  discounts: Array<Discount>
}

export type OrderInput = {
  address: Scalars['String']
  intercomCode?: Maybe<Scalars['String']>
  personsCount?: Maybe<Scalars['Int']>
  comment?: Maybe<Scalars['String']>
  ourComment?: Maybe<Scalars['String']>
  deliveryTime: Scalars['String']
  phoneNumber: Scalars['String']
  products: Array<Maybe<OrderProductInput>>
}

export enum OrderStatus {
  NotConfirmed = 'NOT_CONFIRMED',
  Confirmed = 'CONFIRMED',
  Canceled = 'CANCELED',
  Sent = 'SENT',
  Failure = 'FAILURE',
  Success = 'SUCCESS',
}

export type OrderProductInput = {
  id: Scalars['ID']
  productsCount: Scalars['Int']
}

export type OrderProduct = {
  __typename?: 'OrderProduct'
  productsCount: Scalars['Int']
  product: Product
  order: Order
}

export type Order = {
  __typename?: 'Order'
  id: Scalars['ID']
  address: Scalars['String']
  status: OrderStatus
  intercomCode?: Maybe<Scalars['String']>
  personsCount?: Maybe<Scalars['Int']>
  comment?: Maybe<Scalars['String']>
  ourComment?: Maybe<Scalars['String']>
  deliveryTime: Scalars['String']
  phoneNumber: Scalars['String']
  discounts: Array<Maybe<Discount>>
  bonuses: Array<Maybe<Bonus>>
  orderProducts: Array<Maybe<OrderProduct>>
}

export type ParamInput = {
  name: Scalars['String']
  slug: Scalars['String']
  value: Scalars['String']
}

export type Param = {
  __typename?: 'Param'
  id: Scalars['ID']
  name: Scalars['String']
  slug: Scalars['String']
  value: Scalars['String']
}

export type ProductProcurementInput = {
  productId: Scalars['ID']
  procurementId: Scalars['ID']
  count: Scalars['Int']
  costs: Scalars['Float']
}

export type ProcurementInput = {
  nextStatusDate?: Maybe<Scalars['String']>
  deliveryCost?: Maybe<Scalars['Float']>
}

export type ProductProcurement = {
  __typename?: 'ProductProcurement'
  count: Scalars['Int']
  costs: Scalars['Float']
  procurement: Procurement
  product: Product
}

export type Procurement = {
  __typename?: 'Procurement'
  id: Scalars['ID']
  status: Scalars['String']
  nextStatusDate?: Maybe<Scalars['String']>
  deliveryCost?: Maybe<Scalars['Float']>
  productProcurements: Array<Maybe<ProductProcurement>>
}

export type ProductInput = {
  name: Scalars['String']
  slug: Scalars['String']
  description: Scalars['String']
  imageUrl: Scalars['String']
  price: Scalars['Float']
  productCategoryId: Scalars['ID']
  companyId: Scalars['ID']
  features?: Maybe<Array<Scalars['ID']>>
}

export type IProduct = {
  id: Scalars['ID']
  name: Scalars['String']
  slug: Scalars['String']
  description: Scalars['String']
  imageUrl: Scalars['String']
  price: Scalars['Float']
  count: Scalars['Int']
  productCategoryId: Scalars['ID']
  companyId: Scalars['ID']
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
}

export type ProductSimple = IProduct & {
  __typename?: 'ProductSimple'
  id: Scalars['ID']
  name: Scalars['String']
  slug: Scalars['String']
  description: Scalars['String']
  imageUrl: Scalars['String']
  price: Scalars['Float']
  count: Scalars['Int']
  productCategoryId: Scalars['ID']
  companyId: Scalars['ID']
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
}

export type Product = IProduct & {
  __typename?: 'Product'
  id: Scalars['ID']
  name: Scalars['String']
  slug: Scalars['String']
  description: Scalars['String']
  imageUrl: Scalars['String']
  price: Scalars['Float']
  count: Scalars['Int']
  productCategoryId: Scalars['ID']
  companyId: Scalars['ID']
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
  company?: Maybe<Company>
  productCategory?: Maybe<ProductCategory>
  features: Array<Feature>
  discounts: Array<Discount>
  orderProducts: Array<OrderProduct>
  productProcurements: Array<ProductProcurement>
}

export type ProductCategoryInput = {
  name: Scalars['String']
  slug: Scalars['String']
  description: Scalars['String']
  features?: Maybe<Array<Scalars['ID']>>
}

export type IProductCategory = {
  id: Scalars['ID']
  name: Scalars['String']
  slug: Scalars['String']
  description: Scalars['String']
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
}

export type ProductCategorySimple = IProductCategory & {
  __typename?: 'ProductCategorySimple'
  id: Scalars['ID']
  name: Scalars['String']
  slug: Scalars['String']
  description: Scalars['String']
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
}

export type ProductCategory = IProductCategory & {
  __typename?: 'ProductCategory'
  id: Scalars['ID']
  name: Scalars['String']
  slug: Scalars['String']
  description: Scalars['String']
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
  products: Array<Product>
  features: Array<Feature>
  discounts: Array<Discount>
}

export type PromotionInput = {
  name: Scalars['String']
  description: Scalars['String']
  imageUrl: Scalars['String']
  startDate: Scalars['String']
  endDate: Scalars['String']
  priority: Scalars['Int']
}

export type Promotion = {
  __typename?: 'Promotion'
  id: Scalars['ID']
  name: Scalars['String']
  description: Scalars['String']
  imageUrl: Scalars['String']
  startDate: Scalars['String']
  endDate: Scalars['String']
  priority: Scalars['Int']
}

type CompanyMinimum_CompanySimple_Fragment = { __typename?: 'CompanySimple' } & Pick<CompanySimple, 'id' | 'name'>

type CompanyMinimum_Company_Fragment = { __typename?: 'Company' } & Pick<Company, 'id' | 'name'>

export type CompanyMinimumFragment = CompanyMinimum_CompanySimple_Fragment | CompanyMinimum_Company_Fragment

type CompanySimple_CompanySimple_Fragment = { __typename?: 'CompanySimple' } & Pick<
  CompanySimple,
  'id' | 'name' | 'slug' | 'createdAt' | 'updatedAt'
>

type CompanySimple_Company_Fragment = { __typename?: 'Company' } & Pick<
  Company,
  'id' | 'name' | 'slug' | 'createdAt' | 'updatedAt'
>

export type CompanySimpleFragment = CompanySimple_CompanySimple_Fragment | CompanySimple_Company_Fragment

type FeatureMinimum_FeatureSimple_Fragment = { __typename?: 'FeatureSimple' } & Pick<
  FeatureSimple,
  'id' | 'name' | 'imageUrl' | 'isDisabled'
>

type FeatureMinimum_Feature_Fragment = { __typename?: 'Feature' } & Pick<
  Feature,
  'id' | 'name' | 'imageUrl' | 'isDisabled'
>

export type FeatureMinimumFragment = FeatureMinimum_FeatureSimple_Fragment | FeatureMinimum_Feature_Fragment

type FeatureSimple_FeatureSimple_Fragment = { __typename?: 'FeatureSimple' } & Pick<
  FeatureSimple,
  'id' | 'slug' | 'name' | 'imageUrl' | 'isDisabled' | 'createdAt' | 'updatedAt'
>

type FeatureSimple_Feature_Fragment = { __typename?: 'Feature' } & Pick<
  Feature,
  'id' | 'slug' | 'name' | 'imageUrl' | 'isDisabled' | 'createdAt' | 'updatedAt'
>

export type FeatureSimpleFragment = FeatureSimple_FeatureSimple_Fragment | FeatureSimple_Feature_Fragment

type ProductMinimum_ProductSimple_Fragment = { __typename?: 'ProductSimple' } & Pick<ProductSimple, 'id' | 'name'>

type ProductMinimum_Product_Fragment = { __typename?: 'Product' } & Pick<Product, 'id' | 'name'>

export type ProductMinimumFragment = ProductMinimum_ProductSimple_Fragment | ProductMinimum_Product_Fragment

type ProductSimple_ProductSimple_Fragment = { __typename?: 'ProductSimple' } & Pick<
  ProductSimple,
  | 'id'
  | 'name'
  | 'slug'
  | 'description'
  | 'imageUrl'
  | 'productCategoryId'
  | 'companyId'
  | 'price'
  | 'count'
  | 'createdAt'
  | 'updatedAt'
>

type ProductSimple_Product_Fragment = { __typename?: 'Product' } & Pick<
  Product,
  | 'id'
  | 'name'
  | 'slug'
  | 'description'
  | 'imageUrl'
  | 'productCategoryId'
  | 'companyId'
  | 'price'
  | 'count'
  | 'createdAt'
  | 'updatedAt'
>

export type ProductSimpleFragment = ProductSimple_ProductSimple_Fragment | ProductSimple_Product_Fragment

type ProductCategoryMinimum_ProductCategorySimple_Fragment = { __typename?: 'ProductCategorySimple' } & Pick<
  ProductCategorySimple,
  'id' | 'name'
>

type ProductCategoryMinimum_ProductCategory_Fragment = { __typename?: 'ProductCategory' } & Pick<
  ProductCategory,
  'id' | 'name'
>

export type ProductCategoryMinimumFragment =
  | ProductCategoryMinimum_ProductCategorySimple_Fragment
  | ProductCategoryMinimum_ProductCategory_Fragment

type ProductCategorySimple_ProductCategorySimple_Fragment = { __typename?: 'ProductCategorySimple' } & Pick<
  ProductCategorySimple,
  'id' | 'name' | 'slug' | 'description' | 'createdAt' | 'updatedAt'
>

type ProductCategorySimple_ProductCategory_Fragment = { __typename?: 'ProductCategory' } & Pick<
  ProductCategory,
  'id' | 'name' | 'slug' | 'description' | 'createdAt' | 'updatedAt'
>

export type ProductCategorySimpleFragment =
  | ProductCategorySimple_ProductCategorySimple_Fragment
  | ProductCategorySimple_ProductCategory_Fragment

export type CreateCompanyMutationVariables = Exact<{
  input: CompanyInput
}>

export type CreateCompanyMutation = { __typename?: 'Mutation' } & {
  createCompany: { __typename?: 'CompanySimple' } & CompanySimple_CompanySimple_Fragment
}

export type DeleteCompanyMutationVariables = Exact<{
  id: Scalars['ID']
}>

export type DeleteCompanyMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'deleteCompany'>

export type UpdateCompanyMutationVariables = Exact<{
  id: Scalars['ID']
  input: CompanyInput
}>

export type UpdateCompanyMutation = { __typename?: 'Mutation' } & {
  updateCompany: { __typename?: 'CompanySimple' } & CompanySimple_CompanySimple_Fragment
}

export type CreateFeatureMutationVariables = Exact<{
  input: FeatureInput
}>

export type CreateFeatureMutation = { __typename?: 'Mutation' } & {
  createFeature: { __typename?: 'FeatureSimple' } & FeatureSimple_FeatureSimple_Fragment
}

export type DeleteFeatureMutationVariables = Exact<{
  id: Scalars['ID']
}>

export type DeleteFeatureMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'deleteFeature'>

export type UpdateFeatureMutationVariables = Exact<{
  id: Scalars['ID']
  input: FeatureInput
}>

export type UpdateFeatureMutation = { __typename?: 'Mutation' } & {
  updateFeature: { __typename?: 'FeatureSimple' } & FeatureSimple_FeatureSimple_Fragment
}

export type CreateProductMutationVariables = Exact<{
  input: ProductInput
}>

export type CreateProductMutation = { __typename?: 'Mutation' } & {
  createProduct: { __typename?: 'ProductSimple' } & ProductSimple_ProductSimple_Fragment
}

export type DeleteProductMutationVariables = Exact<{
  id: Scalars['ID']
}>

export type DeleteProductMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'deleteProduct'>

export type UpdateProductMutationVariables = Exact<{
  id: Scalars['ID']
  input: ProductInput
}>

export type UpdateProductMutation = { __typename?: 'Mutation' } & {
  updateProduct: { __typename?: 'ProductSimple' } & ProductSimple_ProductSimple_Fragment
}

export type CreateProductCategoryMutationVariables = Exact<{
  input: ProductCategoryInput
}>

export type CreateProductCategoryMutation = { __typename?: 'Mutation' } & {
  createProductCategory: { __typename?: 'ProductCategorySimple' } & ProductCategorySimple_ProductCategorySimple_Fragment
}

export type DeleteProductCategoryMutationVariables = Exact<{
  id: Scalars['ID']
}>

export type DeleteProductCategoryMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'deleteProductCategory'>

export type UpdateProductCategoryMutationVariables = Exact<{
  id: Scalars['ID']
  input: ProductCategoryInput
}>

export type UpdateProductCategoryMutation = { __typename?: 'Mutation' } & {
  updateProductCategory: { __typename?: 'ProductCategorySimple' } & ProductCategorySimple_ProductCategorySimple_Fragment
}

export type CompanyMinimumListQueryVariables = Exact<{ [key: string]: never }>

export type CompanyMinimumListQuery = { __typename?: 'Query' } & {
  companies: Array<{ __typename?: 'Company' } & CompanyMinimum_Company_Fragment>
}

export type CompanySimpleItemQueryVariables = Exact<{
  id: Scalars['ID']
}>

export type CompanySimpleItemQuery = { __typename?: 'Query' } & {
  company?: Maybe<{ __typename?: 'Company' } & CompanySimple_Company_Fragment>
}

export type CompanySimpleListQueryVariables = Exact<{ [key: string]: never }>

export type CompanySimpleListQuery = { __typename?: 'Query' } & {
  companies: Array<{ __typename?: 'Company' } & CompanySimple_Company_Fragment>
}

export type FeatureMinimumListQueryVariables = Exact<{ [key: string]: never }>

export type FeatureMinimumListQuery = { __typename?: 'Query' } & {
  features: Array<{ __typename?: 'Feature' } & FeatureMinimum_Feature_Fragment>
}

export type ProductSimpleItemQueryVariables = Exact<{
  id: Scalars['ID']
}>

export type ProductSimpleItemQuery = { __typename?: 'Query' } & {
  product?: Maybe<{ __typename?: 'Product' } & ProductSimple_Product_Fragment>
}

export type ProductSimpleListQueryVariables = Exact<{ [key: string]: never }>

export type ProductSimpleListQuery = { __typename?: 'Query' } & {
  products: Array<{ __typename?: 'Product' } & ProductSimple_Product_Fragment>
}

export type ProductCategoryMinimumListQueryVariables = Exact<{ [key: string]: never }>

export type ProductCategoryMinimumListQuery = { __typename?: 'Query' } & {
  productCategories: Array<{ __typename?: 'ProductCategory' } & ProductCategoryMinimum_ProductCategory_Fragment>
}

export type CompanyListPageFragment = { __typename?: 'Company' } & Pick<Company, 'slug' | 'createdAt'> & {
    products: Array<{ __typename?: 'Product' } & ProductMinimum_Product_Fragment>
  } & CompanyMinimum_Company_Fragment

export type CompanyListPageQueryVariables = Exact<{ [key: string]: never }>

export type CompanyListPageQuery = { __typename?: 'Query' } & {
  companies: Array<{ __typename?: 'Company' } & CompanyListPageFragment>
}

export type CompanyItemPageFragment = { __typename?: 'Company' } & {
  products: Array<{ __typename?: 'Product' } & Pick<Product, 'price' | 'count'> & ProductMinimum_Product_Fragment>
} & CompanySimple_Company_Fragment

export type CompanyItemPageQueryVariables = Exact<{
  id: Scalars['ID']
}>

export type CompanyItemPageQuery = { __typename?: 'Query' } & {
  company?: Maybe<{ __typename?: 'Company' } & CompanyItemPageFragment>
}

export type FeatureItemPageFragment = { __typename?: 'Feature' } & FeatureSimple_Feature_Fragment

export type FeatureItemPageQueryVariables = Exact<{
  id: Scalars['ID']
}>

export type FeatureItemPageQuery = { __typename?: 'Query' } & {
  feature?: Maybe<{ __typename?: 'Feature' } & FeatureItemPageFragment>
}

export type FeatureListPageFragment = { __typename?: 'Feature' } & Pick<
  Feature,
  'id' | 'name' | 'slug' | 'imageUrl' | 'isDisabled' | 'createdAt'
>

export type FeatureListPageQueryVariables = Exact<{ [key: string]: never }>

export type FeatureListPageQuery = { __typename?: 'Query' } & {
  features: Array<{ __typename?: 'Feature' } & FeatureListPageFragment>
}

export type ProductItemPageFragment = { __typename?: 'Product' } & {
  productCategory?: Maybe<
    { __typename?: 'ProductCategory' } & {
      features: Array<{ __typename?: 'Feature' } & FeatureMinimum_Feature_Fragment>
    } & ProductCategoryMinimum_ProductCategory_Fragment
  >
  company?: Maybe<{ __typename?: 'Company' } & CompanyMinimum_Company_Fragment>
  features: Array<{ __typename?: 'Feature' } & FeatureMinimum_Feature_Fragment>
} & ProductSimple_Product_Fragment

export type ProductItemPageQueryVariables = Exact<{
  id: Scalars['ID']
}>

export type ProductItemPageQuery = { __typename?: 'Query' } & {
  product?: Maybe<{ __typename?: 'Product' } & ProductItemPageFragment>
}

export type ProductsListPageFragment = { __typename?: 'Product' } & Pick<
  Product,
  'slug' | 'productCategoryId' | 'companyId' | 'price' | 'count' | 'createdAt'
> & {
    productCategory?: Maybe<{ __typename?: 'ProductCategory' } & ProductCategoryMinimum_ProductCategory_Fragment>
    company?: Maybe<{ __typename?: 'Company' } & CompanyMinimum_Company_Fragment>
    features: Array<{ __typename?: 'Feature' } & FeatureMinimum_Feature_Fragment>
  } & ProductMinimum_Product_Fragment

export type ProductsListPageQueryVariables = Exact<{ [key: string]: never }>

export type ProductsListPageQuery = { __typename?: 'Query' } & {
  products: Array<{ __typename?: 'Product' } & ProductsListPageFragment>
}

export type ProductCategoryListPageFragment = { __typename?: 'ProductCategory' } & Pick<
  ProductCategory,
  'slug' | 'createdAt'
> & {
    features: Array<{ __typename?: 'Feature' } & FeatureMinimum_Feature_Fragment>
  } & ProductCategoryMinimum_ProductCategory_Fragment

export type ProductCategoryListPageQueryVariables = Exact<{ [key: string]: never }>

export type ProductCategoryListPageQuery = { __typename?: 'Query' } & {
  productCategories: Array<{ __typename?: 'ProductCategory' } & ProductCategoryListPageFragment>
}

export type ProductCategoryItemPageFragment = { __typename?: 'ProductCategory' } & {
  products: Array<{ __typename?: 'Product' } & Pick<Product, 'price' | 'count'> & ProductMinimum_Product_Fragment>
  features: Array<{ __typename?: 'Feature' } & FeatureMinimum_Feature_Fragment>
} & ProductCategorySimple_ProductCategory_Fragment

export type ProductCategoryItemPageQueryVariables = Exact<{
  id: Scalars['ID']
}>

export type ProductCategoryItemPageQuery = { __typename?: 'Query' } & {
  productCategory?: Maybe<{ __typename?: 'ProductCategory' } & ProductCategoryItemPageFragment>
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  ID: ResolverTypeWrapper<Scalars['ID']>
  Mutation: ResolverTypeWrapper<{}>
  Subscription: ResolverTypeWrapper<{}>
  BonusInput: BonusInput
  String: ResolverTypeWrapper<Scalars['String']>
  Bonus: ResolverTypeWrapper<Bonus>
  CompanyInput: CompanyInput
  ICompany: ResolversTypes['CompanySimple'] | ResolversTypes['Company']
  CompanySimple: ResolverTypeWrapper<CompanySimple>
  Company: ResolverTypeWrapper<Company>
  DiscountInput: DiscountInput
  Float: ResolverTypeWrapper<Scalars['Float']>
  Discount: ResolverTypeWrapper<Discount>
  FeatureInput: FeatureInput
  IFeature: ResolversTypes['FeatureSimple'] | ResolversTypes['Feature']
  FeatureSimple: ResolverTypeWrapper<FeatureSimple>
  Feature: ResolverTypeWrapper<Feature>
  OrderInput: OrderInput
  Int: ResolverTypeWrapper<Scalars['Int']>
  OrderStatus: OrderStatus
  OrderProductInput: OrderProductInput
  OrderProduct: ResolverTypeWrapper<OrderProduct>
  Order: ResolverTypeWrapper<Order>
  ParamInput: ParamInput
  Param: ResolverTypeWrapper<Param>
  ProductProcurementInput: ProductProcurementInput
  ProcurementInput: ProcurementInput
  ProductProcurement: ResolverTypeWrapper<ProductProcurement>
  Procurement: ResolverTypeWrapper<Procurement>
  ProductInput: ProductInput
  IProduct: ResolversTypes['ProductSimple'] | ResolversTypes['Product']
  ProductSimple: ResolverTypeWrapper<ProductSimple>
  Product: ResolverTypeWrapper<Product>
  ProductCategoryInput: ProductCategoryInput
  IProductCategory: ResolversTypes['ProductCategorySimple'] | ResolversTypes['ProductCategory']
  ProductCategorySimple: ResolverTypeWrapper<ProductCategorySimple>
  ProductCategory: ResolverTypeWrapper<ProductCategory>
  PromotionInput: PromotionInput
  Promotion: ResolverTypeWrapper<Promotion>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {}
  Boolean: Scalars['Boolean']
  ID: Scalars['ID']
  Mutation: {}
  Subscription: {}
  BonusInput: BonusInput
  String: Scalars['String']
  Bonus: Bonus
  CompanyInput: CompanyInput
  ICompany: ResolversParentTypes['CompanySimple'] | ResolversParentTypes['Company']
  CompanySimple: CompanySimple
  Company: Company
  DiscountInput: DiscountInput
  Float: Scalars['Float']
  Discount: Discount
  FeatureInput: FeatureInput
  IFeature: ResolversParentTypes['FeatureSimple'] | ResolversParentTypes['Feature']
  FeatureSimple: FeatureSimple
  Feature: Feature
  OrderInput: OrderInput
  Int: Scalars['Int']
  OrderProductInput: OrderProductInput
  OrderProduct: OrderProduct
  Order: Order
  ParamInput: ParamInput
  Param: Param
  ProductProcurementInput: ProductProcurementInput
  ProcurementInput: ProcurementInput
  ProductProcurement: ProductProcurement
  Procurement: Procurement
  ProductInput: ProductInput
  IProduct: ResolversParentTypes['ProductSimple'] | ResolversParentTypes['Product']
  ProductSimple: ProductSimple
  Product: Product
  ProductCategoryInput: ProductCategoryInput
  IProductCategory: ResolversParentTypes['ProductCategorySimple'] | ResolversParentTypes['ProductCategory']
  ProductCategorySimple: ProductCategorySimple
  ProductCategory: ProductCategory
  PromotionInput: PromotionInput
  Promotion: Promotion
}

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  bonuses?: Resolver<Array<Maybe<ResolversTypes['Bonus']>>, ParentType, ContextType>
  bonus?: Resolver<Maybe<ResolversTypes['Bonus']>, ParentType, ContextType, RequireFields<QueryBonusArgs, 'id'>>
  companies?: Resolver<Array<ResolversTypes['Company']>, ParentType, ContextType>
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType, RequireFields<QueryCompanyArgs, 'id'>>
  discounts?: Resolver<Array<Maybe<ResolversTypes['Discount']>>, ParentType, ContextType>
  discount?: Resolver<
    Maybe<ResolversTypes['Discount']>,
    ParentType,
    ContextType,
    RequireFields<QueryDiscountArgs, 'id'>
  >
  features?: Resolver<Array<ResolversTypes['Feature']>, ParentType, ContextType>
  feature?: Resolver<Maybe<ResolversTypes['Feature']>, ParentType, ContextType, RequireFields<QueryFeatureArgs, 'id'>>
  orders?: Resolver<Array<Maybe<ResolversTypes['Order']>>, ParentType, ContextType>
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryOrderArgs, 'id'>>
  params?: Resolver<Array<Maybe<ResolversTypes['Param']>>, ParentType, ContextType>
  param?: Resolver<Maybe<ResolversTypes['Param']>, ParentType, ContextType, RequireFields<QueryParamArgs, 'id'>>
  procurements?: Resolver<Array<Maybe<ResolversTypes['Procurement']>>, ParentType, ContextType>
  procurement?: Resolver<
    Maybe<ResolversTypes['Procurement']>,
    ParentType,
    ContextType,
    RequireFields<QueryProcurementArgs, 'id'>
  >
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'id'>>
  productCategories?: Resolver<Array<ResolversTypes['ProductCategory']>, ParentType, ContextType>
  productCategory?: Resolver<
    Maybe<ResolversTypes['ProductCategory']>,
    ParentType,
    ContextType,
    RequireFields<QueryProductCategoryArgs, 'id'>
  >
  promotions?: Resolver<Array<Maybe<ResolversTypes['Promotion']>>, ParentType, ContextType>
  promotion?: Resolver<
    Maybe<ResolversTypes['Promotion']>,
    ParentType,
    ContextType,
    RequireFields<QueryPromotionArgs, 'id'>
  >
}

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  createBonus?: Resolver<
    ResolversTypes['Bonus'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateBonusArgs, 'input'>
  >
  addOrderBonus?: Resolver<
    ResolversTypes['Bonus'],
    ParentType,
    ContextType,
    RequireFields<MutationAddOrderBonusArgs, 'bonusId' | 'orderId'>
  >
  createCompany?: Resolver<
    ResolversTypes['CompanySimple'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateCompanyArgs, 'input'>
  >
  updateCompany?: Resolver<
    ResolversTypes['CompanySimple'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCompanyArgs, 'id' | 'input'>
  >
  deleteCompany?: Resolver<
    ResolversTypes['ID'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCompanyArgs, 'id'>
  >
  createDiscount?: Resolver<
    ResolversTypes['Discount'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateDiscountArgs, 'input'>
  >
  addProductCategoryDiscount?: Resolver<
    ResolversTypes['Discount'],
    ParentType,
    ContextType,
    RequireFields<MutationAddProductCategoryDiscountArgs, 'discountId' | 'productCategoryId'>
  >
  addProductDiscount?: Resolver<
    ResolversTypes['Discount'],
    ParentType,
    ContextType,
    RequireFields<MutationAddProductDiscountArgs, 'discountId' | 'productId'>
  >
  addFeatureDiscount?: Resolver<
    ResolversTypes['Discount'],
    ParentType,
    ContextType,
    RequireFields<MutationAddFeatureDiscountArgs, 'discountId' | 'featureId'>
  >
  addOrderDiscount?: Resolver<
    ResolversTypes['Discount'],
    ParentType,
    ContextType,
    RequireFields<MutationAddOrderDiscountArgs, 'discountId' | 'orderId'>
  >
  addBonusDiscount?: Resolver<
    ResolversTypes['Discount'],
    ParentType,
    ContextType,
    RequireFields<MutationAddBonusDiscountArgs, 'discountId' | 'bonusId'>
  >
  createFeature?: Resolver<
    ResolversTypes['FeatureSimple'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateFeatureArgs, 'input'>
  >
  updateFeature?: Resolver<
    ResolversTypes['FeatureSimple'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateFeatureArgs, 'id' | 'input'>
  >
  addProductCategoryFeature?: Resolver<
    ResolversTypes['FeatureSimple'],
    ParentType,
    ContextType,
    RequireFields<MutationAddProductCategoryFeatureArgs, 'featureId' | 'productCategoryId'>
  >
  addProductFeature?: Resolver<
    ResolversTypes['FeatureSimple'],
    ParentType,
    ContextType,
    RequireFields<MutationAddProductFeatureArgs, 'featureId' | 'productId'>
  >
  deleteFeature?: Resolver<
    ResolversTypes['ID'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteFeatureArgs, 'id'>
  >
  createOrder?: Resolver<
    ResolversTypes['Order'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateOrderArgs, 'input'>
  >
  createParam?: Resolver<
    ResolversTypes['Param'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateParamArgs, 'input'>
  >
  createProcurement?: Resolver<
    ResolversTypes['Procurement'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateProcurementArgs, 'input'>
  >
  addProductProcurement?: Resolver<
    ResolversTypes['Procurement'],
    ParentType,
    ContextType,
    RequireFields<MutationAddProductProcurementArgs, never>
  >
  createProduct?: Resolver<
    ResolversTypes['ProductSimple'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateProductArgs, 'input'>
  >
  updateProduct?: Resolver<
    ResolversTypes['ProductSimple'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateProductArgs, 'id' | 'input'>
  >
  deleteProduct?: Resolver<
    ResolversTypes['ID'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteProductArgs, 'id'>
  >
  createProductCategory?: Resolver<
    ResolversTypes['ProductCategorySimple'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateProductCategoryArgs, 'input'>
  >
  updateProductCategory?: Resolver<
    ResolversTypes['ProductCategorySimple'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateProductCategoryArgs, 'id' | 'input'>
  >
  deleteProductCategory?: Resolver<
    ResolversTypes['ID'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteProductCategoryArgs, 'id'>
  >
  createPromotion?: Resolver<
    ResolversTypes['Promotion'],
    ParentType,
    ContextType,
    RequireFields<MutationCreatePromotionArgs, 'input'>
  >
}

export type SubscriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']
> = {
  _?: SubscriptionResolver<Maybe<ResolversTypes['Boolean']>, '_', ParentType, ContextType>
}

export type BonusResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Bonus'] = ResolversParentTypes['Bonus']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  conditionsDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  iconUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  orders?: Resolver<Array<Maybe<ResolversTypes['Order']>>, ParentType, ContextType>
  discounts?: Resolver<Array<Maybe<ResolversTypes['Discount']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType>
}

export type ICompanyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ICompany'] = ResolversParentTypes['ICompany']
> = {
  __resolveType: TypeResolveFn<'CompanySimple' | 'Company', ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
}

export type CompanySimpleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CompanySimple'] = ResolversParentTypes['CompanySimple']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType>
}

export type CompanyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType>
}

export type DiscountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Discount'] = ResolversParentTypes['Discount']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  rub?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  startDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  endDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  isGlobal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  productCategories?: Resolver<Array<Maybe<ResolversTypes['ProductCategory']>>, ParentType, ContextType>
  products?: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType>
  features?: Resolver<Array<Maybe<ResolversTypes['Feature']>>, ParentType, ContextType>
  orders?: Resolver<Array<Maybe<ResolversTypes['Order']>>, ParentType, ContextType>
  bonuses?: Resolver<Array<Maybe<ResolversTypes['Bonus']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType>
}

export type IFeatureResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['IFeature'] = ResolversParentTypes['IFeature']
> = {
  __resolveType: TypeResolveFn<'FeatureSimple' | 'Feature', ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  isDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
}

export type FeatureSimpleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FeatureSimple'] = ResolversParentTypes['FeatureSimple']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  isDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType>
}

export type FeatureResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Feature'] = ResolversParentTypes['Feature']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  isDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  productCategories?: Resolver<Array<ResolversTypes['ProductCategory']>, ParentType, ContextType>
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>
  discounts?: Resolver<Array<ResolversTypes['Discount']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType>
}

export type OrderProductResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['OrderProduct'] = ResolversParentTypes['OrderProduct']
> = {
  productsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType>
}

export type OrderResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  status?: Resolver<ResolversTypes['OrderStatus'], ParentType, ContextType>
  intercomCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  personsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  ourComment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  deliveryTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  phoneNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  discounts?: Resolver<Array<Maybe<ResolversTypes['Discount']>>, ParentType, ContextType>
  bonuses?: Resolver<Array<Maybe<ResolversTypes['Bonus']>>, ParentType, ContextType>
  orderProducts?: Resolver<Array<Maybe<ResolversTypes['OrderProduct']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType>
}

export type ParamResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Param'] = ResolversParentTypes['Param']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType>
}

export type ProductProcurementResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProductProcurement'] = ResolversParentTypes['ProductProcurement']
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  costs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  procurement?: Resolver<ResolversTypes['Procurement'], ParentType, ContextType>
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType>
}

export type ProcurementResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Procurement'] = ResolversParentTypes['Procurement']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  nextStatusDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  deliveryCost?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  productProcurements?: Resolver<Array<Maybe<ResolversTypes['ProductProcurement']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType>
}

export type IProductResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['IProduct'] = ResolversParentTypes['IProduct']
> = {
  __resolveType: TypeResolveFn<'ProductSimple' | 'Product', ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  productCategoryId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  companyId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
}

export type ProductSimpleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProductSimple'] = ResolversParentTypes['ProductSimple']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  productCategoryId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  companyId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType>
}

export type ProductResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  productCategoryId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  companyId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>
  productCategory?: Resolver<Maybe<ResolversTypes['ProductCategory']>, ParentType, ContextType>
  features?: Resolver<Array<ResolversTypes['Feature']>, ParentType, ContextType>
  discounts?: Resolver<Array<ResolversTypes['Discount']>, ParentType, ContextType>
  orderProducts?: Resolver<Array<ResolversTypes['OrderProduct']>, ParentType, ContextType>
  productProcurements?: Resolver<Array<ResolversTypes['ProductProcurement']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType>
}

export type IProductCategoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['IProductCategory'] = ResolversParentTypes['IProductCategory']
> = {
  __resolveType: TypeResolveFn<'ProductCategorySimple' | 'ProductCategory', ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
}

export type ProductCategorySimpleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProductCategorySimple'] = ResolversParentTypes['ProductCategorySimple']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType>
}

export type ProductCategoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProductCategory'] = ResolversParentTypes['ProductCategory']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>
  features?: Resolver<Array<ResolversTypes['Feature']>, ParentType, ContextType>
  discounts?: Resolver<Array<ResolversTypes['Discount']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType>
}

export type PromotionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Promotion'] = ResolversParentTypes['Promotion']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  startDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  endDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  priority?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType>
}

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
  Subscription?: SubscriptionResolvers<ContextType>
  Bonus?: BonusResolvers<ContextType>
  ICompany?: ICompanyResolvers<ContextType>
  CompanySimple?: CompanySimpleResolvers<ContextType>
  Company?: CompanyResolvers<ContextType>
  Discount?: DiscountResolvers<ContextType>
  IFeature?: IFeatureResolvers<ContextType>
  FeatureSimple?: FeatureSimpleResolvers<ContextType>
  Feature?: FeatureResolvers<ContextType>
  OrderProduct?: OrderProductResolvers<ContextType>
  Order?: OrderResolvers<ContextType>
  Param?: ParamResolvers<ContextType>
  ProductProcurement?: ProductProcurementResolvers<ContextType>
  Procurement?: ProcurementResolvers<ContextType>
  IProduct?: IProductResolvers<ContextType>
  ProductSimple?: ProductSimpleResolvers<ContextType>
  Product?: ProductResolvers<ContextType>
  IProductCategory?: IProductCategoryResolvers<ContextType>
  ProductCategorySimple?: ProductCategorySimpleResolvers<ContextType>
  ProductCategory?: ProductCategoryResolvers<ContextType>
  Promotion?: PromotionResolvers<ContextType>
}

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>

export const CompanyMinimumFragmentDoc = gql`
  fragment CompanyMinimum on ICompany {
    id
    name
  }
`
export const ProductMinimumFragmentDoc = gql`
  fragment ProductMinimum on IProduct {
    id
    name
  }
`
export const CompanyListPageFragmentDoc = gql`
  fragment CompanyListPage on Company {
    ...CompanyMinimum
    slug
    createdAt
    products {
      ...ProductMinimum
    }
  }
  ${CompanyMinimumFragmentDoc}
  ${ProductMinimumFragmentDoc}
`
export const CompanySimpleFragmentDoc = gql`
  fragment CompanySimple on ICompany {
    id
    name
    slug
    createdAt
    updatedAt
  }
`
export const CompanyItemPageFragmentDoc = gql`
  fragment CompanyItemPage on Company {
    ...CompanySimple
    products {
      ...ProductMinimum
      price
      count
    }
  }
  ${CompanySimpleFragmentDoc}
  ${ProductMinimumFragmentDoc}
`
export const FeatureSimpleFragmentDoc = gql`
  fragment FeatureSimple on IFeature {
    id
    slug
    name
    imageUrl
    isDisabled
    createdAt
    updatedAt
  }
`
export const FeatureItemPageFragmentDoc = gql`
  fragment FeatureItemPage on Feature {
    ...FeatureSimple
  }
  ${FeatureSimpleFragmentDoc}
`
export const FeatureListPageFragmentDoc = gql`
  fragment FeatureListPage on Feature {
    id
    name
    slug
    imageUrl
    isDisabled
    createdAt
  }
`
export const ProductSimpleFragmentDoc = gql`
  fragment ProductSimple on IProduct {
    id
    name
    slug
    description
    imageUrl
    productCategoryId
    companyId
    price
    count
    createdAt
    updatedAt
  }
`
export const ProductCategoryMinimumFragmentDoc = gql`
  fragment ProductCategoryMinimum on IProductCategory {
    id
    name
  }
`
export const FeatureMinimumFragmentDoc = gql`
  fragment FeatureMinimum on IFeature {
    id
    name
    imageUrl
    isDisabled
  }
`
export const ProductItemPageFragmentDoc = gql`
  fragment ProductItemPage on Product {
    ...ProductSimple
    productCategory {
      ...ProductCategoryMinimum
      features {
        ...FeatureMinimum
      }
    }
    company {
      ...CompanyMinimum
    }
    features {
      ...FeatureMinimum
    }
  }
  ${ProductSimpleFragmentDoc}
  ${ProductCategoryMinimumFragmentDoc}
  ${FeatureMinimumFragmentDoc}
  ${CompanyMinimumFragmentDoc}
`
export const ProductsListPageFragmentDoc = gql`
  fragment ProductsListPage on Product {
    ...ProductMinimum
    slug
    productCategoryId
    companyId
    price
    count
    createdAt
    productCategory {
      ...ProductCategoryMinimum
    }
    company {
      ...CompanyMinimum
    }
    features {
      ...FeatureMinimum
    }
  }
  ${ProductMinimumFragmentDoc}
  ${ProductCategoryMinimumFragmentDoc}
  ${CompanyMinimumFragmentDoc}
  ${FeatureMinimumFragmentDoc}
`
export const ProductCategoryListPageFragmentDoc = gql`
  fragment ProductCategoryListPage on ProductCategory {
    ...ProductCategoryMinimum
    slug
    createdAt
    features {
      ...FeatureMinimum
    }
  }
  ${ProductCategoryMinimumFragmentDoc}
  ${FeatureMinimumFragmentDoc}
`
export const ProductCategorySimpleFragmentDoc = gql`
  fragment ProductCategorySimple on IProductCategory {
    id
    name
    slug
    description
    createdAt
    updatedAt
  }
`
export const ProductCategoryItemPageFragmentDoc = gql`
  fragment ProductCategoryItemPage on ProductCategory {
    ...ProductCategorySimple
    products {
      ...ProductMinimum
      price
      count
    }
    features {
      ...FeatureMinimum
    }
  }
  ${ProductCategorySimpleFragmentDoc}
  ${ProductMinimumFragmentDoc}
  ${FeatureMinimumFragmentDoc}
`
export const CreateCompanyDocument = gql`
  mutation createCompany($input: CompanyInput!) {
    createCompany(input: $input) {
      ...CompanySimple
    }
  }
  ${CompanySimpleFragmentDoc}
`
export type CreateCompanyMutationFn = Apollo.MutationFunction<CreateCompanyMutation, CreateCompanyMutationVariables>

/**
 * __useCreateCompanyMutation__
 *
 * To run a mutation, you first call `useCreateCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCompanyMutation, { data, loading, error }] = useCreateCompanyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCompanyMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateCompanyMutation, CreateCompanyMutationVariables>
) {
  return Apollo.useMutation<CreateCompanyMutation, CreateCompanyMutationVariables>(CreateCompanyDocument, baseOptions)
}
export type CreateCompanyMutationHookResult = ReturnType<typeof useCreateCompanyMutation>
export type CreateCompanyMutationResult = Apollo.MutationResult<CreateCompanyMutation>
export type CreateCompanyMutationOptions = Apollo.BaseMutationOptions<
  CreateCompanyMutation,
  CreateCompanyMutationVariables
>
export const DeleteCompanyDocument = gql`
  mutation deleteCompany($id: ID!) {
    deleteCompany(id: $id)
  }
`
export type DeleteCompanyMutationFn = Apollo.MutationFunction<DeleteCompanyMutation, DeleteCompanyMutationVariables>

/**
 * __useDeleteCompanyMutation__
 *
 * To run a mutation, you first call `useDeleteCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCompanyMutation, { data, loading, error }] = useDeleteCompanyMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCompanyMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteCompanyMutation, DeleteCompanyMutationVariables>
) {
  return Apollo.useMutation<DeleteCompanyMutation, DeleteCompanyMutationVariables>(DeleteCompanyDocument, baseOptions)
}
export type DeleteCompanyMutationHookResult = ReturnType<typeof useDeleteCompanyMutation>
export type DeleteCompanyMutationResult = Apollo.MutationResult<DeleteCompanyMutation>
export type DeleteCompanyMutationOptions = Apollo.BaseMutationOptions<
  DeleteCompanyMutation,
  DeleteCompanyMutationVariables
>
export const UpdateCompanyDocument = gql`
  mutation updateCompany($id: ID!, $input: CompanyInput!) {
    updateCompany(id: $id, input: $input) {
      ...CompanySimple
    }
  }
  ${CompanySimpleFragmentDoc}
`
export type UpdateCompanyMutationFn = Apollo.MutationFunction<UpdateCompanyMutation, UpdateCompanyMutationVariables>

/**
 * __useUpdateCompanyMutation__
 *
 * To run a mutation, you first call `useUpdateCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCompanyMutation, { data, loading, error }] = useUpdateCompanyMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCompanyMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateCompanyMutation, UpdateCompanyMutationVariables>
) {
  return Apollo.useMutation<UpdateCompanyMutation, UpdateCompanyMutationVariables>(UpdateCompanyDocument, baseOptions)
}
export type UpdateCompanyMutationHookResult = ReturnType<typeof useUpdateCompanyMutation>
export type UpdateCompanyMutationResult = Apollo.MutationResult<UpdateCompanyMutation>
export type UpdateCompanyMutationOptions = Apollo.BaseMutationOptions<
  UpdateCompanyMutation,
  UpdateCompanyMutationVariables
>
export const CreateFeatureDocument = gql`
  mutation createFeature($input: FeatureInput!) {
    createFeature(input: $input) {
      ...FeatureSimple
    }
  }
  ${FeatureSimpleFragmentDoc}
`
export type CreateFeatureMutationFn = Apollo.MutationFunction<CreateFeatureMutation, CreateFeatureMutationVariables>

/**
 * __useCreateFeatureMutation__
 *
 * To run a mutation, you first call `useCreateFeatureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFeatureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFeatureMutation, { data, loading, error }] = useCreateFeatureMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateFeatureMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateFeatureMutation, CreateFeatureMutationVariables>
) {
  return Apollo.useMutation<CreateFeatureMutation, CreateFeatureMutationVariables>(CreateFeatureDocument, baseOptions)
}
export type CreateFeatureMutationHookResult = ReturnType<typeof useCreateFeatureMutation>
export type CreateFeatureMutationResult = Apollo.MutationResult<CreateFeatureMutation>
export type CreateFeatureMutationOptions = Apollo.BaseMutationOptions<
  CreateFeatureMutation,
  CreateFeatureMutationVariables
>
export const DeleteFeatureDocument = gql`
  mutation deleteFeature($id: ID!) {
    deleteFeature(id: $id)
  }
`
export type DeleteFeatureMutationFn = Apollo.MutationFunction<DeleteFeatureMutation, DeleteFeatureMutationVariables>

/**
 * __useDeleteFeatureMutation__
 *
 * To run a mutation, you first call `useDeleteFeatureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFeatureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFeatureMutation, { data, loading, error }] = useDeleteFeatureMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteFeatureMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteFeatureMutation, DeleteFeatureMutationVariables>
) {
  return Apollo.useMutation<DeleteFeatureMutation, DeleteFeatureMutationVariables>(DeleteFeatureDocument, baseOptions)
}
export type DeleteFeatureMutationHookResult = ReturnType<typeof useDeleteFeatureMutation>
export type DeleteFeatureMutationResult = Apollo.MutationResult<DeleteFeatureMutation>
export type DeleteFeatureMutationOptions = Apollo.BaseMutationOptions<
  DeleteFeatureMutation,
  DeleteFeatureMutationVariables
>
export const UpdateFeatureDocument = gql`
  mutation updateFeature($id: ID!, $input: FeatureInput!) {
    updateFeature(id: $id, input: $input) {
      ...FeatureSimple
    }
  }
  ${FeatureSimpleFragmentDoc}
`
export type UpdateFeatureMutationFn = Apollo.MutationFunction<UpdateFeatureMutation, UpdateFeatureMutationVariables>

/**
 * __useUpdateFeatureMutation__
 *
 * To run a mutation, you first call `useUpdateFeatureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFeatureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFeatureMutation, { data, loading, error }] = useUpdateFeatureMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateFeatureMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateFeatureMutation, UpdateFeatureMutationVariables>
) {
  return Apollo.useMutation<UpdateFeatureMutation, UpdateFeatureMutationVariables>(UpdateFeatureDocument, baseOptions)
}
export type UpdateFeatureMutationHookResult = ReturnType<typeof useUpdateFeatureMutation>
export type UpdateFeatureMutationResult = Apollo.MutationResult<UpdateFeatureMutation>
export type UpdateFeatureMutationOptions = Apollo.BaseMutationOptions<
  UpdateFeatureMutation,
  UpdateFeatureMutationVariables
>
export const CreateProductDocument = gql`
  mutation createProduct($input: ProductInput!) {
    createProduct(input: $input) {
      ...ProductSimple
    }
  }
  ${ProductSimpleFragmentDoc}
`
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>
) {
  return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, baseOptions)
}
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<
  CreateProductMutation,
  CreateProductMutationVariables
>
export const DeleteProductDocument = gql`
  mutation deleteProduct($id: ID!) {
    deleteProduct(id: $id)
  }
`
export type DeleteProductMutationFn = Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProductMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>
) {
  return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, baseOptions)
}
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<
  DeleteProductMutation,
  DeleteProductMutationVariables
>
export const UpdateProductDocument = gql`
  mutation updateProduct($id: ID!, $input: ProductInput!) {
    updateProduct(id: $id, input: $input) {
      ...ProductSimple
    }
  }
  ${ProductSimpleFragmentDoc}
`
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProductMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>
) {
  return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, baseOptions)
}
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<
  UpdateProductMutation,
  UpdateProductMutationVariables
>
export const CreateProductCategoryDocument = gql`
  mutation createProductCategory($input: ProductCategoryInput!) {
    createProductCategory(input: $input) {
      ...ProductCategorySimple
    }
  }
  ${ProductCategorySimpleFragmentDoc}
`
export type CreateProductCategoryMutationFn = Apollo.MutationFunction<
  CreateProductCategoryMutation,
  CreateProductCategoryMutationVariables
>

/**
 * __useCreateProductCategoryMutation__
 *
 * To run a mutation, you first call `useCreateProductCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductCategoryMutation, { data, loading, error }] = useCreateProductCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateProductCategoryMutation, CreateProductCategoryMutationVariables>
) {
  return Apollo.useMutation<CreateProductCategoryMutation, CreateProductCategoryMutationVariables>(
    CreateProductCategoryDocument,
    baseOptions
  )
}
export type CreateProductCategoryMutationHookResult = ReturnType<typeof useCreateProductCategoryMutation>
export type CreateProductCategoryMutationResult = Apollo.MutationResult<CreateProductCategoryMutation>
export type CreateProductCategoryMutationOptions = Apollo.BaseMutationOptions<
  CreateProductCategoryMutation,
  CreateProductCategoryMutationVariables
>
export const DeleteProductCategoryDocument = gql`
  mutation deleteProductCategory($id: ID!) {
    deleteProductCategory(id: $id)
  }
`
export type DeleteProductCategoryMutationFn = Apollo.MutationFunction<
  DeleteProductCategoryMutation,
  DeleteProductCategoryMutationVariables
>

/**
 * __useDeleteProductCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteProductCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductCategoryMutation, { data, loading, error }] = useDeleteProductCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProductCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteProductCategoryMutation, DeleteProductCategoryMutationVariables>
) {
  return Apollo.useMutation<DeleteProductCategoryMutation, DeleteProductCategoryMutationVariables>(
    DeleteProductCategoryDocument,
    baseOptions
  )
}
export type DeleteProductCategoryMutationHookResult = ReturnType<typeof useDeleteProductCategoryMutation>
export type DeleteProductCategoryMutationResult = Apollo.MutationResult<DeleteProductCategoryMutation>
export type DeleteProductCategoryMutationOptions = Apollo.BaseMutationOptions<
  DeleteProductCategoryMutation,
  DeleteProductCategoryMutationVariables
>
export const UpdateProductCategoryDocument = gql`
  mutation updateProductCategory($id: ID!, $input: ProductCategoryInput!) {
    updateProductCategory(id: $id, input: $input) {
      ...ProductCategorySimple
    }
  }
  ${ProductCategorySimpleFragmentDoc}
`
export type UpdateProductCategoryMutationFn = Apollo.MutationFunction<
  UpdateProductCategoryMutation,
  UpdateProductCategoryMutationVariables
>

/**
 * __useUpdateProductCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateProductCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductCategoryMutation, { data, loading, error }] = useUpdateProductCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProductCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateProductCategoryMutation, UpdateProductCategoryMutationVariables>
) {
  return Apollo.useMutation<UpdateProductCategoryMutation, UpdateProductCategoryMutationVariables>(
    UpdateProductCategoryDocument,
    baseOptions
  )
}
export type UpdateProductCategoryMutationHookResult = ReturnType<typeof useUpdateProductCategoryMutation>
export type UpdateProductCategoryMutationResult = Apollo.MutationResult<UpdateProductCategoryMutation>
export type UpdateProductCategoryMutationOptions = Apollo.BaseMutationOptions<
  UpdateProductCategoryMutation,
  UpdateProductCategoryMutationVariables
>
export const CompanyMinimumListDocument = gql`
  query companyMinimumList {
    companies {
      ...CompanyMinimum
    }
  }
  ${CompanyMinimumFragmentDoc}
`

/**
 * __useCompanyMinimumListQuery__
 *
 * To run a query within a React component, call `useCompanyMinimumListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompanyMinimumListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompanyMinimumListQuery({
 *   variables: {
 *   },
 * });
 */
export function useCompanyMinimumListQuery(
  baseOptions?: Apollo.QueryHookOptions<CompanyMinimumListQuery, CompanyMinimumListQueryVariables>
) {
  return Apollo.useQuery<CompanyMinimumListQuery, CompanyMinimumListQueryVariables>(
    CompanyMinimumListDocument,
    baseOptions
  )
}
export function useCompanyMinimumListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CompanyMinimumListQuery, CompanyMinimumListQueryVariables>
) {
  return Apollo.useLazyQuery<CompanyMinimumListQuery, CompanyMinimumListQueryVariables>(
    CompanyMinimumListDocument,
    baseOptions
  )
}
export type CompanyMinimumListQueryHookResult = ReturnType<typeof useCompanyMinimumListQuery>
export type CompanyMinimumListLazyQueryHookResult = ReturnType<typeof useCompanyMinimumListLazyQuery>
export type CompanyMinimumListQueryResult = Apollo.QueryResult<
  CompanyMinimumListQuery,
  CompanyMinimumListQueryVariables
>
export const CompanySimpleItemDocument = gql`
  query companySimpleItem($id: ID!) {
    company(id: $id) {
      ...CompanySimple
    }
  }
  ${CompanySimpleFragmentDoc}
`

/**
 * __useCompanySimpleItemQuery__
 *
 * To run a query within a React component, call `useCompanySimpleItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompanySimpleItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompanySimpleItemQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCompanySimpleItemQuery(
  baseOptions?: Apollo.QueryHookOptions<CompanySimpleItemQuery, CompanySimpleItemQueryVariables>
) {
  return Apollo.useQuery<CompanySimpleItemQuery, CompanySimpleItemQueryVariables>(
    CompanySimpleItemDocument,
    baseOptions
  )
}
export function useCompanySimpleItemLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CompanySimpleItemQuery, CompanySimpleItemQueryVariables>
) {
  return Apollo.useLazyQuery<CompanySimpleItemQuery, CompanySimpleItemQueryVariables>(
    CompanySimpleItemDocument,
    baseOptions
  )
}
export type CompanySimpleItemQueryHookResult = ReturnType<typeof useCompanySimpleItemQuery>
export type CompanySimpleItemLazyQueryHookResult = ReturnType<typeof useCompanySimpleItemLazyQuery>
export type CompanySimpleItemQueryResult = Apollo.QueryResult<CompanySimpleItemQuery, CompanySimpleItemQueryVariables>
export const CompanySimpleListDocument = gql`
  query companySimpleList {
    companies {
      ...CompanySimple
    }
  }
  ${CompanySimpleFragmentDoc}
`

/**
 * __useCompanySimpleListQuery__
 *
 * To run a query within a React component, call `useCompanySimpleListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompanySimpleListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompanySimpleListQuery({
 *   variables: {
 *   },
 * });
 */
export function useCompanySimpleListQuery(
  baseOptions?: Apollo.QueryHookOptions<CompanySimpleListQuery, CompanySimpleListQueryVariables>
) {
  return Apollo.useQuery<CompanySimpleListQuery, CompanySimpleListQueryVariables>(
    CompanySimpleListDocument,
    baseOptions
  )
}
export function useCompanySimpleListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CompanySimpleListQuery, CompanySimpleListQueryVariables>
) {
  return Apollo.useLazyQuery<CompanySimpleListQuery, CompanySimpleListQueryVariables>(
    CompanySimpleListDocument,
    baseOptions
  )
}
export type CompanySimpleListQueryHookResult = ReturnType<typeof useCompanySimpleListQuery>
export type CompanySimpleListLazyQueryHookResult = ReturnType<typeof useCompanySimpleListLazyQuery>
export type CompanySimpleListQueryResult = Apollo.QueryResult<CompanySimpleListQuery, CompanySimpleListQueryVariables>
export const FeatureMinimumListDocument = gql`
  query featureMinimumList {
    features {
      ...FeatureMinimum
    }
  }
  ${FeatureMinimumFragmentDoc}
`

/**
 * __useFeatureMinimumListQuery__
 *
 * To run a query within a React component, call `useFeatureMinimumListQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeatureMinimumListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeatureMinimumListQuery({
 *   variables: {
 *   },
 * });
 */
export function useFeatureMinimumListQuery(
  baseOptions?: Apollo.QueryHookOptions<FeatureMinimumListQuery, FeatureMinimumListQueryVariables>
) {
  return Apollo.useQuery<FeatureMinimumListQuery, FeatureMinimumListQueryVariables>(
    FeatureMinimumListDocument,
    baseOptions
  )
}
export function useFeatureMinimumListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FeatureMinimumListQuery, FeatureMinimumListQueryVariables>
) {
  return Apollo.useLazyQuery<FeatureMinimumListQuery, FeatureMinimumListQueryVariables>(
    FeatureMinimumListDocument,
    baseOptions
  )
}
export type FeatureMinimumListQueryHookResult = ReturnType<typeof useFeatureMinimumListQuery>
export type FeatureMinimumListLazyQueryHookResult = ReturnType<typeof useFeatureMinimumListLazyQuery>
export type FeatureMinimumListQueryResult = Apollo.QueryResult<
  FeatureMinimumListQuery,
  FeatureMinimumListQueryVariables
>
export const ProductSimpleItemDocument = gql`
  query productSimpleItem($id: ID!) {
    product(id: $id) {
      ...ProductSimple
    }
  }
  ${ProductSimpleFragmentDoc}
`

/**
 * __useProductSimpleItemQuery__
 *
 * To run a query within a React component, call `useProductSimpleItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductSimpleItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductSimpleItemQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductSimpleItemQuery(
  baseOptions?: Apollo.QueryHookOptions<ProductSimpleItemQuery, ProductSimpleItemQueryVariables>
) {
  return Apollo.useQuery<ProductSimpleItemQuery, ProductSimpleItemQueryVariables>(
    ProductSimpleItemDocument,
    baseOptions
  )
}
export function useProductSimpleItemLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProductSimpleItemQuery, ProductSimpleItemQueryVariables>
) {
  return Apollo.useLazyQuery<ProductSimpleItemQuery, ProductSimpleItemQueryVariables>(
    ProductSimpleItemDocument,
    baseOptions
  )
}
export type ProductSimpleItemQueryHookResult = ReturnType<typeof useProductSimpleItemQuery>
export type ProductSimpleItemLazyQueryHookResult = ReturnType<typeof useProductSimpleItemLazyQuery>
export type ProductSimpleItemQueryResult = Apollo.QueryResult<ProductSimpleItemQuery, ProductSimpleItemQueryVariables>
export const ProductSimpleListDocument = gql`
  query productSimpleList {
    products {
      ...ProductSimple
    }
  }
  ${ProductSimpleFragmentDoc}
`

/**
 * __useProductSimpleListQuery__
 *
 * To run a query within a React component, call `useProductSimpleListQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductSimpleListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductSimpleListQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductSimpleListQuery(
  baseOptions?: Apollo.QueryHookOptions<ProductSimpleListQuery, ProductSimpleListQueryVariables>
) {
  return Apollo.useQuery<ProductSimpleListQuery, ProductSimpleListQueryVariables>(
    ProductSimpleListDocument,
    baseOptions
  )
}
export function useProductSimpleListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProductSimpleListQuery, ProductSimpleListQueryVariables>
) {
  return Apollo.useLazyQuery<ProductSimpleListQuery, ProductSimpleListQueryVariables>(
    ProductSimpleListDocument,
    baseOptions
  )
}
export type ProductSimpleListQueryHookResult = ReturnType<typeof useProductSimpleListQuery>
export type ProductSimpleListLazyQueryHookResult = ReturnType<typeof useProductSimpleListLazyQuery>
export type ProductSimpleListQueryResult = Apollo.QueryResult<ProductSimpleListQuery, ProductSimpleListQueryVariables>
export const ProductCategoryMinimumListDocument = gql`
  query productCategoryMinimumList {
    productCategories {
      ...ProductCategoryMinimum
    }
  }
  ${ProductCategoryMinimumFragmentDoc}
`

/**
 * __useProductCategoryMinimumListQuery__
 *
 * To run a query within a React component, call `useProductCategoryMinimumListQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductCategoryMinimumListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductCategoryMinimumListQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductCategoryMinimumListQuery(
  baseOptions?: Apollo.QueryHookOptions<ProductCategoryMinimumListQuery, ProductCategoryMinimumListQueryVariables>
) {
  return Apollo.useQuery<ProductCategoryMinimumListQuery, ProductCategoryMinimumListQueryVariables>(
    ProductCategoryMinimumListDocument,
    baseOptions
  )
}
export function useProductCategoryMinimumListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProductCategoryMinimumListQuery, ProductCategoryMinimumListQueryVariables>
) {
  return Apollo.useLazyQuery<ProductCategoryMinimumListQuery, ProductCategoryMinimumListQueryVariables>(
    ProductCategoryMinimumListDocument,
    baseOptions
  )
}
export type ProductCategoryMinimumListQueryHookResult = ReturnType<typeof useProductCategoryMinimumListQuery>
export type ProductCategoryMinimumListLazyQueryHookResult = ReturnType<typeof useProductCategoryMinimumListLazyQuery>
export type ProductCategoryMinimumListQueryResult = Apollo.QueryResult<
  ProductCategoryMinimumListQuery,
  ProductCategoryMinimumListQueryVariables
>
export const CompanyListPageDocument = gql`
  query companyListPage {
    companies {
      ...CompanyListPage
    }
  }
  ${CompanyListPageFragmentDoc}
`

/**
 * __useCompanyListPageQuery__
 *
 * To run a query within a React component, call `useCompanyListPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompanyListPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompanyListPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useCompanyListPageQuery(
  baseOptions?: Apollo.QueryHookOptions<CompanyListPageQuery, CompanyListPageQueryVariables>
) {
  return Apollo.useQuery<CompanyListPageQuery, CompanyListPageQueryVariables>(CompanyListPageDocument, baseOptions)
}
export function useCompanyListPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CompanyListPageQuery, CompanyListPageQueryVariables>
) {
  return Apollo.useLazyQuery<CompanyListPageQuery, CompanyListPageQueryVariables>(CompanyListPageDocument, baseOptions)
}
export type CompanyListPageQueryHookResult = ReturnType<typeof useCompanyListPageQuery>
export type CompanyListPageLazyQueryHookResult = ReturnType<typeof useCompanyListPageLazyQuery>
export type CompanyListPageQueryResult = Apollo.QueryResult<CompanyListPageQuery, CompanyListPageQueryVariables>
export const CompanyItemPageDocument = gql`
  query companyItemPage($id: ID!) {
    company(id: $id) {
      ...CompanyItemPage
    }
  }
  ${CompanyItemPageFragmentDoc}
`

/**
 * __useCompanyItemPageQuery__
 *
 * To run a query within a React component, call `useCompanyItemPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompanyItemPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompanyItemPageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCompanyItemPageQuery(
  baseOptions?: Apollo.QueryHookOptions<CompanyItemPageQuery, CompanyItemPageQueryVariables>
) {
  return Apollo.useQuery<CompanyItemPageQuery, CompanyItemPageQueryVariables>(CompanyItemPageDocument, baseOptions)
}
export function useCompanyItemPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CompanyItemPageQuery, CompanyItemPageQueryVariables>
) {
  return Apollo.useLazyQuery<CompanyItemPageQuery, CompanyItemPageQueryVariables>(CompanyItemPageDocument, baseOptions)
}
export type CompanyItemPageQueryHookResult = ReturnType<typeof useCompanyItemPageQuery>
export type CompanyItemPageLazyQueryHookResult = ReturnType<typeof useCompanyItemPageLazyQuery>
export type CompanyItemPageQueryResult = Apollo.QueryResult<CompanyItemPageQuery, CompanyItemPageQueryVariables>
export const FeatureItemPageDocument = gql`
  query featureItemPage($id: ID!) {
    feature(id: $id) {
      ...FeatureItemPage
    }
  }
  ${FeatureItemPageFragmentDoc}
`

/**
 * __useFeatureItemPageQuery__
 *
 * To run a query within a React component, call `useFeatureItemPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeatureItemPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeatureItemPageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFeatureItemPageQuery(
  baseOptions?: Apollo.QueryHookOptions<FeatureItemPageQuery, FeatureItemPageQueryVariables>
) {
  return Apollo.useQuery<FeatureItemPageQuery, FeatureItemPageQueryVariables>(FeatureItemPageDocument, baseOptions)
}
export function useFeatureItemPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FeatureItemPageQuery, FeatureItemPageQueryVariables>
) {
  return Apollo.useLazyQuery<FeatureItemPageQuery, FeatureItemPageQueryVariables>(FeatureItemPageDocument, baseOptions)
}
export type FeatureItemPageQueryHookResult = ReturnType<typeof useFeatureItemPageQuery>
export type FeatureItemPageLazyQueryHookResult = ReturnType<typeof useFeatureItemPageLazyQuery>
export type FeatureItemPageQueryResult = Apollo.QueryResult<FeatureItemPageQuery, FeatureItemPageQueryVariables>
export const FeatureListPageDocument = gql`
  query featureListPage {
    features {
      ...FeatureListPage
    }
  }
  ${FeatureListPageFragmentDoc}
`

/**
 * __useFeatureListPageQuery__
 *
 * To run a query within a React component, call `useFeatureListPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeatureListPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeatureListPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useFeatureListPageQuery(
  baseOptions?: Apollo.QueryHookOptions<FeatureListPageQuery, FeatureListPageQueryVariables>
) {
  return Apollo.useQuery<FeatureListPageQuery, FeatureListPageQueryVariables>(FeatureListPageDocument, baseOptions)
}
export function useFeatureListPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FeatureListPageQuery, FeatureListPageQueryVariables>
) {
  return Apollo.useLazyQuery<FeatureListPageQuery, FeatureListPageQueryVariables>(FeatureListPageDocument, baseOptions)
}
export type FeatureListPageQueryHookResult = ReturnType<typeof useFeatureListPageQuery>
export type FeatureListPageLazyQueryHookResult = ReturnType<typeof useFeatureListPageLazyQuery>
export type FeatureListPageQueryResult = Apollo.QueryResult<FeatureListPageQuery, FeatureListPageQueryVariables>
export const ProductItemPageDocument = gql`
  query productItemPage($id: ID!) {
    product(id: $id) {
      ...ProductItemPage
    }
  }
  ${ProductItemPageFragmentDoc}
`

/**
 * __useProductItemPageQuery__
 *
 * To run a query within a React component, call `useProductItemPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductItemPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductItemPageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductItemPageQuery(
  baseOptions?: Apollo.QueryHookOptions<ProductItemPageQuery, ProductItemPageQueryVariables>
) {
  return Apollo.useQuery<ProductItemPageQuery, ProductItemPageQueryVariables>(ProductItemPageDocument, baseOptions)
}
export function useProductItemPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProductItemPageQuery, ProductItemPageQueryVariables>
) {
  return Apollo.useLazyQuery<ProductItemPageQuery, ProductItemPageQueryVariables>(ProductItemPageDocument, baseOptions)
}
export type ProductItemPageQueryHookResult = ReturnType<typeof useProductItemPageQuery>
export type ProductItemPageLazyQueryHookResult = ReturnType<typeof useProductItemPageLazyQuery>
export type ProductItemPageQueryResult = Apollo.QueryResult<ProductItemPageQuery, ProductItemPageQueryVariables>
export const ProductsListPageDocument = gql`
  query productsListPage {
    products {
      ...ProductsListPage
    }
  }
  ${ProductsListPageFragmentDoc}
`

/**
 * __useProductsListPageQuery__
 *
 * To run a query within a React component, call `useProductsListPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsListPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsListPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsListPageQuery(
  baseOptions?: Apollo.QueryHookOptions<ProductsListPageQuery, ProductsListPageQueryVariables>
) {
  return Apollo.useQuery<ProductsListPageQuery, ProductsListPageQueryVariables>(ProductsListPageDocument, baseOptions)
}
export function useProductsListPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProductsListPageQuery, ProductsListPageQueryVariables>
) {
  return Apollo.useLazyQuery<ProductsListPageQuery, ProductsListPageQueryVariables>(
    ProductsListPageDocument,
    baseOptions
  )
}
export type ProductsListPageQueryHookResult = ReturnType<typeof useProductsListPageQuery>
export type ProductsListPageLazyQueryHookResult = ReturnType<typeof useProductsListPageLazyQuery>
export type ProductsListPageQueryResult = Apollo.QueryResult<ProductsListPageQuery, ProductsListPageQueryVariables>
export const ProductCategoryListPageDocument = gql`
  query productCategoryListPage {
    productCategories {
      ...ProductCategoryListPage
    }
  }
  ${ProductCategoryListPageFragmentDoc}
`

/**
 * __useProductCategoryListPageQuery__
 *
 * To run a query within a React component, call `useProductCategoryListPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductCategoryListPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductCategoryListPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductCategoryListPageQuery(
  baseOptions?: Apollo.QueryHookOptions<ProductCategoryListPageQuery, ProductCategoryListPageQueryVariables>
) {
  return Apollo.useQuery<ProductCategoryListPageQuery, ProductCategoryListPageQueryVariables>(
    ProductCategoryListPageDocument,
    baseOptions
  )
}
export function useProductCategoryListPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProductCategoryListPageQuery, ProductCategoryListPageQueryVariables>
) {
  return Apollo.useLazyQuery<ProductCategoryListPageQuery, ProductCategoryListPageQueryVariables>(
    ProductCategoryListPageDocument,
    baseOptions
  )
}
export type ProductCategoryListPageQueryHookResult = ReturnType<typeof useProductCategoryListPageQuery>
export type ProductCategoryListPageLazyQueryHookResult = ReturnType<typeof useProductCategoryListPageLazyQuery>
export type ProductCategoryListPageQueryResult = Apollo.QueryResult<
  ProductCategoryListPageQuery,
  ProductCategoryListPageQueryVariables
>
export const ProductCategoryItemPageDocument = gql`
  query productCategoryItemPage($id: ID!) {
    productCategory(id: $id) {
      ...ProductCategoryItemPage
    }
  }
  ${ProductCategoryItemPageFragmentDoc}
`

/**
 * __useProductCategoryItemPageQuery__
 *
 * To run a query within a React component, call `useProductCategoryItemPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductCategoryItemPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductCategoryItemPageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductCategoryItemPageQuery(
  baseOptions?: Apollo.QueryHookOptions<ProductCategoryItemPageQuery, ProductCategoryItemPageQueryVariables>
) {
  return Apollo.useQuery<ProductCategoryItemPageQuery, ProductCategoryItemPageQueryVariables>(
    ProductCategoryItemPageDocument,
    baseOptions
  )
}
export function useProductCategoryItemPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProductCategoryItemPageQuery, ProductCategoryItemPageQueryVariables>
) {
  return Apollo.useLazyQuery<ProductCategoryItemPageQuery, ProductCategoryItemPageQueryVariables>(
    ProductCategoryItemPageDocument,
    baseOptions
  )
}
export type ProductCategoryItemPageQueryHookResult = ReturnType<typeof useProductCategoryItemPageQuery>
export type ProductCategoryItemPageLazyQueryHookResult = ReturnType<typeof useProductCategoryItemPageLazyQuery>
export type ProductCategoryItemPageQueryResult = Apollo.QueryResult<
  ProductCategoryItemPageQuery,
  ProductCategoryItemPageQueryVariables
>
