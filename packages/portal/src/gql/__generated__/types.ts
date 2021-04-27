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
  bonus?: Maybe<Bonus>;
  bonuses: Array<Maybe<Bonus>>;
  cartItems: Array<CartItem>;
  discount?: Maybe<Discount>;
  discountByCode?: Maybe<Discount>;
  discounts: Array<Maybe<Discount>>;
  feature?: Maybe<Feature>;
  features: Array<Feature>;
  order?: Maybe<Order>;
  orderTotal?: Maybe<OrderTotal>;
  orders: Array<Order>;
  param?: Maybe<Param>;
  params: Array<Maybe<Param>>;
  procurement?: Maybe<Procurement>;
  procurements: Array<Procurement>;
  product?: Maybe<Product>;
  productCategories: Array<ProductCategory>;
  productCategory?: Maybe<ProductCategory>;
  productLine?: Maybe<ProductLine>;
  productLines: Array<ProductLine>;
  products: Array<Product>;
  productsByCategory: Array<Product>;
  productsByIds: Array<Maybe<Product>>;
  promotion?: Maybe<Promotion>;
  promotions: Array<Maybe<Promotion>>;
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


export type QueryProcurementArgs = {
  id: Scalars['ID'];
};


export type QueryProcurementsArgs = {
  status?: Maybe<ProcurementStatus>;
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


export type QueryProductsByCategoryArgs = {
  categoryIdSlug: Scalars['ID'];
};


export type QueryProductsByIdsArgs = {
  productIds: Array<Scalars['ID']>;
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
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  isDisabled: Scalars['Boolean'];
  isSelectedForProductCategory?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type IFeatureIsSelectedForProductCategoryArgs = {
  productCategorySlug: Scalars['ID'];
};

export type FeatureSimple = IFeature & {
  __typename?: 'FeatureSimple';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  isDisabled: Scalars['Boolean'];
  isSelectedForProductCategory?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type FeatureSimpleIsSelectedForProductCategoryArgs = {
  productCategorySlug: Scalars['ID'];
};

export type Feature = IFeature & {
  __typename?: 'Feature';
  createdAt: Scalars['DateTime'];
  discounts: Array<Discount>;
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  isDisabled: Scalars['Boolean'];
  isSelectedForProductCategory?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  productCategories: Array<ProductCategory>;
  productFeatures: Array<ProductFeature>;
  products: Array<Product>;
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type FeatureIsSelectedForProductCategoryArgs = {
  productCategorySlug: Scalars['ID'];
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
  barcode?: Maybe<Scalars['String']>;
  cartItem?: Maybe<CartItem>;
  count: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  isInCart?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  price: Scalars['Int'];
  productCategoryId: Scalars['ID'];
  productLineId: Scalars['ID'];
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  weight: Scalars['Int'];
};

export type ProductSimple = IProduct & {
  __typename?: 'ProductSimple';
  barcode?: Maybe<Scalars['String']>;
  cartItem?: Maybe<CartItem>;
  count: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  isInCart?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  price: Scalars['Int'];
  productCategoryId: Scalars['ID'];
  productLineId: Scalars['ID'];
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  weight: Scalars['Int'];
};

export type Product = IProduct & {
  __typename?: 'Product';
  barcode?: Maybe<Scalars['String']>;
  cartItem?: Maybe<CartItem>;
  count: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  discounts: Array<Discount>;
  features: Array<Feature>;
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  isInCart?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  orderProducts: Array<OrderProduct>;
  price: Scalars['Int'];
  productCategory?: Maybe<ProductCategory>;
  productCategoryId: Scalars['ID'];
  productFeatures: Array<ProductFeature>;
  productLine?: Maybe<ProductLine>;
  productLineId: Scalars['ID'];
  productProcurements: Array<ProductProcurement>;
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  waitingCount: Scalars['Int'];
  weight: Scalars['Int'];
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
  barcode?: Maybe<Scalars['String']>;
  color: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isSelectedForProductCategory?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type IProductLineIsSelectedForProductCategoryArgs = {
  productCategorySlug: Scalars['ID'];
};

export type ProductLineSimple = IProductLine & {
  __typename?: 'ProductLineSimple';
  barcode?: Maybe<Scalars['String']>;
  color: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isSelectedForProductCategory?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type ProductLineSimpleIsSelectedForProductCategoryArgs = {
  productCategorySlug: Scalars['ID'];
};

export type ProductLine = IProductLine & {
  __typename?: 'ProductLine';
  barcode?: Maybe<Scalars['String']>;
  color: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isSelectedForProductCategory?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  products: Array<Product>;
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type ProductLineIsSelectedForProductCategoryArgs = {
  productCategorySlug: Scalars['ID'];
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

export type CartItem = {
  __typename?: 'CartItem';
  id: Scalars['String'];
  productsCount: Scalars['Int'];
};

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

export type FeaturesSelectorFragment = (
  { __typename?: 'Feature' }
  & FeatureMinimum_Feature_Fragment
);

export type FeaturesSelectorQueryVariables = Exact<{
  productCategorySlug: Scalars['ID'];
}>;


export type FeaturesSelectorQuery = (
  { __typename?: 'Query' }
  & { features: Array<(
    { __typename?: 'Feature' }
    & Pick<Feature, 'isSelectedForProductCategory'>
    & FeaturesSelectorFragment
  )> }
);

export type ProductCategoryMenuListFragment = (
  { __typename?: 'ProductCategory' }
  & Pick<ProductCategory, 'slug'>
  & ProductCategoryMinimum_ProductCategory_Fragment
);

export type ProductCategoryMenuListQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductCategoryMenuListQuery = (
  { __typename?: 'Query' }
  & { productCategories: Array<(
    { __typename?: 'ProductCategory' }
    & ProductCategoryMenuListFragment
  )> }
);

export type ProductLinesSelectorFragment = (
  { __typename?: 'ProductLine' }
  & Pick<ProductLine, 'color'>
  & ProductLineMinimum_ProductLine_Fragment
);

export type ProductLinesSelectorQueryVariables = Exact<{
  productCategorySlug: Scalars['ID'];
}>;


export type ProductLinesSelectorQuery = (
  { __typename?: 'Query' }
  & { productLines: Array<(
    { __typename?: 'ProductLine' }
    & Pick<ProductLine, 'isSelectedForProductCategory'>
    & ProductLinesSelectorFragment
  )> }
);

export type ProductsCatalogQueryVariables = Exact<{
  categorySlug: Scalars['ID'];
}>;


export type ProductsCatalogQuery = (
  { __typename?: 'Query' }
  & { productsByCategory: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name' | 'description' | 'imageUrl' | 'weight' | 'price' | 'isInCart'>
    & { cartItem?: Maybe<(
      { __typename?: 'CartItem' }
      & Pick<CartItem, 'productsCount'>
    )>, features: Array<(
      { __typename?: 'Feature' }
      & Pick<Feature, 'id' | 'imageUrl' | 'name'>
    )>, productLine?: Maybe<(
      { __typename?: 'ProductLine' }
      & Pick<ProductLine, 'id' | 'name' | 'color'>
    )> }
  )> }
);

export type CartProductsQueryVariables = Exact<{
  productIds: Array<Scalars['ID']>;
}>;


export type CartProductsQuery = (
  { __typename?: 'Query' }
  & { productsByIds: Array<Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name' | 'imageUrl' | 'weight' | 'price' | 'isInCart'>
    & { cartItem?: Maybe<(
      { __typename?: 'CartItem' }
      & Pick<CartItem, 'productsCount'>
    )>, productLine?: Maybe<(
      { __typename?: 'ProductLine' }
      & Pick<ProductLine, 'id' | 'name' | 'color'>
    )>, productCategory?: Maybe<(
      { __typename?: 'ProductCategory' }
      & Pick<ProductCategory, 'id'>
    )> }
  )>> }
);

export type CreateCheckoutOrderMutationVariables = Exact<{
  phoneNumber: Scalars['String'];
  address: Scalars['String'];
  deliveryTime: Scalars['DateTime'];
  intercomCode?: Maybe<Scalars['String']>;
  products: Array<OrderProductInput>;
}>;


export type CreateCheckoutOrderMutation = (
  { __typename?: 'Mutation' }
  & { createOrder: (
    { __typename?: 'OrderSimple' }
    & Pick<OrderSimple, 'id'>
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
  CartItem: ResolverTypeWrapper<CartItem>;
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
  CartItem: CartItem;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  bonus?: Resolver<Maybe<ResolversTypes['Bonus']>, ParentType, ContextType, RequireFields<QueryBonusArgs, 'id'>>;
  bonuses?: Resolver<Array<Maybe<ResolversTypes['Bonus']>>, ParentType, ContextType>;
  cartItems?: Resolver<Array<ResolversTypes['CartItem']>, ParentType, ContextType>;
  discount?: Resolver<Maybe<ResolversTypes['Discount']>, ParentType, ContextType, RequireFields<QueryDiscountArgs, 'id'>>;
  discountByCode?: Resolver<Maybe<ResolversTypes['Discount']>, ParentType, ContextType, RequireFields<QueryDiscountByCodeArgs, 'code'>>;
  discounts?: Resolver<Array<Maybe<ResolversTypes['Discount']>>, ParentType, ContextType>;
  feature?: Resolver<Maybe<ResolversTypes['Feature']>, ParentType, ContextType, RequireFields<QueryFeatureArgs, 'id'>>;
  features?: Resolver<Array<ResolversTypes['Feature']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryOrderArgs, 'id'>>;
  orderTotal?: Resolver<Maybe<ResolversTypes['OrderTotal']>, ParentType, ContextType, RequireFields<QueryOrderTotalArgs, 'products'>>;
  orders?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType>;
  param?: Resolver<Maybe<ResolversTypes['Param']>, ParentType, ContextType, RequireFields<QueryParamArgs, 'id'>>;
  params?: Resolver<Array<Maybe<ResolversTypes['Param']>>, ParentType, ContextType>;
  procurement?: Resolver<Maybe<ResolversTypes['Procurement']>, ParentType, ContextType, RequireFields<QueryProcurementArgs, 'id'>>;
  procurements?: Resolver<Array<ResolversTypes['Procurement']>, ParentType, ContextType, RequireFields<QueryProcurementsArgs, never>>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'id'>>;
  productCategories?: Resolver<Array<ResolversTypes['ProductCategory']>, ParentType, ContextType>;
  productCategory?: Resolver<Maybe<ResolversTypes['ProductCategory']>, ParentType, ContextType, RequireFields<QueryProductCategoryArgs, 'idSlug'>>;
  productLine?: Resolver<Maybe<ResolversTypes['ProductLine']>, ParentType, ContextType, RequireFields<QueryProductLineArgs, 'id'>>;
  productLines?: Resolver<Array<ResolversTypes['ProductLine']>, ParentType, ContextType>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  productsByCategory?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductsByCategoryArgs, 'categoryIdSlug'>>;
  productsByIds?: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType, RequireFields<QueryProductsByIdsArgs, 'productIds'>>;
  promotion?: Resolver<Maybe<ResolversTypes['Promotion']>, ParentType, ContextType, RequireFields<QueryPromotionArgs, 'id'>>;
  promotions?: Resolver<Array<Maybe<ResolversTypes['Promotion']>>, ParentType, ContextType>;
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
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isSelectedForProductCategory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<IFeatureIsSelectedForProductCategoryArgs, 'productCategorySlug'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type FeatureSimpleResolvers<ContextType = any, ParentType extends ResolversParentTypes['FeatureSimple'] = ResolversParentTypes['FeatureSimple']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isSelectedForProductCategory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<FeatureSimpleIsSelectedForProductCategoryArgs, 'productCategorySlug'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type FeatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['Feature'] = ResolversParentTypes['Feature']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  discounts?: Resolver<Array<ResolversTypes['Discount']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isSelectedForProductCategory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<FeatureIsSelectedForProductCategoryArgs, 'productCategorySlug'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productCategories?: Resolver<Array<ResolversTypes['ProductCategory']>, ParentType, ContextType>;
  productFeatures?: Resolver<Array<ResolversTypes['ProductFeature']>, ParentType, ContextType>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
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
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cartItem?: Resolver<Maybe<ResolversTypes['CartItem']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isInCart?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  productCategoryId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  productLineId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type ProductSimpleResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductSimple'] = ResolversParentTypes['ProductSimple']> = {
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cartItem?: Resolver<Maybe<ResolversTypes['CartItem']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isInCart?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  productCategoryId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  productLineId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cartItem?: Resolver<Maybe<ResolversTypes['CartItem']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  discounts?: Resolver<Array<ResolversTypes['Discount']>, ParentType, ContextType>;
  features?: Resolver<Array<ResolversTypes['Feature']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isInCart?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderProducts?: Resolver<Array<ResolversTypes['OrderProduct']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  productCategory?: Resolver<Maybe<ResolversTypes['ProductCategory']>, ParentType, ContextType>;
  productCategoryId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  productFeatures?: Resolver<Array<ResolversTypes['ProductFeature']>, ParentType, ContextType>;
  productLine?: Resolver<Maybe<ResolversTypes['ProductLine']>, ParentType, ContextType>;
  productLineId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  productProcurements?: Resolver<Array<ResolversTypes['ProductProcurement']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  waitingCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isSelectedForProductCategory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<IProductLineIsSelectedForProductCategoryArgs, 'productCategorySlug'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type ProductLineSimpleResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductLineSimple'] = ResolversParentTypes['ProductLineSimple']> = {
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isSelectedForProductCategory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<ProductLineSimpleIsSelectedForProductCategoryArgs, 'productCategorySlug'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ProductLineResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductLine'] = ResolversParentTypes['ProductLine']> = {
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isSelectedForProductCategory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<ProductLineIsSelectedForProductCategoryArgs, 'productCategorySlug'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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

export type CartItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartItem'] = ResolversParentTypes['CartItem']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
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
  CartItem?: CartItemResolvers<ContextType>;
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
export const ErrorFragmentDoc = gql`
    fragment Error on IError {
  code
  message
  isError
}
    `;
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
export const OrderMinimumFragmentDoc = gql`
    fragment OrderMinimum on IOrder {
  id
  address
  deliveryTime
  status
  phoneNumber
}
    `;
export const OrderTotalFragmentDoc = gql`
    fragment OrderTotal on OrderTotal {
  totalPrice
  totalPriceWithDiscount
  totalDiscount
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
export const ProcurementMinimumFragmentDoc = gql`
    fragment ProcurementMinimum on IProcurement {
  id
  name
  comment
  status
}
    `;
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
export const ProductCategoryMinimumFragmentDoc = gql`
    fragment ProductCategoryMinimum on IProductCategory {
  id
  name
  iconUrl
  slug
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
export const ProductLineMinimumFragmentDoc = gql`
    fragment ProductLineMinimum on IProductLine {
  id
  name
}
    `;
export const ProductFeatureSimpleFragmentDoc = gql`
    fragment ProductFeatureSimple on ProductFeature {
  endTime
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
export const ProductMinimumFragmentDoc = gql`
    fragment ProductMinimum on IProduct {
  id
  name
}
    `;
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
export const FeaturesSelectorFragmentDoc = gql`
    fragment FeaturesSelector on Feature {
  ...FeatureMinimum
}
    ${FeatureMinimumFragmentDoc}`;
export const ProductCategoryMenuListFragmentDoc = gql`
    fragment ProductCategoryMenuList on ProductCategory {
  ...ProductCategoryMinimum
  slug
}
    ${ProductCategoryMinimumFragmentDoc}`;
export const ProductLinesSelectorFragmentDoc = gql`
    fragment ProductLinesSelector on ProductLine {
  ...ProductLineMinimum
  color
}
    ${ProductLineMinimumFragmentDoc}`;
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
export const FeaturesSelectorDocument = gql`
    query featuresSelector($productCategorySlug: ID!) {
  features {
    ...FeaturesSelector
    isSelectedForProductCategory(productCategorySlug: $productCategorySlug) @client
  }
}
    ${FeaturesSelectorFragmentDoc}`;

/**
 * __useFeaturesSelectorQuery__
 *
 * To run a query within a React component, call `useFeaturesSelectorQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeaturesSelectorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeaturesSelectorQuery({
 *   variables: {
 *      productCategorySlug: // value for 'productCategorySlug'
 *   },
 * });
 */
export function useFeaturesSelectorQuery(baseOptions?: Apollo.QueryHookOptions<FeaturesSelectorQuery, FeaturesSelectorQueryVariables>) {
        return Apollo.useQuery<FeaturesSelectorQuery, FeaturesSelectorQueryVariables>(FeaturesSelectorDocument, baseOptions);
      }
export function useFeaturesSelectorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FeaturesSelectorQuery, FeaturesSelectorQueryVariables>) {
          return Apollo.useLazyQuery<FeaturesSelectorQuery, FeaturesSelectorQueryVariables>(FeaturesSelectorDocument, baseOptions);
        }
export type FeaturesSelectorQueryHookResult = ReturnType<typeof useFeaturesSelectorQuery>;
export type FeaturesSelectorLazyQueryHookResult = ReturnType<typeof useFeaturesSelectorLazyQuery>;
export type FeaturesSelectorQueryResult = Apollo.QueryResult<FeaturesSelectorQuery, FeaturesSelectorQueryVariables>;
export const ProductCategoryMenuListDocument = gql`
    query productCategoryMenuList {
  productCategories {
    ...ProductCategoryMenuList
  }
}
    ${ProductCategoryMenuListFragmentDoc}`;

/**
 * __useProductCategoryMenuListQuery__
 *
 * To run a query within a React component, call `useProductCategoryMenuListQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductCategoryMenuListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductCategoryMenuListQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductCategoryMenuListQuery(baseOptions?: Apollo.QueryHookOptions<ProductCategoryMenuListQuery, ProductCategoryMenuListQueryVariables>) {
        return Apollo.useQuery<ProductCategoryMenuListQuery, ProductCategoryMenuListQueryVariables>(ProductCategoryMenuListDocument, baseOptions);
      }
export function useProductCategoryMenuListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductCategoryMenuListQuery, ProductCategoryMenuListQueryVariables>) {
          return Apollo.useLazyQuery<ProductCategoryMenuListQuery, ProductCategoryMenuListQueryVariables>(ProductCategoryMenuListDocument, baseOptions);
        }
export type ProductCategoryMenuListQueryHookResult = ReturnType<typeof useProductCategoryMenuListQuery>;
export type ProductCategoryMenuListLazyQueryHookResult = ReturnType<typeof useProductCategoryMenuListLazyQuery>;
export type ProductCategoryMenuListQueryResult = Apollo.QueryResult<ProductCategoryMenuListQuery, ProductCategoryMenuListQueryVariables>;
export const ProductLinesSelectorDocument = gql`
    query ProductLinesSelector($productCategorySlug: ID!) {
  productLines {
    ...ProductLinesSelector
    isSelectedForProductCategory(productCategorySlug: $productCategorySlug) @client
  }
}
    ${ProductLinesSelectorFragmentDoc}`;

/**
 * __useProductLinesSelectorQuery__
 *
 * To run a query within a React component, call `useProductLinesSelectorQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductLinesSelectorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductLinesSelectorQuery({
 *   variables: {
 *      productCategorySlug: // value for 'productCategorySlug'
 *   },
 * });
 */
export function useProductLinesSelectorQuery(baseOptions?: Apollo.QueryHookOptions<ProductLinesSelectorQuery, ProductLinesSelectorQueryVariables>) {
        return Apollo.useQuery<ProductLinesSelectorQuery, ProductLinesSelectorQueryVariables>(ProductLinesSelectorDocument, baseOptions);
      }
export function useProductLinesSelectorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductLinesSelectorQuery, ProductLinesSelectorQueryVariables>) {
          return Apollo.useLazyQuery<ProductLinesSelectorQuery, ProductLinesSelectorQueryVariables>(ProductLinesSelectorDocument, baseOptions);
        }
export type ProductLinesSelectorQueryHookResult = ReturnType<typeof useProductLinesSelectorQuery>;
export type ProductLinesSelectorLazyQueryHookResult = ReturnType<typeof useProductLinesSelectorLazyQuery>;
export type ProductLinesSelectorQueryResult = Apollo.QueryResult<ProductLinesSelectorQuery, ProductLinesSelectorQueryVariables>;
export const ProductsCatalogDocument = gql`
    query productsCatalog($categorySlug: ID!) {
  productsByCategory(categoryIdSlug: $categorySlug) {
    id
    name
    description
    imageUrl
    weight
    price
    isInCart @client
    cartItem @client {
      productsCount
    }
    features {
      id
      imageUrl
      name
    }
    productLine {
      id
      name
      color
    }
  }
}
    `;

/**
 * __useProductsCatalogQuery__
 *
 * To run a query within a React component, call `useProductsCatalogQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsCatalogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsCatalogQuery({
 *   variables: {
 *      categorySlug: // value for 'categorySlug'
 *   },
 * });
 */
export function useProductsCatalogQuery(baseOptions?: Apollo.QueryHookOptions<ProductsCatalogQuery, ProductsCatalogQueryVariables>) {
        return Apollo.useQuery<ProductsCatalogQuery, ProductsCatalogQueryVariables>(ProductsCatalogDocument, baseOptions);
      }
export function useProductsCatalogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsCatalogQuery, ProductsCatalogQueryVariables>) {
          return Apollo.useLazyQuery<ProductsCatalogQuery, ProductsCatalogQueryVariables>(ProductsCatalogDocument, baseOptions);
        }
export type ProductsCatalogQueryHookResult = ReturnType<typeof useProductsCatalogQuery>;
export type ProductsCatalogLazyQueryHookResult = ReturnType<typeof useProductsCatalogLazyQuery>;
export type ProductsCatalogQueryResult = Apollo.QueryResult<ProductsCatalogQuery, ProductsCatalogQueryVariables>;
export const CartProductsDocument = gql`
    query cartProducts($productIds: [ID!]!) {
  productsByIds(productIds: $productIds) {
    id
    name
    imageUrl
    weight
    price
    isInCart @client
    cartItem @client {
      productsCount
    }
    productLine {
      id
      name
      color
    }
    productCategory {
      id
    }
  }
}
    `;

/**
 * __useCartProductsQuery__
 *
 * To run a query within a React component, call `useCartProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCartProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCartProductsQuery({
 *   variables: {
 *      productIds: // value for 'productIds'
 *   },
 * });
 */
export function useCartProductsQuery(baseOptions?: Apollo.QueryHookOptions<CartProductsQuery, CartProductsQueryVariables>) {
        return Apollo.useQuery<CartProductsQuery, CartProductsQueryVariables>(CartProductsDocument, baseOptions);
      }
export function useCartProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CartProductsQuery, CartProductsQueryVariables>) {
          return Apollo.useLazyQuery<CartProductsQuery, CartProductsQueryVariables>(CartProductsDocument, baseOptions);
        }
export type CartProductsQueryHookResult = ReturnType<typeof useCartProductsQuery>;
export type CartProductsLazyQueryHookResult = ReturnType<typeof useCartProductsLazyQuery>;
export type CartProductsQueryResult = Apollo.QueryResult<CartProductsQuery, CartProductsQueryVariables>;
export const CreateCheckoutOrderDocument = gql`
    mutation createCheckoutOrder($phoneNumber: String!, $address: String!, $deliveryTime: DateTime!, $intercomCode: String, $products: [OrderProductInput!]!) {
  createOrder(input: {address: $address, intercomCode: $intercomCode, deliveryTime: $deliveryTime, phoneNumber: $phoneNumber, products: $products}) {
    id
  }
}
    `;
export type CreateCheckoutOrderMutationFn = Apollo.MutationFunction<CreateCheckoutOrderMutation, CreateCheckoutOrderMutationVariables>;

/**
 * __useCreateCheckoutOrderMutation__
 *
 * To run a mutation, you first call `useCreateCheckoutOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCheckoutOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCheckoutOrderMutation, { data, loading, error }] = useCreateCheckoutOrderMutation({
 *   variables: {
 *      phoneNumber: // value for 'phoneNumber'
 *      address: // value for 'address'
 *      deliveryTime: // value for 'deliveryTime'
 *      intercomCode: // value for 'intercomCode'
 *      products: // value for 'products'
 *   },
 * });
 */
export function useCreateCheckoutOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateCheckoutOrderMutation, CreateCheckoutOrderMutationVariables>) {
        return Apollo.useMutation<CreateCheckoutOrderMutation, CreateCheckoutOrderMutationVariables>(CreateCheckoutOrderDocument, baseOptions);
      }
export type CreateCheckoutOrderMutationHookResult = ReturnType<typeof useCreateCheckoutOrderMutation>;
export type CreateCheckoutOrderMutationResult = Apollo.MutationResult<CreateCheckoutOrderMutation>;
export type CreateCheckoutOrderMutationOptions = Apollo.BaseMutationOptions<CreateCheckoutOrderMutation, CreateCheckoutOrderMutationVariables>;