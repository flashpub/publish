import * as React from 'react';
import { useRouter } from 'next/router';
import { NextPage, NextPageContext } from 'next';
import StandaloneConfigurator from '@components/StandaloneConfigurator';

interface PublishProps {
  query: { standalone?: string; communityName?: string };
}

const Publish: NextPage<PublishProps> = (props) => {
  const router = useRouter();
  const isCommunityName = props.query.communityName;
  const isStandalone = props.query.standalone === 'true';

  if (isStandalone) {
    return <StandaloneConfigurator />;
  }

  return <div>PUBLISH</div>;
};

Publish.getInitialProps = async (context: NextPageContext) => {
  const props = {
    query: context.query,
  };
  return (props as unknown) as PublishProps;
};

export default Publish;
