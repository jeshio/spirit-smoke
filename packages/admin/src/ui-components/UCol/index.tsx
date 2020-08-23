import * as React from 'react';
import { Col } from 'antd';
import { ColProps } from 'antd/lib/col';

interface IUColProps extends ColProps {}

const UCol: React.FunctionComponent<IUColProps> = (props) => {
  return <Col span={24} md={12} xxl={8} {...props} />;
};

export default UCol;
