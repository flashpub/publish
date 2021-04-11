import * as React from 'react';
import { useRouter } from 'next/router';
import { NextPage, NextPageContext } from 'next';

interface PublishProps {
  query: { standalone?: boolean };
}

const Publish: NextPage<PublishProps> = (props) => {
  const router = useRouter();
  const isStandalone = props.query.standalone;

  React.useEffect(() => {
    if (isStandalone) {
      router.push('/publish/config');
    }
  }, []);

  return <div>PUBLISH</div>;
};

Publish.getInitialProps = async (context: NextPageContext) => {
  const props = {
    query: context.query,
  };
  return (props as unknown) as PublishProps;
};

export default Publish;
