import DataLoader from 'dataloader'

export const batchFeatures = async (keys, models) => {
  const features = await models.feature.findAll({
    where: {
      id: keys,
    },
    order: [['id', 'DESC']],
  })

  return keys.map((key) => features.find((feature) => feature.id === key))
}

export default (models) => new DataLoader((keys) =>
  batchFeatures(keys, models))
