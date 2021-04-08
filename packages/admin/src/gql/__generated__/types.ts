import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
};


export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']>;
  bonuses: Array<Maybe<Bonus>>;
  bonus?: Maybe<Bonus>;
  discounts: Array<Maybe<Discount>>;
  discount?: Maybe<Discount>;
  discountByCode?: Maybe<Discount>;
  features: Array<Feature>;
  feature?: Maybe<Feature>;
  orders: Array<Order>;
  order?: Maybe<Order>;
  orderTotal?: Maybe<OrderTotal>;
  params: Array<Maybe<Param>>;
  param?: Maybe<Param>;
  procurements: Array<Procurement>;
  procurement?: Maybe<Procurement>;
  products: Array<Product>;
  productsByIds: Array<Maybe<Product>>;
  productsByCategory: Array<Product>;
  product?: Maybe<Product>;
  productCategories: Array<ProductCategory>;
  productCategory?: Maybe<ProductCategory>;
  productLines: Array<ProductLine>;
  productLine?: Maybe<ProductLine>;
  promotions: Array<Maybe<Promotion>>;
  promotion?: Maybe<Promotion>;
  searchByBarcode: SearchResult;
};


export type QueryBonusArgs = {
  id: Scalars['ID'];
};


export type QueryDiscountArgs = {
  id: Scalars['ID'];
};


export type QueryDiscountByCodeArgs = {
  code: Scalars['String'];
};


