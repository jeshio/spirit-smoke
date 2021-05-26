import { FormInstance } from 'rc-field-form/lib/interface'
import getSlugByName from './getSlugByName'

const updateSlugOnChangeTitle = (title: string, form: FormInstance<any>, slugField = 'slug') => {
  if (!form.isFieldTouched(slugField)) {
    form.setFieldsValue({
      [slugField]: getSlugByName(title),
    })
  }
}

export default updateSlugOnChangeTitle
