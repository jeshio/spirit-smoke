import DataLoader from 'dataloader'

export const batch = async (keys, models) => {
  const procurements = await models.procurement.findAll({
    where: {
      id: keys,
    },
    order: [['id', 'DESC']],
  })

  return keys.map((key) => procurements.find((procurement) => procurement.id === key))
}

export default (models) => new DataLoader((keys) =>
  batch(keys, models))
