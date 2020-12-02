import { FieldPolicy, FieldReadFunction, TypePolicies } from '@apollo/client/cache';
export type QueryKeySpecifier = ('_' | 'bonus' | 'bonuses' | 'cartItems' | 'companies' | 'company' | 'discount' | 'discounts' | 'feature' | 'features' | 'order' | 'orders' | 'param' | 'params' | 'procurement' | 'procurements' | 'product' | 'productCategories' | 'productCategory' | 'products' | 'productsByCategory' | 'productsByIds' | 'promotion' | 'promotions' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	_?: FieldPolicy<any> | FieldReadFunction<any>,
	bonus?: FieldPolicy<any> | FieldReadFunction<any>,
	bonuses?: FieldPolicy<any> | FieldReadFunction<any>,
	cartItems?: FieldPolicy<any> | FieldReadFunction<any>,
	companies?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	discount?: FieldPolicy<any> | FieldReadFunction<any>,
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	feature?: FieldPolicy<any> | FieldReadFunction<any>,
	features?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orders?: FieldPolicy<any> | FieldReadFunction<any>,
	param?: FieldPolicy<any> | FieldReadFunction<any>,
	params?: FieldPolicy<any> | FieldReadFunction<any>,
	procurement?: FieldPolicy<any> | FieldReadFunction<any>,
	procurements?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	productCategories?: FieldPolicy<any> | FieldReadFunction<any>,
	productCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	productsByCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	productsByIds?: FieldPolicy<any> | FieldReadFunction<any>,
	promotion?: FieldPolicy<any> | FieldReadFunction<any>,
	promotions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('_' | 'createBonus' | 'addOrderBonus' | 'createCompany' | 'updateCompany' | 'deleteCompany' | 'createDiscount' | 'addProductCategoryDiscount' | 'addProductDiscount' | 'addFeatureDiscount' | 'addOrderDiscount' | 'addBonusDiscount' | 'createFeature' | 'updateFeature' | 'addProductCategoryFeature' | 'addProductFeature' | 'deleteFeature' | 'createOrder' | 'updateOrder' | 'createParam' | 'createProcurement' | 'addProductProcurement' | 'createProduct' | 'updateProduct' | 'deleteProduct' | 'createProductCategory' | 'updateProductCategory' | 'deleteProductCategory' | 'createPromotion' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	_?: FieldPolicy<any> | FieldReadFunction<any>,
	createBonus?: FieldPolicy<any> | FieldReadFunction<any>,
	addOrderBonus?: FieldPolicy<any> | FieldReadFunction<any>,
	createCompany?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCompany?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCompany?: FieldPolicy<any> | FieldReadFunction<any>,
	createDiscount?: FieldPolicy<any> | FieldReadFunction<any>,
	addProductCategoryDiscount?: FieldPolicy<any> | FieldReadFunction<any>,
	addProductDiscount?: FieldPolicy<any> | FieldReadFunction<any>,
	addFeatureDiscount?: FieldPolicy<any> | FieldReadFunction<any>,
	addOrderDiscount?: FieldPolicy<any> | FieldReadFunction<any>,
	addBonusDiscount?: FieldPolicy<any> | FieldReadFunction<any>,
	createFeature?: FieldPolicy<any> | FieldReadFunction<any>,
	updateFeature?: FieldPolicy<any> | FieldReadFunction<any>,
	addProductCategoryFeature?: FieldPolicy<any> | FieldReadFunction<any>,
	addProductFeature?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteFeature?: FieldPolicy<any> | FieldReadFunction<any>,
	createOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	createParam?: FieldPolicy<any> | FieldReadFunction<any>,
	createProcurement?: FieldPolicy<any> | FieldReadFunction<any>,
	addProductProcurement?: FieldPolicy<any> | FieldReadFunction<any>,
	createProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	createProductCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProductCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProductCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	createPromotion?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionKeySpecifier = ('_' | SubscriptionKeySpecifier)[];
export type SubscriptionFieldPolicy = {
	_?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BonusKeySpecifier = ('id' | 'name' | 'slug' | 'conditionsDescription' | 'iconUrl' | 'orders' | 'discounts' | BonusKeySpecifier)[];
export type BonusFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	conditionsDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	iconUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	orders?: FieldPolicy<any> | FieldReadFunction<any>,
	discounts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ICompanyKeySpecifier = ('id' | 'country' | 'color' | 'barcode' | 'name' | 'slug' | 'createdAt' | 'updatedAt' | ICompanyKeySpecifier)[];
export type ICompanyFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	barcode?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompanySimpleKeySpecifier = ('id' | 'country' | 'color' | 'barcode' | 'name' | 'slug' | 'createdAt' | 'updatedAt' | CompanySimpleKeySpecifier)[];
export type CompanySimpleFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	barcode?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompanyKeySpecifier = ('id' | 'country' | 'color' | 'barcode' | 'name' | 'slug' | 'products' | 'createdAt' | 'updatedAt' | CompanyKeySpecifier)[];
export type CompanyFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	barcode?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiscountKeySpecifier = ('id' | 'name' | 'percent' | 'rub' | 'code' | 'startDate' | 'endDate' | 'isGlobal' | 'productCategories' | 'products' | 'features' | 'orders' | 'bonuses' | DiscountKeySpecifier)[];
export type DiscountFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	percent?: FieldPolicy<any> | FieldReadFunction<any>,
	rub?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	startDate?: FieldPolicy<any> | FieldReadFunction<any>,
	endDate?: FieldPolicy<any> | FieldReadFunction<any>,
	isGlobal?: FieldPolicy<any> | FieldReadFunction<any>,
	productCategories?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	features?: FieldPolicy<any> | FieldReadFunction<any>,
	orders?: FieldPolicy<any> | FieldReadFunction<any>,
	bonuses?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IFeatureKeySpecifier = ('id' | 'name' | 'slug' | 'imageUrl' | 'isDisabled' | 'createdAt' | 'updatedAt' | IFeatureKeySpecifier)[];
export type IFeatureFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	imageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	isDisabled?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FeatureSimpleKeySpecifier = ('id' | 'name' | 'slug' | 'imageUrl' | 'isDisabled' | 'createdAt' | 'updatedAt' | FeatureSimpleKeySpecifier)[];
export type FeatureSimpleFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	imageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	isDisabled?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FeatureKeySpecifier = ('id' | 'name' | 'slug' | 'imageUrl' | 'isDisabled' | 'createdAt' | 'updatedAt' | 'productCategories' | 'products' | 'productFeatures' | 'discounts' | FeatureKeySpecifier)[];
export type FeatureFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	imageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	isDisabled?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	productCategories?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	productFeatures?: FieldPolicy<any> | FieldReadFunction<any>,
	discounts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductFeatureKeySpecifier = ('product' | 'feature' | 'endTime' | ProductFeatureKeySpecifier)[];
export type ProductFeatureFieldPolicy = {
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	feature?: FieldPolicy<any> | FieldReadFunction<any>,
	endTime?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderProductKeySpecifier = ('productsCount' | 'product' | 'order' | OrderProductKeySpecifier)[];
export type OrderProductFieldPolicy = {
	productsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IOrderKeySpecifier = ('id' | 'address' | 'status' | 'intercomCode' | 'personsCount' | 'comment' | 'ourComment' | 'deliveryTime' | 'phoneNumber' | 'createdAt' | 'updatedAt' | IOrderKeySpecifier)[];
export type IOrderFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	intercomCode?: FieldPolicy<any> | FieldReadFunction<any>,
	personsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	ourComment?: FieldPolicy<any> | FieldReadFunction<any>,
	deliveryTime?: FieldPolicy<any> | FieldReadFunction<any>,
	phoneNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderSimpleKeySpecifier = ('id' | 'address' | 'status' | 'intercomCode' | 'personsCount' | 'comment' | 'ourComment' | 'deliveryTime' | 'phoneNumber' | 'createdAt' | 'updatedAt' | OrderSimpleKeySpecifier)[];
export type OrderSimpleFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	intercomCode?: FieldPolicy<any> | FieldReadFunction<any>,
	personsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	ourComment?: FieldPolicy<any> | FieldReadFunction<any>,
	deliveryTime?: FieldPolicy<any> | FieldReadFunction<any>,
	phoneNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderKeySpecifier = ('id' | 'address' | 'status' | 'intercomCode' | 'personsCount' | 'comment' | 'ourComment' | 'deliveryTime' | 'phoneNumber' | 'createdAt' | 'updatedAt' | 'totalPrice' | 'discounts' | 'bonuses' | 'orderProducts' | OrderKeySpecifier)[];
export type OrderFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	intercomCode?: FieldPolicy<any> | FieldReadFunction<any>,
	personsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	ourComment?: FieldPolicy<any> | FieldReadFunction<any>,
	deliveryTime?: FieldPolicy<any> | FieldReadFunction<any>,
	phoneNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	bonuses?: FieldPolicy<any> | FieldReadFunction<any>,
	orderProducts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ParamKeySpecifier = ('id' | 'name' | 'slug' | 'value' | ParamKeySpecifier)[];
export type ParamFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductProcurementKeySpecifier = ('count' | 'costs' | 'procurement' | 'product' | ProductProcurementKeySpecifier)[];
export type ProductProcurementFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	costs?: FieldPolicy<any> | FieldReadFunction<any>,
	procurement?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProcurementKeySpecifier = ('id' | 'status' | 'nextStatusDate' | 'deliveryCost' | 'productProcurements' | ProcurementKeySpecifier)[];
export type ProcurementFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	nextStatusDate?: FieldPolicy<any> | FieldReadFunction<any>,
	deliveryCost?: FieldPolicy<any> | FieldReadFunction<any>,
	productProcurements?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IProductKeySpecifier = ('barcode' | 'cartItem' | 'companyId' | 'count' | 'createdAt' | 'description' | 'id' | 'imageUrl' | 'isInCart' | 'name' | 'price' | 'productCategoryId' | 'slug' | 'updatedAt' | 'weight' | IProductKeySpecifier)[];
export type IProductFieldPolicy = {
	barcode?: FieldPolicy<any> | FieldReadFunction<any>,
	cartItem?: FieldPolicy<any> | FieldReadFunction<any>,
	companyId?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	imageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	isInCart?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	productCategoryId?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	weight?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductSimpleKeySpecifier = ('barcode' | 'cartItem' | 'companyId' | 'count' | 'createdAt' | 'description' | 'id' | 'imageUrl' | 'isInCart' | 'name' | 'price' | 'productCategoryId' | 'slug' | 'updatedAt' | 'weight' | ProductSimpleKeySpecifier)[];
export type ProductSimpleFieldPolicy = {
	barcode?: FieldPolicy<any> | FieldReadFunction<any>,
	cartItem?: FieldPolicy<any> | FieldReadFunction<any>,
	companyId?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	imageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	isInCart?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	productCategoryId?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	weight?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductKeySpecifier = ('barcode' | 'cartItem' | 'company' | 'companyId' | 'count' | 'createdAt' | 'description' | 'discounts' | 'features' | 'id' | 'imageUrl' | 'isInCart' | 'name' | 'orderProducts' | 'price' | 'productCategory' | 'productCategoryId' | 'productFeatures' | 'productProcurements' | 'slug' | 'updatedAt' | 'weight' | ProductKeySpecifier)[];
export type ProductFieldPolicy = {
	barcode?: FieldPolicy<any> | FieldReadFunction<any>,
	cartItem?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	companyId?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	features?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	imageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	isInCart?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	orderProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	productCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	productCategoryId?: FieldPolicy<any> | FieldReadFunction<any>,
	productFeatures?: FieldPolicy<any> | FieldReadFunction<any>,
	productProcurements?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	weight?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IProductCategoryKeySpecifier = ('id' | 'name' | 'slug' | 'priority' | 'iconUrl' | 'description' | 'createdAt' | 'updatedAt' | IProductCategoryKeySpecifier)[];
export type IProductCategoryFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	priority?: FieldPolicy<any> | FieldReadFunction<any>,
	iconUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductCategorySimpleKeySpecifier = ('id' | 'name' | 'slug' | 'priority' | 'iconUrl' | 'description' | 'createdAt' | 'updatedAt' | ProductCategorySimpleKeySpecifier)[];
export type ProductCategorySimpleFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	priority?: FieldPolicy<any> | FieldReadFunction<any>,
	iconUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductCategoryKeySpecifier = ('id' | 'name' | 'slug' | 'priority' | 'iconUrl' | 'description' | 'createdAt' | 'updatedAt' | 'products' | 'features' | 'discounts' | ProductCategoryKeySpecifier)[];
export type ProductCategoryFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	priority?: FieldPolicy<any> | FieldReadFunction<any>,
	iconUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	features?: FieldPolicy<any> | FieldReadFunction<any>,
	discounts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PromotionKeySpecifier = ('id' | 'name' | 'description' | 'imageUrl' | 'startDate' | 'endDate' | 'priority' | PromotionKeySpecifier)[];
export type PromotionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	imageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	startDate?: FieldPolicy<any> | FieldReadFunction<any>,
	endDate?: FieldPolicy<any> | FieldReadFunction<any>,
	priority?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartItemKeySpecifier = ('id' | 'productsCount' | CartItemKeySpecifier)[];
export type CartItemFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	productsCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	Query?: {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: QueryFieldPolicy,
	},
	Mutation?: {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: MutationFieldPolicy,
	},
	Subscription?: {
		keyFields?: false | SubscriptionKeySpecifier | (() => undefined | SubscriptionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: SubscriptionFieldPolicy,
	},
	Bonus?: {
		keyFields?: false | BonusKeySpecifier | (() => undefined | BonusKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: BonusFieldPolicy,
	},
	ICompany?: {
		keyFields?: false | ICompanyKeySpecifier | (() => undefined | ICompanyKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ICompanyFieldPolicy,
	},
	CompanySimple?: {
		keyFields?: false | CompanySimpleKeySpecifier | (() => undefined | CompanySimpleKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CompanySimpleFieldPolicy,
	},
	Company?: {
		keyFields?: false | CompanyKeySpecifier | (() => undefined | CompanyKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CompanyFieldPolicy,
	},
	Discount?: {
		keyFields?: false | DiscountKeySpecifier | (() => undefined | DiscountKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: DiscountFieldPolicy,
	},
	IFeature?: {
		keyFields?: false | IFeatureKeySpecifier | (() => undefined | IFeatureKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: IFeatureFieldPolicy,
	},
	FeatureSimple?: {
		keyFields?: false | FeatureSimpleKeySpecifier | (() => undefined | FeatureSimpleKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: FeatureSimpleFieldPolicy,
	},
	Feature?: {
		keyFields?: false | FeatureKeySpecifier | (() => undefined | FeatureKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: FeatureFieldPolicy,
	},
	ProductFeature?: {
		keyFields?: false | ProductFeatureKeySpecifier | (() => undefined | ProductFeatureKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProductFeatureFieldPolicy,
	},
	OrderProduct?: {
		keyFields?: false | OrderProductKeySpecifier | (() => undefined | OrderProductKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: OrderProductFieldPolicy,
	},
	IOrder?: {
		keyFields?: false | IOrderKeySpecifier | (() => undefined | IOrderKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: IOrderFieldPolicy,
	},
	OrderSimple?: {
		keyFields?: false | OrderSimpleKeySpecifier | (() => undefined | OrderSimpleKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: OrderSimpleFieldPolicy,
	},
	Order?: {
		keyFields?: false | OrderKeySpecifier | (() => undefined | OrderKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: OrderFieldPolicy,
	},
	Param?: {
		keyFields?: false | ParamKeySpecifier | (() => undefined | ParamKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ParamFieldPolicy,
	},
	ProductProcurement?: {
		keyFields?: false | ProductProcurementKeySpecifier | (() => undefined | ProductProcurementKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProductProcurementFieldPolicy,
	},
	Procurement?: {
		keyFields?: false | ProcurementKeySpecifier | (() => undefined | ProcurementKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProcurementFieldPolicy,
	},
	IProduct?: {
		keyFields?: false | IProductKeySpecifier | (() => undefined | IProductKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: IProductFieldPolicy,
	},
	ProductSimple?: {
		keyFields?: false | ProductSimpleKeySpecifier | (() => undefined | ProductSimpleKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProductSimpleFieldPolicy,
	},
	Product?: {
		keyFields?: false | ProductKeySpecifier | (() => undefined | ProductKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProductFieldPolicy,
	},
	IProductCategory?: {
		keyFields?: false | IProductCategoryKeySpecifier | (() => undefined | IProductCategoryKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: IProductCategoryFieldPolicy,
	},
	ProductCategorySimple?: {
		keyFields?: false | ProductCategorySimpleKeySpecifier | (() => undefined | ProductCategorySimpleKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProductCategorySimpleFieldPolicy,
	},
	ProductCategory?: {
		keyFields?: false | ProductCategoryKeySpecifier | (() => undefined | ProductCategoryKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProductCategoryFieldPolicy,
	},
	Promotion?: {
		keyFields?: false | PromotionKeySpecifier | (() => undefined | PromotionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: PromotionFieldPolicy,
	},
	CartItem?: {
		keyFields?: false | CartItemKeySpecifier | (() => undefined | CartItemKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CartItemFieldPolicy,
	}
};