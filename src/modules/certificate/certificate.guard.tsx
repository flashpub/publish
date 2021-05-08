import React from 'react';
import { useRouter } from 'next/router';

import { Store } from 'src/modules/storage.module';
import { Backend } from 'src/modules/backend.module';

import { Certify } from './certificate.service';

export const CertificateGuard: React.FC = ({ children }) => {
  const router = useRouter();
  const cert = Store.react(Store.certificate);
  const path = router.pathname;

  React.useEffect(() => {
    if (typeof cert.data === 'undefined') {
      Store.certificate.status = 'loading';
      Backend.Auth().onAuthStateChanged((user) => {
        Store.certificate.data = Certify.createCertificate(user);
        Store.certificate.status = 'idle';
        if (!user) {
          router.push(`/signin?from=${path}`, '/signin');
        }
      });
    }
  }, [cert.data, path, router]);

  return <>{children}</>;
};