export type QueryFeatureArgs = {
  id: Scalars['ID'];
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryOrderTotalArgs = {
  products: Array<OrderProductInput>;
  discountCode?: Maybe<Scalars['String']>;
};


export type QueryParamArgs = {
  id: Scalars['ID'];
};


export type QueryProcurementsArgs = {
  status?: Maybe<ProcurementStatus>;
};


export type QueryProcurementArgs = {
  id: Scalars['ID'];
};


export type QueryProductsByIdsArgs = {
  productIds: Array<Scalars['ID']>;
};


export type QueryProductsByCategoryArgs = {
  categoryIdSlug: Scalars['ID'];
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type QueryProductCategoryArgs = {
  idSlug: Scalars['ID'];
};


export type QueryProductLineArgs = {
  id: Scalars['ID'];
};


export type QueryPromotionArgs = {
  id: Scalars['ID'];
};


export type QuerySearchByBarcodeArgs = {
  barcode: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  createBonus: Bonus;
  addOrderBonus: Bonus;
  createDiscount: Discount;
  addProductCategoryDiscount: Discount;
  addProductDiscount: Discount;
  addFeatureDiscount: Discount;
  addOrderDiscount: Discount;
  addBonusDiscount: Discount;
  createFeature: FeatureSimple;
  updateFeature: FeatureSimple;
  addProductCategoryFeature: FeatureSimple;
  addProductFeature: FeatureSimple;
  deleteFeature: Scalars['ID'];
  createOrder: OrderSimple;
  updateOrder: OrderSimple;
  createParam: Param;
  createProcurement: ProcurementSimple;
  updateProcurement: ProcurementSimple;
  addProcurementProduct: ProcurementSimple;
  createProduct: ProductSimple;
  updateProduct: ProductSimple;
  setProductBarcode: ProductSimple;
  deleteProduct: Scalars['ID'];
  syncAllProductsCount?: Maybe<Scalars['Boolean']>;
  createProductCategory: ProductCategorySimple;
  updateProductCategory: ProductCategorySimple;
  deleteProductCategory: Scalars['ID'];
  createProductLine: ProductLineSimple;
  updateProductLine: ProductLineSimple;
  deleteProductLine: Scalars['ID'];
  createPromotion: Promotion;
};


export type MutationCreateBonusArgs = {
  input: BonusInput;
};


export type MutationAddOrderBonusArgs = {
  bonusId: Scalars['ID'];
  orderId: Scalars['ID'];
};


export type MutationCreateDiscountArgs = {
  input: DiscountInput;
};


export type MutationAddProductCategoryDiscountArgs = {
  discountId: Scalars['ID'];
  productCategoryId: Scalars['ID'];
};


export type MutationAddProductDiscountArgs = {
  discountId: Scalars['ID'];
  productId: Scalars['ID'];
};


export type MutationAddFeatureDiscountArgs = {
  discountId: Scalars['ID'];
  featureId: Scalars['ID'];
};


export type MutationAddOrderDiscountArgs = {
  discountId: Scalars['ID'];
  orderId: Scalars['ID'];
};


export type MutationAddBonusDiscountArgs = {
  discountId: Scalars['ID'];
  bonusId: Scalars['ID'];
};


export type MutationCreateFeatureArgs = {
  input: FeatureInput;
};


export type MutationUpdateFeatureArgs = {
  id: Scalars['ID'];
  input: FeatureInput;
};


export type MutationAddProductCategoryFeatureArgs = {
  featureId: Scalars['ID'];
  productCategoryId: Scalars['ID'];
};


export type MutationAddProductFeatureArgs = {
  featureId: Scalars['ID'];
  productId: Scalars['ID'];
  endTime?: Maybe<Scalars['String']>;
};


export type MutationDeleteFeatureArgs = {
  id: Scalars['ID'];
};


export type MutationCreateOrderArgs = {
  input: OrderInput;
};


export type MutationUpdateOrderArgs = {
  id: Scalars['ID'];
  input: OrderInput;
};


export type MutationCreateParamArgs = {
  input: ParamInput;
};


export type MutationCreateProcurementArgs = {
  input: ProcurementInput;
};


export type MutationUpdateProcurementArgs = {
  id: Scalars['ID'];
  input: ProcurementInput;
};


export type MutationAddProcurementProductArgs = {
  procurementId: Scalars['ID'];
  input: AddProcurementProductInput;
};


export type MutationCreateProductArgs = {
  input: ProductInput;
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID'];
  input: ProductInput;
};


export type MutationSetProductBarcodeArgs = {
  id: Scalars['ID'];
  barcode: Scalars['String'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};


export type MutationCreateProductCategoryArgs = {
  input: ProductCategoryInput;
};


export type MutationUpdateProductCategoryArgs = {
  id: Scalars['ID'];
  input: ProductCategoryInput;
};


export type MutationDeleteProductCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationCreateProductLineArgs = {
  input: ProductLineInput;
};


export type MutationUpdateProductLineArgs = {
  id: Scalars['ID'];
  input: ProductLineInput;
};


export type MutationDeleteProductLineArgs = {
  id: Scalars['ID'];
};


export type MutationCreatePromotionArgs = {
  input: PromotionInput;
};

export type Subscription = {
  __typename?: 'Subscription';
  _?: Maybe<Scalars['Boolean']>;
};

export type BonusInput = {
  name: Scalars['String'];
  slug: Scalars['String'];
  conditionsDescription: Scalars['String'];
  iconUrl: Scalars['String'];
};

export type Bonus = {
  __typename?: 'Bonus';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  conditionsDescription: Scalars['String'];
  iconUrl: Scalars['String'];
  orders: Array<Maybe<Order>>;
  discounts: Array<Maybe<Discount>>;
};

export type DiscountInput = {
  name: Scalars['String'];
  percent?: Maybe<Scalars['Float']>;
  rub?: Maybe<Scalars['Float']>;
  code?: Maybe<Scalars['String']>;
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  isGlobal?: Maybe<Scalars['Boolean']>;
  isDisposable?: Maybe<Scalars['Boolean']>;
};

export type DiscountStatus = {
  __typename?: 'DiscountStatus';
  isDisabled: Scalars['Boolean'];
  isExists: Scalars['Boolean'];
  isUsed: Scalars['Boolean'];
  isOutdated: Scalars['Boolean'];
};

export type IDiscount = {
  id: Scalars['ID'];
  name: Scalars['String'];
  percent?: Maybe<Scalars['Float']>;
  rub?: Maybe<Scalars['Float']>;
  code?: Maybe<Scalars['String']>;
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  isGlobal: Scalars['Boolean'];
  isDisposable: Scalars['Boolean'];
  status: DiscountStatus;
};

export type DiscountSimple = IDiscount & {
  __typename?: 'DiscountSimple';
  id: Scalars['ID'];
  name: Scalars['String'];
  percent?: Maybe<Scalars['Float']>;
  rub?: Maybe<Scalars['Float']>;
  code?: Maybe<Scalars['String']>;
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  isGlobal: Scalars['Boolean'];
  isDisposable: Scalars['Boolean'];
  status: DiscountStatus;
};

export type Discount = IDiscount & {
  __typename?: 'Discount';
  id: Scalars['ID'];
  name: Scalars['String'];
  percent?: Maybe<Scalars['Float']>;
  rub?: Maybe<Scalars['Float']>;
  code?: Maybe<Scalars['String']>;
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  isGlobal: Scalars['Boolean'];
  isDisposable: Scalars['Boolean'];
  status: DiscountStatus;
  productCategories: Array<Maybe<ProductCategory>>;
  products: Array<Product>;
  features: Array<Feature>;
  orders: Array<Order>;
  bonuses: Array<Bonus>;
};

export type IError = {
  code: Scalars['Int'];
  message: Scalars['String'];
  isError: Scalars['Boolean'];
};

export type NotFound = IError & {
  __typename?: 'NotFound';
  code: Scalars['Int'];
  message: Scalars['String'];
  isError: Scalars['Boolean'];
};

export type FeatureInput = {
  name: Scalars['String'];
  slug: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  isDisabled?: Maybe<Scalars['Boolean']>;
};

export type IFeature = {
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  imageUrl: Scalars['String'];
  isDisabled: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type FeatureSimple = IFeature & {
  __typename?: 'FeatureSimple';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  imageUrl: Scalars['String'];
  isDisabled: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Feature = IFeature & {
  __typename?: 'Feature';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  imageUrl: Scalars['String'];
  isDisabled: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  productCategories: Array<ProductCategory>;
  products: Array<Product>;
  productFeatures: Array<ProductFeature>;
  discounts: Array<Discount>;
};

export type ProductFeature = {
  __typename?: 'ProductFeature';
  product: Product;
  feature: Feature;
  endTime?: Maybe<Scalars['String']>;
};

export type OrderInput = {
  address?: Maybe<Scalars['String']>;
  intercomCode?: Maybe<Scalars['String']>;
  personsCount?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  ourComment?: Maybe<Scalars['String']>;
  deliveryTime?: Maybe<Scalars['DateTime']>;
  phoneNumber?: Maybe<Scalars['String']>;
  products: Array<OrderProductInput>;
  status?: Maybe<OrderStatus>;
  discountCode?: Maybe<Scalars['String']>;
};

export enum OrderStatus {
  NotConfirmed = 'NOT_CONFIRMED',
  Confirmed = 'CONFIRMED',
  Canceled = 'CANCELED',
  Sent = 'SENT',
  Failure = 'FAILURE',
  Success = 'SUCCESS'
}

export type OrderProductInput = {
  id: Scalars['ID'];
  productsCount: Scalars['Int'];
};

export type OrderProduct = {
  __typename?: 'OrderProduct';
  productsCount: Scalars['Int'];
  product: Product;
  order: Order;
};

export type OrderTotal = {
  __typename?: 'OrderTotal';
  totalPrice: Scalars['Int'];
  totalPriceWithDiscount: Scalars['Int'];
  totalDiscount: Scalars['Int'];
};

export type IOrder = {
  id: Scalars['ID'];
  address?: Maybe<Scalars['String']>;
  status: OrderStatus;
  intercomCode?: Maybe<Scalars['String']>;
  personsCount?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  ourComment?: Maybe<Scalars['String']>;
  deliveryTime?: Maybe<Scalars['DateTime']>;
  phoneNumber?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type OrderSimple = IOrder & {
  __typename?: 'OrderSimple';
  id: Scalars['ID'];
  address?: Maybe<Scalars['String']>;
  status: OrderStatus;
  intercomCode?: Maybe<Scalars['String']>;
  personsCount?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  ourComment?: Maybe<Scalars['String']>;
  deliveryTime?: Maybe<Scalars['DateTime']>;
  phoneNumber?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Order = IOrder & {
  __typename?: 'Order';
  id: Scalars['ID'];
  address?: Maybe<Scalars['String']>;
  status: OrderStatus;
  intercomCode?: Maybe<Scalars['String']>;
  personsCount?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  ourComment?: Maybe<Scalars['String']>;
  deliveryTime?: Maybe<Scalars['DateTime']>;
  phoneNumber?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  orderTotal: OrderTotal;
  discounts: Array<Discount>;
  bonuses: Array<Bonus>;
  orderProducts: Array<OrderProduct>;
};

export type ParamInput = {
  name: Scalars['String'];
  slug: Scalars['String'];
  value: Scalars['String'];
};

export type Param = {
  __typename?: 'Param';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  value: Scalars['String'];
};

export type ProcurementInput = {
  nextStatusDate?: Maybe<Scalars['DateTime']>;
  deliveryCost: Scalars['Float'];
  status: ProcurementStatus;
  name: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
  providerInfo?: Maybe<Scalars['String']>;
  products: Array<ProcurementProductInput>;
};

export type ProcurementProductInput = {
  id: Scalars['ID'];
  count: Scalars['Int'];
  costs: Scalars['Int'];
};

export type AddProcurementProductInput = {
  id: Scalars['ID'];
  count: Scalars['Int'];
  costs?: Maybe<Scalars['Int']>;
};

export enum ProcurementStatus {
  Building = 'BUILDING',
  NotConfirmed = 'NOT_CONFIRMED',
  Confirmed = 'CONFIRMED',
  Canceled = 'CANCELED',
  Sent = 'SENT',
  Failure = 'FAILURE',
  Success = 'SUCCESS'
}

export type ProductProcurement = {
  __typename?: 'ProductProcurement';
  count: Scalars['Int'];
  costs: Scalars['Float'];
  procurement: Procurement;
  product: Product;
};

export type IProcurement = {
  id: Scalars['ID'];
  name: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
  providerInfo: Scalars['String'];
  status: ProcurementStatus;
  nextStatusDate?: Maybe<Scalars['DateTime']>;
  deliveryCost?: Maybe<Scalars['Float']>;
  weight: Scalars['Int'];
};

export type ProcurementSimple = IProcurement & {
  __typename?: 'ProcurementSimple';
  id: Scalars['ID'];
  name: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
  providerInfo: Scalars['String'];
  status: ProcurementStatus;
  nextStatusDate?: Maybe<Scalars['DateTime']>;
  deliveryCost?: Maybe<Scalars['Float']>;
  weight: Scalars['Int'];
};

export type Procurement = IProcurement & {
  __typename?: 'Procurement';
  id: Scalars['ID'];
  name: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
  providerInfo: Scalars['String'];
  status: ProcurementStatus;
  nextStatusDate?: Maybe<Scalars['DateTime']>;
  productsPrice: Scalars['Float'];
  totalPrice: Scalars['Float'];
  saleAmount: Scalars['Float'];
  margin: Scalars['Float'];
  deliveryCost?: Maybe<Scalars['Float']>;
  weight: Scalars['Int'];
  productProcurements: Array<ProductProcurement>;
};

export type ProductFeatureInput = {
  featureId: Scalars['ID'];
  endTime?: Maybe<Scalars['String']>;
};

export type ProductInput = {
  barcode?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  description: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  price: Scalars['Int'];
  productCategoryId: Scalars['ID'];
  productLineId: Scalars['ID'];
  weight: Scalars['Int'];
  features?: Maybe<Array<ProductFeatureInput>>;
};

export type IProduct = {
  id: Scalars['ID'];
  barcode?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  description: Scalars['String'];
  imageUrl: Scalars['String'];
  weight: Scalars['Int'];
  price: Scalars['Int'];
  count: Scalars['Int'];
  productCategoryId: Scalars['ID'];
  productLineId: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type ProductSimple = IProduct & {
  __typename?: 'ProductSimple';
  id: Scalars['ID'];
  barcode?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  description: Scalars['String'];
  imageUrl: Scalars['String'];
  weight: Scalars['Int'];
  price: Scalars['Int'];
  count: Scalars['Int'];
  productCategoryId: Scalars['ID'];
  productLineId: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Product = IProduct & {
  __typename?: 'Product';
  id: Scalars['ID'];
  barcode?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  description: Scalars['String'];
  imageUrl: Scalars['String'];
  weight: Scalars['Int'];
  price: Scalars['Int'];
  count: Scalars['Int'];
  productCategoryId: Scalars['ID'];
  productLineId: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  waitingCount: Scalars['Int'];
  productLine?: Maybe<ProductLine>;
  productCategory?: Maybe<ProductCategory>;
  features: Array<Feature>;
  discounts: Array<Discount>;
  orderProducts: Array<OrderProduct>;
  productProcurements: Array<ProductProcurement>;
  productFeatures: Array<ProductFeature>;
};

export type ProductCategoryInput = {
  name: Scalars['String'];
  slug: Scalars['String'];
  priority?: Maybe<Scalars['Int']>;
  iconUrl?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  features?: Maybe<Array<Scalars['ID']>>;
};

export type IProductCategory = {
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  priority?: Maybe<Scalars['Int']>;
  iconUrl: Scalars['String'];
  description: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type ProductCategorySimple = IProductCategory & {
  __typename?: 'ProductCategorySimple';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  priority?: Maybe<Scalars['Int']>;
  iconUrl: Scalars['String'];
  description: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type ProductCategory = IProductCategory & {
  __typename?: 'ProductCategory';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  priority?: Maybe<Scalars['Int']>;
  iconUrl: Scalars['String'];
  description: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  products: Array<Product>;
  features: Array<Feature>;
  discounts: Array<Discount>;
};

export type ProductLineInput = {
  country?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  barcode?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type IProductLine = {
  id: Scalars['ID'];
  country?: Maybe<Scalars['String']>;
  color: Scalars['String'];
  barcode?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type ProductLineSimple = IProductLine & {
  __typename?: 'ProductLineSimple';
  id: Scalars['ID'];
  country?: Maybe<Scalars['String']>;
  color: Scalars['String'];
  barcode?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type ProductLine = IProductLine & {
  __typename?: 'ProductLine';
  id: Scalars['ID'];
  country?: Maybe<Scalars['String']>;
  color: Scalars['String'];
  barcode?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  products: Array<Product>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type PromotionInput = {
  name: Scalars['String'];
  description: Scalars['String'];
  imageUrl: Scalars['String'];
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  priority: Scalars['Int'];
};

export type Promotion = {
  __typename?: 'Promotion';
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  imageUrl: Scalars['String'];
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  priority: Scalars['Int'];
};

export type SearchResult = NotFound | Product;

export type CreateDiscountMutationVariables = Exact<{
  input: DiscountInput;
}>;


export type CreateDiscountMutation = (
  { __typename?: 'Mutation' }
  & { createDiscount: (
    { __typename?: 'Discount' }
    & DiscountSimple_Discount_Fragment
  ) }
);

export type CreateFeatureMutationVariables = Exact<{
  input: FeatureInput;
}>;


export type CreateFeatureMutation = (
  { __typename?: 'Mutation' }
  & { createFeature: (
    { __typename?: 'FeatureSimple' }
    & FeatureSimple_FeatureSimple_Fragment
  ) }
);

export type DeleteFeatureMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteFeatureMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteFeature'>
);

export type UpdateFeatureMutationVariables = Exact<{
  id: Scalars['ID'];
  input: FeatureInput;
}>;


export type UpdateFeatureMutation = (
  { __typename?: 'Mutation' }
  & { updateFeature: (
    { __typename?: 'FeatureSimple' }
    & FeatureSimple_FeatureSimple_Fragment
  ) }
);

export type CreateOrderMutationVariables = Exact<{
  input: OrderInput;
}>;


export type CreateOrderMutation = (
  { __typename?: 'Mutation' }
  & { createOrder: (
    { __typename?: 'OrderSimple' }
    & OrderSimple_OrderSimple_Fragment
  ) }
);

export type UpdateOrderMutationVariables = Exact<{
  id: Scalars['ID'];
  input: OrderInput;
}>;


export type UpdateOrderMutation = (
  { __typename?: 'Mutation' }
  & { updateOrder: (
    { __typename?: 'OrderSimple' }
    & OrderSimple_OrderSimple_Fragment
  ) }
);

export type AddProcurementProductMutationVariables = Exact<{
  procurementId: Scalars['ID'];
  input: AddProcurementProductInput;
}>;


export type AddProcurementProductMutation = (
  { __typename?: 'Mutation' }
  & { addProcurementProduct: (
    { __typename?: 'ProcurementSimple' }
    & ProcurementSimple_ProcurementSimple_Fragment
  ) }
);

export type CreateProcurementMutationVariables = Exact<{
  input: ProcurementInput;
}>;


export type CreateProcurementMutation = (
  { __typename?: 'Mutation' }
  & { createProcurement: (
    { __typename?: 'ProcurementSimple' }
    & ProcurementSimple_ProcurementSimple_Fragment
  ) }
);

export type UpdateProcurementMutationVariables = Exact<{
  id: Scalars['ID'];
  input: ProcurementInput;
}>;


export type UpdateProcurementMutation = (
  { __typename?: 'Mutation' }
  & { updateProcurement: (
    { __typename?: 'ProcurementSimple' }
    & ProcurementSimple_ProcurementSimple_Fragment
  ) }
);

export type CreateProductMutationVariables = Exact<{
  input: ProductInput;
}>;


export type CreateProductMutation = (
  { __typename?: 'Mutation' }
  & { createProduct: (
    { __typename?: 'ProductSimple' }
    & ProductSimple_ProductSimple_Fragment
  ) }
);

export type DeleteProductMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteProductMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteProduct'>
);

export type SetProductBarcodeMutationVariables = Exact<{
  id: Scalars['ID'];
  barcode: Scalars['String'];
}>;


export type SetProductBarcodeMutation = (
  { __typename?: 'Mutation' }
  & { setProductBarcode: (
    { __typename?: 'ProductSimple' }
    & ProductSimple_ProductSimple_Fragment
  ) }
);

export type SyncAllProductsCountMutationVariables = Exact<{ [key: string]: never; }>;


export type SyncAllProductsCountMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'syncAllProductsCount'>
);

export type UpdateProductMutationVariables = Exact<{
  id: Scalars['ID'];
  input: ProductInput;
}>;


export type UpdateProductMutation = (
  { __typename?: 'Mutation' }
  & { updateProduct: (
    { __typename?: 'ProductSimple' }
    & ProductSimple_ProductSimple_Fragment
  ) }
);

export type CreateProductCategoryMutationVariables = Exact<{
  input: ProductCategoryInput;
}>;


export type CreateProductCategoryMutation = (
  { __typename?: 'Mutation' }
  & { createProductCategory: (
    { __typename?: 'ProductCategorySimple' }
    & ProductCategorySimple_ProductCategorySimple_Fragment
  ) }
);

export type DeleteProductCategoryMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteProductCategoryMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteProductCategory'>
);

export type UpdateProductCategoryMutationVariables = Exact<{
  id: Scalars['ID'];
  input: ProductCategoryInput;
}>;


export type UpdateProductCategoryMutation = (
  { __typename?: 'Mutation' }
  & { updateProductCategory: (
    { __typename?: 'ProductCategorySimple' }
    & ProductCategorySimple_ProductCategorySimple_Fragment
  ) }
);

export type CreateProductLineMutationVariables = Exact<{
  input: ProductLineInput;
}>;


export type CreateProductLineMutation = (
  { __typename?: 'Mutation' }
  & { createProductLine: (
    { __typename?: 'ProductLineSimple' }
    & ProductLineSimple_ProductLineSimple_Fragment
  ) }
);

export type DeleteProductLineMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteProductLineMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteProductLine'>
);

export type UpdateProductLineMutationVariables = Exact<{
  id: Scalars['ID'];
  input: ProductLineInput;
}>;


export type UpdateProductLineMutation = (
  { __typename?: 'Mutation' }
  & { updateProductLine: (
    { __typename?: 'ProductLineSimple' }
    & ProductLineSimple_ProductLineSimple_Fragment
  ) }
);

export type DiscountItemPageFragment = (
  { __typename?: 'Discount' }
  & { orders: Array<(
    { __typename?: 'Order' }
    & { orderTotal: (
      { __typename?: 'OrderTotal' }
      & Pick<OrderTotal, 'totalPrice' | 'totalPriceWithDiscount' | 'totalDiscount'>
    ) }
    & OrderSimple_Order_Fragment
  )> }
  & DiscountSimple_Discount_Fragment
);

export type DiscountItemPageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DiscountItemPageQuery = (
  { __typename?: 'Query' }
  & { discount?: Maybe<(
    { __typename?: 'Discount' }
    & DiscountItemPageFragment
  )> }
);

export type DiscountListPageFragment = (
  { __typename?: 'Discount' }
  & DiscountSimple_Discount_Fragment
);

export type DiscountListPageQueryVariables = Exact<{ [key: string]: never; }>;


export type DiscountListPageQuery = (
  { __typename?: 'Query' }
  & { discounts: Array<Maybe<(
    { __typename?: 'Discount' }
    & DiscountListPageFragment
  )>> }
);

export type FeatureItemPageFragment = (
  { __typename?: 'Feature' }
  & FeatureSimple_Feature_Fragment
);

export type FeatureItemPageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FeatureItemPageQuery = (
  { __typename?: 'Query' }
  & { feature?: Maybe<(
    { __typename?: 'Feature' }
    & FeatureItemPageFragment
  )> }
);

export type FeatureListPageFragment = (
  { __typename?: 'Feature' }
  & Pick<Feature, 'id' | 'name' | 'slug' | 'imageUrl' | 'isDisabled' | 'createdAt'>
);

export type FeatureListPageQueryVariables = Exact<{ [key: string]: never; }>;


export type FeatureListPageQuery = (
  { __typename?: 'Query' }
  & { features: Array<(
    { __typename?: 'Feature' }
    & FeatureListPageFragment
  )> }
);

export type OrderItemPageFragment = (
  { __typename?: 'Order' }
  & { orderTotal: (
    { __typename?: 'OrderTotal' }
    & Pick<OrderTotal, 'totalPrice' | 'totalPriceWithDiscount' | 'totalDiscount'>
  ), orderProducts: Array<(
    { __typename?: 'OrderProduct' }
    & Pick<OrderProduct, 'productsCount'>
    & { product: (
      { __typename?: 'Product' }
      & Pick<Product, 'price'>
      & ProductMinimum_Product_Fragment
    ) }
  )>, discounts: Array<(
    { __typename?: 'Discount' }
    & Pick<Discount, 'code'>
  )> }
  & OrderSimple_Order_Fragment
);

export type OrderItemPageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type OrderItemPageQuery = (
  { __typename?: 'Query' }
  & { order?: Maybe<(
    { __typename?: 'Order' }
    & OrderItemPageFragment
  )> }
);

export type OrdersListPageFragment = (
  { __typename?: 'Order' }
  & Pick<Order, 'updatedAt'>
  & { orderTotal: (
    { __typename?: 'OrderTotal' }
    & Pick<OrderTotal, 'totalPrice' | 'totalPriceWithDiscount' | 'totalDiscount'>
  ) }
  & OrderMinimum_Order_Fragment
);

export type OrdersListPageQueryVariables = Exact<{ [key: string]: never; }>;


export type OrdersListPageQuery = (
  { __typename?: 'Query' }
  & { orders: Array<(
    { __typename?: 'Order' }
    & OrdersListPageFragment
  )> }
);

export type ProcurementItemPageFragment = (
  { __typename?: 'Procurement' }
  & Pick<Procurement, 'productsPrice' | 'totalPrice' | 'saleAmount' | 'margin' | 'weight'>
  & { productProcurements: Array<(
    { __typename?: 'ProductProcurement' }
    & Pick<ProductProcurement, 'count' | 'costs'>
    & { product: (
      { __typename?: 'Product' }
      & Pick<Product, 'id' | 'name' | 'price'>
      & { productLine?: Maybe<(
        { __typename?: 'ProductLine' }
        & Pick<ProductLine, 'id' | 'name'>
      )> }
    ) }
  )> }
  & ProcurementSimple_Procurement_Fragment
);

export type ProcurementItemPageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProcurementItemPageQuery = (
  { __typename?: 'Query' }
  & { procurement?: Maybe<(
    { __typename?: 'Procurement' }
    & ProcurementItemPageFragment
  )> }
);

export type ProcurementsListPageFragment = (
  { __typename?: 'Procurement' }
  & Pick<Procurement, 'productsPrice' | 'totalPrice' | 'saleAmount' | 'margin' | 'weight'>
  & ProcurementSimple_Procurement_Fragment
);

export type ProcurementsListPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ProcurementsListPageQuery = (
  { __typename?: 'Query' }
  & { procurements: Array<(
    { __typename?: 'Procurement' }
    & ProcurementsListPageFragment
  )> }
);

export type ProcurementFormProductFragment = (
  { __typename?: 'Product' }
  & Pick<Product, 'price' | 'count'>
  & { productCategory?: Maybe<(
    { __typename?: 'ProductCategory' }
    & ProductCategoryMinimum_ProductCategory_Fragment
  )>, productLine?: Maybe<(
    { __typename?: 'ProductLine' }
    & ProductLineMinimum_ProductLine_Fragment
  )> }
  & ProductMinimum_Product_Fragment
);

export type ProcurementFormProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProcurementFormProductsQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & ProcurementFormProductFragment
  )> }
);

export type ProductItemPageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProductItemPageQuery = (
  { __typename?: 'Query' }
  & { product?: Maybe<(
    { __typename?: 'Product' }
    & ProductItemFragment
  )> }
);

export type ProductsListPageFragment = (
  { __typename?: 'Product' }
  & Pick<Product, 'slug' | 'barcode' | 'productCategoryId' | 'productLineId' | 'price' | 'count' | 'weight' | 'waitingCount' | 'createdAt'>
  & { productCategory?: Maybe<(
    { __typename?: 'ProductCategory' }
    & ProductCategoryMinimum_ProductCategory_Fragment
  )>, productLine?: Maybe<(
    { __typename?: 'ProductLine' }
    & ProductLineMinimum_ProductLine_Fragment
  )>, productFeatures: Array<(
    { __typename?: 'ProductFeature' }
    & { feature: (
      { __typename?: 'Feature' }
      & FeatureMinimum_Feature_Fragment
    ) }
    & ProductFeatureSimpleFragment
  )> }
  & ProductMinimum_Product_Fragment
);

export type ProductsListPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsListPageQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & ProductsListPageFragment
  )> }
);

export type ProductCategoryListPageFragment = (
  { __typename?: 'ProductCategory' }
  & Pick<ProductCategory, 'slug' | 'createdAt'>
  & { features: Array<(
    { __typename?: 'Feature' }
    & FeatureMinimum_Feature_Fragment
  )> }
  & ProductCategoryMinimum_ProductCategory_Fragment
);

export type ProductCategoryListPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductCategoryListPageQuery = (
  { __typename?: 'Query' }
  & { productCategories: Array<(
    { __typename?: 'ProductCategory' }
    & ProductCategoryListPageFragment
  )> }
);

export type ProductCategoryItemPageFragment = (
  { __typename?: 'ProductCategory' }
  & { products: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'price' | 'count'>
    & ProductMinimum_Product_Fragment
  )>, features: Array<(
    { __typename?: 'Feature' }
    & FeatureMinimum_Feature_Fragment
  )> }
  & ProductCategorySimple_ProductCategory_Fragment
);

export type ProductCategoryItemPageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProductCategoryItemPageQuery = (
  { __typename?: 'Query' }
  & { productCategory?: Maybe<(
    { __typename?: 'ProductCategory' }
    & ProductCategoryItemPageFragment
  )> }
);

export type ProductLineItemPageFragment = (
  { __typename?: 'ProductLine' }
  & { products: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'price' | 'count'>
    & ProductMinimum_Product_Fragment
  )> }
  & ProductLineSimple_ProductLine_Fragment
);

export type ProductLineItemPageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProductLineItemPageQuery = (
  { __typename?: 'Query' }
  & { productLine?: Maybe<(
    { __typename?: 'ProductLine' }
    & ProductLineItemPageFragment
  )> }
);

export type ProductLineListPageFragment = (
  { __typename?: 'ProductLine' }
  & Pick<ProductLine, 'slug' | 'country' | 'color' | 'barcode' | 'createdAt'>
  & { products: Array<(
    { __typename?: 'Product' }
    & ProductMinimum_Product_Fragment
  )> }
  & ProductLineMinimum_ProductLine_Fragment
);

export type ProductLineListPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductLineListPageQuery = (
  { __typename?: 'Query' }
  & { productLines: Array<(
    { __typename?: 'ProductLine' }
    & ProductLineListPageFragment
  )> }
);

export type AddProductModalProcurementsFragment = (
  { __typename?: 'Procurement' }
  & ProcurementSimple_Procurement_Fragment
);

export type AddProductModalProcurementsQueryVariables = Exact<{ [key: string]: never; }>;


export type AddProductModalProcurementsQuery = (
  { __typename?: 'Query' }
  & { procurements: Array<(
    { __typename?: 'Procurement' }
    & AddProductModalProcurementsFragment
  )> }
);

export type ProductsSelectorFragment = (
  { __typename?: 'Product' }
  & Pick<Product, 'barcode' | 'price' | 'count'>
  & { productCategory?: Maybe<(
    { __typename?: 'ProductCategory' }
    & ProductCategoryMinimum_ProductCategory_Fragment
  )>, productLine?: Maybe<(
    { __typename?: 'ProductLine' }
    & ProductLineMinimum_ProductLine_Fragment
  )> }
  & ProductMinimum_Product_Fragment
);

export type ProductsSelectorQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsSelectorQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & ProductsSelectorFragment
  )> }
);

type DiscountSimple_DiscountSimple_Fragment = (
  { __typename?: 'DiscountSimple' }
  & Pick<DiscountSimple, 'id' | 'name' | 'percent' | 'rub' | 'code' | 'startDate' | 'endDate' | 'isGlobal' | 'isDisposable'>
  & { status: (
    { __typename?: 'DiscountStatus' }
    & Pick<DiscountStatus, 'isDisabled' | 'isExists' | 'isUsed' | 'isOutdated'>
  ) }
);

