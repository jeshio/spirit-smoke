import * as React from 'react';
import ErrorsHandlerProvider from '@/providers/ErrorsHandlerProvider';
import ApolloProvider from '../providers/ApolloProvider';

interface IProvidersLayoutProps {}

const ProvidersLayout: React.FunctionComponent<IProvidersLayoutProps> = (props) => {
  return (
    <ErrorsHandlerProvider>
      <ApolloProvider>{props.children}</ApolloProvider>
    </ErrorsHandlerProvider>
  );
};

export default ProvidersLayout;
