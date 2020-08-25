import * as React from 'react';

export interface IErrorsHandlerProviderProps {}

class ErrorsHandlerProvider extends React.PureComponent<IErrorsHandlerProviderProps> {
  // componentDidCatch(e: Error) {
  //   console.log('error', { ...e });
  // }

  public render() {
    return <div>{this.props.children}</div>;
  }
}

export default ErrorsHandlerProvider;