type DiscountSimple_Discount_Fragment = (
  { __typename?: 'Discount' }
  & Pick<Discount, 'id' | 'name' | 'percent' | 'rub' | 'code' | 'startDate' | 'endDate' | 'isGlobal' | 'isDisposable'>
  & { status: (
    { __typename?: 'DiscountStatus' }
    & Pick<DiscountStatus, 'isDisabled' | 'isExists' | 'isUsed' | 'isOutdated'>
  ) }
);

export type DiscountSimpleFragment = DiscountSimple_DiscountSimple_Fragment | DiscountSimple_Discount_Fragment;

export type ErrorFragment = (
  { __typename?: 'NotFound' }
  & Pick<NotFound, 'code' | 'message' | 'isError'>
);

type FeatureMinimum_FeatureSimple_Fragment = (
  { __typename?: 'FeatureSimple' }
  & Pick<FeatureSimple, 'id' | 'name' | 'imageUrl' | 'isDisabled'>
);

type FeatureMinimum_Feature_Fragment = (
  { __typename?: 'Feature' }
  & Pick<Feature, 'id' | 'name' | 'imageUrl' | 'isDisabled'>
);

export type FeatureMinimumFragment = FeatureMinimum_FeatureSimple_Fragment | FeatureMinimum_Feature_Fragment;

type FeatureSimple_FeatureSimple_Fragment = (
  { __typename?: 'FeatureSimple' }
  & Pick<FeatureSimple, 'id' | 'slug' | 'name' | 'imageUrl' | 'isDisabled' | 'createdAt' | 'updatedAt'>
);

type FeatureSimple_Feature_Fragment = (
  { __typename?: 'Feature' }
  & Pick<Feature, 'id' | 'slug' | 'name' | 'imageUrl' | 'isDisabled' | 'createdAt' | 'updatedAt'>
);

export type FeatureSimpleFragment = FeatureSimple_FeatureSimple_Fragment | FeatureSimple_Feature_Fragment;

type OrderMinimum_OrderSimple_Fragment = (
  { __typename?: 'OrderSimple' }
  & Pick<OrderSimple, 'id' | 'address' | 'deliveryTime' | 'status' | 'phoneNumber'>
);

type OrderMinimum_Order_Fragment = (
  { __typename?: 'Order' }
  & Pick<Order, 'id' | 'address' | 'deliveryTime' | 'status' | 'phoneNumber'>
);

export type OrderMinimumFragment = OrderMinimum_OrderSimple_Fragment | OrderMinimum_Order_Fragment;

export type OrderTotalFragment = (
  { __typename?: 'OrderTotal' }
  & Pick<OrderTotal, 'totalPrice' | 'totalPriceWithDiscount' | 'totalDiscount'>
);

type OrderSimple_OrderSimple_Fragment = (
  { __typename?: 'OrderSimple' }
  & Pick<OrderSimple, 'id' | 'address' | 'status' | 'intercomCode' | 'personsCount' | 'comment' | 'ourComment' | 'deliveryTime' | 'phoneNumber' | 'createdAt' | 'updatedAt'>
);

type OrderSimple_Order_Fragment = (
  { __typename?: 'Order' }
  & Pick<Order, 'id' | 'address' | 'status' | 'intercomCode' | 'personsCount' | 'comment' | 'ourComment' | 'deliveryTime' | 'phoneNumber' | 'createdAt' | 'updatedAt'>
);

export type OrderSimpleFragment = OrderSimple_OrderSimple_Fragment | OrderSimple_Order_Fragment;

type ProcurementMinimum_ProcurementSimple_Fragment = (
  { __typename?: 'ProcurementSimple' }
  & Pick<ProcurementSimple, 'id' | 'name' | 'comment' | 'status'>
);

type ProcurementMinimum_Procurement_Fragment = (
  { __typename?: 'Procurement' }
  & Pick<Procurement, 'id' | 'name' | 'comment' | 'status'>
);

export type ProcurementMinimumFragment = ProcurementMinimum_ProcurementSimple_Fragment | ProcurementMinimum_Procurement_Fragment;

type ProcurementSimple_ProcurementSimple_Fragment = (
  { __typename?: 'ProcurementSimple' }
  & Pick<ProcurementSimple, 'id' | 'status' | 'nextStatusDate' | 'deliveryCost' | 'name' | 'comment' | 'providerInfo'>
);

type ProcurementSimple_Procurement_Fragment = (
  { __typename?: 'Procurement' }
  & Pick<Procurement, 'id' | 'status' | 'nextStatusDate' | 'deliveryCost' | 'name' | 'comment' | 'providerInfo'>
);

export type ProcurementSimpleFragment = ProcurementSimple_ProcurementSimple_Fragment | ProcurementSimple_Procurement_Fragment;

export type ProductItemFragment = (
  { __typename?: 'Product' }
  & { productCategory?: Maybe<(
    { __typename?: 'ProductCategory' }
    & { features: Array<(
      { __typename?: 'Feature' }
      & FeatureMinimum_Feature_Fragment
    )> }
    & ProductCategoryMinimum_ProductCategory_Fragment
  )>, productLine?: Maybe<(
    { __typename?: 'ProductLine' }
    & ProductLineMinimum_ProductLine_Fragment
  )>, productFeatures: Array<(
    { __typename?: 'ProductFeature' }
    & { feature: (
      { __typename?: 'Feature' }
      & FeatureMinimum_Feature_Fragment
    ) }
    & ProductFeatureSimpleFragment
  )>, productProcurements: Array<(
    { __typename?: 'ProductProcurement' }
    & Pick<ProductProcurement, 'count' | 'costs'>
    & { procurement: (
      { __typename?: 'Procurement' }
      & Pick<Procurement, 'id' | 'name' | 'status' | 'nextStatusDate'>
    ) }
  )> }
  & ProductSimple_Product_Fragment
);

type ProductMinimum_ProductSimple_Fragment = (
  { __typename?: 'ProductSimple' }
  & Pick<ProductSimple, 'id' | 'name'>
);

type ProductMinimum_Product_Fragment = (
  { __typename?: 'Product' }
  & Pick<Product, 'id' | 'name'>
);

export type ProductMinimumFragment = ProductMinimum_ProductSimple_Fragment | ProductMinimum_Product_Fragment;

type ProductSimple_ProductSimple_Fragment = (
  { __typename?: 'ProductSimple' }
  & Pick<ProductSimple, 'id' | 'barcode' | 'name' | 'slug' | 'description' | 'imageUrl' | 'productCategoryId' | 'productLineId' | 'weight' | 'price' | 'count' | 'createdAt' | 'updatedAt'>
);

type ProductSimple_Product_Fragment = (
  { __typename?: 'Product' }
  & Pick<Product, 'id' | 'barcode' | 'name' | 'slug' | 'description' | 'imageUrl' | 'productCategoryId' | 'productLineId' | 'weight' | 'price' | 'count' | 'createdAt' | 'updatedAt'>
);

export type ProductSimpleFragment = ProductSimple_ProductSimple_Fragment | ProductSimple_Product_Fragment;

type ProductCategoryMinimum_ProductCategorySimple_Fragment = (
  { __typename?: 'ProductCategorySimple' }
  & Pick<ProductCategorySimple, 'id' | 'name' | 'iconUrl' | 'slug'>
);

type ProductCategoryMinimum_ProductCategory_Fragment = (
  { __typename?: 'ProductCategory' }
  & Pick<ProductCategory, 'id' | 'name' | 'iconUrl' | 'slug'>
);

export type ProductCategoryMinimumFragment = ProductCategoryMinimum_ProductCategorySimple_Fragment | ProductCategoryMinimum_ProductCategory_Fragment;

type ProductCategorySimple_ProductCategorySimple_Fragment = (
  { __typename?: 'ProductCategorySimple' }
  & Pick<ProductCategorySimple, 'id' | 'name' | 'iconUrl' | 'priority' | 'slug' | 'description' | 'createdAt' | 'updatedAt'>
);

type ProductCategorySimple_ProductCategory_Fragment = (
  { __typename?: 'ProductCategory' }
  & Pick<ProductCategory, 'id' | 'name' | 'iconUrl' | 'priority' | 'slug' | 'description' | 'createdAt' | 'updatedAt'>
);

export type ProductCategorySimpleFragment = ProductCategorySimple_ProductCategorySimple_Fragment | ProductCategorySimple_ProductCategory_Fragment;

export type ProductFeatureSimpleFragment = (
  { __typename?: 'ProductFeature' }
  & Pick<ProductFeature, 'endTime'>
);

type ProductLineMinimum_ProductLineSimple_Fragment = (
  { __typename?: 'ProductLineSimple' }
  & Pick<ProductLineSimple, 'id' | 'name'>
);

type ProductLineMinimum_ProductLine_Fragment = (
  { __typename?: 'ProductLine' }
  & Pick<ProductLine, 'id' | 'name'>
);

export type ProductLineMinimumFragment = ProductLineMinimum_ProductLineSimple_Fragment | ProductLineMinimum_ProductLine_Fragment;

type ProductLineSimple_ProductLineSimple_Fragment = (
  { __typename?: 'ProductLineSimple' }
  & Pick<ProductLineSimple, 'id' | 'name' | 'slug' | 'country' | 'color' | 'barcode' | 'createdAt' | 'updatedAt'>
);

type ProductLineSimple_ProductLine_Fragment = (
  { __typename?: 'ProductLine' }
  & Pick<ProductLine, 'id' | 'name' | 'slug' | 'country' | 'color' | 'barcode' | 'createdAt' | 'updatedAt'>
);

export type ProductLineSimpleFragment = ProductLineSimple_ProductLineSimple_Fragment | ProductLineSimple_ProductLine_Fragment;

export type DiscountByCodeQueryVariables = Exact<{
  code: Scalars['String'];
}>;


export type DiscountByCodeQuery = (
  { __typename?: 'Query' }
  & { discountByCode?: Maybe<(
    { __typename?: 'Discount' }
    & DiscountSimple_Discount_Fragment
  )> }
);

export type FeatureMinimumListQueryVariables = Exact<{ [key: string]: never; }>;


export type FeatureMinimumListQuery = (
  { __typename?: 'Query' }
  & { features: Array<(
    { __typename?: 'Feature' }
    & FeatureMinimum_Feature_Fragment
  )> }
);

export type OrderTotalQueryVariables = Exact<{
  products: Array<OrderProductInput>;
  discountCode?: Maybe<Scalars['String']>;
}>;


export type OrderTotalQuery = (
  { __typename?: 'Query' }
  & { orderTotal?: Maybe<(
    { __typename?: 'OrderTotal' }
    & OrderTotalFragment
  )> }
);

export type OrderSimpleItemQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type OrderSimpleItemQuery = (
  { __typename?: 'Query' }
  & { order?: Maybe<(
    { __typename?: 'Order' }
    & OrderSimple_Order_Fragment
  )> }
);

export type OrderSimpleListQueryVariables = Exact<{ [key: string]: never; }>;


export type OrderSimpleListQuery = (
  { __typename?: 'Query' }
  & { orders: Array<(
    { __typename?: 'Order' }
    & OrderMinimum_Order_Fragment
  )> }
);

export type ProductSimpleItemQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProductSimpleItemQuery = (
  { __typename?: 'Query' }
  & { product?: Maybe<(
    { __typename?: 'Product' }
    & ProductSimple_Product_Fragment
  )> }
);

export type ProductSimpleListQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductSimpleListQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & ProductSimple_Product_Fragment
  )> }
);

export type ProductCategoryMinimumItemQueryVariables = Exact<{
  idSlug: Scalars['ID'];
}>;


export type ProductCategoryMinimumItemQuery = (
  { __typename?: 'Query' }
  & { productCategory?: Maybe<(
    { __typename?: 'ProductCategory' }
    & ProductCategoryMinimum_ProductCategory_Fragment
  )> }
);

export type ProductCategoryMinimumListQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductCategoryMinimumListQuery = (
  { __typename?: 'Query' }
  & { productCategories: Array<(
    { __typename?: 'ProductCategory' }
    & ProductCategoryMinimum_ProductCategory_Fragment
  )> }
);

export type ProductCategorySimpleItemQueryVariables = Exact<{
  idSlug: Scalars['ID'];
}>;


export type ProductCategorySimpleItemQuery = (
  { __typename?: 'Query' }
  & { productCategory?: Maybe<(
    { __typename?: 'ProductCategory' }
    & ProductCategorySimple_ProductCategory_Fragment
  )> }
);

export type ProductLineMinimumListQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductLineMinimumListQuery = (
  { __typename?: 'Query' }
  & { productLines: Array<(
    { __typename?: 'ProductLine' }
    & ProductLineMinimum_ProductLine_Fragment
  )> }
);

export type ProductLineSimpleItemQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProductLineSimpleItemQuery = (
  { __typename?: 'Query' }
  & { productLine?: Maybe<(
    { __typename?: 'ProductLine' }
    & ProductLineSimple_ProductLine_Fragment
  )> }
);

export type ProductLineSimpleListQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductLineSimpleListQuery = (
  { __typename?: 'Query' }
  & { productLines: Array<(
    { __typename?: 'ProductLine' }
    & ProductLineSimple_ProductLine_Fragment
  )> }
);

export type SearchByBarcodeQueryVariables = Exact<{
  barcode: Scalars['String'];
}>;


