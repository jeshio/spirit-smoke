import CyrillicToTranslit from 'cyrillic-to-translit-js'
import { kebabCase } from 'lodash'

const transformer = new CyrillicToTranslit()

const getSlugByName = (name: string) => kebabCase(transformer.transform(`${name}`.trim()))

export default getSlugByName
