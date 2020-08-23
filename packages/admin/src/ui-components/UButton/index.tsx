import * as React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/es/button';

interface IUButtonProps extends ButtonProps {}

const UButton: React.FunctionComponent<IUButtonProps> = (props) => {
  return <Button {...props} />;
};

export default UButton;