export type SearchByBarcodeQuery = (
  { __typename?: 'Query' }
  & { searchByBarcode: (
    { __typename?: 'NotFound' }
    & ErrorFragment
  ) | (
    { __typename?: 'Product' }
    & ProductItemFragment
  ) }
);



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Mutation: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  BonusInput: BonusInput;
  Bonus: ResolverTypeWrapper<Bonus>;
  DiscountInput: DiscountInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  DiscountStatus: ResolverTypeWrapper<DiscountStatus>;
  IDiscount: ResolversTypes['DiscountSimple'] | ResolversTypes['Discount'];
  DiscountSimple: ResolverTypeWrapper<DiscountSimple>;
  Discount: ResolverTypeWrapper<Discount>;
  IError: ResolversTypes['NotFound'];
  Int: ResolverTypeWrapper<Scalars['Int']>;
  NotFound: ResolverTypeWrapper<NotFound>;
  FeatureInput: FeatureInput;
  IFeature: ResolversTypes['FeatureSimple'] | ResolversTypes['Feature'];
  FeatureSimple: ResolverTypeWrapper<FeatureSimple>;
  Feature: ResolverTypeWrapper<Feature>;
  ProductFeature: ResolverTypeWrapper<ProductFeature>;
  OrderInput: OrderInput;
  OrderStatus: OrderStatus;
  OrderProductInput: OrderProductInput;
  OrderProduct: ResolverTypeWrapper<OrderProduct>;
  OrderTotal: ResolverTypeWrapper<OrderTotal>;
  IOrder: ResolversTypes['OrderSimple'] | ResolversTypes['Order'];
  OrderSimple: ResolverTypeWrapper<OrderSimple>;
  Order: ResolverTypeWrapper<Order>;
  ParamInput: ParamInput;
  Param: ResolverTypeWrapper<Param>;
  ProcurementInput: ProcurementInput;
  ProcurementProductInput: ProcurementProductInput;
  AddProcurementProductInput: AddProcurementProductInput;
  ProcurementStatus: ProcurementStatus;
  ProductProcurement: ResolverTypeWrapper<ProductProcurement>;
  IProcurement: ResolversTypes['ProcurementSimple'] | ResolversTypes['Procurement'];
  ProcurementSimple: ResolverTypeWrapper<ProcurementSimple>;
  Procurement: ResolverTypeWrapper<Procurement>;
  ProductFeatureInput: ProductFeatureInput;
  ProductInput: ProductInput;
  IProduct: ResolversTypes['ProductSimple'] | ResolversTypes['Product'];
  ProductSimple: ResolverTypeWrapper<ProductSimple>;
  Product: ResolverTypeWrapper<Product>;
  ProductCategoryInput: ProductCategoryInput;
  IProductCategory: ResolversTypes['ProductCategorySimple'] | ResolversTypes['ProductCategory'];
  ProductCategorySimple: ResolverTypeWrapper<ProductCategorySimple>;
  ProductCategory: ResolverTypeWrapper<ProductCategory>;
  ProductLineInput: ProductLineInput;
  IProductLine: ResolversTypes['ProductLineSimple'] | ResolversTypes['ProductLine'];
  ProductLineSimple: ResolverTypeWrapper<ProductLineSimple>;
  ProductLine: ResolverTypeWrapper<ProductLine>;
  PromotionInput: PromotionInput;
  Promotion: ResolverTypeWrapper<Promotion>;
  SearchResult: ResolversTypes['NotFound'] | ResolversTypes['Product'];
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  DateTime: Scalars['DateTime'];
  Query: {};
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  String: Scalars['String'];
  Mutation: {};
  Subscription: {};
  BonusInput: BonusInput;
  Bonus: Bonus;
  DiscountInput: DiscountInput;
  Float: Scalars['Float'];
  DiscountStatus: DiscountStatus;
  IDiscount: ResolversParentTypes['DiscountSimple'] | ResolversParentTypes['Discount'];
  DiscountSimple: DiscountSimple;
  Discount: Discount;
  IError: ResolversParentTypes['NotFound'];
  Int: Scalars['Int'];
  NotFound: NotFound;
  FeatureInput: FeatureInput;
  IFeature: ResolversParentTypes['FeatureSimple'] | ResolversParentTypes['Feature'];
  FeatureSimple: FeatureSimple;
  Feature: Feature;
  ProductFeature: ProductFeature;
  OrderInput: OrderInput;
  OrderProductInput: OrderProductInput;
  OrderProduct: OrderProduct;
  OrderTotal: OrderTotal;
  IOrder: ResolversParentTypes['OrderSimple'] | ResolversParentTypes['Order'];
  OrderSimple: OrderSimple;
  Order: Order;
  ParamInput: ParamInput;
  Param: Param;
  ProcurementInput: ProcurementInput;
  ProcurementProductInput: ProcurementProductInput;
  AddProcurementProductInput: AddProcurementProductInput;
  ProductProcurement: ProductProcurement;
  IProcurement: ResolversParentTypes['ProcurementSimple'] | ResolversParentTypes['Procurement'];
  ProcurementSimple: ProcurementSimple;
  Procurement: Procurement;
  ProductFeatureInput: ProductFeatureInput;
  ProductInput: ProductInput;
  IProduct: ResolversParentTypes['ProductSimple'] | ResolversParentTypes['Product'];
  ProductSimple: ProductSimple;
  Product: Product;
  ProductCategoryInput: ProductCategoryInput;
  IProductCategory: ResolversParentTypes['ProductCategorySimple'] | ResolversParentTypes['ProductCategory'];
  ProductCategorySimple: ProductCategorySimple;
  ProductCategory: ProductCategory;
  ProductLineInput: ProductLineInput;
  IProductLine: ResolversParentTypes['ProductLineSimple'] | ResolversParentTypes['ProductLine'];
  ProductLineSimple: ProductLineSimple;
  ProductLine: ProductLine;
  PromotionInput: PromotionInput;
  Promotion: Promotion;
  SearchResult: ResolversParentTypes['NotFound'] | ResolversParentTypes['Product'];
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  bonuses?: Resolver<Array<Maybe<ResolversTypes['Bonus']>>, ParentType, ContextType>;
  bonus?: Resolver<Maybe<ResolversTypes['Bonus']>, ParentType, ContextType, RequireFields<QueryBonusArgs, 'id'>>;
  discounts?: Resolver<Array<Maybe<ResolversTypes['Discount']>>, ParentType, ContextType>;
  discount?: Resolver<Maybe<ResolversTypes['Discount']>, ParentType, ContextType, RequireFields<QueryDiscountArgs, 'id'>>;
  discountByCode?: Resolver<Maybe<ResolversTypes['Discount']>, ParentType, ContextType, RequireFields<QueryDiscountByCodeArgs, 'code'>>;
  features?: Resolver<Array<ResolversTypes['Feature']>, ParentType, ContextType>;
  feature?: Resolver<Maybe<ResolversTypes['Feature']>, ParentType, ContextType, RequireFields<QueryFeatureArgs, 'id'>>;
  orders?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryOrderArgs, 'id'>>;
  orderTotal?: Resolver<Maybe<ResolversTypes['OrderTotal']>, ParentType, ContextType, RequireFields<QueryOrderTotalArgs, 'products'>>;
  params?: Resolver<Array<Maybe<ResolversTypes['Param']>>, ParentType, ContextType>;
  param?: Resolver<Maybe<ResolversTypes['Param']>, ParentType, ContextType, RequireFields<QueryParamArgs, 'id'>>;
  procurements?: Resolver<Array<ResolversTypes['Procurement']>, ParentType, ContextType, RequireFields<QueryProcurementsArgs, never>>;
  procurement?: Resolver<Maybe<ResolversTypes['Procurement']>, ParentType, ContextType, RequireFields<QueryProcurementArgs, 'id'>>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  productsByIds?: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType, RequireFields<QueryProductsByIdsArgs, 'productIds'>>;
  productsByCategory?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductsByCategoryArgs, 'categoryIdSlug'>>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'id'>>;
  productCategories?: Resolver<Array<ResolversTypes['ProductCategory']>, ParentType, ContextType>;
  productCategory?: Resolver<Maybe<ResolversTypes['ProductCategory']>, ParentType, ContextType, RequireFields<QueryProductCategoryArgs, 'idSlug'>>;
  productLines?: Resolver<Array<ResolversTypes['ProductLine']>, ParentType, ContextType>;
  productLine?: Resolver<Maybe<ResolversTypes['ProductLine']>, ParentType, ContextType, RequireFields<QueryProductLineArgs, 'id'>>;
  promotions?: Resolver<Array<Maybe<ResolversTypes['Promotion']>>, ParentType, ContextType>;
  promotion?: Resolver<Maybe<ResolversTypes['Promotion']>, ParentType, ContextType, RequireFields<QueryPromotionArgs, 'id'>>;
  searchByBarcode?: Resolver<ResolversTypes['SearchResult'], ParentType, ContextType, RequireFields<QuerySearchByBarcodeArgs, 'barcode'>>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createBonus?: Resolver<ResolversTypes['Bonus'], ParentType, ContextType, RequireFields<MutationCreateBonusArgs, 'input'>>;
  addOrderBonus?: Resolver<ResolversTypes['Bonus'], ParentType, ContextType, RequireFields<MutationAddOrderBonusArgs, 'bonusId' | 'orderId'>>;
  createDiscount?: Resolver<ResolversTypes['Discount'], ParentType, ContextType, RequireFields<MutationCreateDiscountArgs, 'input'>>;
  addProductCategoryDiscount?: Resolver<ResolversTypes['Discount'], ParentType, ContextType, RequireFields<MutationAddProductCategoryDiscountArgs, 'discountId' | 'productCategoryId'>>;
  addProductDiscount?: Resolver<ResolversTypes['Discount'], ParentType, ContextType, RequireFields<MutationAddProductDiscountArgs, 'discountId' | 'productId'>>;
  addFeatureDiscount?: Resolver<ResolversTypes['Discount'], ParentType, ContextType, RequireFields<MutationAddFeatureDiscountArgs, 'discountId' | 'featureId'>>;
  addOrderDiscount?: Resolver<ResolversTypes['Discount'], ParentType, ContextType, RequireFields<MutationAddOrderDiscountArgs, 'discountId' | 'orderId'>>;
  addBonusDiscount?: Resolver<ResolversTypes['Discount'], ParentType, ContextType, RequireFields<MutationAddBonusDiscountArgs, 'discountId' | 'bonusId'>>;
  createFeature?: Resolver<ResolversTypes['FeatureSimple'], ParentType, ContextType, RequireFields<MutationCreateFeatureArgs, 'input'>>;
  updateFeature?: Resolver<ResolversTypes['FeatureSimple'], ParentType, ContextType, RequireFields<MutationUpdateFeatureArgs, 'id' | 'input'>>;
  addProductCategoryFeature?: Resolver<ResolversTypes['FeatureSimple'], ParentType, ContextType, RequireFields<MutationAddProductCategoryFeatureArgs, 'featureId' | 'productCategoryId'>>;
  addProductFeature?: Resolver<ResolversTypes['FeatureSimple'], ParentType, ContextType, RequireFields<MutationAddProductFeatureArgs, 'featureId' | 'productId'>>;
  deleteFeature?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationDeleteFeatureArgs, 'id'>>;
  createOrder?: Resolver<ResolversTypes['OrderSimple'], ParentType, ContextType, RequireFields<MutationCreateOrderArgs, 'input'>>;
  updateOrder?: Resolver<ResolversTypes['OrderSimple'], ParentType, ContextType, RequireFields<MutationUpdateOrderArgs, 'id' | 'input'>>;
  createParam?: Resolver<ResolversTypes['Param'], ParentType, ContextType, RequireFields<MutationCreateParamArgs, 'input'>>;
  createProcurement?: Resolver<ResolversTypes['ProcurementSimple'], ParentType, ContextType, RequireFields<MutationCreateProcurementArgs, 'input'>>;
  updateProcurement?: Resolver<ResolversTypes['ProcurementSimple'], ParentType, ContextType, RequireFields<MutationUpdateProcurementArgs, 'id' | 'input'>>;
  addProcurementProduct?: Resolver<ResolversTypes['ProcurementSimple'], ParentType, ContextType, RequireFields<MutationAddProcurementProductArgs, 'procurementId' | 'input'>>;
  createProduct?: Resolver<ResolversTypes['ProductSimple'], ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'input'>>;
  updateProduct?: Resolver<ResolversTypes['ProductSimple'], ParentType, ContextType, RequireFields<MutationUpdateProductArgs, 'id' | 'input'>>;
  setProductBarcode?: Resolver<ResolversTypes['ProductSimple'], ParentType, ContextType, RequireFields<MutationSetProductBarcodeArgs, 'id' | 'barcode'>>;
  deleteProduct?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationDeleteProductArgs, 'id'>>;
  syncAllProductsCount?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createProductCategory?: Resolver<ResolversTypes['ProductCategorySimple'], ParentType, ContextType, RequireFields<MutationCreateProductCategoryArgs, 'input'>>;
  updateProductCategory?: Resolver<ResolversTypes['ProductCategorySimple'], ParentType, ContextType, RequireFields<MutationUpdateProductCategoryArgs, 'id' | 'input'>>;
  deleteProductCategory?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationDeleteProductCategoryArgs, 'id'>>;
  createProductLine?: Resolver<ResolversTypes['ProductLineSimple'], ParentType, ContextType, RequireFields<MutationCreateProductLineArgs, 'input'>>;
  updateProductLine?: Resolver<ResolversTypes['ProductLineSimple'], ParentType, ContextType, RequireFields<MutationUpdateProductLineArgs, 'id' | 'input'>>;
  deleteProductLine?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationDeleteProductLineArgs, 'id'>>;
  createPromotion?: Resolver<ResolversTypes['Promotion'], ParentType, ContextType, RequireFields<MutationCreatePromotionArgs, 'input'>>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  _?: SubscriptionResolver<Maybe<ResolversTypes['Boolean']>, "_", ParentType, ContextType>;
};

