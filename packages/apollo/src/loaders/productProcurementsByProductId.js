import DataLoader from 'dataloader'

export const batch = async (keys, models) => {
  const items = await models.productProcurement.findAll({
    where: {
      productId: keys,
    },
  })

  return keys.map(
    (key) => items
      .filter((productProcurement) => productProcurement.productId === key),
  )
}

export default (models) => new DataLoader((keys) =>
  batch(keys, models))
