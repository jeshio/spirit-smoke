import * as React from 'react';
import { FormItemProps } from 'antd/lib/form/FormItem';
import { ColProps } from 'antd/lib/col';
import { Form } from 'antd';

import styles from './styles.less';

interface IUFormItemProps extends FormItemProps {}

const UFormItem: React.FunctionComponent<IUFormItemProps> = (props) => {
  const withLabel = !!props.label;
  const rules = props.rules || [];
  let wrapperColDefault: ColProps = {};

  if (!withLabel && !props.colon) {
    wrapperColDefault = { sm: { offset: 5 }, md: { offset: 7 }, lg: { offset: 6 }, xl: { offset: 5 } };
  }

  if (props.required) {
    const hasRequiredRule = rules.find((rule) => (typeof rule === 'object' ? rule.required : false));

    if (!hasRequiredRule) {
      rules.push({
        required: true,
      });
    }
  }

  return <Form.Item wrapperCol={wrapperColDefault} {...props} rules={rules} className={styles.root} />;
};

export default UFormItem;
