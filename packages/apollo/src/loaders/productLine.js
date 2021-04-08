import DataLoader from 'dataloader'

export const batchProductLines = async (keys, models) => {
  const productLines = await models.productLine.findAll({
    where: {
      id: keys,
    },
    order: [['id', 'DESC']],
  })

  return keys.map((key) => productLines.find((productLine) => productLine.id === key))
}

export default (models) => new DataLoader((keys) =>
  batchProductLines(keys, models))
