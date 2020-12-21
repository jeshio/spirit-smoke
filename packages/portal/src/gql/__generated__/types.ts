import { GraphQLResolveInfo } from 'graphql';
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
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']>;
  bonus?: Maybe<Bonus>;
  bonuses: Array<Maybe<Bonus>>;
  cartItems: Array<CartItem>;
  companies: Array<Company>;
  company?: Maybe<Company>;
  discount?: Maybe<Discount>;
  discounts: Array<Maybe<Discount>>;
  feature?: Maybe<Feature>;
  features: Array<Feature>;
  order?: Maybe<Order>;
  orders: Array<Order>;
  param?: Maybe<Param>;
  params: Array<Maybe<Param>>;
  procurement?: Maybe<Procurement>;
  procurements: Array<Procurement>;
  product?: Maybe<Product>;
  productCategories: Array<ProductCategory>;
  productCategory?: Maybe<ProductCategory>;
  products: Array<Product>;
  productsByCategory: Array<Product>;
  productsByIds: Array<Maybe<Product>>;
  promotion?: Maybe<Promotion>;
  promotions: Array<Maybe<Promotion>>;
};


export type QueryBonusArgs = {
  id: Scalars['ID'];
};


export type QueryCompanyArgs = {
  id: Scalars['ID'];
};


export type QueryDiscountArgs = {
  id: Scalars['ID'];
};


export type QueryFeatureArgs = {
  id: Scalars['ID'];
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
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


export type QueryProductsByCategoryArgs = {
  categoryIdSlug: Scalars['ID'];
};


export type QueryProductsByIdsArgs = {
  productIds: Array<Scalars['ID']>;
};


export type QueryPromotionArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  createBonus: Bonus;
  addOrderBonus: Bonus;
  createCompany: CompanySimple;
  updateCompany: CompanySimple;
  deleteCompany: Scalars['ID'];
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
  deleteProduct: Scalars['ID'];
  createProductCategory: ProductCategorySimple;
  updateProductCategory: ProductCategorySimple;
  deleteProductCategory: Scalars['ID'];
  createPromotion: Promotion;
};


export type MutationCreateBonusArgs = {
  input: BonusInput;
};


export type MutationAddOrderBonusArgs = {
  bonusId: Scalars['ID'];
  orderId: Scalars['ID'];
};


export type MutationCreateCompanyArgs = {
  input: CompanyInput;
};


export type MutationUpdateCompanyArgs = {
  id: Scalars['ID'];
  input: CompanyInput;
};


