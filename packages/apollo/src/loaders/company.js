import DataLoader from 'dataloader'

export const batchCompanies = async (keys, models) => {
  const companies = await models.company.findAll({
    where: {
      id: keys,
    },
    order: [['id', 'DESC']],
  })

  return keys.map((key) => companies.find((company) => company.id === key))
}

export default (models) => new DataLoader((keys) =>
  batchCompanies(keys, models))
