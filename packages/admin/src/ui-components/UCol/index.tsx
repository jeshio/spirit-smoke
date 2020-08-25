import * as React from 'react';
import { Col } from 'antd';
import { ColProps } from 'antd/lib/col';

interface IUColProps extends ColProps {
  fullRow?: boolean;
}

const UCol: React.FunctionComponent<IUColProps> = (props) => {
  const sizes = {
    md: 12,
    xxl: 8,
  };

  return <Col span={24} {...(!props.fullRow && sizes)} {...props} />;
};

export default UCol;