export type MutationDeleteCompanyArgs = {
  id: Scalars['ID'];
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

export type CompanyInput = {
  country?: Maybe<Scalars['String']>;
  color: Scalars['String'];
  barcode?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type ICompany = {
  barcode?: Maybe<Scalars['String']>;
  color: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  isSelectedForProductCategory?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt: Scalars['String'];
};


export type ICompanyIsSelectedForProductCategoryArgs = {
  productCategorySlug: Scalars['ID'];
};

export type CompanySimple = ICompany & {
  __typename?: 'CompanySimple';
  barcode?: Maybe<Scalars['String']>;
  color: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  isSelectedForProductCategory?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt: Scalars['String'];
};


export type CompanySimpleIsSelectedForProductCategoryArgs = {
  productCategorySlug: Scalars['ID'];
};

export type Company = ICompany & {
  __typename?: 'Company';
  barcode?: Maybe<Scalars['String']>;
  color: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  isSelectedForProductCategory?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  products: Array<Product>;
  slug: Scalars['String'];
  updatedAt: Scalars['String'];
};


export type CompanyIsSelectedForProductCategoryArgs = {
  productCategorySlug: Scalars['ID'];
};

export type DiscountInput = {
  name: Scalars['String'];
  percent?: Maybe<Scalars['Float']>;
  rub?: Maybe<Scalars['Float']>;
  code?: Maybe<Scalars['String']>;
  startDate: Scalars['String'];
  endDate: Scalars['String'];
  isGlobal?: Maybe<Scalars['Boolean']>;
};

export type Discount = {
  __typename?: 'Discount';
  id: Scalars['ID'];
  name: Scalars['String'];
  percent?: Maybe<Scalars['Float']>;
  rub?: Maybe<Scalars['Float']>;
  code?: Maybe<Scalars['String']>;
  startDate: Scalars['String'];
  endDate: Scalars['String'];
  isGlobal: Scalars['Boolean'];
  productCategories: Array<Maybe<ProductCategory>>;
  products: Array<Maybe<Product>>;
  features: Array<Maybe<Feature>>;
  orders: Array<Maybe<Order>>;
  bonuses: Array<Maybe<Bonus>>;
};

export type FeatureInput = {
  name: Scalars['String'];
  slug: Scalars['String'];
  imageUrl: Scalars['String'];
  isDisabled?: Maybe<Scalars['Boolean']>;
};

export type IFeature = {
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  imageUrl: Scalars['String'];
  isDisabled: Scalars['Boolean'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type FeatureSimple = IFeature & {
  __typename?: 'FeatureSimple';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  imageUrl: Scalars['String'];
  isDisabled: Scalars['Boolean'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Feature = IFeature & {
  __typename?: 'Feature';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  imageUrl: Scalars['String'];
  isDisabled: Scalars['Boolean'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
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
  address: Scalars['String'];
  intercomCode?: Maybe<Scalars['String']>;
  personsCount?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  ourComment?: Maybe<Scalars['String']>;
  deliveryTime: Scalars['String'];
  phoneNumber: Scalars['String'];
  products: Array<OrderProductInput>;
  status?: Maybe<OrderStatus>;
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

export type IOrder = {
  id: Scalars['ID'];
  address: Scalars['String'];
  status: OrderStatus;
  intercomCode?: Maybe<Scalars['String']>;
  personsCount?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  ourComment?: Maybe<Scalars['String']>;
  deliveryTime: Scalars['String'];
  phoneNumber: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type OrderSimple = IOrder & {
  __typename?: 'OrderSimple';
  id: Scalars['ID'];
  address: Scalars['String'];
  status: OrderStatus;
  intercomCode?: Maybe<Scalars['String']>;
  personsCount?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  ourComment?: Maybe<Scalars['String']>;
  deliveryTime: Scalars['String'];
  phoneNumber: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Order = IOrder & {
  __typename?: 'Order';
  id: Scalars['ID'];
  address: Scalars['String'];
  status: OrderStatus;
  intercomCode?: Maybe<Scalars['String']>;
  personsCount?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  ourComment?: Maybe<Scalars['String']>;
  deliveryTime: Scalars['String'];
  phoneNumber: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  totalPrice: Scalars['Int'];
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
  nextStatusDate?: Maybe<Scalars['String']>;
  deliveryCost: Scalars['Float'];
  status: ProcurementStatus;
  name: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
  providerInfo: Scalars['String'];
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
  nextStatusDate?: Maybe<Scalars['String']>;
  deliveryCost?: Maybe<Scalars['Float']>;
};

export type ProcurementSimple = IProcurement & {
  __typename?: 'ProcurementSimple';
  id: Scalars['ID'];
  name: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
  providerInfo: Scalars['String'];
  status: ProcurementStatus;
  nextStatusDate?: Maybe<Scalars['String']>;
  deliveryCost?: Maybe<Scalars['Float']>;
};

export type Procurement = IProcurement & {
  __typename?: 'Procurement';
  id: Scalars['ID'];
  name: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
  providerInfo: Scalars['String'];
  status: ProcurementStatus;
  nextStatusDate?: Maybe<Scalars['String']>;
  productsPrice: Scalars['Float'];
  totalPrice: Scalars['Float'];
  deliveryCost?: Maybe<Scalars['Float']>;
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
  imageUrl: Scalars['String'];
  price: Scalars['Int'];
  productCategoryId: Scalars['ID'];
  companyId: Scalars['ID'];
  weight: Scalars['Int'];
  features?: Maybe<Array<ProductFeatureInput>>;
};

export type IProduct = {
  barcode?: Maybe<Scalars['String']>;
  cartItem?: Maybe<CartItem>;
  companyId: Scalars['ID'];
  count: Scalars['Int'];
  createdAt: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  isInCart?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  price: Scalars['Int'];
  productCategoryId: Scalars['ID'];
  slug: Scalars['String'];
  updatedAt: Scalars['String'];
  weight: Scalars['Int'];
};

export type ProductSimple = IProduct & {
  __typename?: 'ProductSimple';
  barcode?: Maybe<Scalars['String']>;
  cartItem?: Maybe<CartItem>;
  companyId: Scalars['ID'];
  count: Scalars['Int'];
  createdAt: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  isInCart?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  price: Scalars['Int'];
  productCategoryId: Scalars['ID'];
  slug: Scalars['String'];
  updatedAt: Scalars['String'];
  weight: Scalars['Int'];
};

export type Product = IProduct & {
  __typename?: 'Product';
  barcode?: Maybe<Scalars['String']>;
  cartItem?: Maybe<CartItem>;
  company?: Maybe<Company>;
  companyId: Scalars['ID'];
  count: Scalars['Int'];
  createdAt: Scalars['String'];
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
  productProcurements: Array<ProductProcurement>;
  slug: Scalars['String'];
  updatedAt: Scalars['String'];
  waitingCount: Scalars['Int'];
  weight: Scalars['Int'];
};

export type ProductCategoryInput = {
  name: Scalars['String'];
  slug: Scalars['String'];
  priority?: Maybe<Scalars['Int']>;
  iconUrl: Scalars['String'];
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
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type ProductCategorySimple = IProductCategory & {
  __typename?: 'ProductCategorySimple';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  priority?: Maybe<Scalars['Int']>;
  iconUrl: Scalars['String'];
  description: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type ProductCategory = IProductCategory & {
  __typename?: 'ProductCategory';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  priority?: Maybe<Scalars['Int']>;
  iconUrl: Scalars['String'];
  description: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  products: Array<Product>;
  features: Array<Feature>;
  discounts: Array<Discount>;
};

export type PromotionInput = {
  name: Scalars['String'];
  description: Scalars['String'];
  imageUrl: Scalars['String'];
  startDate: Scalars['String'];
  endDate: Scalars['String'];
  priority: Scalars['Int'];
};

export type Promotion = {
  __typename?: 'Promotion';
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  imageUrl: Scalars['String'];
  startDate: Scalars['String'];
  endDate: Scalars['String'];
  priority: Scalars['Int'];
};

export type CartItem = {
  __typename?: 'CartItem';
  id: Scalars['String'];
  productsCount: Scalars['Int'];
};

type CompanyMinimum_CompanySimple_Fragment = (
  { __typename?: 'CompanySimple' }
  & Pick<CompanySimple, 'id' | 'name'>
);

type CompanyMinimum_Company_Fragment = (
  { __typename?: 'Company' }
  & Pick<Company, 'id' | 'name'>
);

export type CompanyMinimumFragment = CompanyMinimum_CompanySimple_Fragment | CompanyMinimum_Company_Fragment;

type CompanySimple_CompanySimple_Fragment = (
  { __typename?: 'CompanySimple' }
  & Pick<CompanySimple, 'id' | 'name' | 'slug' | 'country' | 'color' | 'barcode' | 'createdAt' | 'updatedAt'>
);

type CompanySimple_Company_Fragment = (
  { __typename?: 'Company' }
  & Pick<Company, 'id' | 'name' | 'slug' | 'country' | 'color' | 'barcode' | 'createdAt' | 'updatedAt'>
);

export type CompanySimpleFragment = CompanySimple_CompanySimple_Fragment | CompanySimple_Company_Fragment;

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
  & Pick<ProductSimple, 'id' | 'barcode' | 'name' | 'slug' | 'description' | 'imageUrl' | 'productCategoryId' | 'companyId' | 'weight' | 'price' | 'count' | 'createdAt' | 'updatedAt'>
);

type ProductSimple_Product_Fragment = (
  { __typename?: 'Product' }
  & Pick<Product, 'id' | 'barcode' | 'name' | 'slug' | 'description' | 'imageUrl' | 'productCategoryId' | 'companyId' | 'weight' | 'price' | 'count' | 'createdAt' | 'updatedAt'>
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

export type CompanyMinimumListQueryVariables = Exact<{ [key: string]: never; }>;


export type CompanyMinimumListQuery = (
  { __typename?: 'Query' }
  & { companies: Array<(
    { __typename?: 'Company' }
    & CompanyMinimum_Company_Fragment
  )> }
);

export type CompanySimpleItemQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CompanySimpleItemQuery = (
  { __typename?: 'Query' }
  & { company?: Maybe<(
    { __typename?: 'Company' }
    & CompanySimple_Company_Fragment
  )> }
);

export type CompanySimpleListQueryVariables = Exact<{ [key: string]: never; }>;


export type CompanySimpleListQuery = (
  { __typename?: 'Query' }
  & { companies: Array<(
    { __typename?: 'Company' }
    & CompanySimple_Company_Fragment
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

export type OrderSimpleListQueryVariables = Exact<{ [key: string]: never; }>;


export type OrderSimpleListQuery = (
  { __typename?: 'Query' }
  & { orders: Array<(
    { __typename?: 'Order' }
    & OrderMinimum_Order_Fragment
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

export type CompaniesSelectorFragment = (
  { __typename?: 'Company' }
  & Pick<Company, 'color'>
  & CompanyMinimum_Company_Fragment
);

export type CompaniesSelectorQueryVariables = Exact<{
  productCategorySlug: Scalars['ID'];
}>;


export type CompaniesSelectorQuery = (
  { __typename?: 'Query' }
  & { companies: Array<(
    { __typename?: 'Company' }
    & Pick<Company, 'isSelectedForProductCategory'>
    & CompaniesSelectorFragment
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
    )>, company?: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'id' | 'name' | 'color' | 'isSelectedForProductCategory'>
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
    )>, company?: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'id' | 'name' | 'color'>
    )>, productCategory?: Maybe<(
      { __typename?: 'ProductCategory' }
      & Pick<ProductCategory, 'id'>
    )> }
  )>> }
);

export type CreateCheckoutOrderMutationVariables = Exact<{
  phoneNumber: Scalars['String'];
  address: Scalars['String'];
  deliveryTime: Scalars['String'];
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
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  BonusInput: BonusInput;
  Bonus: ResolverTypeWrapper<Bonus>;
  CompanyInput: CompanyInput;
  ICompany: ResolversTypes['CompanySimple'] | ResolversTypes['Company'];
  CompanySimple: ResolverTypeWrapper<CompanySimple>;
  Company: ResolverTypeWrapper<Company>;
  DiscountInput: DiscountInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Discount: ResolverTypeWrapper<Discount>;
  FeatureInput: FeatureInput;
  IFeature: ResolversTypes['FeatureSimple'] | ResolversTypes['Feature'];
  FeatureSimple: ResolverTypeWrapper<FeatureSimple>;
  Feature: ResolverTypeWrapper<Feature>;
  ProductFeature: ResolverTypeWrapper<ProductFeature>;
  OrderInput: OrderInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  OrderStatus: OrderStatus;
  OrderProductInput: OrderProductInput;
  OrderProduct: ResolverTypeWrapper<OrderProduct>;
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
  PromotionInput: PromotionInput;
  Promotion: ResolverTypeWrapper<Promotion>;
  CartItem: ResolverTypeWrapper<CartItem>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Mutation: {};
  String: Scalars['String'];
  Subscription: {};
  BonusInput: BonusInput;
  Bonus: Bonus;
  CompanyInput: CompanyInput;
  ICompany: ResolversParentTypes['CompanySimple'] | ResolversParentTypes['Company'];
  CompanySimple: CompanySimple;
  Company: Company;
  DiscountInput: DiscountInput;
  Float: Scalars['Float'];
  Discount: Discount;
  FeatureInput: FeatureInput;
  IFeature: ResolversParentTypes['FeatureSimple'] | ResolversParentTypes['Feature'];
  FeatureSimple: FeatureSimple;
  Feature: Feature;
  ProductFeature: ProductFeature;
  OrderInput: OrderInput;
  Int: Scalars['Int'];
  OrderProductInput: OrderProductInput;
  OrderProduct: OrderProduct;
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
  PromotionInput: PromotionInput;
  Promotion: Promotion;
  CartItem: CartItem;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  bonus?: Resolver<Maybe<ResolversTypes['Bonus']>, ParentType, ContextType, RequireFields<QueryBonusArgs, 'id'>>;
  bonuses?: Resolver<Array<Maybe<ResolversTypes['Bonus']>>, ParentType, ContextType>;
  cartItems?: Resolver<Array<ResolversTypes['CartItem']>, ParentType, ContextType>;
  companies?: Resolver<Array<ResolversTypes['Company']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType, RequireFields<QueryCompanyArgs, 'id'>>;
  discount?: Resolver<Maybe<ResolversTypes['Discount']>, ParentType, ContextType, RequireFields<QueryDiscountArgs, 'id'>>;
  discounts?: Resolver<Array<Maybe<ResolversTypes['Discount']>>, ParentType, ContextType>;
  feature?: Resolver<Maybe<ResolversTypes['Feature']>, ParentType, ContextType, RequireFields<QueryFeatureArgs, 'id'>>;
  features?: Resolver<Array<ResolversTypes['Feature']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryOrderArgs, 'id'>>;
  orders?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType>;
  param?: Resolver<Maybe<ResolversTypes['Param']>, ParentType, ContextType, RequireFields<QueryParamArgs, 'id'>>;
  params?: Resolver<Array<Maybe<ResolversTypes['Param']>>, ParentType, ContextType>;
  procurement?: Resolver<Maybe<ResolversTypes['Procurement']>, ParentType, ContextType, RequireFields<QueryProcurementArgs, 'id'>>;
  procurements?: Resolver<Array<ResolversTypes['Procurement']>, ParentType, ContextType, RequireFields<QueryProcurementsArgs, never>>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'id'>>;
  productCategories?: Resolver<Array<ResolversTypes['ProductCategory']>, ParentType, ContextType>;
  productCategory?: Resolver<Maybe<ResolversTypes['ProductCategory']>, ParentType, ContextType, RequireFields<QueryProductCategoryArgs, 'idSlug'>>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  productsByCategory?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductsByCategoryArgs, 'categoryIdSlug'>>;
  productsByIds?: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType, RequireFields<QueryProductsByIdsArgs, 'productIds'>>;
  promotion?: Resolver<Maybe<ResolversTypes['Promotion']>, ParentType, ContextType, RequireFields<QueryPromotionArgs, 'id'>>;
  promotions?: Resolver<Array<Maybe<ResolversTypes['Promotion']>>, ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createBonus?: Resolver<ResolversTypes['Bonus'], ParentType, ContextType, RequireFields<MutationCreateBonusArgs, 'input'>>;
  addOrderBonus?: Resolver<ResolversTypes['Bonus'], ParentType, ContextType, RequireFields<MutationAddOrderBonusArgs, 'bonusId' | 'orderId'>>;
  createCompany?: Resolver<ResolversTypes['CompanySimple'], ParentType, ContextType, RequireFields<MutationCreateCompanyArgs, 'input'>>;
  updateCompany?: Resolver<ResolversTypes['CompanySimple'], ParentType, ContextType, RequireFields<MutationUpdateCompanyArgs, 'id' | 'input'>>;
  deleteCompany?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationDeleteCompanyArgs, 'id'>>;
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
  deleteProduct?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationDeleteProductArgs, 'id'>>;
  createProductCategory?: Resolver<ResolversTypes['ProductCategorySimple'], ParentType, ContextType, RequireFields<MutationCreateProductCategoryArgs, 'input'>>;
  updateProductCategory?: Resolver<ResolversTypes['ProductCategorySimple'], ParentType, ContextType, RequireFields<MutationUpdateProductCategoryArgs, 'id' | 'input'>>;
  deleteProductCategory?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationDeleteProductCategoryArgs, 'id'>>;
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

export type ICompanyResolvers<ContextType = any, ParentType extends ResolversParentTypes['ICompany'] = ResolversParentTypes['ICompany']> = {
  __resolveType: TypeResolveFn<'CompanySimple' | 'Company', ParentType, ContextType>;
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isSelectedForProductCategory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<ICompanyIsSelectedForProductCategoryArgs, 'productCategorySlug'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type CompanySimpleResolvers<ContextType = any, ParentType extends ResolversParentTypes['CompanySimple'] = ResolversParentTypes['CompanySimple']> = {
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isSelectedForProductCategory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<CompanySimpleIsSelectedForProductCategoryArgs, 'productCategorySlug'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CompanyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company']> = {
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isSelectedForProductCategory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<CompanyIsSelectedForProductCategoryArgs, 'productCategorySlug'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type DiscountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Discount'] = ResolversParentTypes['Discount']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rub?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  endDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isGlobal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  productCategories?: Resolver<Array<Maybe<ResolversTypes['ProductCategory']>>, ParentType, ContextType>;
  products?: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType>;
  features?: Resolver<Array<Maybe<ResolversTypes['Feature']>>, ParentType, ContextType>;
  orders?: Resolver<Array<Maybe<ResolversTypes['Order']>>, ParentType, ContextType>;
  bonuses?: Resolver<Array<Maybe<ResolversTypes['Bonus']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type IFeatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['IFeature'] = ResolversParentTypes['IFeature']> = {
  __resolveType: TypeResolveFn<'FeatureSimple' | 'Feature', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type FeatureSimpleResolvers<ContextType = any, ParentType extends ResolversParentTypes['FeatureSimple'] = ResolversParentTypes['FeatureSimple']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type FeatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['Feature'] = ResolversParentTypes['Feature']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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

export type IOrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['IOrder'] = ResolversParentTypes['IOrder']> = {
  __resolveType: TypeResolveFn<'OrderSimple' | 'Order', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OrderStatus'], ParentType, ContextType>;
  intercomCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  personsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ourComment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliveryTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type OrderSimpleResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderSimple'] = ResolversParentTypes['OrderSimple']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OrderStatus'], ParentType, ContextType>;
  intercomCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  personsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ourComment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliveryTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OrderStatus'], ParentType, ContextType>;
  intercomCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  personsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ourComment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliveryTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalPrice?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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
  nextStatusDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliveryCost?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type ProcurementSimpleResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProcurementSimple'] = ResolversParentTypes['ProcurementSimple']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  providerInfo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ProcurementStatus'], ParentType, ContextType>;
  nextStatusDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliveryCost?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ProcurementResolvers<ContextType = any, ParentType extends ResolversParentTypes['Procurement'] = ResolversParentTypes['Procurement']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  providerInfo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ProcurementStatus'], ParentType, ContextType>;
  nextStatusDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productsPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  deliveryCost?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  productProcurements?: Resolver<Array<ResolversTypes['ProductProcurement']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type IProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['IProduct'] = ResolversParentTypes['IProduct']> = {
  __resolveType: TypeResolveFn<'ProductSimple' | 'Product', ParentType, ContextType>;
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cartItem?: Resolver<Maybe<ResolversTypes['CartItem']>, ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isInCart?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  productCategoryId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type ProductSimpleResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductSimple'] = ResolversParentTypes['ProductSimple']> = {
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cartItem?: Resolver<Maybe<ResolversTypes['CartItem']>, ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isInCart?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  productCategoryId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cartItem?: Resolver<Maybe<ResolversTypes['CartItem']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  productProcurements?: Resolver<Array<ResolversTypes['ProductProcurement']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ProductCategorySimpleResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategorySimple'] = ResolversParentTypes['ProductCategorySimple']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  iconUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ProductCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategory'] = ResolversParentTypes['ProductCategory']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  iconUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  features?: Resolver<Array<ResolversTypes['Feature']>, ParentType, ContextType>;
  discounts?: Resolver<Array<ResolversTypes['Discount']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PromotionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Promotion'] = ResolversParentTypes['Promotion']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  endDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  priority?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CartItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartItem'] = ResolversParentTypes['CartItem']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Bonus?: BonusResolvers<ContextType>;
  ICompany?: ICompanyResolvers<ContextType>;
  CompanySimple?: CompanySimpleResolvers<ContextType>;
  Company?: CompanyResolvers<ContextType>;
  Discount?: DiscountResolvers<ContextType>;
  IFeature?: IFeatureResolvers<ContextType>;
  FeatureSimple?: FeatureSimpleResolvers<ContextType>;
  Feature?: FeatureResolvers<ContextType>;
  ProductFeature?: ProductFeatureResolvers<ContextType>;
  OrderProduct?: OrderProductResolvers<ContextType>;
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
  Promotion?: PromotionResolvers<ContextType>;
  CartItem?: CartItemResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

export const CompanySimpleFragmentDoc = gql`
    fragment CompanySimple on ICompany {
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
export const FeatureMinimumFragmentDoc = gql`
    fragment FeatureMinimum on IFeature {
  id
  name
  imageUrl
  isDisabled
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
export const ProductMinimumFragmentDoc = gql`
    fragment ProductMinimum on IProduct {
  id
  name
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
  companyId
  weight
  price
  count
  createdAt
  updatedAt
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
export const ProductFeatureSimpleFragmentDoc = gql`
    fragment ProductFeatureSimple on ProductFeature {
  endTime
}
    `;
export const CompanyMinimumFragmentDoc = gql`
    fragment CompanyMinimum on ICompany {
  id
  name
}
    `;
export const CompaniesSelectorFragmentDoc = gql`
    fragment CompaniesSelector on Company {
  ...CompanyMinimum
  color
}
    ${CompanyMinimumFragmentDoc}`;
export const ProductCategoryMinimumFragmentDoc = gql`
    fragment ProductCategoryMinimum on IProductCategory {
  id
  name
  iconUrl
  slug
}
    `;
export const ProductCategoryMenuListFragmentDoc = gql`
    fragment ProductCategoryMenuList on ProductCategory {
  ...ProductCategoryMinimum
  slug
}
    ${ProductCategoryMinimumFragmentDoc}`;
export const CompanyMinimumListDocument = gql`
    query companyMinimumList {
  companies {
    ...CompanyMinimum
  }
}
    ${CompanyMinimumFragmentDoc}`;

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
export function useCompanyMinimumListQuery(baseOptions?: Apollo.QueryHookOptions<CompanyMinimumListQuery, CompanyMinimumListQueryVariables>) {
        return Apollo.useQuery<CompanyMinimumListQuery, CompanyMinimumListQueryVariables>(CompanyMinimumListDocument, baseOptions);
      }
export function useCompanyMinimumListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CompanyMinimumListQuery, CompanyMinimumListQueryVariables>) {
          return Apollo.useLazyQuery<CompanyMinimumListQuery, CompanyMinimumListQueryVariables>(CompanyMinimumListDocument, baseOptions);
        }
export type CompanyMinimumListQueryHookResult = ReturnType<typeof useCompanyMinimumListQuery>;
export type CompanyMinimumListLazyQueryHookResult = ReturnType<typeof useCompanyMinimumListLazyQuery>;
export type CompanyMinimumListQueryResult = Apollo.QueryResult<CompanyMinimumListQuery, CompanyMinimumListQueryVariables>;
export const CompanySimpleItemDocument = gql`
    query companySimpleItem($id: ID!) {
  company(id: $id) {
    ...CompanySimple
  }
}
    ${CompanySimpleFragmentDoc}`;

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
export function useCompanySimpleItemQuery(baseOptions?: Apollo.QueryHookOptions<CompanySimpleItemQuery, CompanySimpleItemQueryVariables>) {
        return Apollo.useQuery<CompanySimpleItemQuery, CompanySimpleItemQueryVariables>(CompanySimpleItemDocument, baseOptions);
      }
export function useCompanySimpleItemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CompanySimpleItemQuery, CompanySimpleItemQueryVariables>) {
          return Apollo.useLazyQuery<CompanySimpleItemQuery, CompanySimpleItemQueryVariables>(CompanySimpleItemDocument, baseOptions);
        }
export type CompanySimpleItemQueryHookResult = ReturnType<typeof useCompanySimpleItemQuery>;
export type CompanySimpleItemLazyQueryHookResult = ReturnType<typeof useCompanySimpleItemLazyQuery>;
export type CompanySimpleItemQueryResult = Apollo.QueryResult<CompanySimpleItemQuery, CompanySimpleItemQueryVariables>;
export const CompanySimpleListDocument = gql`
    query companySimpleList {
  companies {
    ...CompanySimple
  }
}
    ${CompanySimpleFragmentDoc}`;

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
export function useCompanySimpleListQuery(baseOptions?: Apollo.QueryHookOptions<CompanySimpleListQuery, CompanySimpleListQueryVariables>) {
        return Apollo.useQuery<CompanySimpleListQuery, CompanySimpleListQueryVariables>(CompanySimpleListDocument, baseOptions);
      }
export function useCompanySimpleListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CompanySimpleListQuery, CompanySimpleListQueryVariables>) {
          return Apollo.useLazyQuery<CompanySimpleListQuery, CompanySimpleListQueryVariables>(CompanySimpleListDocument, baseOptions);
        }
export type CompanySimpleListQueryHookResult = ReturnType<typeof useCompanySimpleListQuery>;
export type CompanySimpleListLazyQueryHookResult = ReturnType<typeof useCompanySimpleListLazyQuery>;
export type CompanySimpleListQueryResult = Apollo.QueryResult<CompanySimpleListQuery, CompanySimpleListQueryVariables>;
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
export const CompaniesSelectorDocument = gql`
    query companiesSelector($productCategorySlug: ID!) {
  companies {
    ...CompaniesSelector
    isSelectedForProductCategory(productCategorySlug: $productCategorySlug) @client
  }
}
    ${CompaniesSelectorFragmentDoc}`;

/**
 * __useCompaniesSelectorQuery__
 *
 * To run a query within a React component, call `useCompaniesSelectorQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompaniesSelectorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompaniesSelectorQuery({
 *   variables: {
 *      productCategorySlug: // value for 'productCategorySlug'
 *   },
 * });
 */
export function useCompaniesSelectorQuery(baseOptions?: Apollo.QueryHookOptions<CompaniesSelectorQuery, CompaniesSelectorQueryVariables>) {
        return Apollo.useQuery<CompaniesSelectorQuery, CompaniesSelectorQueryVariables>(CompaniesSelectorDocument, baseOptions);
      }
export function useCompaniesSelectorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CompaniesSelectorQuery, CompaniesSelectorQueryVariables>) {
          return Apollo.useLazyQuery<CompaniesSelectorQuery, CompaniesSelectorQueryVariables>(CompaniesSelectorDocument, baseOptions);
        }
export type CompaniesSelectorQueryHookResult = ReturnType<typeof useCompaniesSelectorQuery>;
export type CompaniesSelectorLazyQueryHookResult = ReturnType<typeof useCompaniesSelectorLazyQuery>;
export type CompaniesSelectorQueryResult = Apollo.QueryResult<CompaniesSelectorQuery, CompaniesSelectorQueryVariables>;
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
    company {
      id
      name
      color
      isSelectedForProductCategory(productCategorySlug: $categorySlug) @client
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
    company {
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
    mutation createCheckoutOrder($phoneNumber: String!, $address: String!, $deliveryTime: String!, $intercomCode: String, $products: [OrderProductInput!]!) {
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