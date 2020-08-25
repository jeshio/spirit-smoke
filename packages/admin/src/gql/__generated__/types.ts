import { GraphQLResolveInfo } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } &
  { [P in K]-?: NonNullable<T[P]> };
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
  bonuses: Array<Maybe<Bonus>>;
  bonus?: Maybe<Bonus>;
  companies: Array<Company>;
  company?: Maybe<Company>;
  discounts: Array<Maybe<Discount>>;
  discount?: Maybe<Discount>;
  features: Array<Maybe<Feature>>;
  feature?: Maybe<Feature>;
  orders: Array<Maybe<Order>>;
  order?: Maybe<Order>;
  params: Array<Maybe<Param>>;
  param?: Maybe<Param>;
  procurements: Array<Maybe<Procurement>>;
  procurement?: Maybe<Procurement>;
  products: Array<Product>;
  product: Product;
  productCategories: Array<ProductCategory>;
  productCategory?: Maybe<ProductCategory>;
  promotions: Array<Maybe<Promotion>>;
  promotion?: Maybe<Promotion>;
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

export type QueryProductArgs = {
  id: Scalars['ID'];
};

export type QueryProductCategoryArgs = {
  id: Scalars['ID'];
};

export type QueryPromotionArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  createBonus: Bonus;
  addOrderBonus: Bonus;
  createCompany: Company;
  createDiscount: Discount;
  addProductCategoryDiscount: Discount;
  addProductDiscount: Discount;
  addFeatureDiscount: Discount;
  addOrderDiscount: Discount;
  addBonusDiscount: Discount;
  createFeature: Feature;
  createProductCategoryFeature: Feature;
  addProductCategoryFeature: Feature;
  createProductFeature: Feature;
  addProductFeature: Feature;
  createOrder: Order;
  createParam: Param;
  createProcurement: Procurement;
  addProductProcurement: Procurement;
  createProduct: ProductSimple;
  updateProduct: ProductSimple;
  deleteProduct: Scalars['ID'];
  createProductCategory: ProductCategory;
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
  name: Scalars['String'];
  slug: Scalars['String'];
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
  name: Scalars['String'];
  slug: Scalars['String'];
  imageUrl: Scalars['String'];
  invisible?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateProductCategoryFeatureArgs = {
  name: Scalars['String'];
  slug: Scalars['String'];
  imageUrl: Scalars['String'];
  invisible?: Maybe<Scalars['Boolean']>;
  productCategoryId: Scalars['ID'];
};

export type MutationAddProductCategoryFeatureArgs = {
  featureId: Scalars['ID'];
  productCategoryId: Scalars['ID'];
};

export type MutationCreateProductFeatureArgs = {
  name: Scalars['String'];
  slug: Scalars['String'];
  imageUrl: Scalars['String'];
  invisible?: Maybe<Scalars['Boolean']>;
  productId: Scalars['ID'];
};

export type MutationAddProductFeatureArgs = {
  featureId: Scalars['ID'];
  productId: Scalars['ID'];
};

export type MutationCreateOrderArgs = {
  input: OrderInput;
};

export type MutationCreateParamArgs = {
  input: ParamInput;
};

export type MutationCreateProcurementArgs = {
  input: ProcurementInput;
};

