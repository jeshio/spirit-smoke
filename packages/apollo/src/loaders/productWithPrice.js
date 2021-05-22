import DataLoader from 'dataloader'

/**
 * Запрашивает продукты со всеми зависимостями, необходимыми для получения цены продукта
 */
export const batchProductsWithPrice = async (keys, models) => {
  const products = await models.product.findAll({
    where: {
      id: keys,
    },
    order: [['id', 'DESC']],
    include: [{
      model: models.productLine,
    }, {
      model: models.executionType,
    }, 'originalProduct'],
  })

  return keys.map((key) => products.find((product) => product.id === key))
}

export default (models) => new DataLoader((keys) =>
  batchProductsWithPrice(keys, models))
