import DataLoader from 'dataloader'

export const batchProductCategories = async (keys, models) => {
  const productCategories = await models.productCategory.findAll({
    where: {
      id: keys,
      deletedAt: null,
    },
  })

  return keys.map((key) => productCategories.find((productCategory) => productCategory.id === key))
}

export default (models) => new DataLoader((keys) =>
  batchProductCategories(keys, models))
