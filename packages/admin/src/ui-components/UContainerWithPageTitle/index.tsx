import * as React from 'react';
import useSettings from '@/hooks/useSettings';
import { Helmet } from 'react-helmet';

interface IUContainerWithPageTitleProps {
  title?: string;
}

const UContainerWithPageTitle: React.FunctionComponent<IUContainerWithPageTitleProps> = (props) => {
  const { title: settingsTitle } = useSettings();

  if (!props.title) return <>{props.children}</>;

  const title = `${props.title} - ${settingsTitle}`;
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {props.children}
    </>
  );
};

export default UContainerWithPageTitle;
