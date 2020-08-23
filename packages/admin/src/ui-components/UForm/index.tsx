import * as React from 'react';
import { Form } from 'antd';
import { FormProps } from 'antd/lib/form';
import UFormItem from '../UFormItem';
import validateMessages from './validateMessages';

interface IUFormProps extends FormProps {}

const UForm: React.FunctionComponent<IUFormProps> & {
  Item: React.ComponentType<React.ComponentProps<typeof UFormItem>>;
} = (props) => {
  const allValidateMessages = React.useMemo(
    () => ({
      ...validateMessages,
      ...props.validateMessages,
    }),
    [props.validateMessages],
  );
  return (
    <Form
      size="large"
      labelCol={{ span: 6, sm: 6, md: 9, lg: 9, xl: 7, xxl: 7 }}
      validateMessages={allValidateMessages}
      {...props}
    />
  );
};

UForm.Item = UFormItem;

export default UForm;
