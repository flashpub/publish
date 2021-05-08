import React from 'react';
import { useRouter } from 'next/router';

import { Store } from 'src/modules/storage.module';
import { Loading } from 'src/ui/Loading';
import { Button } from 'src/ui/Button';
import { Logo } from 'src/ui/Logo';

export default function Index() {
  const router = useRouter();
  const cert = Store.react(Store.certificate);

  React.useEffect(() => {
    console.log('Index router', router);
    if (router.query.from?.includes('publish')) {
      console.log('router.query.from', router.query.from);
      router.push(`${router.query.from}`);
    }
  }, [router]);

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
        <>
          <Logo symbol="fp" />
          <p className="my-4">Welcome to FLASHPUB STANDALONE</p>
          <Button onClick={onPublish} label="Publish" />
        </>
      ) : (
        <Button onClick={onSignin} label="Sign in" />
      )}
    </div>
  );
}
