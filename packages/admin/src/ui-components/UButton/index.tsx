import * as React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/es/button';
import { useHistory } from 'umi';

interface IUButtonProps extends ButtonProps {}

const UButton: React.FunctionComponent<IUButtonProps> = (props) => {
  const history = useHistory();
  const onClickHandler: IUButtonProps['onClick'] = (e) => {
    if (props.href && !props.href?.startsWith('http')) {
      e.preventDefault();
      history.push(props.href);
    }

    if (props.onClick) {
      props.onClick(e);
    }
  };

  return <Button disabled={props.loading === true} {...props} onClick={onClickHandler} />;
};

export default UButton;
