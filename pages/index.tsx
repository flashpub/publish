import React from 'react';
import { useRouter } from 'next/router';

import { Store } from 'src/modules/storage.module';
import { Loading } from 'src/ui/Loading';
import { Button } from 'src/ui/Button';

export default function Index() {
  const router = useRouter();
  const cert = Store.react(Store.certificate);

  const onSignin = () => {
    Store.certificate.redirect = undefined;
    router.push('/signin');
  };

  const onPublish = () => {
    Store.certificate.redirect = undefined;
    router.push('/publish');
  };

  if (cert.status === 'loading') return <Loading />;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {cert.data ? (
        <Button onClick={onPublish} label="Publish" />
      ) : (
        <Button onClick={onSignin} label="Sign in" />
      )}
    </div>
  );
}
