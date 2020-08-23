import * as React from 'react';
import { Row } from 'antd';
import { RowProps } from 'antd/lib/row';

interface IURowProps extends RowProps {}

const URow: React.FunctionComponent<IURowProps> = (props) => {
  return (
    <Row
      gutter={{
        xs: 4,
        sm: 8,
        md: 12,
        xl: 18,
        xxl: 24,
      }}
      {...props}
    />
  );
};

export default URow;
