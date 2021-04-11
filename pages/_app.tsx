import React from 'react';
import { AppProps } from 'next/app';
import { GlobalStyles } from 'twin.macro';
import FlashpubPublish from '@flashpub/publish';

import 'tailwindcss/tailwind.css';

const Publish = new FlashpubPublish();

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  Publish.Setup({
    connection: { apiKey: pageProps.query?.apiKey },
    publish: {
      standalone: pageProps.query?.standalone,
      environment: pageProps.query?.environment,
    },
    communityName: pageProps.query?.communityName,
  });

  return (
    <Publish.Container loader={<div>LOADING</div>} error={<div>ERROR</div>}>
      <GlobalStyles />
      <Component {...pageProps} />
    </Publish.Container>
  );
};

export default App;
