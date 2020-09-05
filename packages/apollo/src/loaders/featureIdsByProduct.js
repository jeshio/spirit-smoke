import DataLoader from 'dataloader'

export const batchFeaturesIdsByProduct = async (keys, models) => {
  const productFeatures = await models.sequelize.query('SELECT * FROM "productFeatures" WHERE "productId" IN (?)', {
    replacements: [keys],
    type: models.sequelize.QueryTypes.SELECT,
  })

  return keys.map(
    (key) => productFeatures
      .filter((productFeature) => productFeature.productId === key)
      .map(({ featureId }) => featureId),
  )
}

export default (models) => new DataLoader((keys) => batchFeaturesIdsByProduct(keys, models))
