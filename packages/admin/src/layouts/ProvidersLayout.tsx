import * as React from 'react';
import ApolloProvider from '../providers/ApolloProvider';

interface IProvidersLayoutProps {}

const ProvidersLayout: React.FunctionComponent<IProvidersLayoutProps> = (props) => {
  return <ApolloProvider>{props.children}</ApolloProvider>;
};

export default ProvidersLayout;
