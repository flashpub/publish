import * as React from 'react';
import { useRouter } from 'next/router';
import { NextPage, NextPageContext } from 'next';

import { store } from '@services/storage';

const ContentTypePage: React.FC = (props) => {
  const router = useRouter();
  const contentType = store.watch(store.contentType);

  console.log('contentType', contentType);

  return <div>PUBLISH</div>;
};

export default ContentTypePage;
