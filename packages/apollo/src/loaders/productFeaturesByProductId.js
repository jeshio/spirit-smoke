import DataLoader from 'dataloader'

export const batch = async (keys, models) => {
  const items = await models.productFeature.findAll({
    where: {
      productId: keys,
    },
  })

  return keys.map(
    (key) => items
      .filter((productFeature) => productFeature.productId === key),
  )
}

export default (models) => new DataLoader((keys) => batch(keys, models))
