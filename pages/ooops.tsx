import React from 'react';
import { useRouter } from 'next/router';

import { Store } from 'src/modules/storage.module';

export default function Ooops() {
  const router = useRouter();
  const [msg, setMsg] = React.useState('');

  React.useEffect(() => {
    setMsg(router.query.error as string);
  }, [msg, router.query.error]);

  const onAgain = () => {
    router.replace('/signin');
    Store.certificate.redirect = undefined;
  };
  const onHome = () => {
    router.replace('/');
    Store.certificate.redirect = undefined;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {msg}
      <button
        className="flex items-center justify-center border-2 px-4 py-2 rounded-lg hover:bg-blue-200"
        onClick={onAgain}
      >
        Sign in
      </button>
      <button
        className="flex items-center justify-center border-2 px-4 py-2 rounded-lg hover:bg-blue-200"
        onClick={onHome}
      >
        Home
      </button>
    </div>
  );
}
