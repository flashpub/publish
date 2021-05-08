import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

import { CertificateGuard } from 'src/modules/certificate/certificate.guard';

import '../styles/globals.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CertificateGuard>
        <Component {...pageProps} />
      </CertificateGuard>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