export type BonusResolvers<ContextType = any, ParentType extends ResolversParentTypes['Bonus'] = ResolversParentTypes['Bonus']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  conditionsDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  iconUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orders?: Resolver<Array<Maybe<ResolversTypes['Order']>>, ParentType, ContextType>;
  discounts?: Resolver<Array<Maybe<ResolversTypes['Discount']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type DiscountStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['DiscountStatus'] = ResolversParentTypes['DiscountStatus']> = {
  isDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isExists?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isUsed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isOutdated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type IDiscountResolvers<ContextType = any, ParentType extends ResolversParentTypes['IDiscount'] = ResolversParentTypes['IDiscount']> = {
  __resolveType: TypeResolveFn<'DiscountSimple' | 'Discount', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rub?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  endDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  isGlobal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isDisposable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['DiscountStatus'], ParentType, ContextType>;
};

export type DiscountSimpleResolvers<ContextType = any, ParentType extends ResolversParentTypes['DiscountSimple'] = ResolversParentTypes['DiscountSimple']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rub?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  endDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  isGlobal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isDisposable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['DiscountStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type DiscountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Discount'] = ResolversParentTypes['Discount']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rub?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  endDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  isGlobal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isDisposable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['DiscountStatus'], ParentType, ContextType>;
  productCategories?: Resolver<Array<Maybe<ResolversTypes['ProductCategory']>>, ParentType, ContextType>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  features?: Resolver<Array<ResolversTypes['Feature']>, ParentType, ContextType>;
  orders?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType>;
  bonuses?: Resolver<Array<ResolversTypes['Bonus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type IErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['IError'] = ResolversParentTypes['IError']> = {
  __resolveType: TypeResolveFn<'NotFound', ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isError?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type NotFoundResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotFound'] = ResolversParentTypes['NotFound']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isError?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type IFeatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['IFeature'] = ResolversParentTypes['IFeature']> = {
  __resolveType: TypeResolveFn<'FeatureSimple' | 'Feature', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type FeatureSimpleResolvers<ContextType = any, ParentType extends ResolversParentTypes['FeatureSimple'] = ResolversParentTypes['FeatureSimple']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type FeatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['Feature'] = ResolversParentTypes['Feature']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  productCategories?: Resolver<Array<ResolversTypes['ProductCategory']>, ParentType, ContextType>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  productFeatures?: Resolver<Array<ResolversTypes['ProductFeature']>, ParentType, ContextType>;
  discounts?: Resolver<Array<ResolversTypes['Discount']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ProductFeatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductFeature'] = ResolversParentTypes['ProductFeature']> = {
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  feature?: Resolver<ResolversTypes['Feature'], ParentType, ContextType>;
  endTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type OrderProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderProduct'] = ResolversParentTypes['OrderProduct']> = {
  productsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type OrderTotalResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderTotal'] = ResolversParentTypes['OrderTotal']> = {
  totalPrice?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalPriceWithDiscount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalDiscount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type IOrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['IOrder'] = ResolversParentTypes['IOrder']> = {
  __resolveType: TypeResolveFn<'OrderSimple' | 'Order', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OrderStatus'], ParentType, ContextType>;
  intercomCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  personsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ourComment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliveryTime?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type OrderSimpleResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderSimple'] = ResolversParentTypes['OrderSimple']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OrderStatus'], ParentType, ContextType>;
  intercomCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  personsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ourComment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliveryTime?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OrderStatus'], ParentType, ContextType>;
  intercomCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  personsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ourComment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliveryTime?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  orderTotal?: Resolver<ResolversTypes['OrderTotal'], ParentType, ContextType>;
  discounts?: Resolver<Array<ResolversTypes['Discount']>, ParentType, ContextType>;
  bonuses?: Resolver<Array<ResolversTypes['Bonus']>, ParentType, ContextType>;
  orderProducts?: Resolver<Array<ResolversTypes['OrderProduct']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ParamResolvers<ContextType = any, ParentType extends ResolversParentTypes['Param'] = ResolversParentTypes['Param']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ProductProcurementResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductProcurement'] = ResolversParentTypes['ProductProcurement']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  costs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  procurement?: Resolver<ResolversTypes['Procurement'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type IProcurementResolvers<ContextType = any, ParentType extends ResolversParentTypes['IProcurement'] = ResolversParentTypes['IProcurement']> = {
  __resolveType: TypeResolveFn<'ProcurementSimple' | 'Procurement', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  providerInfo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ProcurementStatus'], ParentType, ContextType>;
  nextStatusDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deliveryCost?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type ProcurementSimpleResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProcurementSimple'] = ResolversParentTypes['ProcurementSimple']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  providerInfo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ProcurementStatus'], ParentType, ContextType>;
  nextStatusDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deliveryCost?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ProcurementResolvers<ContextType = any, ParentType extends ResolversParentTypes['Procurement'] = ResolversParentTypes['Procurement']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  providerInfo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ProcurementStatus'], ParentType, ContextType>;
  nextStatusDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  productsPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  saleAmount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  margin?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  deliveryCost?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  productProcurements?: Resolver<Array<ResolversTypes['ProductProcurement']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type IProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['IProduct'] = ResolversParentTypes['IProduct']> = {
  __resolveType: TypeResolveFn<'ProductSimple' | 'Product', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  productCategoryId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  productLineId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type ProductSimpleResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductSimple'] = ResolversParentTypes['ProductSimple']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  productCategoryId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  productLineId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  productCategoryId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  productLineId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  waitingCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  productLine?: Resolver<Maybe<ResolversTypes['ProductLine']>, ParentType, ContextType>;
  productCategory?: Resolver<Maybe<ResolversTypes['ProductCategory']>, ParentType, ContextType>;
  features?: Resolver<Array<ResolversTypes['Feature']>, ParentType, ContextType>;
  discounts?: Resolver<Array<ResolversTypes['Discount']>, ParentType, ContextType>;
  orderProducts?: Resolver<Array<ResolversTypes['OrderProduct']>, ParentType, ContextType>;
  productProcurements?: Resolver<Array<ResolversTypes['ProductProcurement']>, ParentType, ContextType>;
  productFeatures?: Resolver<Array<ResolversTypes['ProductFeature']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type IProductCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['IProductCategory'] = ResolversParentTypes['IProductCategory']> = {
  __resolveType: TypeResolveFn<'ProductCategorySimple' | 'ProductCategory', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  iconUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type ProductCategorySimpleResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategorySimple'] = ResolversParentTypes['ProductCategorySimple']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  iconUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ProductCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategory'] = ResolversParentTypes['ProductCategory']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  iconUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  features?: Resolver<Array<ResolversTypes['Feature']>, ParentType, ContextType>;
  discounts?: Resolver<Array<ResolversTypes['Discount']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type IProductLineResolvers<ContextType = any, ParentType extends ResolversParentTypes['IProductLine'] = ResolversParentTypes['IProductLine']> = {
  __resolveType: TypeResolveFn<'ProductLineSimple' | 'ProductLine', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type ProductLineSimpleResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductLineSimple'] = ResolversParentTypes['ProductLineSimple']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ProductLineResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductLine'] = ResolversParentTypes['ProductLine']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PromotionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Promotion'] = ResolversParentTypes['Promotion']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  endDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  priority?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SearchResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchResult'] = ResolversParentTypes['SearchResult']> = {
  __resolveType: TypeResolveFn<'NotFound' | 'Product', ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  DateTime?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Bonus?: BonusResolvers<ContextType>;
  DiscountStatus?: DiscountStatusResolvers<ContextType>;
  IDiscount?: IDiscountResolvers<ContextType>;
  DiscountSimple?: DiscountSimpleResolvers<ContextType>;
  Discount?: DiscountResolvers<ContextType>;
  IError?: IErrorResolvers<ContextType>;
  NotFound?: NotFoundResolvers<ContextType>;
  IFeature?: IFeatureResolvers<ContextType>;
  FeatureSimple?: FeatureSimpleResolvers<ContextType>;
  Feature?: FeatureResolvers<ContextType>;
  ProductFeature?: ProductFeatureResolvers<ContextType>;
  OrderProduct?: OrderProductResolvers<ContextType>;
  OrderTotal?: OrderTotalResolvers<ContextType>;
  IOrder?: IOrderResolvers<ContextType>;
  OrderSimple?: OrderSimpleResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  Param?: ParamResolvers<ContextType>;
  ProductProcurement?: ProductProcurementResolvers<ContextType>;
  IProcurement?: IProcurementResolvers<ContextType>;
  ProcurementSimple?: ProcurementSimpleResolvers<ContextType>;
  Procurement?: ProcurementResolvers<ContextType>;
  IProduct?: IProductResolvers<ContextType>;
  ProductSimple?: ProductSimpleResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  IProductCategory?: IProductCategoryResolvers<ContextType>;
  ProductCategorySimple?: ProductCategorySimpleResolvers<ContextType>;
  ProductCategory?: ProductCategoryResolvers<ContextType>;
  IProductLine?: IProductLineResolvers<ContextType>;
  ProductLineSimple?: ProductLineSimpleResolvers<ContextType>;
  ProductLine?: ProductLineResolvers<ContextType>;
  Promotion?: PromotionResolvers<ContextType>;
  SearchResult?: SearchResultResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

export const DiscountSimpleFragmentDoc = gql`
    fragment DiscountSimple on IDiscount {
  id
  name
  percent
  rub
  code
  startDate
  endDate
  isGlobal
  isDisposable
  status {
    isDisabled
    isExists
    isUsed
    isOutdated
  }
}
    `;
export const OrderSimpleFragmentDoc = gql`
    fragment OrderSimple on IOrder {
  id
  address
  status
  intercomCode
  personsCount
  comment
  ourComment
  deliveryTime
  phoneNumber
  createdAt
  updatedAt
}
    `;
export const DiscountItemPageFragmentDoc = gql`
    fragment DiscountItemPage on Discount {
  ...DiscountSimple
  orders {
    ...OrderSimple
    orderTotal {
      totalPrice
      totalPriceWithDiscount
      totalDiscount
    }
  }
}
    ${DiscountSimpleFragmentDoc}
${OrderSimpleFragmentDoc}`;
export const DiscountListPageFragmentDoc = gql`
    fragment DiscountListPage on Discount {
  ...DiscountSimple
}
    ${DiscountSimpleFragmentDoc}`;
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
    `;
export const FeatureItemPageFragmentDoc = gql`
    fragment FeatureItemPage on Feature {
  ...FeatureSimple
}
    ${FeatureSimpleFragmentDoc}`;
export const FeatureListPageFragmentDoc = gql`
    fragment FeatureListPage on Feature {
  id
  name
  slug
  imageUrl
  isDisabled
  createdAt
}
    `;
export const ProductMinimumFragmentDoc = gql`
    fragment ProductMinimum on IProduct {
  id
  name
}
    `;
export const OrderItemPageFragmentDoc = gql`
    fragment OrderItemPage on Order {
  ...OrderSimple
  orderTotal {
    totalPrice
    totalPriceWithDiscount
    totalDiscount
  }
  orderProducts {
    productsCount
    product {
      ...ProductMinimum
      price
    }
  }
  discounts {
    code
  }
}
    ${OrderSimpleFragmentDoc}
${ProductMinimumFragmentDoc}`;
export const OrderMinimumFragmentDoc = gql`
    fragment OrderMinimum on IOrder {
  id
  address
  deliveryTime
  status
  phoneNumber
}
    `;
export const OrdersListPageFragmentDoc = gql`
    fragment OrdersListPage on Order {
  ...OrderMinimum
  updatedAt
  orderTotal {
    totalPrice
    totalPriceWithDiscount
    totalDiscount
  }
}
    ${OrderMinimumFragmentDoc}`;
export const ProcurementSimpleFragmentDoc = gql`
    fragment ProcurementSimple on IProcurement {
  id
  status
  nextStatusDate
  deliveryCost
  name
  comment
  providerInfo
}
    `;
export const ProcurementItemPageFragmentDoc = gql`
    fragment ProcurementItemPage on Procurement {
  ...ProcurementSimple
  productsPrice
  totalPrice
  saleAmount
  margin
  weight
  productProcurements {
    product {
      id
      name
      price
      productLine {
        id
        name
      }
    }
    count
    costs
  }
}
    ${ProcurementSimpleFragmentDoc}`;
export const ProcurementsListPageFragmentDoc = gql`
    fragment ProcurementsListPage on Procurement {
  ...ProcurementSimple
  productsPrice
  totalPrice
  saleAmount
  margin
  weight
}
    ${ProcurementSimpleFragmentDoc}`;
export const ProductCategoryMinimumFragmentDoc = gql`
    fragment ProductCategoryMinimum on IProductCategory {
  id
  name
  iconUrl
  slug
}
    `;
export const ProductLineMinimumFragmentDoc = gql`
    fragment ProductLineMinimum on IProductLine {
  id
  name
}
    `;
export const ProcurementFormProductFragmentDoc = gql`
    fragment ProcurementFormProduct on Product {
  ...ProductMinimum
  price
  count
  productCategory {
    ...ProductCategoryMinimum
  }
  productLine {
    ...ProductLineMinimum
  }
}
    ${ProductMinimumFragmentDoc}
${ProductCategoryMinimumFragmentDoc}
${ProductLineMinimumFragmentDoc}`;
export const ProductFeatureSimpleFragmentDoc = gql`
    fragment ProductFeatureSimple on ProductFeature {
  endTime
}
    `;
export const FeatureMinimumFragmentDoc = gql`
    fragment FeatureMinimum on IFeature {
  id
  name
  imageUrl
  isDisabled
}
    `;
export const ProductsListPageFragmentDoc = gql`
    fragment ProductsListPage on Product {
  ...ProductMinimum
  slug
  barcode
  productCategoryId
  productLineId
  price
  count
  weight
  waitingCount
  createdAt
  productCategory {
    ...ProductCategoryMinimum
  }
  productLine {
    ...ProductLineMinimum
  }
  productFeatures {
    ...ProductFeatureSimple
    feature {
      ...FeatureMinimum
    }
  }
}
    ${ProductMinimumFragmentDoc}
${ProductCategoryMinimumFragmentDoc}
${ProductLineMinimumFragmentDoc}
${ProductFeatureSimpleFragmentDoc}
${FeatureMinimumFragmentDoc}`;
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
${FeatureMinimumFragmentDoc}`;
export const ProductCategorySimpleFragmentDoc = gql`
    fragment ProductCategorySimple on IProductCategory {
  id
  name
  iconUrl
  priority
  slug
  description
  createdAt
  updatedAt
}
    `;
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
${FeatureMinimumFragmentDoc}`;
export const ProductLineSimpleFragmentDoc = gql`
    fragment ProductLineSimple on IProductLine {
  id
  name
  slug
  country
  color
  barcode
  createdAt
  updatedAt
}
    `;
export const ProductLineItemPageFragmentDoc = gql`
    fragment ProductLineItemPage on ProductLine {
  ...ProductLineSimple
  products {
    ...ProductMinimum
    price
    count
  }
}
    ${ProductLineSimpleFragmentDoc}
${ProductMinimumFragmentDoc}`;
export const ProductLineListPageFragmentDoc = gql`
    fragment ProductLineListPage on ProductLine {
  ...ProductLineMinimum
  slug
  country
  color
  barcode
  createdAt
  products {
    ...ProductMinimum
  }
}
    ${ProductLineMinimumFragmentDoc}
${ProductMinimumFragmentDoc}`;
export const AddProductModalProcurementsFragmentDoc = gql`
    fragment AddProductModalProcurements on Procurement {
  ...ProcurementSimple
}
    ${ProcurementSimpleFragmentDoc}`;
export const ProductsSelectorFragmentDoc = gql`
    fragment ProductsSelector on Product {
  ...ProductMinimum
  barcode
  price
  count
  productCategory {
    ...ProductCategoryMinimum
  }
  productLine {
    ...ProductLineMinimum
  }
}
    ${ProductMinimumFragmentDoc}
${ProductCategoryMinimumFragmentDoc}
${ProductLineMinimumFragmentDoc}`;
export const ErrorFragmentDoc = gql`
    fragment Error on IError {
  code
  message
  isError
}
    `;
export const OrderTotalFragmentDoc = gql`
    fragment OrderTotal on OrderTotal {
  totalPrice
  totalPriceWithDiscount
  totalDiscount
}
    `;
export const ProcurementMinimumFragmentDoc = gql`
    fragment ProcurementMinimum on IProcurement {
  id
  name
  comment
  status
}
    `;
export const ProductSimpleFragmentDoc = gql`
    fragment ProductSimple on IProduct {
  id
  barcode
  name
  slug
  description
  imageUrl
  productCategoryId
  productLineId
  weight
  price
  count
  createdAt
  updatedAt
}
    `;
export const ProductItemFragmentDoc = gql`
    fragment ProductItem on Product {
  ...ProductSimple
  productCategory {
    ...ProductCategoryMinimum
    features {
      ...FeatureMinimum
    }
  }
  productLine {
    ...ProductLineMinimum
  }
  productFeatures {
    ...ProductFeatureSimple
    feature {
      ...FeatureMinimum
    }
  }
  productProcurements {
    procurement {
      id
      name
      status
      nextStatusDate
    }
    count
    costs
  }
}
    ${ProductSimpleFragmentDoc}
${ProductCategoryMinimumFragmentDoc}
${FeatureMinimumFragmentDoc}
${ProductLineMinimumFragmentDoc}
${ProductFeatureSimpleFragmentDoc}`;
export const CreateDiscountDocument = gql`
    mutation createDiscount($input: DiscountInput!) {
  createDiscount(input: $input) {
    ...DiscountSimple
  }
}
    ${DiscountSimpleFragmentDoc}`;
export type CreateDiscountMutationFn = Apollo.MutationFunction<CreateDiscountMutation, CreateDiscountMutationVariables>;

/**
 * __useCreateDiscountMutation__
 *
 * To run a mutation, you first call `useCreateDiscountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDiscountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDiscountMutation, { data, loading, error }] = useCreateDiscountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateDiscountMutation(baseOptions?: Apollo.MutationHookOptions<CreateDiscountMutation, CreateDiscountMutationVariables>) {
        return Apollo.useMutation<CreateDiscountMutation, CreateDiscountMutationVariables>(CreateDiscountDocument, baseOptions);
      }
export type CreateDiscountMutationHookResult = ReturnType<typeof useCreateDiscountMutation>;
export type CreateDiscountMutationResult = Apollo.MutationResult<CreateDiscountMutation>;
export type CreateDiscountMutationOptions = Apollo.BaseMutationOptions<CreateDiscountMutation, CreateDiscountMutationVariables>;
export const CreateFeatureDocument = gql`
    mutation createFeature($input: FeatureInput!) {
  createFeature(input: $input) {
    ...FeatureSimple
  }
}
    ${FeatureSimpleFragmentDoc}`;
export type CreateFeatureMutationFn = Apollo.MutationFunction<CreateFeatureMutation, CreateFeatureMutationVariables>;

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
export function useCreateFeatureMutation(baseOptions?: Apollo.MutationHookOptions<CreateFeatureMutation, CreateFeatureMutationVariables>) {
        return Apollo.useMutation<CreateFeatureMutation, CreateFeatureMutationVariables>(CreateFeatureDocument, baseOptions);
      }
export type CreateFeatureMutationHookResult = ReturnType<typeof useCreateFeatureMutation>;
export type CreateFeatureMutationResult = Apollo.MutationResult<CreateFeatureMutation>;
export type CreateFeatureMutationOptions = Apollo.BaseMutationOptions<CreateFeatureMutation, CreateFeatureMutationVariables>;
export const DeleteFeatureDocument = gql`
    mutation deleteFeature($id: ID!) {
  deleteFeature(id: $id)
}
    `;
export type DeleteFeatureMutationFn = Apollo.MutationFunction<DeleteFeatureMutation, DeleteFeatureMutationVariables>;

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
export function useDeleteFeatureMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFeatureMutation, DeleteFeatureMutationVariables>) {
        return Apollo.useMutation<DeleteFeatureMutation, DeleteFeatureMutationVariables>(DeleteFeatureDocument, baseOptions);
      }
export type DeleteFeatureMutationHookResult = ReturnType<typeof useDeleteFeatureMutation>;
export type DeleteFeatureMutationResult = Apollo.MutationResult<DeleteFeatureMutation>;
export type DeleteFeatureMutationOptions = Apollo.BaseMutationOptions<DeleteFeatureMutation, DeleteFeatureMutationVariables>;
export const UpdateFeatureDocument = gql`
    mutation updateFeature($id: ID!, $input: FeatureInput!) {
  updateFeature(id: $id, input: $input) {
    ...FeatureSimple
  }
}
    ${FeatureSimpleFragmentDoc}`;
export type UpdateFeatureMutationFn = Apollo.MutationFunction<UpdateFeatureMutation, UpdateFeatureMutationVariables>;

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
export function useUpdateFeatureMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFeatureMutation, UpdateFeatureMutationVariables>) {
        return Apollo.useMutation<UpdateFeatureMutation, UpdateFeatureMutationVariables>(UpdateFeatureDocument, baseOptions);
      }
export type UpdateFeatureMutationHookResult = ReturnType<typeof useUpdateFeatureMutation>;
export type UpdateFeatureMutationResult = Apollo.MutationResult<UpdateFeatureMutation>;
export type UpdateFeatureMutationOptions = Apollo.BaseMutationOptions<UpdateFeatureMutation, UpdateFeatureMutationVariables>;
export const CreateOrderDocument = gql`
    mutation createOrder($input: OrderInput!) {
  createOrder(input: $input) {
    ...OrderSimple
  }
}
    ${OrderSimpleFragmentDoc}`;
export type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>) {
        return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, baseOptions);
      }
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const UpdateOrderDocument = gql`
    mutation updateOrder($id: ID!, $input: OrderInput!) {
  updateOrder(id: $id, input: $input) {
    ...OrderSimple
  }
}
    ${OrderSimpleFragmentDoc}`;
export type UpdateOrderMutationFn = Apollo.MutationFunction<UpdateOrderMutation, UpdateOrderMutationVariables>;

