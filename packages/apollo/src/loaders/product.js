import DataLoader from 'dataloader'

export const batchProductsWithProductLine = async (keys, models) => {
  const products = await models.product.findAll({
    where: {
      id: keys,
    },
    order: [['id', 'DESC']],
    include: [{
      model: models.productLine,
    }],
  })

  return keys.map((key) => products.find((product) => product.id === key))
}

export default (models) => new DataLoader((keys) =>
  batchProductsWithProductLine(keys, models))
