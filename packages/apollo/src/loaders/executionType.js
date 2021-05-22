import DataLoader from 'dataloader'

export const batchExecutionTypes = async (keys, models) => {
  const executionTypes = await models.executionType.findAll({
    where: {
      id: keys,
    },
    order: [['id', 'DESC']],
  })

  return keys.map((key) => executionTypes.find((executionType) => executionType.id === key))
}

export default (models) => new DataLoader((keys) =>
  batchExecutionTypes(keys, models))