/**
 * __useUpdateOrderMutation__
 *
 * To run a mutation, you first call `useUpdateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrderMutation, { data, loading, error }] = useUpdateOrderMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOrderMutation, UpdateOrderMutationVariables>) {
        return Apollo.useMutation<UpdateOrderMutation, UpdateOrderMutationVariables>(UpdateOrderDocument, baseOptions);
      }
export type UpdateOrderMutationHookResult = ReturnType<typeof useUpdateOrderMutation>;
export type UpdateOrderMutationResult = Apollo.MutationResult<UpdateOrderMutation>;
export type UpdateOrderMutationOptions = Apollo.BaseMutationOptions<UpdateOrderMutation, UpdateOrderMutationVariables>;
export const AddProcurementProductDocument = gql`
    mutation addProcurementProduct($procurementId: ID!, $input: AddProcurementProductInput!) {
  addProcurementProduct(procurementId: $procurementId, input: $input) {
    ...ProcurementSimple
  }
}
    ${ProcurementSimpleFragmentDoc}`;
export type AddProcurementProductMutationFn = Apollo.MutationFunction<AddProcurementProductMutation, AddProcurementProductMutationVariables>;

/**
 * __useAddProcurementProductMutation__
 *
 * To run a mutation, you first call `useAddProcurementProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProcurementProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProcurementProductMutation, { data, loading, error }] = useAddProcurementProductMutation({
 *   variables: {
 *      procurementId: // value for 'procurementId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddProcurementProductMutation(baseOptions?: Apollo.MutationHookOptions<AddProcurementProductMutation, AddProcurementProductMutationVariables>) {
        return Apollo.useMutation<AddProcurementProductMutation, AddProcurementProductMutationVariables>(AddProcurementProductDocument, baseOptions);
      }
export type AddProcurementProductMutationHookResult = ReturnType<typeof useAddProcurementProductMutation>;
export type AddProcurementProductMutationResult = Apollo.MutationResult<AddProcurementProductMutation>;
export type AddProcurementProductMutationOptions = Apollo.BaseMutationOptions<AddProcurementProductMutation, AddProcurementProductMutationVariables>;
export const CreateProcurementDocument = gql`
    mutation createProcurement($input: ProcurementInput!) {
  createProcurement(input: $input) {
    ...ProcurementSimple
  }
}
    ${ProcurementSimpleFragmentDoc}`;
export type CreateProcurementMutationFn = Apollo.MutationFunction<CreateProcurementMutation, CreateProcurementMutationVariables>;

/**
 * __useCreateProcurementMutation__
 *
 * To run a mutation, you first call `useCreateProcurementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProcurementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProcurementMutation, { data, loading, error }] = useCreateProcurementMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProcurementMutation(baseOptions?: Apollo.MutationHookOptions<CreateProcurementMutation, CreateProcurementMutationVariables>) {
        return Apollo.useMutation<CreateProcurementMutation, CreateProcurementMutationVariables>(CreateProcurementDocument, baseOptions);
      }
export type CreateProcurementMutationHookResult = ReturnType<typeof useCreateProcurementMutation>;
export type CreateProcurementMutationResult = Apollo.MutationResult<CreateProcurementMutation>;
export type CreateProcurementMutationOptions = Apollo.BaseMutationOptions<CreateProcurementMutation, CreateProcurementMutationVariables>;
export const UpdateProcurementDocument = gql`
    mutation updateProcurement($id: ID!, $input: ProcurementInput!) {
  updateProcurement(id: $id, input: $input) {
    ...ProcurementSimple
  }
}
    ${ProcurementSimpleFragmentDoc}`;
export type UpdateProcurementMutationFn = Apollo.MutationFunction<UpdateProcurementMutation, UpdateProcurementMutationVariables>;

/**
 * __useUpdateProcurementMutation__
 *
 * To run a mutation, you first call `useUpdateProcurementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProcurementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProcurementMutation, { data, loading, error }] = useUpdateProcurementMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProcurementMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProcurementMutation, UpdateProcurementMutationVariables>) {
        return Apollo.useMutation<UpdateProcurementMutation, UpdateProcurementMutationVariables>(UpdateProcurementDocument, baseOptions);
      }
export type UpdateProcurementMutationHookResult = ReturnType<typeof useUpdateProcurementMutation>;
export type UpdateProcurementMutationResult = Apollo.MutationResult<UpdateProcurementMutation>;
export type UpdateProcurementMutationOptions = Apollo.BaseMutationOptions<UpdateProcurementMutation, UpdateProcurementMutationVariables>;
export const CreateProductDocument = gql`
    mutation createProduct($input: ProductInput!) {
  createProduct(input: $input) {
    ...ProductSimple
  }
}
    ${ProductSimpleFragmentDoc}`;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

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
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, baseOptions);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const DeleteProductDocument = gql`
    mutation deleteProduct($id: ID!) {
  deleteProduct(id: $id)
}
    `;
export type DeleteProductMutationFn = Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

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
export function useDeleteProductMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, baseOptions);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;
export const SetProductBarcodeDocument = gql`
    mutation setProductBarcode($id: ID!, $barcode: String!) {
  setProductBarcode(id: $id, barcode: $barcode) {
    ...ProductSimple
  }
}
    ${ProductSimpleFragmentDoc}`;
export type SetProductBarcodeMutationFn = Apollo.MutationFunction<SetProductBarcodeMutation, SetProductBarcodeMutationVariables>;

/**
 * __useSetProductBarcodeMutation__
 *
 * To run a mutation, you first call `useSetProductBarcodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetProductBarcodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setProductBarcodeMutation, { data, loading, error }] = useSetProductBarcodeMutation({
 *   variables: {
 *      id: // value for 'id'
 *      barcode: // value for 'barcode'
 *   },
 * });
 */
export function useSetProductBarcodeMutation(baseOptions?: Apollo.MutationHookOptions<SetProductBarcodeMutation, SetProductBarcodeMutationVariables>) {
        return Apollo.useMutation<SetProductBarcodeMutation, SetProductBarcodeMutationVariables>(SetProductBarcodeDocument, baseOptions);
      }
export type SetProductBarcodeMutationHookResult = ReturnType<typeof useSetProductBarcodeMutation>;
export type SetProductBarcodeMutationResult = Apollo.MutationResult<SetProductBarcodeMutation>;
export type SetProductBarcodeMutationOptions = Apollo.BaseMutationOptions<SetProductBarcodeMutation, SetProductBarcodeMutationVariables>;
export const SyncAllProductsCountDocument = gql`
    mutation syncAllProductsCount {
  syncAllProductsCount
}
    `;
export type SyncAllProductsCountMutationFn = Apollo.MutationFunction<SyncAllProductsCountMutation, SyncAllProductsCountMutationVariables>;

/**
 * __useSyncAllProductsCountMutation__
 *
 * To run a mutation, you first call `useSyncAllProductsCountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSyncAllProductsCountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [syncAllProductsCountMutation, { data, loading, error }] = useSyncAllProductsCountMutation({
 *   variables: {
 *   },
 * });
 */
export function useSyncAllProductsCountMutation(baseOptions?: Apollo.MutationHookOptions<SyncAllProductsCountMutation, SyncAllProductsCountMutationVariables>) {
        return Apollo.useMutation<SyncAllProductsCountMutation, SyncAllProductsCountMutationVariables>(SyncAllProductsCountDocument, baseOptions);
      }
export type SyncAllProductsCountMutationHookResult = ReturnType<typeof useSyncAllProductsCountMutation>;
export type SyncAllProductsCountMutationResult = Apollo.MutationResult<SyncAllProductsCountMutation>;
export type SyncAllProductsCountMutationOptions = Apollo.BaseMutationOptions<SyncAllProductsCountMutation, SyncAllProductsCountMutationVariables>;
export const UpdateProductDocument = gql`
    mutation updateProduct($id: ID!, $input: ProductInput!) {
  updateProduct(id: $id, input: $input) {
    ...ProductSimple
  }
}
    ${ProductSimpleFragmentDoc}`;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

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
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, baseOptions);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const CreateProductCategoryDocument = gql`
    mutation createProductCategory($input: ProductCategoryInput!) {
  createProductCategory(input: $input) {
    ...ProductCategorySimple
  }
}
    ${ProductCategorySimpleFragmentDoc}`;
export type CreateProductCategoryMutationFn = Apollo.MutationFunction<CreateProductCategoryMutation, CreateProductCategoryMutationVariables>;

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
export function useCreateProductCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductCategoryMutation, CreateProductCategoryMutationVariables>) {
        return Apollo.useMutation<CreateProductCategoryMutation, CreateProductCategoryMutationVariables>(CreateProductCategoryDocument, baseOptions);
      }
export type CreateProductCategoryMutationHookResult = ReturnType<typeof useCreateProductCategoryMutation>;
export type CreateProductCategoryMutationResult = Apollo.MutationResult<CreateProductCategoryMutation>;
export type CreateProductCategoryMutationOptions = Apollo.BaseMutationOptions<CreateProductCategoryMutation, CreateProductCategoryMutationVariables>;
export const DeleteProductCategoryDocument = gql`
    mutation deleteProductCategory($id: ID!) {
  deleteProductCategory(id: $id)
}
    `;
export type DeleteProductCategoryMutationFn = Apollo.MutationFunction<DeleteProductCategoryMutation, DeleteProductCategoryMutationVariables>;

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
export function useDeleteProductCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductCategoryMutation, DeleteProductCategoryMutationVariables>) {
        return Apollo.useMutation<DeleteProductCategoryMutation, DeleteProductCategoryMutationVariables>(DeleteProductCategoryDocument, baseOptions);
      }
export type DeleteProductCategoryMutationHookResult = ReturnType<typeof useDeleteProductCategoryMutation>;
export type DeleteProductCategoryMutationResult = Apollo.MutationResult<DeleteProductCategoryMutation>;
export type DeleteProductCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteProductCategoryMutation, DeleteProductCategoryMutationVariables>;
export const UpdateProductCategoryDocument = gql`
    mutation updateProductCategory($id: ID!, $input: ProductCategoryInput!) {
  updateProductCategory(id: $id, input: $input) {
    ...ProductCategorySimple
  }
}
    ${ProductCategorySimpleFragmentDoc}`;
export type UpdateProductCategoryMutationFn = Apollo.MutationFunction<UpdateProductCategoryMutation, UpdateProductCategoryMutationVariables>;

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
export function useUpdateProductCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductCategoryMutation, UpdateProductCategoryMutationVariables>) {
        return Apollo.useMutation<UpdateProductCategoryMutation, UpdateProductCategoryMutationVariables>(UpdateProductCategoryDocument, baseOptions);
      }
export type UpdateProductCategoryMutationHookResult = ReturnType<typeof useUpdateProductCategoryMutation>;
export type UpdateProductCategoryMutationResult = Apollo.MutationResult<UpdateProductCategoryMutation>;
export type UpdateProductCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateProductCategoryMutation, UpdateProductCategoryMutationVariables>;
export const CreateProductLineDocument = gql`
    mutation createProductLine($input: ProductLineInput!) {
  createProductLine(input: $input) {
    ...ProductLineSimple
  }
}
    ${ProductLineSimpleFragmentDoc}`;
export type CreateProductLineMutationFn = Apollo.MutationFunction<CreateProductLineMutation, CreateProductLineMutationVariables>;