export type MutationAddProductProcurementArgs = {
  input?: Maybe<ProductProcurementInput>;
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
  name: Scalars['String'];
  slug: Scalars['String'];
  description: Scalars['String'];
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

export type Company = {
  __typename?: 'Company';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  products: Array<Maybe<Product>>;
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

export type Feature = {
  __typename?: 'Feature';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  imageUrl: Scalars['String'];
  invisible: Scalars['Boolean'];
  productCategories: Array<Maybe<ProductCategory>>;
  products: Array<Maybe<Product>>;
  discounts: Array<Maybe<Discount>>;
};

export type OrderInput = {
  address: Scalars['String'];
  intercomCode?: Maybe<Scalars['String']>;
  personsCount?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  ourComment?: Maybe<Scalars['String']>;
  deliveryTime: Scalars['String'];
  phoneNumber: Scalars['String'];
  products: Array<Maybe<OrderProductInput>>;
};

export enum OrderStatus {
  NotConfirmed = 'NOT_CONFIRMED',
  Confirmed = 'CONFIRMED',
  Canceled = 'CANCELED',
  Sent = 'SENT',
  Failure = 'FAILURE',
  Success = 'SUCCESS',
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

export type Order = {
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
  discounts: Array<Maybe<Discount>>;
  bonuses: Array<Maybe<Bonus>>;
  orderProducts: Array<Maybe<OrderProduct>>;
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

export type ProductProcurementInput = {
  productId: Scalars['ID'];
  procurementId: Scalars['ID'];
  count: Scalars['Int'];
  costs: Scalars['Float'];
};

export type ProcurementInput = {
  nextStatusDate?: Maybe<Scalars['String']>;
  deliveryCost?: Maybe<Scalars['Float']>;
};

export type ProductProcurement = {
  __typename?: 'ProductProcurement';
  count: Scalars['Int'];
  costs: Scalars['Float'];
  procurement: Procurement;
  product: Product;
};

export type Procurement = {
  __typename?: 'Procurement';
  id: Scalars['ID'];
  status: Scalars['String'];
  nextStatusDate?: Maybe<Scalars['String']>;
  deliveryCost?: Maybe<Scalars['Float']>;
  productProcurements: Array<Maybe<ProductProcurement>>;
};

export type ProductInput = {
  name: Scalars['String'];
  slug: Scalars['String'];
  price: Scalars['Float'];
  productCategoryId: Scalars['ID'];
  companyId: Scalars['ID'];
};

export type IProduct = {
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  price: Scalars['Float'];
  count: Scalars['Int'];
  productCategoryId: Scalars['ID'];
  companyId: Scalars['ID'];
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type ProductSimple = IProduct & {
  __typename?: 'ProductSimple';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  price: Scalars['Float'];
  count: Scalars['Int'];
  productCategoryId: Scalars['ID'];
  companyId: Scalars['ID'];
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type Product = IProduct & {
  __typename?: 'Product';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  price: Scalars['Float'];
  count: Scalars['Int'];
  productCategoryId: Scalars['ID'];
  companyId: Scalars['ID'];
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  company: Company;
  productCategory: ProductCategory;
  features: Array<Maybe<Feature>>;
  discounts: Array<Maybe<Discount>>;
  orderProducts: Array<Maybe<OrderProduct>>;
  productProcurements: Array<Maybe<ProductProcurement>>;
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  description: Scalars['String'];
  products: Array<Maybe<Product>>;
  features: Array<Maybe<Feature>>;
  discounts: Array<Maybe<Discount>>;
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

export type CompanyMinimumFragment = { __typename?: 'Company' } & Pick<Company, 'id' | 'name'>;

type ProductSimple_ProductSimple_Fragment = { __typename?: 'ProductSimple' } & Pick<
  ProductSimple,
  'id' | 'name' | 'slug' | 'price' | 'count' | 'createdAt' | 'updatedAt'
>;

type ProductSimple_Product_Fragment = { __typename?: 'Product' } & Pick<
  Product,
  'id' | 'name' | 'slug' | 'price' | 'count' | 'createdAt' | 'updatedAt'
>;

export type ProductSimpleFragment = ProductSimple_ProductSimple_Fragment | ProductSimple_Product_Fragment;

export type ProductCategoryMinimumFragment = { __typename?: 'ProductCategory' } & Pick<ProductCategory, 'id' | 'name'>;

export type CreateProductMutationVariables = Exact<{
  input: ProductInput;
}>;

export type CreateProductMutation = { __typename?: 'Mutation' } & {
  createProduct: { __typename?: 'ProductSimple' } & ProductSimple_ProductSimple_Fragment;
};

export type DeleteProductMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeleteProductMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'deleteProduct'>;

export type UpdateProductMutationVariables = Exact<{
  id: Scalars['ID'];
  input: ProductInput;
}>;

export type UpdateProductMutation = { __typename?: 'Mutation' } & {
  updateProduct: { __typename?: 'ProductSimple' } & ProductSimple_ProductSimple_Fragment;
};

export type CompanyMinimumListQueryVariables = Exact<{ [key: string]: never }>;

export type CompanyMinimumListQuery = { __typename?: 'Query' } & {
  companies: Array<{ __typename?: 'Company' } & CompanyMinimumFragment>;
};

export type ProductSimpleItemQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type ProductSimpleItemQuery = { __typename?: 'Query' } & {
  product: { __typename?: 'Product' } & Pick<Product, 'productCategoryId' | 'companyId'> &
    ProductSimple_Product_Fragment;
};

export type ProductSimpleListQueryVariables = Exact<{ [key: string]: never }>;

export type ProductSimpleListQuery = { __typename?: 'Query' } & {
  products: Array<{ __typename?: 'Product' } & ProductSimple_Product_Fragment>;
};

export type ProductCategoryMinimumListQueryVariables = Exact<{ [key: string]: never }>;

export type ProductCategoryMinimumListQuery = { __typename?: 'Query' } & {
  productCategories: Array<{ __typename?: 'ProductCategory' } & ProductCategoryMinimumFragment>;
};

export type ProductItemPageFragment = { __typename?: 'Product' } & {
  productCategory: { __typename?: 'ProductCategory' } & Pick<ProductCategory, 'id' | 'name'>;
  company: { __typename?: 'Company' } & Pick<Company, 'id' | 'name'>;
} & ProductSimple_Product_Fragment;

export type ProductItemPageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type ProductItemPageQuery = { __typename?: 'Query' } & {
  product: { __typename?: 'Product' } & ProductItemPageFragment;
};

export type ProductsListPageFragment = { __typename?: 'Product' } & {
  productCategory: { __typename?: 'ProductCategory' } & ProductCategoryMinimumFragment;
} & ProductSimple_Product_Fragment;

export type ProductsListPageQueryVariables = Exact<{ [key: string]: never }>;

export type ProductsListPageQuery = { __typename?: 'Query' } & {
  products: Array<{ __typename?: 'Product' } & ProductsListPageFragment>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
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
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
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
  Company: ResolverTypeWrapper<Company>;
  DiscountInput: DiscountInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Discount: ResolverTypeWrapper<Discount>;
  Feature: ResolverTypeWrapper<Feature>;
  OrderInput: OrderInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  OrderStatus: OrderStatus;
  OrderProductInput: OrderProductInput;
  OrderProduct: ResolverTypeWrapper<OrderProduct>;
  Order: ResolverTypeWrapper<Order>;
  ParamInput: ParamInput;
  Param: ResolverTypeWrapper<Param>;
  ProductProcurementInput: ProductProcurementInput;
  ProcurementInput: ProcurementInput;
  ProductProcurement: ResolverTypeWrapper<ProductProcurement>;
  Procurement: ResolverTypeWrapper<Procurement>;
  ProductInput: ProductInput;
  IProduct: ResolversTypes['ProductSimple'] | ResolversTypes['Product'];
  ProductSimple: ResolverTypeWrapper<ProductSimple>;
  Product: ResolverTypeWrapper<Product>;
  ProductCategory: ResolverTypeWrapper<ProductCategory>;
  PromotionInput: PromotionInput;
  Promotion: ResolverTypeWrapper<Promotion>;
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
  Company: Company;
  DiscountInput: DiscountInput;
  Float: Scalars['Float'];
  Discount: Discount;
  Feature: Feature;
  OrderInput: OrderInput;
  Int: Scalars['Int'];
  OrderProductInput: OrderProductInput;
  OrderProduct: OrderProduct;
  Order: Order;
  ParamInput: ParamInput;
  Param: Param;
  ProductProcurementInput: ProductProcurementInput;
  ProcurementInput: ProcurementInput;
  ProductProcurement: ProductProcurement;
  Procurement: Procurement;
  ProductInput: ProductInput;
  IProduct: ResolversParentTypes['ProductSimple'] | ResolversParentTypes['Product'];
  ProductSimple: ProductSimple;
  Product: Product;
  ProductCategory: ProductCategory;
  PromotionInput: PromotionInput;
  Promotion: Promotion;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  bonuses?: Resolver<Array<Maybe<ResolversTypes['Bonus']>>, ParentType, ContextType>;
  bonus?: Resolver<Maybe<ResolversTypes['Bonus']>, ParentType, ContextType, RequireFields<QueryBonusArgs, 'id'>>;
  companies?: Resolver<Array<ResolversTypes['Company']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType, RequireFields<QueryCompanyArgs, 'id'>>;
  discounts?: Resolver<Array<Maybe<ResolversTypes['Discount']>>, ParentType, ContextType>;
  discount?: Resolver<
    Maybe<ResolversTypes['Discount']>,
    ParentType,
    ContextType,
    RequireFields<QueryDiscountArgs, 'id'>
  >;
  features?: Resolver<Array<Maybe<ResolversTypes['Feature']>>, ParentType, ContextType>;
  feature?: Resolver<Maybe<ResolversTypes['Feature']>, ParentType, ContextType, RequireFields<QueryFeatureArgs, 'id'>>;
  orders?: Resolver<Array<Maybe<ResolversTypes['Order']>>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryOrderArgs, 'id'>>;
  params?: Resolver<Array<Maybe<ResolversTypes['Param']>>, ParentType, ContextType>;
  param?: Resolver<Maybe<ResolversTypes['Param']>, ParentType, ContextType, RequireFields<QueryParamArgs, 'id'>>;
  procurements?: Resolver<Array<Maybe<ResolversTypes['Procurement']>>, ParentType, ContextType>;
  procurement?: Resolver<
    Maybe<ResolversTypes['Procurement']>,
    ParentType,
    ContextType,
    RequireFields<QueryProcurementArgs, 'id'>
  >;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<QueryProductArgs, 'id'>>;
  productCategories?: Resolver<Array<ResolversTypes['ProductCategory']>, ParentType, ContextType>;
  productCategory?: Resolver<
    Maybe<ResolversTypes['ProductCategory']>,
    ParentType,
    ContextType,
    RequireFields<QueryProductCategoryArgs, 'id'>
  >;
  promotions?: Resolver<Array<Maybe<ResolversTypes['Promotion']>>, ParentType, ContextType>;
  promotion?: Resolver<
    Maybe<ResolversTypes['Promotion']>,
    ParentType,
    ContextType,
    RequireFields<QueryPromotionArgs, 'id'>
  >;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createBonus?: Resolver<
    ResolversTypes['Bonus'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateBonusArgs, 'input'>
  >;
  addOrderBonus?: Resolver<
    ResolversTypes['Bonus'],
    ParentType,
    ContextType,
    RequireFields<MutationAddOrderBonusArgs, 'bonusId' | 'orderId'>
  >;
  createCompany?: Resolver<
    ResolversTypes['Company'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateCompanyArgs, 'name' | 'slug'>
  >;
  createDiscount?: Resolver<
    ResolversTypes['Discount'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateDiscountArgs, 'input'>
  >;
  addProductCategoryDiscount?: Resolver<
    ResolversTypes['Discount'],
    ParentType,
    ContextType,
    RequireFields<MutationAddProductCategoryDiscountArgs, 'discountId' | 'productCategoryId'>
  >;
  addProductDiscount?: Resolver<
    ResolversTypes['Discount'],
    ParentType,
    ContextType,
    RequireFields<MutationAddProductDiscountArgs, 'discountId' | 'productId'>
  >;
  addFeatureDiscount?: Resolver<
    ResolversTypes['Discount'],
    ParentType,
    ContextType,
    RequireFields<MutationAddFeatureDiscountArgs, 'discountId' | 'featureId'>
  >;
  addOrderDiscount?: Resolver<
    ResolversTypes['Discount'],
    ParentType,
    ContextType,
    RequireFields<MutationAddOrderDiscountArgs, 'discountId' | 'orderId'>
  >;
  addBonusDiscount?: Resolver<
    ResolversTypes['Discount'],
    ParentType,
    ContextType,
    RequireFields<MutationAddBonusDiscountArgs, 'discountId' | 'bonusId'>
  >;
  createFeature?: Resolver<
    ResolversTypes['Feature'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateFeatureArgs, 'name' | 'slug' | 'imageUrl'>
  >;
  createProductCategoryFeature?: Resolver<
    ResolversTypes['Feature'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateProductCategoryFeatureArgs, 'name' | 'slug' | 'imageUrl' | 'productCategoryId'>
  >;
  addProductCategoryFeature?: Resolver<
    ResolversTypes['Feature'],
    ParentType,
    ContextType,
    RequireFields<MutationAddProductCategoryFeatureArgs, 'featureId' | 'productCategoryId'>
  >;
  createProductFeature?: Resolver<
    ResolversTypes['Feature'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateProductFeatureArgs, 'name' | 'slug' | 'imageUrl' | 'productId'>
  >;
  addProductFeature?: Resolver<
    ResolversTypes['Feature'],
    ParentType,
    ContextType,
    RequireFields<MutationAddProductFeatureArgs, 'featureId' | 'productId'>
  >;
  createOrder?: Resolver<
    ResolversTypes['Order'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateOrderArgs, 'input'>
  >;
  createParam?: Resolver<
    ResolversTypes['Param'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateParamArgs, 'input'>
  >;
  createProcurement?: Resolver<
    ResolversTypes['Procurement'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateProcurementArgs, 'input'>
  >;
  addProductProcurement?: Resolver<
    ResolversTypes['Procurement'],
    ParentType,
    ContextType,
    RequireFields<MutationAddProductProcurementArgs, never>
  >;
  createProduct?: Resolver<
    ResolversTypes['ProductSimple'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateProductArgs, 'input'>
  >;
  updateProduct?: Resolver<
    ResolversTypes['ProductSimple'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateProductArgs, 'id' | 'input'>
  >;
  deleteProduct?: Resolver<
    ResolversTypes['ID'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteProductArgs, 'id'>
  >;
  createProductCategory?: Resolver<
    ResolversTypes['ProductCategory'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateProductCategoryArgs, 'name' | 'slug' | 'description'>
  >;
  createPromotion?: Resolver<
    ResolversTypes['Promotion'],
    ParentType,
    ContextType,
    RequireFields<MutationCreatePromotionArgs, 'input'>
  >;
};

export type SubscriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']
> = {
  _?: SubscriptionResolver<Maybe<ResolversTypes['Boolean']>, '_', ParentType, ContextType>;
};

export type BonusResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Bonus'] = ResolversParentTypes['Bonus']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  conditionsDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  iconUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orders?: Resolver<Array<Maybe<ResolversTypes['Order']>>, ParentType, ContextType>;
  discounts?: Resolver<Array<Maybe<ResolversTypes['Discount']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CompanyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  products?: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type DiscountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Discount'] = ResolversParentTypes['Discount']
> = {
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

export type FeatureResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Feature'] = ResolversParentTypes['Feature']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  invisible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  productCategories?: Resolver<Array<Maybe<ResolversTypes['ProductCategory']>>, ParentType, ContextType>;
  products?: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType>;
  discounts?: Resolver<Array<Maybe<ResolversTypes['Discount']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type OrderProductResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['OrderProduct'] = ResolversParentTypes['OrderProduct']
> = {
  productsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type OrderResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OrderStatus'], ParentType, ContextType>;
  intercomCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  personsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ourComment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliveryTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  discounts?: Resolver<Array<Maybe<ResolversTypes['Discount']>>, ParentType, ContextType>;
  bonuses?: Resolver<Array<Maybe<ResolversTypes['Bonus']>>, ParentType, ContextType>;
  orderProducts?: Resolver<Array<Maybe<ResolversTypes['OrderProduct']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ParamResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Param'] = ResolversParentTypes['Param']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ProductProcurementResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProductProcurement'] = ResolversParentTypes['ProductProcurement']
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  costs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  procurement?: Resolver<ResolversTypes['Procurement'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ProcurementResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Procurement'] = ResolversParentTypes['Procurement']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nextStatusDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliveryCost?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  productProcurements?: Resolver<Array<Maybe<ResolversTypes['ProductProcurement']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type IProductResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['IProduct'] = ResolversParentTypes['IProduct']
> = {
  __resolveType: TypeResolveFn<'ProductSimple' | 'Product', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  productCategoryId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type ProductSimpleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProductSimple'] = ResolversParentTypes['ProductSimple']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  productCategoryId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ProductResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  productCategoryId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<ResolversTypes['Company'], ParentType, ContextType>;
  productCategory?: Resolver<ResolversTypes['ProductCategory'], ParentType, ContextType>;
  features?: Resolver<Array<Maybe<ResolversTypes['Feature']>>, ParentType, ContextType>;
  discounts?: Resolver<Array<Maybe<ResolversTypes['Discount']>>, ParentType, ContextType>;
  orderProducts?: Resolver<Array<Maybe<ResolversTypes['OrderProduct']>>, ParentType, ContextType>;
  productProcurements?: Resolver<Array<Maybe<ResolversTypes['ProductProcurement']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ProductCategoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProductCategory'] = ResolversParentTypes['ProductCategory']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  products?: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType>;
  features?: Resolver<Array<Maybe<ResolversTypes['Feature']>>, ParentType, ContextType>;
  discounts?: Resolver<Array<Maybe<ResolversTypes['Discount']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PromotionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Promotion'] = ResolversParentTypes['Promotion']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  endDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  priority?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Bonus?: BonusResolvers<ContextType>;
  Company?: CompanyResolvers<ContextType>;
  Discount?: DiscountResolvers<ContextType>;
  Feature?: FeatureResolvers<ContextType>;
  OrderProduct?: OrderProductResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  Param?: ParamResolvers<ContextType>;
  ProductProcurement?: ProductProcurementResolvers<ContextType>;
  Procurement?: ProcurementResolvers<ContextType>;
  IProduct?: IProductResolvers<ContextType>;
  ProductSimple?: ProductSimpleResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductCategory?: ProductCategoryResolvers<ContextType>;
  Promotion?: PromotionResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

export const CompanyMinimumFragmentDoc = gql`
  fragment CompanyMinimum on Company {
    id
    name
  }
`;
export const ProductSimpleFragmentDoc = gql`
  fragment ProductSimple on IProduct {
    id
    name
    slug
    price
    count
    createdAt
    updatedAt
  }
`;
export const ProductItemPageFragmentDoc = gql`
  fragment ProductItemPage on Product {
    ...ProductSimple
    productCategory {
      id
      name
    }
    company {
      id
      name
    }
  }
  ${ProductSimpleFragmentDoc}
`;
export const ProductCategoryMinimumFragmentDoc = gql`
  fragment ProductCategoryMinimum on ProductCategory {
    id
    name
  }
`;
export const ProductsListPageFragmentDoc = gql`
  fragment ProductsListPage on Product {
    ...ProductSimple
    productCategory {
      ...ProductCategoryMinimum
    }
  }
  ${ProductSimpleFragmentDoc}
  ${ProductCategoryMinimumFragmentDoc}
`;
export const CreateProductDocument = gql`
  mutation createProduct($input: ProductInput!) {
    createProduct(input: $input) {
      ...ProductSimple
    }
  }
  ${ProductSimpleFragmentDoc}
`;
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
export function useCreateProductMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>,
) {
  return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, baseOptions);
}
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<
  CreateProductMutation,
  CreateProductMutationVariables
>;
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
export function useDeleteProductMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>,
) {
  return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, baseOptions);
}
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<
  DeleteProductMutation,
  DeleteProductMutationVariables
>;
export const UpdateProductDocument = gql`
  mutation updateProduct($id: ID!, $input: ProductInput!) {
    updateProduct(id: $id, input: $input) {
      ...ProductSimple
    }
  }
  ${ProductSimpleFragmentDoc}
`;
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
export function useUpdateProductMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>,
) {
  return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, baseOptions);
}
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<
  UpdateProductMutation,
  UpdateProductMutationVariables
>;
export const CompanyMinimumListDocument = gql`
  query companyMinimumList {
    companies {
      ...CompanyMinimum
    }
  }
  ${CompanyMinimumFragmentDoc}
`;

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
  baseOptions?: Apollo.QueryHookOptions<CompanyMinimumListQuery, CompanyMinimumListQueryVariables>,
) {
  return Apollo.useQuery<CompanyMinimumListQuery, CompanyMinimumListQueryVariables>(
    CompanyMinimumListDocument,
    baseOptions,
  );
}
export function useCompanyMinimumListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CompanyMinimumListQuery, CompanyMinimumListQueryVariables>,
) {
  return Apollo.useLazyQuery<CompanyMinimumListQuery, CompanyMinimumListQueryVariables>(
    CompanyMinimumListDocument,
    baseOptions,
  );
}
export type CompanyMinimumListQueryHookResult = ReturnType<typeof useCompanyMinimumListQuery>;
export type CompanyMinimumListLazyQueryHookResult = ReturnType<typeof useCompanyMinimumListLazyQuery>;
export type CompanyMinimumListQueryResult = Apollo.QueryResult<
  CompanyMinimumListQuery,
  CompanyMinimumListQueryVariables
>;
export const ProductSimpleItemDocument = gql`
  query productSimpleItem($id: ID!) {
    product(id: $id) {
      ...ProductSimple
      productCategoryId
      companyId
    }
  }
  ${ProductSimpleFragmentDoc}
`;

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
  baseOptions?: Apollo.QueryHookOptions<ProductSimpleItemQuery, ProductSimpleItemQueryVariables>,
) {
  return Apollo.useQuery<ProductSimpleItemQuery, ProductSimpleItemQueryVariables>(
    ProductSimpleItemDocument,
    baseOptions,
  );
}
export function useProductSimpleItemLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProductSimpleItemQuery, ProductSimpleItemQueryVariables>,
) {
  return Apollo.useLazyQuery<ProductSimpleItemQuery, ProductSimpleItemQueryVariables>(
    ProductSimpleItemDocument,
    baseOptions,
  );
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
  ${ProductSimpleFragmentDoc}
`;

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
  baseOptions?: Apollo.QueryHookOptions<ProductSimpleListQuery, ProductSimpleListQueryVariables>,
) {
  return Apollo.useQuery<ProductSimpleListQuery, ProductSimpleListQueryVariables>(
    ProductSimpleListDocument,
    baseOptions,
  );
}
export function useProductSimpleListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProductSimpleListQuery, ProductSimpleListQueryVariables>,
) {
  return Apollo.useLazyQuery<ProductSimpleListQuery, ProductSimpleListQueryVariables>(
    ProductSimpleListDocument,
    baseOptions,
  );
}
export type ProductSimpleListQueryHookResult = ReturnType<typeof useProductSimpleListQuery>;
export type ProductSimpleListLazyQueryHookResult = ReturnType<typeof useProductSimpleListLazyQuery>;
export type ProductSimpleListQueryResult = Apollo.QueryResult<ProductSimpleListQuery, ProductSimpleListQueryVariables>;
export const ProductCategoryMinimumListDocument = gql`
  query productCategoryMinimumList {
    productCategories {
      ...ProductCategoryMinimum
    }
  }
  ${ProductCategoryMinimumFragmentDoc}
`;

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
  baseOptions?: Apollo.QueryHookOptions<ProductCategoryMinimumListQuery, ProductCategoryMinimumListQueryVariables>,
) {
  return Apollo.useQuery<ProductCategoryMinimumListQuery, ProductCategoryMinimumListQueryVariables>(
    ProductCategoryMinimumListDocument,
    baseOptions,
  );
}
export function useProductCategoryMinimumListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProductCategoryMinimumListQuery, ProductCategoryMinimumListQueryVariables>,
) {
  return Apollo.useLazyQuery<ProductCategoryMinimumListQuery, ProductCategoryMinimumListQueryVariables>(
    ProductCategoryMinimumListDocument,
    baseOptions,
  );
}
export type ProductCategoryMinimumListQueryHookResult = ReturnType<typeof useProductCategoryMinimumListQuery>;
export type ProductCategoryMinimumListLazyQueryHookResult = ReturnType<typeof useProductCategoryMinimumListLazyQuery>;
export type ProductCategoryMinimumListQueryResult = Apollo.QueryResult<
  ProductCategoryMinimumListQuery,
  ProductCategoryMinimumListQueryVariables
>;
export const ProductItemPageDocument = gql`
  query productItemPage($id: ID!) {
    product(id: $id) {
      ...ProductItemPage
    }
  }
  ${ProductItemPageFragmentDoc}
`;

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
  baseOptions?: Apollo.QueryHookOptions<ProductItemPageQuery, ProductItemPageQueryVariables>,
) {
  return Apollo.useQuery<ProductItemPageQuery, ProductItemPageQueryVariables>(ProductItemPageDocument, baseOptions);
}
export function useProductItemPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProductItemPageQuery, ProductItemPageQueryVariables>,
) {
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
  ${ProductsListPageFragmentDoc}
`;

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
  baseOptions?: Apollo.QueryHookOptions<ProductsListPageQuery, ProductsListPageQueryVariables>,
) {
  return Apollo.useQuery<ProductsListPageQuery, ProductsListPageQueryVariables>(ProductsListPageDocument, baseOptions);
}
export function useProductsListPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProductsListPageQuery, ProductsListPageQueryVariables>,
) {
  return Apollo.useLazyQuery<ProductsListPageQuery, ProductsListPageQueryVariables>(
    ProductsListPageDocument,
    baseOptions,
  );
}
export type ProductsListPageQueryHookResult = ReturnType<typeof useProductsListPageQuery>;
export type ProductsListPageLazyQueryHookResult = ReturnType<typeof useProductsListPageLazyQuery>;
export type ProductsListPageQueryResult = Apollo.QueryResult<ProductsListPageQuery, ProductsListPageQueryVariables>;
