import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

export default function withPageHeader(pageHeaderProps?: React.ComponentProps<typeof PageHeaderWrapper>) {
  return (WrappedComponent: React.ComponentType) => {
    const hocComponent = ({ ...props }) => (
      <PageHeaderWrapper {...pageHeaderProps}>
        <WrappedComponent {...props} />
      </PageHeaderWrapper>
    );

    return hocComponent;
  };
}