/**
 * __useCreateProductLineMutation__
 *
 * To run a mutation, you first call `useCreateProductLineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductLineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductLineMutation, { data, loading, error }] = useCreateProductLineMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductLineMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductLineMutation, CreateProductLineMutationVariables>) {
        return Apollo.useMutation<CreateProductLineMutation, CreateProductLineMutationVariables>(CreateProductLineDocument, baseOptions);
      }
export type CreateProductLineMutationHookResult = ReturnType<typeof useCreateProductLineMutation>;
export type CreateProductLineMutationResult = Apollo.MutationResult<CreateProductLineMutation>;
export type CreateProductLineMutationOptions = Apollo.BaseMutationOptions<CreateProductLineMutation, CreateProductLineMutationVariables>;
export const DeleteProductLineDocument = gql`
    mutation deleteProductLine($id: ID!) {
  deleteProductLine(id: $id)
}
    `;
export type DeleteProductLineMutationFn = Apollo.MutationFunction<DeleteProductLineMutation, DeleteProductLineMutationVariables>;

/**
 * __useDeleteProductLineMutation__
 *
 * To run a mutation, you first call `useDeleteProductLineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductLineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductLineMutation, { data, loading, error }] = useDeleteProductLineMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProductLineMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductLineMutation, DeleteProductLineMutationVariables>) {
        return Apollo.useMutation<DeleteProductLineMutation, DeleteProductLineMutationVariables>(DeleteProductLineDocument, baseOptions);
      }
export type DeleteProductLineMutationHookResult = ReturnType<typeof useDeleteProductLineMutation>;
export type DeleteProductLineMutationResult = Apollo.MutationResult<DeleteProductLineMutation>;
export type DeleteProductLineMutationOptions = Apollo.BaseMutationOptions<DeleteProductLineMutation, DeleteProductLineMutationVariables>;
export const UpdateProductLineDocument = gql`
    mutation updateProductLine($id: ID!, $input: ProductLineInput!) {
  updateProductLine(id: $id, input: $input) {
    ...ProductLineSimple
  }
}
    ${ProductLineSimpleFragmentDoc}`;
export type UpdateProductLineMutationFn = Apollo.MutationFunction<UpdateProductLineMutation, UpdateProductLineMutationVariables>;

/**
 * __useUpdateProductLineMutation__
 *
 * To run a mutation, you first call `useUpdateProductLineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductLineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductLineMutation, { data, loading, error }] = useUpdateProductLineMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProductLineMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductLineMutation, UpdateProductLineMutationVariables>) {
        return Apollo.useMutation<UpdateProductLineMutation, UpdateProductLineMutationVariables>(UpdateProductLineDocument, baseOptions);
      }
export type UpdateProductLineMutationHookResult = ReturnType<typeof useUpdateProductLineMutation>;
export type UpdateProductLineMutationResult = Apollo.MutationResult<UpdateProductLineMutation>;
export type UpdateProductLineMutationOptions = Apollo.BaseMutationOptions<UpdateProductLineMutation, UpdateProductLineMutationVariables>;
export const DiscountItemPageDocument = gql`
    query discountItemPage($id: ID!) {
  discount(id: $id) {
    ...DiscountItemPage
  }
}
    ${DiscountItemPageFragmentDoc}`;

/**
 * __useDiscountItemPageQuery__
 *
 * To run a query within a React component, call `useDiscountItemPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useDiscountItemPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDiscountItemPageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDiscountItemPageQuery(baseOptions?: Apollo.QueryHookOptions<DiscountItemPageQuery, DiscountItemPageQueryVariables>) {
        return Apollo.useQuery<DiscountItemPageQuery, DiscountItemPageQueryVariables>(DiscountItemPageDocument, baseOptions);
      }
export function useDiscountItemPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DiscountItemPageQuery, DiscountItemPageQueryVariables>) {
          return Apollo.useLazyQuery<DiscountItemPageQuery, DiscountItemPageQueryVariables>(DiscountItemPageDocument, baseOptions);
        }
export type DiscountItemPageQueryHookResult = ReturnType<typeof useDiscountItemPageQuery>;
export type DiscountItemPageLazyQueryHookResult = ReturnType<typeof useDiscountItemPageLazyQuery>;
export type DiscountItemPageQueryResult = Apollo.QueryResult<DiscountItemPageQuery, DiscountItemPageQueryVariables>;
export const DiscountListPageDocument = gql`
    query discountListPage {
  discounts {
    ...DiscountListPage
  }
}
    ${DiscountListPageFragmentDoc}`;

/**
 * __useDiscountListPageQuery__
 *
 * To run a query within a React component, call `useDiscountListPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useDiscountListPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDiscountListPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useDiscountListPageQuery(baseOptions?: Apollo.QueryHookOptions<DiscountListPageQuery, DiscountListPageQueryVariables>) {
        return Apollo.useQuery<DiscountListPageQuery, DiscountListPageQueryVariables>(DiscountListPageDocument, baseOptions);
      }
export function useDiscountListPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DiscountListPageQuery, DiscountListPageQueryVariables>) {
          return Apollo.useLazyQuery<DiscountListPageQuery, DiscountListPageQueryVariables>(DiscountListPageDocument, baseOptions);
        }
export type DiscountListPageQueryHookResult = ReturnType<typeof useDiscountListPageQuery>;
export type DiscountListPageLazyQueryHookResult = ReturnType<typeof useDiscountListPageLazyQuery>;
export type DiscountListPageQueryResult = Apollo.QueryResult<DiscountListPageQuery, DiscountListPageQueryVariables>;
export const FeatureItemPageDocument = gql`
    query featureItemPage($id: ID!) {
  feature(id: $id) {
    ...FeatureItemPage
  }
}
    ${FeatureItemPageFragmentDoc}`;

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
export function useFeatureItemPageQuery(baseOptions?: Apollo.QueryHookOptions<FeatureItemPageQuery, FeatureItemPageQueryVariables>) {
        return Apollo.useQuery<FeatureItemPageQuery, FeatureItemPageQueryVariables>(FeatureItemPageDocument, baseOptions);
      }
export function useFeatureItemPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FeatureItemPageQuery, FeatureItemPageQueryVariables>) {
          return Apollo.useLazyQuery<FeatureItemPageQuery, FeatureItemPageQueryVariables>(FeatureItemPageDocument, baseOptions);
        }
export type FeatureItemPageQueryHookResult = ReturnType<typeof useFeatureItemPageQuery>;
export type FeatureItemPageLazyQueryHookResult = ReturnType<typeof useFeatureItemPageLazyQuery>;
export type FeatureItemPageQueryResult = Apollo.QueryResult<FeatureItemPageQuery, FeatureItemPageQueryVariables>;
export const FeatureListPageDocument = gql`
    query featureListPage {
  features {
    ...FeatureListPage
  }
}
    ${FeatureListPageFragmentDoc}`;

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
export function useFeatureListPageQuery(baseOptions?: Apollo.QueryHookOptions<FeatureListPageQuery, FeatureListPageQueryVariables>) {
        return Apollo.useQuery<FeatureListPageQuery, FeatureListPageQueryVariables>(FeatureListPageDocument, baseOptions);
      }
export function useFeatureListPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FeatureListPageQuery, FeatureListPageQueryVariables>) {
          return Apollo.useLazyQuery<FeatureListPageQuery, FeatureListPageQueryVariables>(FeatureListPageDocument, baseOptions);
        }
export type FeatureListPageQueryHookResult = ReturnType<typeof useFeatureListPageQuery>;
export type FeatureListPageLazyQueryHookResult = ReturnType<typeof useFeatureListPageLazyQuery>;
export type FeatureListPageQueryResult = Apollo.QueryResult<FeatureListPageQuery, FeatureListPageQueryVariables>;
export const OrderItemPageDocument = gql`
    query orderItemPage($id: ID!) {
  order(id: $id) {
    ...OrderItemPage
  }
}
    ${OrderItemPageFragmentDoc}`;

/**
 * __useOrderItemPageQuery__
 *
 * To run a query within a React component, call `useOrderItemPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderItemPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderItemPageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOrderItemPageQuery(baseOptions?: Apollo.QueryHookOptions<OrderItemPageQuery, OrderItemPageQueryVariables>) {
        return Apollo.useQuery<OrderItemPageQuery, OrderItemPageQueryVariables>(OrderItemPageDocument, baseOptions);
      }
export function useOrderItemPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrderItemPageQuery, OrderItemPageQueryVariables>) {
          return Apollo.useLazyQuery<OrderItemPageQuery, OrderItemPageQueryVariables>(OrderItemPageDocument, baseOptions);
        }
export type OrderItemPageQueryHookResult = ReturnType<typeof useOrderItemPageQuery>;
export type OrderItemPageLazyQueryHookResult = ReturnType<typeof useOrderItemPageLazyQuery>;
export type OrderItemPageQueryResult = Apollo.QueryResult<OrderItemPageQuery, OrderItemPageQueryVariables>;
export const OrdersListPageDocument = gql`
    query ordersListPage {
  orders {
    ...OrdersListPage
  }
}
    ${OrdersListPageFragmentDoc}`;

/**
 * __useOrdersListPageQuery__
 *
 * To run a query within a React component, call `useOrdersListPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdersListPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdersListPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useOrdersListPageQuery(baseOptions?: Apollo.QueryHookOptions<OrdersListPageQuery, OrdersListPageQueryVariables>) {
        return Apollo.useQuery<OrdersListPageQuery, OrdersListPageQueryVariables>(OrdersListPageDocument, baseOptions);
      }
export function useOrdersListPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrdersListPageQuery, OrdersListPageQueryVariables>) {
          return Apollo.useLazyQuery<OrdersListPageQuery, OrdersListPageQueryVariables>(OrdersListPageDocument, baseOptions);
        }
export type OrdersListPageQueryHookResult = ReturnType<typeof useOrdersListPageQuery>;
export type OrdersListPageLazyQueryHookResult = ReturnType<typeof useOrdersListPageLazyQuery>;
export type OrdersListPageQueryResult = Apollo.QueryResult<OrdersListPageQuery, OrdersListPageQueryVariables>;
export const ProcurementItemPageDocument = gql`
    query procurementItemPage($id: ID!) {
  procurement(id: $id) {
    ...ProcurementItemPage
  }
}
    ${ProcurementItemPageFragmentDoc}`;

/**
 * __useProcurementItemPageQuery__
 *
 * To run a query within a React component, call `useProcurementItemPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useProcurementItemPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProcurementItemPageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProcurementItemPageQuery(baseOptions?: Apollo.QueryHookOptions<ProcurementItemPageQuery, ProcurementItemPageQueryVariables>) {
        return Apollo.useQuery<ProcurementItemPageQuery, ProcurementItemPageQueryVariables>(ProcurementItemPageDocument, baseOptions);
      }
export function useProcurementItemPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProcurementItemPageQuery, ProcurementItemPageQueryVariables>) {
          return Apollo.useLazyQuery<ProcurementItemPageQuery, ProcurementItemPageQueryVariables>(ProcurementItemPageDocument, baseOptions);
        }
export type ProcurementItemPageQueryHookResult = ReturnType<typeof useProcurementItemPageQuery>;
export type ProcurementItemPageLazyQueryHookResult = ReturnType<typeof useProcurementItemPageLazyQuery>;
export type ProcurementItemPageQueryResult = Apollo.QueryResult<ProcurementItemPageQuery, ProcurementItemPageQueryVariables>;
export const ProcurementsListPageDocument = gql`
    query procurementsListPage {
  procurements {
    ...ProcurementsListPage
  }
}
    ${ProcurementsListPageFragmentDoc}`;

/**
 * __useProcurementsListPageQuery__
 *
 * To run a query within a React component, call `useProcurementsListPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useProcurementsListPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProcurementsListPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useProcurementsListPageQuery(baseOptions?: Apollo.QueryHookOptions<ProcurementsListPageQuery, ProcurementsListPageQueryVariables>) {
        return Apollo.useQuery<ProcurementsListPageQuery, ProcurementsListPageQueryVariables>(ProcurementsListPageDocument, baseOptions);
      }
export function useProcurementsListPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProcurementsListPageQuery, ProcurementsListPageQueryVariables>) {
          return Apollo.useLazyQuery<ProcurementsListPageQuery, ProcurementsListPageQueryVariables>(ProcurementsListPageDocument, baseOptions);
        }
export type ProcurementsListPageQueryHookResult = ReturnType<typeof useProcurementsListPageQuery>;
export type ProcurementsListPageLazyQueryHookResult = ReturnType<typeof useProcurementsListPageLazyQuery>;
export type ProcurementsListPageQueryResult = Apollo.QueryResult<ProcurementsListPageQuery, ProcurementsListPageQueryVariables>;
export const ProcurementFormProductsDocument = gql`
    query ProcurementFormProducts {
  products {
    ...ProcurementFormProduct
  }
}
    ${ProcurementFormProductFragmentDoc}`;

/**
 * __useProcurementFormProductsQuery__
 *
 * To run a query within a React component, call `useProcurementFormProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProcurementFormProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProcurementFormProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProcurementFormProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProcurementFormProductsQuery, ProcurementFormProductsQueryVariables>) {
        return Apollo.useQuery<ProcurementFormProductsQuery, ProcurementFormProductsQueryVariables>(ProcurementFormProductsDocument, baseOptions);
      }
export function useProcurementFormProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProcurementFormProductsQuery, ProcurementFormProductsQueryVariables>) {
          return Apollo.useLazyQuery<ProcurementFormProductsQuery, ProcurementFormProductsQueryVariables>(ProcurementFormProductsDocument, baseOptions);
        }
export type ProcurementFormProductsQueryHookResult = ReturnType<typeof useProcurementFormProductsQuery>;
export type ProcurementFormProductsLazyQueryHookResult = ReturnType<typeof useProcurementFormProductsLazyQuery>;
export type ProcurementFormProductsQueryResult = Apollo.QueryResult<ProcurementFormProductsQuery, ProcurementFormProductsQueryVariables>;
export const ProductItemPageDocument = gql`
    query productItemPage($id: ID!) {
  product(id: $id) {
    ...ProductItem
  }
}
    ${ProductItemFragmentDoc}`;

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
export function useProductItemPageQuery(baseOptions?: Apollo.QueryHookOptions<ProductItemPageQuery, ProductItemPageQueryVariables>) {
        return Apollo.useQuery<ProductItemPageQuery, ProductItemPageQueryVariables>(ProductItemPageDocument, baseOptions);
      }
export function useProductItemPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductItemPageQuery, ProductItemPageQueryVariables>) {
          return Apollo.useLazyQuery<ProductItemPageQuery, ProductItemPageQueryVariables>(ProductItemPageDocument, baseOptions);
        }
export type ProductItemPageQueryHookResult = ReturnType<typeof useProductItemPageQuery>;
export type ProductItemPageLazyQueryHookResult = ReturnType<typeof useProductItemPageLazyQuery>;
export type ProductItemPageQueryResult = Apollo.QueryResult<ProductItemPageQuery, ProductItemPageQueryVariables>;
export const ProductsListPageDocument = gql`
    query productsListPage {
  products {
    ...ProductsListPage
  }
}
    ${ProductsListPageFragmentDoc}`;

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
export function useProductsListPageQuery(baseOptions?: Apollo.QueryHookOptions<ProductsListPageQuery, ProductsListPageQueryVariables>) {
        return Apollo.useQuery<ProductsListPageQuery, ProductsListPageQueryVariables>(ProductsListPageDocument, baseOptions);
      }
export function useProductsListPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsListPageQuery, ProductsListPageQueryVariables>) {
          return Apollo.useLazyQuery<ProductsListPageQuery, ProductsListPageQueryVariables>(ProductsListPageDocument, baseOptions);
        }
export type ProductsListPageQueryHookResult = ReturnType<typeof useProductsListPageQuery>;
export type ProductsListPageLazyQueryHookResult = ReturnType<typeof useProductsListPageLazyQuery>;
export type ProductsListPageQueryResult = Apollo.QueryResult<ProductsListPageQuery, ProductsListPageQueryVariables>;
export const ProductCategoryListPageDocument = gql`
    query productCategoryListPage {
  productCategories {
    ...ProductCategoryListPage
  }
}
    ${ProductCategoryListPageFragmentDoc}`;

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
export function useProductCategoryListPageQuery(baseOptions?: Apollo.QueryHookOptions<ProductCategoryListPageQuery, ProductCategoryListPageQueryVariables>) {
        return Apollo.useQuery<ProductCategoryListPageQuery, ProductCategoryListPageQueryVariables>(ProductCategoryListPageDocument, baseOptions);
      }
export function useProductCategoryListPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductCategoryListPageQuery, ProductCategoryListPageQueryVariables>) {
          return Apollo.useLazyQuery<ProductCategoryListPageQuery, ProductCategoryListPageQueryVariables>(ProductCategoryListPageDocument, baseOptions);
        }
export type ProductCategoryListPageQueryHookResult = ReturnType<typeof useProductCategoryListPageQuery>;
export type ProductCategoryListPageLazyQueryHookResult = ReturnType<typeof useProductCategoryListPageLazyQuery>;
export type ProductCategoryListPageQueryResult = Apollo.QueryResult<ProductCategoryListPageQuery, ProductCategoryListPageQueryVariables>;
export const ProductCategoryItemPageDocument = gql`
    query productCategoryItemPage($id: ID!) {
  productCategory(idSlug: $id) {
    ...ProductCategoryItemPage
  }
}
    ${ProductCategoryItemPageFragmentDoc}`;

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
export function useProductCategoryItemPageQuery(baseOptions?: Apollo.QueryHookOptions<ProductCategoryItemPageQuery, ProductCategoryItemPageQueryVariables>) {
        return Apollo.useQuery<ProductCategoryItemPageQuery, ProductCategoryItemPageQueryVariables>(ProductCategoryItemPageDocument, baseOptions);
      }
export function useProductCategoryItemPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductCategoryItemPageQuery, ProductCategoryItemPageQueryVariables>) {
          return Apollo.useLazyQuery<ProductCategoryItemPageQuery, ProductCategoryItemPageQueryVariables>(ProductCategoryItemPageDocument, baseOptions);
        }
export type ProductCategoryItemPageQueryHookResult = ReturnType<typeof useProductCategoryItemPageQuery>;
export type ProductCategoryItemPageLazyQueryHookResult = ReturnType<typeof useProductCategoryItemPageLazyQuery>;
export type ProductCategoryItemPageQueryResult = Apollo.QueryResult<ProductCategoryItemPageQuery, ProductCategoryItemPageQueryVariables>;
export const ProductLineItemPageDocument = gql`
    query productLineItemPage($id: ID!) {
  productLine(id: $id) {
    ...ProductLineItemPage
  }
}
    ${ProductLineItemPageFragmentDoc}`;

/**
 * __useProductLineItemPageQuery__
 *
 * To run a query within a React component, call `useProductLineItemPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductLineItemPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductLineItemPageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductLineItemPageQuery(baseOptions?: Apollo.QueryHookOptions<ProductLineItemPageQuery, ProductLineItemPageQueryVariables>) {
        return Apollo.useQuery<ProductLineItemPageQuery, ProductLineItemPageQueryVariables>(ProductLineItemPageDocument, baseOptions);
      }
export function useProductLineItemPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductLineItemPageQuery, ProductLineItemPageQueryVariables>) {
          return Apollo.useLazyQuery<ProductLineItemPageQuery, ProductLineItemPageQueryVariables>(ProductLineItemPageDocument, baseOptions);
        }
export type ProductLineItemPageQueryHookResult = ReturnType<typeof useProductLineItemPageQuery>;
export type ProductLineItemPageLazyQueryHookResult = ReturnType<typeof useProductLineItemPageLazyQuery>;
export type ProductLineItemPageQueryResult = Apollo.QueryResult<ProductLineItemPageQuery, ProductLineItemPageQueryVariables>;
export const ProductLineListPageDocument = gql`
    query productLineListPage {
  productLines {
    ...ProductLineListPage
  }
}
    ${ProductLineListPageFragmentDoc}`;

/**
 * __useProductLineListPageQuery__
 *
 * To run a query within a React component, call `useProductLineListPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductLineListPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductLineListPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductLineListPageQuery(baseOptions?: Apollo.QueryHookOptions<ProductLineListPageQuery, ProductLineListPageQueryVariables>) {
        return Apollo.useQuery<ProductLineListPageQuery, ProductLineListPageQueryVariables>(ProductLineListPageDocument, baseOptions);
      }
export function useProductLineListPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductLineListPageQuery, ProductLineListPageQueryVariables>) {
          return Apollo.useLazyQuery<ProductLineListPageQuery, ProductLineListPageQueryVariables>(ProductLineListPageDocument, baseOptions);
        }
export type ProductLineListPageQueryHookResult = ReturnType<typeof useProductLineListPageQuery>;
export type ProductLineListPageLazyQueryHookResult = ReturnType<typeof useProductLineListPageLazyQuery>;
export type ProductLineListPageQueryResult = Apollo.QueryResult<ProductLineListPageQuery, ProductLineListPageQueryVariables>;
export const AddProductModalProcurementsDocument = gql`
    query addProductModalProcurements {
  procurements(status: BUILDING) {
    ...AddProductModalProcurements
  }
}
    ${AddProductModalProcurementsFragmentDoc}`;

/**
 * __useAddProductModalProcurementsQuery__
 *
 * To run a query within a React component, call `useAddProductModalProcurementsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAddProductModalProcurementsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAddProductModalProcurementsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAddProductModalProcurementsQuery(baseOptions?: Apollo.QueryHookOptions<AddProductModalProcurementsQuery, AddProductModalProcurementsQueryVariables>) {
        return Apollo.useQuery<AddProductModalProcurementsQuery, AddProductModalProcurementsQueryVariables>(AddProductModalProcurementsDocument, baseOptions);
      }
export function useAddProductModalProcurementsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AddProductModalProcurementsQuery, AddProductModalProcurementsQueryVariables>) {
          return Apollo.useLazyQuery<AddProductModalProcurementsQuery, AddProductModalProcurementsQueryVariables>(AddProductModalProcurementsDocument, baseOptions);
        }
export type AddProductModalProcurementsQueryHookResult = ReturnType<typeof useAddProductModalProcurementsQuery>;
export type AddProductModalProcurementsLazyQueryHookResult = ReturnType<typeof useAddProductModalProcurementsLazyQuery>;
export type AddProductModalProcurementsQueryResult = Apollo.QueryResult<AddProductModalProcurementsQuery, AddProductModalProcurementsQueryVariables>;
export const ProductsSelectorDocument = gql`
    query ProductsSelector {
  products {
    ...ProductsSelector
  }
}
    ${ProductsSelectorFragmentDoc}`;

/**
 * __useProductsSelectorQuery__
 *
 * To run a query within a React component, call `useProductsSelectorQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsSelectorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsSelectorQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsSelectorQuery(baseOptions?: Apollo.QueryHookOptions<ProductsSelectorQuery, ProductsSelectorQueryVariables>) {
        return Apollo.useQuery<ProductsSelectorQuery, ProductsSelectorQueryVariables>(ProductsSelectorDocument, baseOptions);
      }
export function useProductsSelectorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsSelectorQuery, ProductsSelectorQueryVariables>) {
          return Apollo.useLazyQuery<ProductsSelectorQuery, ProductsSelectorQueryVariables>(ProductsSelectorDocument, baseOptions);
        }
export type ProductsSelectorQueryHookResult = ReturnType<typeof useProductsSelectorQuery>;
export type ProductsSelectorLazyQueryHookResult = ReturnType<typeof useProductsSelectorLazyQuery>;
export type ProductsSelectorQueryResult = Apollo.QueryResult<ProductsSelectorQuery, ProductsSelectorQueryVariables>;
export const DiscountByCodeDocument = gql`
    query discountByCode($code: String!) {
  discountByCode(code: $code) {
    ...DiscountSimple
  }
}
    ${DiscountSimpleFragmentDoc}`;

/**
 * __useDiscountByCodeQuery__
 *
 * To run a query within a React component, call `useDiscountByCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useDiscountByCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDiscountByCodeQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useDiscountByCodeQuery(baseOptions?: Apollo.QueryHookOptions<DiscountByCodeQuery, DiscountByCodeQueryVariables>) {
        return Apollo.useQuery<DiscountByCodeQuery, DiscountByCodeQueryVariables>(DiscountByCodeDocument, baseOptions);
      }
export function useDiscountByCodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DiscountByCodeQuery, DiscountByCodeQueryVariables>) {
          return Apollo.useLazyQuery<DiscountByCodeQuery, DiscountByCodeQueryVariables>(DiscountByCodeDocument, baseOptions);
        }
export type DiscountByCodeQueryHookResult = ReturnType<typeof useDiscountByCodeQuery>;
export type DiscountByCodeLazyQueryHookResult = ReturnType<typeof useDiscountByCodeLazyQuery>;
export type DiscountByCodeQueryResult = Apollo.QueryResult<DiscountByCodeQuery, DiscountByCodeQueryVariables>;
export const FeatureMinimumListDocument = gql`
    query featureMinimumList {
  features {
    ...FeatureMinimum
  }
}
    ${FeatureMinimumFragmentDoc}`;

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
export function useFeatureMinimumListQuery(baseOptions?: Apollo.QueryHookOptions<FeatureMinimumListQuery, FeatureMinimumListQueryVariables>) {
        return Apollo.useQuery<FeatureMinimumListQuery, FeatureMinimumListQueryVariables>(FeatureMinimumListDocument, baseOptions);
      }
export function useFeatureMinimumListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FeatureMinimumListQuery, FeatureMinimumListQueryVariables>) {
          return Apollo.useLazyQuery<FeatureMinimumListQuery, FeatureMinimumListQueryVariables>(FeatureMinimumListDocument, baseOptions);
        }
export type FeatureMinimumListQueryHookResult = ReturnType<typeof useFeatureMinimumListQuery>;
export type FeatureMinimumListLazyQueryHookResult = ReturnType<typeof useFeatureMinimumListLazyQuery>;
export type FeatureMinimumListQueryResult = Apollo.QueryResult<FeatureMinimumListQuery, FeatureMinimumListQueryVariables>;
export const OrderTotalDocument = gql`
    query orderTotal($products: [OrderProductInput!]!, $discountCode: String) {
  orderTotal(products: $products, discountCode: $discountCode) {
    ...OrderTotal
  }
}
    ${OrderTotalFragmentDoc}`;

/**
 * __useOrderTotalQuery__
 *
 * To run a query within a React component, call `useOrderTotalQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderTotalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderTotalQuery({
 *   variables: {
 *      products: // value for 'products'
 *      discountCode: // value for 'discountCode'
 *   },
 * });
 */
