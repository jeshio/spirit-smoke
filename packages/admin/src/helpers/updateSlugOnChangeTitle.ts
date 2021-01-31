import CyrillicToTranslit from 'cyrillic-to-translit-js'
import { kebabCase } from 'lodash'
import { FormInstance } from 'rc-field-form/lib/interface'

const transformer = new CyrillicToTranslit()

const updateSlugOnChangeTitle = (title: string, form: FormInstance<any>, slugField = 'slug') => {
  if (!form.isFieldTouched(slugField)) {
    form.setFieldsValue({
      [slugField]: kebabCase(transformer.transform(title)),
    })
  }
}

export default updateSlugOnChangeTitle
