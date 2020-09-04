import DataLoader from 'dataloader'

export const batchFeaturesIdsByProductCategory = async (keys, models) => {
  const productCategoryFeatures = await models.sequelize.query('SELECT * FROM "productCategoryFeatures" WHERE "productCategoryId" IN (?)', {
    replacements: [keys],
    type: models.sequelize.QueryTypes.SELECT,
  })

  return keys.map(
    (key) => productCategoryFeatures
      .filter((productCategoryFeature) => productCategoryFeature.productCategoryId === key)
      .map(({ featureId }) => featureId),
  )
}

export default (models) => new DataLoader((keys) =>
  batchFeaturesIdsByProductCategory(keys, models))