export function useOrderTotalQuery(baseOptions?: Apollo.QueryHookOptions<OrderTotalQuery, OrderTotalQueryVariables>) {
        return Apollo.useQuery<OrderTotalQuery, OrderTotalQueryVariables>(OrderTotalDocument, baseOptions);
      }
export function useOrderTotalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrderTotalQuery, OrderTotalQueryVariables>) {
          return Apollo.useLazyQuery<OrderTotalQuery, OrderTotalQueryVariables>(OrderTotalDocument, baseOptions);
        }
export type OrderTotalQueryHookResult = ReturnType<typeof useOrderTotalQuery>;
export type OrderTotalLazyQueryHookResult = ReturnType<typeof useOrderTotalLazyQuery>;
export type OrderTotalQueryResult = Apollo.QueryResult<OrderTotalQuery, OrderTotalQueryVariables>;
export const OrderSimpleItemDocument = gql`
    query orderSimpleItem($id: ID!) {
  order(id: $id) {
    ...OrderSimple
  }
}
    ${OrderSimpleFragmentDoc}`;

/**
 * __useOrderSimpleItemQuery__
 *
 * To run a query within a React component, call `useOrderSimpleItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderSimpleItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderSimpleItemQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOrderSimpleItemQuery(baseOptions?: Apollo.QueryHookOptions<OrderSimpleItemQuery, OrderSimpleItemQueryVariables>) {
        return Apollo.useQuery<OrderSimpleItemQuery, OrderSimpleItemQueryVariables>(OrderSimpleItemDocument, baseOptions);
      }
export function useOrderSimpleItemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrderSimpleItemQuery, OrderSimpleItemQueryVariables>) {
          return Apollo.useLazyQuery<OrderSimpleItemQuery, OrderSimpleItemQueryVariables>(OrderSimpleItemDocument, baseOptions);
        }
export type OrderSimpleItemQueryHookResult = ReturnType<typeof useOrderSimpleItemQuery>;
export type OrderSimpleItemLazyQueryHookResult = ReturnType<typeof useOrderSimpleItemLazyQuery>;
export type OrderSimpleItemQueryResult = Apollo.QueryResult<OrderSimpleItemQuery, OrderSimpleItemQueryVariables>;
export const OrderSimpleListDocument = gql`
    query orderSimpleList {
  orders {
    ...OrderMinimum
  }
}
    ${OrderMinimumFragmentDoc}`;

/**
 * __useOrderSimpleListQuery__
 *
 * To run a query within a React component, call `useOrderSimpleListQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderSimpleListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderSimpleListQuery({
 *   variables: {
 *   },
 * });
 */
export function useOrderSimpleListQuery(baseOptions?: Apollo.QueryHookOptions<OrderSimpleListQuery, OrderSimpleListQueryVariables>) {
        return Apollo.useQuery<OrderSimpleListQuery, OrderSimpleListQueryVariables>(OrderSimpleListDocument, baseOptions);
      }
export function useOrderSimpleListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrderSimpleListQuery, OrderSimpleListQueryVariables>) {
          return Apollo.useLazyQuery<OrderSimpleListQuery, OrderSimpleListQueryVariables>(OrderSimpleListDocument, baseOptions);
        }
export type OrderSimpleListQueryHookResult = ReturnType<typeof useOrderSimpleListQuery>;
export type OrderSimpleListLazyQueryHookResult = ReturnType<typeof useOrderSimpleListLazyQuery>;
export type OrderSimpleListQueryResult = Apollo.QueryResult<OrderSimpleListQuery, OrderSimpleListQueryVariables>;
export const ProductSimpleItemDocument = gql`
    query productSimpleItem($id: ID!) {
  product(id: $id) {
    ...ProductSimple
  }
}
    ${ProductSimpleFragmentDoc}`;

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
export function useProductSimpleItemQuery(baseOptions?: Apollo.QueryHookOptions<ProductSimpleItemQuery, ProductSimpleItemQueryVariables>) {
        return Apollo.useQuery<ProductSimpleItemQuery, ProductSimpleItemQueryVariables>(ProductSimpleItemDocument, baseOptions);
      }
export function useProductSimpleItemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductSimpleItemQuery, ProductSimpleItemQueryVariables>) {
          return Apollo.useLazyQuery<ProductSimpleItemQuery, ProductSimpleItemQueryVariables>(ProductSimpleItemDocument, baseOptions);
        }
export type ProductSimpleItemQueryHookResult = ReturnType<typeof useProductSimpleItemQuery>;
export type ProductSimpleItemLazyQueryHookResult = ReturnType<typeof useProductSimpleItemLazyQuery>;
export type ProductSimpleItemQueryResult = Apollo.QueryResult<ProductSimpleItemQuery, ProductSimpleItemQueryVariables>;
export const ProductSimpleListDocument = gql`
    query productSimpleList {
  products {
    ...ProductSimple
  }
}
    ${ProductSimpleFragmentDoc}`;

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
export function useProductSimpleListQuery(baseOptions?: Apollo.QueryHookOptions<ProductSimpleListQuery, ProductSimpleListQueryVariables>) {
        return Apollo.useQuery<ProductSimpleListQuery, ProductSimpleListQueryVariables>(ProductSimpleListDocument, baseOptions);
      }
export function useProductSimpleListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductSimpleListQuery, ProductSimpleListQueryVariables>) {
          return Apollo.useLazyQuery<ProductSimpleListQuery, ProductSimpleListQueryVariables>(ProductSimpleListDocument, baseOptions);
        }
export type ProductSimpleListQueryHookResult = ReturnType<typeof useProductSimpleListQuery>;
export type ProductSimpleListLazyQueryHookResult = ReturnType<typeof useProductSimpleListLazyQuery>;
export type ProductSimpleListQueryResult = Apollo.QueryResult<ProductSimpleListQuery, ProductSimpleListQueryVariables>;
export const ProductCategoryMinimumItemDocument = gql`
    query productCategoryMinimumItem($idSlug: ID!) {
  productCategory(idSlug: $idSlug) {
    ...ProductCategoryMinimum
  }
}
    ${ProductCategoryMinimumFragmentDoc}`;

/**
 * __useProductCategoryMinimumItemQuery__
 *
 * To run a query within a React component, call `useProductCategoryMinimumItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductCategoryMinimumItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductCategoryMinimumItemQuery({
 *   variables: {
 *      idSlug: // value for 'idSlug'
 *   },
 * });
 */
export function useProductCategoryMinimumItemQuery(baseOptions?: Apollo.QueryHookOptions<ProductCategoryMinimumItemQuery, ProductCategoryMinimumItemQueryVariables>) {
        return Apollo.useQuery<ProductCategoryMinimumItemQuery, ProductCategoryMinimumItemQueryVariables>(ProductCategoryMinimumItemDocument, baseOptions);
      }
export function useProductCategoryMinimumItemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductCategoryMinimumItemQuery, ProductCategoryMinimumItemQueryVariables>) {
          return Apollo.useLazyQuery<ProductCategoryMinimumItemQuery, ProductCategoryMinimumItemQueryVariables>(ProductCategoryMinimumItemDocument, baseOptions);
        }
export type ProductCategoryMinimumItemQueryHookResult = ReturnType<typeof useProductCategoryMinimumItemQuery>;
export type ProductCategoryMinimumItemLazyQueryHookResult = ReturnType<typeof useProductCategoryMinimumItemLazyQuery>;
export type ProductCategoryMinimumItemQueryResult = Apollo.QueryResult<ProductCategoryMinimumItemQuery, ProductCategoryMinimumItemQueryVariables>;
export const ProductCategoryMinimumListDocument = gql`
    query productCategoryMinimumList {
  productCategories {
    ...ProductCategoryMinimum
  }
}
    ${ProductCategoryMinimumFragmentDoc}`;

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
export function useProductCategoryMinimumListQuery(baseOptions?: Apollo.QueryHookOptions<ProductCategoryMinimumListQuery, ProductCategoryMinimumListQueryVariables>) {
        return Apollo.useQuery<ProductCategoryMinimumListQuery, ProductCategoryMinimumListQueryVariables>(ProductCategoryMinimumListDocument, baseOptions);
      }
export function useProductCategoryMinimumListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductCategoryMinimumListQuery, ProductCategoryMinimumListQueryVariables>) {
          return Apollo.useLazyQuery<ProductCategoryMinimumListQuery, ProductCategoryMinimumListQueryVariables>(ProductCategoryMinimumListDocument, baseOptions);
        }
export type ProductCategoryMinimumListQueryHookResult = ReturnType<typeof useProductCategoryMinimumListQuery>;
export type ProductCategoryMinimumListLazyQueryHookResult = ReturnType<typeof useProductCategoryMinimumListLazyQuery>;
export type ProductCategoryMinimumListQueryResult = Apollo.QueryResult<ProductCategoryMinimumListQuery, ProductCategoryMinimumListQueryVariables>;
export const ProductCategorySimpleItemDocument = gql`
    query productCategorySimpleItem($idSlug: ID!) {
  productCategory(idSlug: $idSlug) {
    ...ProductCategorySimple
  }
}
    ${ProductCategorySimpleFragmentDoc}`;

/**
 * __useProductCategorySimpleItemQuery__
 *
 * To run a query within a React component, call `useProductCategorySimpleItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductCategorySimpleItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductCategorySimpleItemQuery({
 *   variables: {
 *      idSlug: // value for 'idSlug'
 *   },
 * });
 */
export function useProductCategorySimpleItemQuery(baseOptions?: Apollo.QueryHookOptions<ProductCategorySimpleItemQuery, ProductCategorySimpleItemQueryVariables>) {
        return Apollo.useQuery<ProductCategorySimpleItemQuery, ProductCategorySimpleItemQueryVariables>(ProductCategorySimpleItemDocument, baseOptions);
      }
export function useProductCategorySimpleItemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductCategorySimpleItemQuery, ProductCategorySimpleItemQueryVariables>) {
          return Apollo.useLazyQuery<ProductCategorySimpleItemQuery, ProductCategorySimpleItemQueryVariables>(ProductCategorySimpleItemDocument, baseOptions);
        }
export type ProductCategorySimpleItemQueryHookResult = ReturnType<typeof useProductCategorySimpleItemQuery>;
export type ProductCategorySimpleItemLazyQueryHookResult = ReturnType<typeof useProductCategorySimpleItemLazyQuery>;
export type ProductCategorySimpleItemQueryResult = Apollo.QueryResult<ProductCategorySimpleItemQuery, ProductCategorySimpleItemQueryVariables>;
export const ProductLineMinimumListDocument = gql`
    query productLineMinimumList {
  productLines {
    ...ProductLineMinimum
  }
}
    ${ProductLineMinimumFragmentDoc}`;

/**
 * __useProductLineMinimumListQuery__
 *
 * To run a query within a React component, call `useProductLineMinimumListQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductLineMinimumListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductLineMinimumListQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductLineMinimumListQuery(baseOptions?: Apollo.QueryHookOptions<ProductLineMinimumListQuery, ProductLineMinimumListQueryVariables>) {
        return Apollo.useQuery<ProductLineMinimumListQuery, ProductLineMinimumListQueryVariables>(ProductLineMinimumListDocument, baseOptions);
      }
export function useProductLineMinimumListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductLineMinimumListQuery, ProductLineMinimumListQueryVariables>) {
          return Apollo.useLazyQuery<ProductLineMinimumListQuery, ProductLineMinimumListQueryVariables>(ProductLineMinimumListDocument, baseOptions);
        }
export type ProductLineMinimumListQueryHookResult = ReturnType<typeof useProductLineMinimumListQuery>;
export type ProductLineMinimumListLazyQueryHookResult = ReturnType<typeof useProductLineMinimumListLazyQuery>;
export type ProductLineMinimumListQueryResult = Apollo.QueryResult<ProductLineMinimumListQuery, ProductLineMinimumListQueryVariables>;
export const ProductLineSimpleItemDocument = gql`
    query productLineSimpleItem($id: ID!) {
  productLine(id: $id) {
    ...ProductLineSimple
  }
}
    ${ProductLineSimpleFragmentDoc}`;

/**
 * __useProductLineSimpleItemQuery__
 *
 * To run a query within a React component, call `useProductLineSimpleItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductLineSimpleItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductLineSimpleItemQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductLineSimpleItemQuery(baseOptions?: Apollo.QueryHookOptions<ProductLineSimpleItemQuery, ProductLineSimpleItemQueryVariables>) {
        return Apollo.useQuery<ProductLineSimpleItemQuery, ProductLineSimpleItemQueryVariables>(ProductLineSimpleItemDocument, baseOptions);
      }
export function useProductLineSimpleItemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductLineSimpleItemQuery, ProductLineSimpleItemQueryVariables>) {
          return Apollo.useLazyQuery<ProductLineSimpleItemQuery, ProductLineSimpleItemQueryVariables>(ProductLineSimpleItemDocument, baseOptions);
        }
export type ProductLineSimpleItemQueryHookResult = ReturnType<typeof useProductLineSimpleItemQuery>;
export type ProductLineSimpleItemLazyQueryHookResult = ReturnType<typeof useProductLineSimpleItemLazyQuery>;
export type ProductLineSimpleItemQueryResult = Apollo.QueryResult<ProductLineSimpleItemQuery, ProductLineSimpleItemQueryVariables>;
export const ProductLineSimpleListDocument = gql`
    query productLineSimpleList {
  productLines {
    ...ProductLineSimple
  }
}
    ${ProductLineSimpleFragmentDoc}`;

/**
 * __useProductLineSimpleListQuery__
 *
 * To run a query within a React component, call `useProductLineSimpleListQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductLineSimpleListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductLineSimpleListQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductLineSimpleListQuery(baseOptions?: Apollo.QueryHookOptions<ProductLineSimpleListQuery, ProductLineSimpleListQueryVariables>) {
        return Apollo.useQuery<ProductLineSimpleListQuery, ProductLineSimpleListQueryVariables>(ProductLineSimpleListDocument, baseOptions);
      }
export function useProductLineSimpleListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductLineSimpleListQuery, ProductLineSimpleListQueryVariables>) {
          return Apollo.useLazyQuery<ProductLineSimpleListQuery, ProductLineSimpleListQueryVariables>(ProductLineSimpleListDocument, baseOptions);
        }
export type ProductLineSimpleListQueryHookResult = ReturnType<typeof useProductLineSimpleListQuery>;
export type ProductLineSimpleListLazyQueryHookResult = ReturnType<typeof useProductLineSimpleListLazyQuery>;
export type ProductLineSimpleListQueryResult = Apollo.QueryResult<ProductLineSimpleListQuery, ProductLineSimpleListQueryVariables>;
export const SearchByBarcodeDocument = gql`
    query searchByBarcode($barcode: String!) {
  searchByBarcode(barcode: $barcode) {
    ...Error
    ...ProductItem
  }
}
    ${ErrorFragmentDoc}
${ProductItemFragmentDoc}`;

/**
 * __useSearchByBarcodeQuery__
 *
 * To run a query within a React component, call `useSearchByBarcodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchByBarcodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchByBarcodeQuery({
 *   variables: {
 *      barcode: // value for 'barcode'
 *   },
 * });
 */
export function useSearchByBarcodeQuery(baseOptions?: Apollo.QueryHookOptions<SearchByBarcodeQuery, SearchByBarcodeQueryVariables>) {
        return Apollo.useQuery<SearchByBarcodeQuery, SearchByBarcodeQueryVariables>(SearchByBarcodeDocument, baseOptions);
      }
export function useSearchByBarcodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchByBarcodeQuery, SearchByBarcodeQueryVariables>) {
          return Apollo.useLazyQuery<SearchByBarcodeQuery, SearchByBarcodeQueryVariables>(SearchByBarcodeDocument, baseOptions);
        }
export type SearchByBarcodeQueryHookResult = ReturnType<typeof useSearchByBarcodeQuery>;
export type SearchByBarcodeLazyQueryHookResult = ReturnType<typeof useSearchByBarcodeLazyQuery>;
export type SearchByBarcodeQueryResult = Apollo.QueryResult<SearchByBarcodeQuery, SearchByBarcodeQueryVariables>;